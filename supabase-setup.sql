-- =============================================================
-- Sri Ramalayam — Admin Gallery (run once in Supabase SQL Editor)
-- https://supabase.com → New project (free) → SQL → New query
-- =============================================================

-- 1. Gallery metadata table
create table if not exists public.gallery_items (
    id uuid primary key default gen_random_uuid(),
    image_url text not null,
    caption_en text default '',
    caption_te text default '',
    created_at timestamptz not null default now()
);

alter table public.gallery_items enable row level security;

-- Anyone can view gallery photos on the public website
create policy "gallery_public_read"
    on public.gallery_items
    for select
    using (true);

-- Only logged-in admin can add photos
create policy "gallery_admin_insert"
    on public.gallery_items
    for insert
    to authenticated
    with check (true);

-- Only logged-in admin can remove photos
create policy "gallery_admin_delete"
    on public.gallery_items
    for delete
    to authenticated
    using (true);

-- 2. Storage bucket for image files
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do update set public = true;

-- Public read of uploaded images
create policy "gallery_storage_public_read"
    on storage.objects
    for select
    using (bucket_id = 'gallery');

-- Admin upload
create policy "gallery_storage_admin_insert"
    on storage.objects
    for insert
    to authenticated
    with check (bucket_id = 'gallery');

-- Admin delete files
create policy "gallery_storage_admin_delete"
    on storage.objects
    for delete
    to authenticated
    using (bucket_id = 'gallery');

-- =============================================================
-- After running this SQL:
-- 1. Authentication → Users → Add user (email + password for priest/admin)
-- 2. Project Settings → API → copy URL and anon public key into config.js
-- 3. Open yoursite/admin.html and sign in to upload photos
-- =============================================================
