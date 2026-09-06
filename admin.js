(function () {
    'use strict';

    const cfg = window.SITE_CONFIG || {};
    const alertEl = document.getElementById('adminAlert');
    const loginSection = document.getElementById('adminLoginSection');
    const uploadSection = document.getElementById('adminUploadSection');
    const manageSection = document.getElementById('adminManageSection');
    const setupHelp = document.getElementById('adminSetupHelp');
    const logoutBtn = document.getElementById('adminLogout');
    const loginForm = document.getElementById('adminLoginForm');
    const uploadForm = document.getElementById('adminUploadForm');
    const galleryList = document.getElementById('adminGalleryList');
    const photoCount = document.getElementById('adminPhotoCount');
    const uploadBtn = document.getElementById('adminUploadBtn');

    let supabase = null;
    let editingId = null;

    function showAlert(msg, type) {
        if (!alertEl) return;
        alertEl.hidden = false;
        alertEl.textContent = msg;
        alertEl.className = 'admin-alert admin-alert--' + (type || 'error');
        clearTimeout(showAlert._t);
        showAlert._t = setTimeout(() => { alertEl.hidden = true; }, 6000);
    }

    function initSupabase() {
        if (!cfg.supabaseUrl || !cfg.supabaseAnonKey) {
            if (setupHelp) setupHelp.hidden = false;
            if (loginSection) loginSection.hidden = true;
            return null;
        }
        if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
            showAlert('Supabase library failed to load. Check your internet connection.');
            return null;
        }
        return window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
    }

    function setLoggedIn(isLoggedIn) {
        if (loginSection) loginSection.hidden = isLoggedIn;
        if (uploadSection) uploadSection.hidden = !isLoggedIn;
        if (manageSection) manageSection.hidden = !isLoggedIn;
        if (logoutBtn) logoutBtn.hidden = !isLoggedIn;
    }

    function formatDate(iso) {
        try {
            return new Date(iso).toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                day: 'numeric', month: 'short', year: 'numeric',
                hour: 'numeric', minute: '2-digit'
            }) + ' IST';
        } catch (_) {
            return iso;
        }
    }

    function storagePathFromUrl(url) {
        const marker = '/storage/v1/object/public/gallery/';
        const i = url.indexOf(marker);
        return i >= 0 ? decodeURIComponent(url.slice(i + marker.length)) : null;
    }

    async function loadAdminGallery() {
        if (!supabase || !galleryList) return;
        const { data, error } = await supabase
            .from('gallery_items')
            .select('id, image_url, caption_en, caption_te, created_at')
            .order('created_at', { ascending: false });

        if (error) {
            showAlert(error.message);
            return;
        }

        if (photoCount) photoCount.textContent = String(data.length);

        if (!data.length) {
            galleryList.innerHTML = '<p class="admin-card__sub">No photos yet. Upload your first image above.</p>';
            return;
        }

        galleryList.innerHTML = data.map((item) => {
            const isEditing = editingId === item.id;
            if (isEditing) {
                return `
            <div class="admin-photo-row admin-photo-row--editing" data-id="${item.id}">
                <img class="admin-photo-row__thumb" src="${escapeAttr(item.image_url)}" alt="" loading="lazy" />
                <form class="admin-photo-edit" data-id="${item.id}" data-url="${escapeAttr(item.image_url)}">
                    <label class="admin-field">
                        <span>Caption (English)</span>
                        <input type="text" name="caption_en" value="${escapeAttr(item.caption_en || '')}" maxlength="120" />
                    </label>
                    <label class="admin-field">
                        <span>Caption (Telugu)</span>
                        <input type="text" name="caption_te" value="${escapeAttr(item.caption_te || '')}" maxlength="120" />
                    </label>
                    <label class="admin-field">
                        <span>Replace photo (optional)</span>
                        <input type="file" name="replace_file" accept="image/jpeg,image/png,image/webp,image/gif" />
                    </label>
                    <div class="admin-photo-row__edit-actions">
                        <button class="btn btn--primary admin-photo-row__save" type="submit">Save changes</button>
                        <button class="admin-photo-row__cancel" type="button" data-id="${item.id}">Cancel</button>
                    </div>
                </form>
            </div>`;
            }

            return `
            <div class="admin-photo-row" data-id="${item.id}">
                <img class="admin-photo-row__thumb" src="${escapeAttr(item.image_url)}" alt="" loading="lazy" />
                <div class="admin-photo-row__meta">
                    <span class="admin-photo-row__title">${escapeHtml(item.caption_te || item.caption_en || 'Temple photo')}</span>
                    ${item.caption_en && item.caption_te ? `<span class="admin-photo-row__subtitle">${escapeHtml(item.caption_en)}</span>` : ''}
                    <span class="admin-photo-row__date">${escapeHtml(formatDate(item.created_at))}</span>
                </div>
                <div class="admin-photo-row__actions">
                    <button class="admin-photo-row__edit" type="button" data-id="${item.id}">Edit</button>
                    <button class="admin-photo-row__delete" type="button" data-id="${item.id}" data-url="${escapeAttr(item.image_url)}">Delete</button>
                </div>
            </div>`;
        }).join('');

        galleryList.querySelectorAll('.admin-photo-row__edit').forEach((btn) => {
            btn.addEventListener('click', () => {
                editingId = btn.getAttribute('data-id');
                loadAdminGallery();
            });
        });

        galleryList.querySelectorAll('.admin-photo-row__cancel').forEach((btn) => {
            btn.addEventListener('click', () => {
                editingId = null;
                loadAdminGallery();
            });
        });

        galleryList.querySelectorAll('.admin-photo-edit').forEach((form) => {
            form.addEventListener('submit', (e) => savePhotoEdit(e, form));
        });

        galleryList.querySelectorAll('.admin-photo-row__delete').forEach((btn) => {
            btn.addEventListener('click', () => deletePhoto(btn));
        });
    }

    async function savePhotoEdit(e, form) {
        e.preventDefault();
        if (!supabase) return;

        const id = form.getAttribute('data-id');
        const oldUrl = form.getAttribute('data-url');
        if (!id) return;

        const captionEn = form.querySelector('[name="caption_en"]').value.trim();
        const captionTe = form.querySelector('[name="caption_te"]').value.trim();
        const fileInput = form.querySelector('[name="replace_file"]');
        const file = fileInput?.files?.[0];
        const saveBtn = form.querySelector('.admin-photo-row__save');

        if (file && file.size > 5 * 1024 * 1024) {
            showAlert('Replacement image must be under 5 MB.');
            return;
        }

        saveBtn.disabled = true;
        saveBtn.textContent = 'Saving…';

        let imageUrl = oldUrl;
        const oldPath = storagePathFromUrl(oldUrl);

        if (file) {
            const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
            const path = Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.' + ext;

            const { error: upErr } = await supabase.storage
                .from('gallery')
                .upload(path, file, { cacheControl: '3600', upsert: false });

            if (upErr) {
                showAlert(upErr.message);
                saveBtn.disabled = false;
                saveBtn.textContent = 'Save changes';
                return;
            }

            const { data: pub } = supabase.storage.from('gallery').getPublicUrl(path);
            imageUrl = pub.publicUrl;

            if (oldPath) {
                await supabase.storage.from('gallery').remove([oldPath]);
            }
        }

        const { error } = await supabase
            .from('gallery_items')
            .update({
                caption_en: captionEn,
                caption_te: captionTe,
                image_url: imageUrl
            })
            .eq('id', id);

        saveBtn.disabled = false;
        saveBtn.textContent = 'Save changes';

        if (error) {
            showAlert(error.message);
            return;
        }

        editingId = null;
        showAlert('Photo updated.', 'success');
        loadAdminGallery();
    }

    async function deletePhoto(btn) {
        const id = btn.getAttribute('data-id');
        const url = btn.getAttribute('data-url');
        if (!id || !confirm('Delete this photo from the public gallery?')) return;

        btn.disabled = true;
        const path = storagePathFromUrl(url);
        if (path) {
            await supabase.storage.from('gallery').remove([path]);
        }
        const { error } = await supabase.from('gallery_items').delete().eq('id', id);
        if (error) {
            showAlert(error.message);
            btn.disabled = false;
            return;
        }
        showAlert('Photo deleted.', 'success');
        loadAdminGallery();
    }

    function escapeHtml(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
    function escapeAttr(s) { return escapeHtml(s); }

    async function checkSession() {
        if (!supabase) return;
        const { data: { session } } = await supabase.auth.getSession();
        setLoggedIn(!!session);
        if (session) loadAdminGallery();
    }

    supabase = initSupabase();
    if (supabase) {
        checkSession();
        supabase.auth.onAuthStateChange((_event, session) => {
            setLoggedIn(!!session);
            if (session) loadAdminGallery();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!supabase) return;
            const email = document.getElementById('adminEmail').value.trim();
            const password = document.getElementById('adminPassword').value;
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) {
                showAlert(error.message === 'Invalid login credentials'
                    ? 'Wrong email or password.'
                    : error.message);
                return;
            }
            showAlert('Signed in successfully.', 'success');
        });
    }

    if (uploadForm) {
        uploadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!supabase) return;

            const fileInput = document.getElementById('adminFile');
            const file = fileInput?.files?.[0];
            if (!file) return;

            if (file.size > 5 * 1024 * 1024) {
                showAlert('Image must be under 5 MB.');
                return;
            }

            const captionEn = document.getElementById('adminCaptionEn').value.trim();
            const captionTe = document.getElementById('adminCaptionTe').value.trim();
            const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '');
            const path = Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.' + ext;

            uploadBtn.disabled = true;
            uploadBtn.textContent = 'Uploading…';

            const { error: upErr } = await supabase.storage
                .from('gallery')
                .upload(path, file, { cacheControl: '3600', upsert: false });

            if (upErr) {
                showAlert(upErr.message);
                uploadBtn.disabled = false;
                uploadBtn.textContent = 'Upload to gallery';
                return;
            }

            const { data: pub } = supabase.storage.from('gallery').getPublicUrl(path);
            const { error: dbErr } = await supabase.from('gallery_items').insert({
                image_url: pub.publicUrl,
                caption_en: captionEn,
                caption_te: captionTe
            });

            uploadBtn.disabled = false;
            uploadBtn.textContent = 'Upload to gallery';

            if (dbErr) {
                showAlert(dbErr.message);
                return;
            }

            uploadForm.reset();
            showAlert('Photo uploaded — visible on the website now.', 'success');
            loadAdminGallery();
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            if (supabase) await supabase.auth.signOut();
            showAlert('Signed out.', 'success');
        });
    }
})();
