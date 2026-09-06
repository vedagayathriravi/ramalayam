/* =============================================================
   Sri Ramalayam · Ramnagar, Ongole
   Bilingual (EN/TE) · Falling petals · Welcome intro overlay
   ============================================================= */

(function () {
    'use strict';

    /* =========================================================
       YOUTUBE CONFIG — paste your channel details here
       Find Channel ID: YouTube Studio → Settings → Advanced settings
       ========================================================= */
    const YOUTUBE_CONFIG = {
        channelId: 'UChuGa1278z9uRda_oRk17RQ',   // @SriKodandaRamaswamiAlayam
        channelHandle: 'SriKodandaRamaswamiAlayam',
        refreshMinutes: 20,
        maxVideos: 12,
        maxShorts: 10
    };

    const YT_STORAGE_KEY = 'ramalayam-yt-last-video-id';
    const translations = {
        te: {
            'topstrip.location': 'రామనగర్ 8<sup>వ</sup> లైన్, ఒంగోలు, ఆంధ్రప్రదేశ్',
            'topstrip.tagline': 'దక్షిణ భారత ఆంధ్ర దేవాలయం',

            'brand.name': 'శ్రీ రామాలయం',
            'brand.sub': 'ఆంధ్రప్రదేశ్ · ఒంగోలు',

            'nav.home': 'ముఖ్యం',
            'nav.about': 'గురించి',
            'nav.darshan': 'దర్శనం',
            'nav.dhanurmasam': 'ధనుర్మాసం',
            'nav.sevas': 'కార్యక్రమాలు',
            'nav.festivals': 'పండుగలు',
            'nav.gallery': 'చిత్రశాల',
            'nav.videos': 'వీడియోలు',
            'nav.stotras': 'స్తోత్రాలు',
            'nav.donate': 'విరాళం',
            'nav.contact': 'సంప్రదింపు',

            'intro.title': 'శ్రీ సీతా రామ చంద్ర స్వామి దేవస్థానం',
            'intro.sub': 'రామనగర్ · ఒంగోలు · ప్రకాశం · ఆంధ్రప్రదేశ్',
            'intro.enter': 'ఆలయంలోకి ప్రవేశించండి',

            'hero.badge': 'దక్షిణ భారత ఆంధ్ర దేవాలయం',
            'hero.title': 'శ్రీ సీతా రామ చంద్ర<br/><span class="hero__title-accent">స్వామి దేవస్థానం</span>',
            'hero.subtitle': 'శ్రీ కోదండ రామస్వామి ఆలయం · రామనగర్, ఒంగోలు',
            'hero.lede': 'దక్షిణ భారత ఆగమ పరంపరలో పవిత్రమైన ఆంధ్ర ఆలయం — సుప్రభాతం, హారతి, కల్యాణోత్సవం, అన్నదానంతో ఒంగోలు రామనగర్ హృదయంలో. శ్రీ రామ, సీతామాత, లక్ష్మణ స్వామి, హనుమంత స్వామి దివ్య సాన్నిధ్యంలోకి అడుగుపెట్టండి.',
            'hero.cta1': 'నేటి దర్శనం',
            'hero.cta2': 'మీ సందర్శన ప్రణాళిక',
            'hero.openLabel': 'నేడు తెరిచినది',
            'hero.tithiLabel': 'తిథి',
            'hero.scroll': 'క్రిందికి',

            'panchangam.title': 'నేటి పంచాంగం',
            'panchangam.vaaram': 'వారం',
            'panchangam.tithi': 'తిథి',
            'panchangam.nakshatra': 'నక్షత్రం',
            'panchangam.paksha': 'పక్షం',
            'panchangam.tz': 'భారత కాలమానం',
            'panchangam.note': 'భారత కాలమానం (IST) ప్రకారం · ఖచ్చితమైన ముహూర్తానికి దయచేసి పండితుని పంచాంగం చూడండి.',

            'stotras.eyebrow': 'పవిత్ర గ్రంథాలయం',
            'stotras.title': 'స్తోత్రాలు &amp; <span>పారాయణం</span>',
            'stotras.lede': 'తెలుగులో పవిత్ర స్తోత్రాల సంగ్రహం — హనుమాన్ చాలీసా, ఆదిత్య హృదయం, శ్రీ రామ రక్షా స్తోత్రం, విష్ణు సహస్రనామం మరియు మరెన్నో. ఏదైనా పేరును స్పర్శించి అందమైన తెలుగు లిపిలో పూర్తి పాఠం చదవండి.',
            'stotraFab.label': 'స్తోత్రాలు',
            'stotraDrawer.title': 'పవిత్ర స్తోత్రాలు',
            'stotraDrawer.sub': 'పూర్తి తెలుగు పాఠం తెరవడానికి స్తోత్రాన్ని ఎంచుకోండి.',
            'stotraCard.read': 'చదవండి →',
            'stotraCard.versesLabel': 'శ్లోకాలు',
            'stotras.credit': 'మరిన్ని స్తోత్రాలు, మంత్రాల కోసం',

            'about.eyebrow': 'ఆంధ్ర దేవాలయం',
            'about.title': '<span>శ్రీ రాముని</span> పవిత్ర నిలయం',
            'about.lede': 'ఆంధ్రప్రదేశ్ దక్షిణ భారత ఆగమ పరంపరలో, మా రామాలయం తరతరాలుగా ఒంగోలు రామనగర్ సమాజానికి భక్తి, ధర్మం, హారతి, అన్నదానం — తెలుగు భూమిలో పవిత్ర నిలయంగా నిలిచింది.',
            'about.card1.title': 'వారసత్వం',
            'about.card1.body': 'రామనగర్, ఒంగోలు భక్త కుటుంబాలు నిర్మించిన మా ఆలయం దక్షిణ భారత ఆరాధన పద్ధతిని అనుసరిస్తుంది — ఉదయం సుప్రభాతం నుండి సాయంత్రం సంధ్యా హారతి వరకు, తెలుగు పంచాంగం ప్రకారం రథోత్సవాలు మరియు ఉత్సవాలు.',
            'about.card2.title': 'దేవతలు',
            'about.card2.body': 'గర్భ గుడిలో <strong>శ్రీ రామ, సీతామాత, లక్ష్మణ స్వామి</strong>, మరియు <strong>శ్రీ ఆంజనేయ స్వామి</strong> దివ్య రూపాలు శాశ్వత కృపతో వెలుగొందుతున్నాయి.',
            'about.card3.title': 'సేవ &amp; సమాజం',
            'about.card3.body': 'ఆంధ్ర పరంపర ప్రకారం, ఆలయం అన్నదానం, భజన సంప్రదాయం, హరి కథ, వేద పారాయణకు కేంద్రం — ఒంగోలు సమాజానికి శరీరం మరియు ఆత్మకు ఆహారం.',
            'about.shlokaMeaning': '<em>"శ్రీరాముడు ధర్మ స్వరూపుడు — ఉత్తముడు, సత్యవంతుడు, పరాక్రమశాలి; దేవతలలో ఇంద్రుని వలే సమస్త లోకాలకు రాజు."</em>',

            'darshan.eyebrow': 'ఆలయ సమయాలు',
            'darshan.title': 'దర్శన <span>సమయాలు</span>',
            'darshan.lede': 'ఆలయం ప్రతి రోజు ఉదయం, సాయంత్రం దర్శనానికి తెరుచు ఉంటుంది. సాయంత్రం 7:00 గంటలకు విష్ణుసహస్రనామం, మంగళవారం &amp; శనివారం హనుమాన్ కార్యక్రమాలలో పాల్గొనండి.',
            'darshan.s1.title': 'ఉదయ దర్శనం',
            'darshan.s1.body': 'సుప్రభాతం, పూజ, ఉదయ దర్శనం — ఉదయం 12:00 గంటల వరకు.',
            'darshan.s2.title': 'సాయంత్ర దర్శనం',
            'darshan.s2.body': 'సాయంత్రం 6:00 నుండి 9:00 గంటల వరకు — సంధ్యా దర్శనం, పారాయణం, భజన.',
            'darshan.s3.title': 'విష్ణుసహస్రనామం',
            'darshan.s3.body': 'శ్రీ విష్ణుసహస్రనామ స్తోత్ర పారాయణం — ప్రతి రోజు సాయంత్రం 7:00 గంటలకు.',
            'darshan.s4.when': 'మంగళవారం',
            'darshan.s4.title': 'హనుమాన్ — మంగళవారం',
            'darshan.s4.body': 'ఉదయం ఆకు పూజ; సాయంత్రం హనుమాన్ చాలీసా 11 సార్లు పారాయణం.',
            'darshan.s5.when': 'శనివారం · 9:00 AM',
            'darshan.s5.title': 'హనుమాన్ — శనివారం',
            'darshan.s5.body': 'ఉదయం 9:00 గంటలకు ఆకు పూజ; సాయంత్రం హనుమాన్ చాలీసా 11 సార్లు.',
            'darshan.notice': '<strong>గమనిక:</strong> ధనుర్మాసం, పండుగ రోజులు, ప్రత్యేక తిథులలో సమయాలు మారవచ్చు. మరిన్ని ప్రకటనలు ఇక్కడ జోడించబడతాయి — సందర్శించే ముందు ఆలయ కార్యాలయానికి ఫోన్ చేయండి.',

            'dhanurmasam.eyebrow': 'ఋతు ఉత్సవం',
            'dhanurmasam.title': 'ధనుర్మాసం · <span>గోద &amp; కృష్ణ</span>',
            'dhanurmasam.lede': 'డిసెంబర్ 16 నుండి భోగి (జనవరి 13/14) వరకు, మా ఆలయంలో శ్రీ కృష్ణ మరియు గోదా దేవి (శ్రీ ఆండాల్) ఆరాధన — 2007 నుండి కొనసాగుతున్న పవిత్ర పరంపర.',
            'dhanurmasam.dates': 'డిసెంబర్ 16 – జనవరి 13/14 (భోగి)',
            'dhanurmasam.since': '2007 నుండి మా ఆలయంలో',
            'dhanurmasam.c1.title': 'గోదా కల్యాణం',
            'dhanurmasam.c1.body': 'డిసెంబర్ 16 నుండి భోగి వరకు, ఆలయంలో గోదా కల్యాణం నిర్వహించబడుతుంది — గోదా దేవి, శ్రీ కృష్ణుల దివ్య వివాహం.',
            'dhanurmasam.c2.title': 'తిరుప్పావై — 30 పాశురాలు',
            'dhanurmasam.c2.body': '30 రోజులు, ప్రతి రోజు శ్రీ ఆండాల్ తిరుప్పావైలో ఒక పాశురం — మా ఆండాల్ తల్లి (గోదా దేవి) శ్రీ కృష్ణునికి అర్పించిన పవిత్ర స్తోత్రం.',
            'dhanurmasam.c3.title': 'కూడారై వెల్లుం సీర్',
            'dhanurmasam.c3.body': 'తిరుప్పావై పాశురాలలో, <strong>కూడారై వెల్లుం సీర్</strong> (27వ పాశురం) మా ఆలయంలో విశేష ప్రాముఖ్యత — దివ్య అనుగ్రహం, సమృద్ధి పాశురం.',
            'dhanurmasam.invite': 'ధనుర్మాస ఉత్సవంలో కుటుంబ సమేతంగా పాల్గొని, శ్రీ కృష్ణ, గోదా దేవి అనుగ్రహం పొందండి.',
            'dhanurmasam.more': 'మరిన్ని వివరాలు, ప్రకటనలు ఉత్సవం సమీపించినప్పుడు ఇక్కడ జోడించబడతాయి.',

            'sevas.eyebrow': 'వారపు భక్తి కార్యక్రమాలు',
            'sevas.title': 'ఆలయ <span>కార్యక్రమాలు</span>',
            'sevas.lede': 'మా వారపు కార్యక్రమాలతో పాటు, ఆలయంలో పూజలు ఏర్పాటు చేసుకోవచ్చు — ఆకు పూజ వంటి హనుమాన్ పూజలు, శ్రీ సీత, శ్రీ రాములకు అర్పించే పూజలు. ఇది మీ ఆలయం — పూజారి లేదా కమిటీని సంప్రదించండి.',
            'sevas.s1.title': 'విష్ణుసహస్రనామం',
            'sevas.s1.body': 'శ్రీ విష్ణుసహస్రనామ స్తోత్ర పారాయణం — ప్రతి రోజు సాయంత్రం.',
            'sevas.s1.when': 'ప్రతి రోజు · 7:00 PM',
            'sevas.s2.title': 'హనుమాన్ — మంగళవారం',
            'sevas.s2.body': 'ఉదయం ఆకు పూజ; సాయంత్రం హనుమాన్ చాలీసా 11 సార్లు పారాయణం.',
            'sevas.s2.when': 'మంగళ · ఉద &amp; సా',
            'sevas.s3.title': 'హనుమాన్ — శనివారం',
            'sevas.s3.body': 'ఉదయం 9:00 గంటలకు ఆకు పూజ; సాయంత్రం హనుమాన్ చాలీసా 11 సార్లు.',
            'sevas.s3.when': 'శని · 9 AM &amp; PM',
            'sevas.announce.greeting': 'ప్రియమైన భక్తులారా,',
            'sevas.announce.body1': 'మన శ్రీ కోదండరామస్వామి ఆలయంలో ప్రతి మంగళవారం, శనివారం ఉదయం శ్రీ ఆంజనేయస్వామి వారికి ఆకు పూజ. ప్రతి సాయంత్రం 7:00 గంటలకు విష్ణుసహస్రనామం. మంగళ, శనివారాల సాయంత్రం హనుమాన్ చాలీసా 11 సార్లు భక్తిశ్రద్ధలతో.',
            'sevas.announce.saturday': 'ఆలయ సమయాలు:',
            'sevas.announce.saturdayTime': '🕕 ఉదయం 6:00 – 12:00 · సాయంత్రం 6:00 – 9:00',
            'sevas.announce.invite': 'కావున భక్తులందరూ కుటుంబ సమేతంగా విచ్చేసి ఈ పవిత్ర కార్యక్రమాలలో పాల్గొని, శ్రీ సీతారామచంద్రస్వామి మరియు శ్రీ ఆంజనేయస్వామి వారి అనుగ్రహం పొందవలసిందిగా సాదరంగా ఆహ్వానిస్తున్నాము.',
            'sevas.announce.jai': 'జై శ్రీరామ్ 🙏',
            'sevas.announce.signoff': 'ఇట్లు,<br/><strong>శ్రీ కోదండరామస్వామి దేవాలయ భక్తబృందం</strong><br/>రామ్‌నగర్, ఒంగోలు',
            'sevas.cta': 'మీ సందర్శన ప్రణాళిక',
            'sevas.note': 'వారపు కార్యక్రమాలకు బుకింగ్ అవసరం లేదు — పూజల కోసం పూజారి/కమిటీని సంప్రదించండి.',
            'sevas.poojaNote': '<strong>భక్తి పూజలు:</strong> శ్రీ రామ, శ్రీ సీత, శ్రీ హనుమాన్ — ఆకు పూజ సహా — పూజలు అర్పించాలనుకునే వారందరికి స్వాగతం. భగవంతునికి అర్పించండి. పూజారి లేదా కమిటీని సంప్రదించండి, లేదా <a href="mailto:ramnagarsrikodandaramaswamiala@gmail.com">ఇమెయిల్</a> చేయండి.',

            'festivals.eyebrow': 'పవిత్ర క్యాలెండర్',
            'festivals.title': 'పండుగలు &amp; <span>ఉత్సవాలు</span>',
            'festivals.lede': 'ఉగాది, శ్రీ రామ నవమి నుండి వరలక్ష్మీ వ్రతం, కార్తీక దీపోత్సవం వరకు — ఆంధ్ర పండుగల క్యాలెండర్ భజనలు, ఊరేగింపులు, సామూహిక అన్నదానంతో కళకళలాడుతుంది.',
            'festivals.f1.month': 'చైత్రం',
            'festivals.f1.title': 'శ్రీ రామ నవమి',
            'festivals.f1.body': 'శ్రీరాముని జన్మదినోత్సవం. తొమ్మిది రోజుల ప్రవచనం, కల్యాణోత్సవం, మరియు రామనగర్ వీధుల గుండా అద్భుత రథోత్సవం.',
            'festivals.f2.month': 'వైశాఖం',
            'festivals.f2.title': 'హనుమాన్ జయంతి',
            'festivals.f2.body': 'ప్రత్యేక అభిషేకం, సుందరకాండ పారాయణం, మరియు భక్తులకు వడమాల ప్రసాద విస్తరణ.',
            'festivals.f3.month': 'శ్రావణం',
            'festivals.f3.title': 'వరలక్ష్మీ వ్రతం',
            'festivals.f3.body': 'ఆలయ ప్రాకారంలో సామూహిక సంకల్పంతో వివాహిత స్త్రీలకు శుభప్రద పూజ.',
            'festivals.f4.month': 'ఆశ్వయుజం',
            'festivals.f4.title': 'దసరా &amp; విజయదశమి',
            'festivals.f4.body': 'పది రాత్రుల దేవీ పూజ, రామాయణ కథాకాలక్షేపం, మరియు ఆలయ ప్రాంగణంలో రావణ దహనం.',
            'festivals.f5.month': 'కార్తీకం',
            'festivals.f5.title': 'కార్తీక దీపోత్సవం',
            'festivals.f5.body': 'వేలాది దీపాలతో ఆలయం వెలిగిపోతుంది; పవిత్ర మాసంలో ప్రతి సాయంత్రం దీప ఆరాధన.',
            'festivals.f6.month': 'పుష్యం',
            'festivals.f6.title': 'వైకుంఠ ఏకాదశి',
            'festivals.f6.body': 'మోక్ష ఆశీర్వాదం కోసం భక్తులు ఉత్తర ద్వారం గుండా దర్శనం, తదుపరి అన్నదానం.',

            'gallery.eyebrow': 'కనుచూపులు',
            'gallery.title': 'ఆలయ <span>చిత్రశాల</span>',
            'gallery.lede': 'పండుగలు మరియు దైనందిన హారతుల సమయంలో పట్టుబడిన భక్తి మరియు దివ్య సౌందర్య క్షణాలు.',
            'gallery.g1': 'ఉదయ గోపురం',
            'gallery.g2': 'గర్భ గుడి',
            'gallery.g3': 'శ్రీ రామ నవమి',
            'gallery.g4': 'కార్తీక దీపోత్సవం',
            'gallery.g5': 'అన్నదాన సేవ',
            'gallery.g6': 'సంధ్యా హారతి',
            'gallery.note': 'ఈ చిత్రశాలను ఆలయ సిబ్బంది నిర్వహిస్తారు. కొత్త ఫోటోలు అప్‌లోడ్ చేయడానికి <a href="admin.html">admin</a> పేజీని ఉపయోగించండి.',
            'gallery.empty': 'ఇంకా ఫోటోలు అప్‌లోడ్ కాలేదు. త్వరలో చిత్రాలు చేర్చబడతాయి.',

            'videos.eyebrow': 'YouTube ఛానల్',
            'videos.title': 'వీడియోలు & <span>షార్ట్స్</span>',
            'videos.lede': 'ఆంధ్ర ఆలయ ఉత్సవాలు, హారతులు, Shorts — మా YouTube ఛానల్ నుండి తాజా వీడియోలు స్వయంచాలకంగా నవీకరించబడతాయి.',
            'videos.latestShort': 'తాజా Short',
            'videos.shortsTitle': 'Shorts',
            'videos.videosTitle': 'తాజా వీడియోలు',
            'videos.shortBadge': 'Short',
            'videos.new': 'కొత్త',
            'videos.loading': 'తాజా వీడియోలు లోడ్ అవుతున్నాయి…',
            'videos.error': 'వీడియోలు లోడ్ కాలేదు. కొద్ది సమయం తర్వాత మళ్లీ ప్రయత్నించండి.',
            'videos.empty': 'ఇంకా వీడియోలు లేవు.',
            'videos.subscribe': 'YouTube లో చూడండి',
            'videos.channelTitle': 'మా YouTube ఛానల్',
            'videos.channelSub': '@SriKodandaRamaswamiAlayam — ఉత్సవాలు, హారతులు &amp; Shorts',
            'videos.channelCta': 'ఛానల్‌కు వెళ్లండి →',
            'videos.updated': 'చివరిగా నవీకరించబడింది',
            'videos.liveNote': 'ప్రతి 20 నిమిషాలకు స్వయంచాలక నవీకరణ',

            'donate.eyebrow': 'ఆలయ సహాయం',
            'donate.title': 'సేవలో <span>భాగస్వామి</span> కండి',
            'donate.lede': 'మీ సహకారం దైనందిన పూజ, అన్నదానం, పండుగలు, ఆలయ నిర్వహణకు తోడ్పడుతుంది. విరాళం ఇవ్వాలనుకుంటే మా ఆలయ కమిటీని సంప్రదించండి — బ్యాంక్ ఖాతా తెరవబడిన తర్వాత ఆన్‌లైన్ వివరాలు ఇక్కడ జోడించబడతాయి.',
            'donate.p1.title': 'అన్నదానం',
            'donate.p1.body': 'మీ ఎంచుకున్న తిథిలో భక్తులకు భోజనం స్పాన్సర్ చేయండి.',
            'donate.p2.title': 'నిత్య పూజ',
            'donate.p2.body': 'దైనందిన ఆరాధన, పుష్పాలు, మరియు నైవేద్యానికి సహాయం.',
            'donate.p3.title': 'పునరుద్ధరణ నిధి',
            'donate.p3.body': 'ఆలయ నిర్వహణ మరియు విస్తరణకు సహకారం.',
            'donate.p4.title': 'వేద పాఠశాల',
            'donate.p4.body': 'తదుపరి తరం పూజారులు &amp; పండితుల విద్యాభ్యాసానికి సహాయం.',
            'donate.cta': 'కమిటీని సంప్రదించండి',
            'donate.bankTitle': 'విరాళాలు',
            'donate.pending': 'మా ఆలయ బ్యాంక్ ఖాతా తెరవబడుతోంది. అప్పటివరకు విరాళం ఇవ్వాలనుకుంటే, ఫోన్ లేదా ఇమెయిల్ ద్వారా కమిటీని సంప్రదించండి — మార్గదర్శనం చేస్తాము.',
            'donate.acctName': 'ఖాతా పేరు',
            'donate.acctNo': 'ఖాతా సంఖ్య',
            'donate.ifsc': 'IFSC',
            'donate.upi': 'UPI',
            'donate.bankNote': 'ఆలయానికి సహాయం చేయాలనుకుంటున్నారా? కమిటీని సంప్రదించండి — చిన్నది లేదా పెద్దది, అందరికి స్వాగతం.',

            'contact.eyebrow': 'మమ్మల్ని సందర్శించండి',
            'contact.title': 'ఆలయానికి <span>చేరుకోండి</span>',
            'contact.lede': 'ప్రశాంత రామనగర్‌లో మా ఆలయ ద్వారాలు అందరు భక్తులకు తెరిచి ఉంటాయి. పూజలు, విరాళాలు లేదా ఇతర వివరాలు కోసం పూజారి లేదా కమిటీని ఫోన్ లేదా ఇమెయిల్ ద్వారా సంప్రదించండి.',
            'contact.addrTitle': 'చిరునామా',
            'contact.addrBody': 'శ్రీ సీతా రామ చంద్ర స్వామి దేవస్థానం<br/>F2PX+7XM, రామనగర్ 8<sup>వ</sup> లైన్<br/>ఒంగోలు, ప్రకాశం జిల్లా<br/>ఆంధ్రప్రదేశ్ — 523001, భారత్',
            'contact.hoursTitle': 'ఆలయ సమయాలు',
            'contact.hoursBody': 'సోమవారం – ఆదివారం<br/>ఉదయం 6:00 – 12:00 · సాయంత్రం 6:00 – 9:00',
            'contact.phoneTitle': 'ఫోన్',
            'contact.phoneSub': 'ఆలయ కార్యాలయం',
            'contact.emailTitle': 'ఇమెయిల్',
            'contact.emailSub': 'పూజారి &amp; కమిటీ · పూజ &amp; విరాళ వివరాములకు',
            'contact.youtubeTitle': 'YouTube',
            'contact.youtubeSub': 'మా ఛానల్‌లో ఉత్సవాలు, హారతులు &amp; Shorts',
            'footer.youtube': 'YouTube',

            'footer.name': 'శ్రీ రామాలయం · రామనగర్',
            'footer.addr': 'F2PX+7XM, రామనగర్ 8<sup>వ</sup> లైన్, ఒంగోలు, ఆంధ్రప్రదేశ్',
            'footer.copy': '© <span id="year"></span> శ్రీ సీతా రామ చంద్ర స్వామి దేవస్థానం, రామనగర్. భక్తితో రూపొందించబడింది.'
        }
    };

    /* Cache English content for restoration */
    const enCache = {};
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const attr = el.dataset.i18nAttr;
        enCache[el.dataset.i18n] = attr ? el.getAttribute(attr) : el.innerHTML;
    });

    function applyLanguage(lang) {
        const dict = lang === 'te' ? translations.te : null;
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.dataset.i18n;
            const value = dict ? dict[key] : enCache[key];
            if (value !== undefined && value !== null) {
                if (el.dataset.i18nAttr) el.setAttribute(el.dataset.i18nAttr, value);
                else el.innerHTML = value;
            }
        });
        document.documentElement.lang = lang;
        try { localStorage.setItem('lang', lang); } catch (e) {}
        document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
            btn.classList.toggle('is-active', btn.dataset.lang === lang);
        });
        const yearEl = document.getElementById('year');
        if (yearEl) {
            const istYear = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Asia/Kolkata', year: 'numeric'
            }).format(new Date());
            yearEl.textContent = istYear;
        }
    }

    document.querySelectorAll('.lang-switch__btn').forEach((btn) => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    let savedLang = 'en';
    try { savedLang = localStorage.getItem('lang') || 'en'; } catch (e) {}
    if (savedLang === 'te') applyLanguage('te');


    /* =========================================================
       2. PETAL HELPERS  (declared before intro/petals so showIntro
          can safely call spawnPetals)
       ========================================================= */
    const PETAL_COLORS = [
        ['#f6c453', '#e76e2a'],
        ['#ffb347', '#c14d12'],
        ['#f7d98a', '#c79a3a'],
        ['#ff8a8a', '#c14d12'],
        ['#ffd700', '#e76e2a']
    ];

    function petalSVG(colors) {
        const [a, b] = colors;
        const id = 'pg' + Math.floor(Math.random() * 1e6);
        return `
            <svg viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="${id}" x1="0" y1="0" x2="0.7" y2="1">
                        <stop offset="0%" stop-color="${a}" stop-opacity="0.95"/>
                        <stop offset="100%" stop-color="${b}" stop-opacity="0.85"/>
                    </linearGradient>
                </defs>
                <path d="M12 1 Q3 12 7 24 Q12 31 17 24 Q21 12 12 1 Z" fill="url(#${id})" />
                <path d="M12 4 Q9 14 12 26" stroke="rgba(255,255,255,0.35)" stroke-width="0.6" fill="none"/>
            </svg>
        `;
    }

    function spawnPetal(container, options = {}) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        const colors = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
        petal.innerHTML = petalSVG(colors);
        const startX = Math.random() * 100;
        const size = 12 + Math.random() * 18;
        const duration = 10 + Math.random() * 14;
        const delay = options.intro ? Math.random() * 4 : -(Math.random() * 14);
        const drift = (Math.random() - 0.5) * 240;
        const sway = (Math.random() - 0.5) * 60;
        const swayDuration = 3 + Math.random() * 4;
        const opacity = options.intro ? 0.85 + Math.random() * 0.15 : 0.65 + Math.random() * 0.3;
        petal.style.cssText = `
            left: ${startX}vw;
            --size: ${size}px;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --drift: ${drift}px;
            --sway: ${sway}px;
            --sway-duration: ${swayDuration}s;
            --opacity: ${opacity};
        `;
        container.appendChild(petal);
    }

    function spawnPetals(container, count, options) {
        if (!container) return;
        for (let i = 0; i < count; i++) spawnPetal(container, options);
    }


    /* =========================================================
       3. INTRO OVERLAY
       ========================================================= */
    const intro = document.getElementById('intro');
    const introEnter = document.getElementById('introEnter');

    function showIntro() {
        if (!intro) return;
        document.body.classList.add('intro-active');
        spawnPetals(document.getElementById('introPetals'), 22, { intro: true });
    }

    let dismissing = false;
    function hideIntro() {
        if (!intro || dismissing) return;
        dismissing = true;
        intro.classList.add('is-hidden');
        document.body.classList.remove('intro-active');
        setTimeout(() => { intro.style.display = 'none'; }, 1000);
    }

    /* Show intro on every page load (so devotees can re-experience the welcome) */
    showIntro();

    if (introEnter) {
        introEnter.addEventListener('click', (e) => {
            e.stopPropagation();
            hideIntro();
        });
    }
    if (intro) {
        intro.addEventListener('click', (e) => {
            if (e.target.closest('.intro__content')) return;
            hideIntro();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (!intro || intro.classList.contains('is-hidden')) return;
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hideIntro();
        }
    });


    /* =========================================================
       4. PAGE-WIDE FALLING PETALS
       ========================================================= */
    const pagePetals = document.getElementById('petals');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (pagePetals && !reducedMotion) {
        spawnPetals(pagePetals, 18);
        setInterval(() => {
            const existing = pagePetals.querySelectorAll('.petal');
            for (let i = 0; i < Math.min(3, existing.length); i++) existing[i].remove();
            spawnPetals(pagePetals, 3);
        }, 8000);
    }


    /* =========================================================
       4. HEADER / NAV / SCROLL
       ========================================================= */
    const header = document.getElementById('siteHeader');
    const onScroll = () => {
        if (!header) return;
        if (window.scrollY > 8) header.classList.add('is-scrolled');
        else header.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const navToggle = document.getElementById('navToggle');
    const siteNav = document.getElementById('siteNav');
    if (navToggle && siteNav) {
        navToggle.addEventListener('click', () => {
            const isOpen = siteNav.classList.toggle('is-open');
            navToggle.classList.toggle('is-open', isOpen);
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });
        siteNav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                siteNav.classList.remove('is-open');
                navToggle.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            const headerH = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - headerH + 1;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });


    /* =========================================================
       5. REVEAL ON SCROLL
       ========================================================= */
    const revealTargets = [
        '.about__card', '.about__shloka', '.darshan__card', '.seva-item',
        '.festival', '.gallery__item', '.youtube-card', '.donate__card', '.donate__purpose',
        '.contact__block', '.contact__map', '.stotra-card', '.panchangam'
    ];
    const elements = document.querySelectorAll(revealTargets.join(','));
    elements.forEach((el, i) => {
        el.setAttribute('data-reveal', '');
        el.style.transitionDelay = `${Math.min(i * 40, 320)}ms`;
    });
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        elements.forEach((el) => io.observe(el));
    } else {
        elements.forEach((el) => el.classList.add('is-visible'));
    }


    /* =========================================================
       6. HOURS + DAILY PANCHANGAM (Tithi + Nakshatra + Vaaram + Paksha)
       — All date/weekday logic locked to Indian Standard Time (Asia/Kolkata)
       ========================================================= */

    /* Returns { y, m, d, weekday } for the *current Indian* civil date,
       regardless of where the visitor's device is located. */
    function getISTParts(date) {
        const fmt = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric', month: '2-digit', day: '2-digit',
            weekday: 'short'
        });
        const parts = fmt.formatToParts(date).reduce((a, p) => (a[p.type] = p.value, a), {});
        const wkMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
        return {
            y: parseInt(parts.year, 10),
            m: parseInt(parts.month, 10) - 1,
            d: parseInt(parts.day, 10),
            weekday: wkMap[parts.weekday] ?? 0
        };
    }

    const hoursEl = document.getElementById('todayHours');
    if (hoursEl) {
        hoursEl.textContent = '6:00 AM – 12:00 PM · 6:00 PM – 9:00 PM';
    }

    const tithiNamesEN = [
        'Pratipada','Dwitiya','Tritiya','Chaturthi','Panchami','Shashthi','Saptami','Ashtami','Navami','Dashami',
        'Ekadashi','Dwadashi','Trayodashi','Chaturdashi','Purnima',
        'Pratipada','Dwitiya','Tritiya','Chaturthi','Panchami','Shashthi','Saptami','Ashtami','Navami','Dashami',
        'Ekadashi','Dwadashi','Trayodashi','Chaturdashi','Amavasya'
    ];
    const tithiNamesTE = [
        'పాడ్యమి','విదియ','తదియ','చవితి','పంచమి','షష్ఠి','సప్తమి','అష్టమి','నవమి','దశమి',
        'ఏకాదశి','ద్వాదశి','త్రయోదశి','చతుర్దశి','పౌర్ణమి',
        'పాడ్యమి','విదియ','తదియ','చవితి','పంచమి','షష్ఠి','సప్తమి','అష్టమి','నవమి','దశమి',
        'ఏకాదశి','ద్వాదశి','త్రయోదశి','చతుర్దశి','అమావాస్య'
    ];

    /* The 27 Nakshatras (sidereal lunar mansions) */
    const nakshatraNamesEN = [
        'Ashwini','Bharani','Krittika','Rohini','Mrigashira','Ardra','Punarvasu','Pushya','Ashlesha',
        'Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha',
        'Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishtha','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'
    ];
    const nakshatraNamesTE = [
        'అశ్విని','భరణి','కృత్తిక','రోహిణి','మృగశిర','ఆర్ద్ర','పునర్వసు','పుష్యమి','ఆశ్లేష',
        'మఘ','పుబ్బ','ఉత్తర','హస్త','చిత్త','స్వాతి','విశాఖ','అనూరాధ','జ్యేష్ఠ',
        'మూల','పూర్వాషాఢ','ఉత్తరాషాఢ','శ్రవణ','ధనిష్ఠ','శతభిష','పూర్వాభాద్ర','ఉత్తరాభాద్ర','రేవతి'
    ];

    const vaaramTE = ['ఆదివారం','సోమవారం','మంగళవారం','బుధవారం','గురువారం','శుక్రవారం','శనివారం'];
    const vaaramEN = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const teluguMonths = ['జనవరి','ఫిబ్రవరి','మార్చి','ఏప్రిల్','మే','జూన్','జూలై','ఆగస్టు','సెప్టెంబర్','అక్టోబర్','నవంబర్','డిసెంబర్'];
    const englishMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    /* Approximate sidereal moon longitude → nakshatra (Lahiri ayanamsa) */
    function moonLongitudeDeg(date) {
        const J2000 = Date.UTC(2000, 0, 1, 12, 0, 0);
        const d = (date.getTime() - J2000) / 86400000;
        const T = d / 36525;

        let L = 218.3164477 + 481267.88123421 * T - 0.0015786 * T*T + (T*T*T)/538841 - (T*T*T*T)/65194000;
        const M = (134.9633964 + 477198.8675055 * T + 0.0087414 * T*T) * Math.PI/180;
        const Mp = (357.5291092 + 35999.0502909 * T - 0.0001536 * T*T) * Math.PI/180;
        const D = (297.8501921 + 445267.1114034 * T - 0.0018819 * T*T) * Math.PI/180;
        const F = (93.2720950  + 483202.0175233 * T - 0.0036539 * T*T) * Math.PI/180;

        L += 6.289 * Math.sin(M)
           - 1.274 * Math.sin(M - 2*D)
           + 0.658 * Math.sin(2*D)
           - 0.186 * Math.sin(Mp)
           - 0.059 * Math.sin(2*M - 2*D)
           - 0.057 * Math.sin(M + Mp - 2*D)
           + 0.053 * Math.sin(M + 2*D)
           + 0.046 * Math.sin(Mp - 2*D)
           + 0.041 * Math.sin(M - Mp)
           - 0.035 * Math.sin(D)
           - 0.031 * Math.sin(M + Mp);

        const ayanamsa = 23.85 + 0.0139 * (date.getFullYear() - 2000);
        let sidereal = ((L - ayanamsa) % 360 + 360) % 360;
        return sidereal;
    }

    function sunLongitudeDeg(date) {
        const J2000 = Date.UTC(2000, 0, 1, 12, 0, 0);
        const d = (date.getTime() - J2000) / 86400000;
        const T = d / 36525;
        const L0 = 280.46646 + 36000.76983 * T;
        const M  = (357.52911 + 35999.05029 * T) * Math.PI/180;
        const C  = (1.914602 - 0.004817 * T) * Math.sin(M)
                 + (0.019993 - 0.000101 * T) * Math.sin(2*M)
                 + 0.000289 * Math.sin(3*M);
        return ((L0 + C) % 360 + 360) % 360;
    }

    function updatePanchangam() {
        const isTe = document.documentElement.lang === 'te';
        const now = new Date();
        const ist = getISTParts(now);

        const dateEl = document.getElementById('panchangamDate');
        if (dateEl) {
            const months = isTe ? teluguMonths : englishMonths;
            const istClock = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: 'numeric', minute: '2-digit', hour12: true
            }).format(now);
            dateEl.textContent = `${ist.d} ${months[ist.m]} ${ist.y} · ${istClock}`;
        }

        const vaaramEl = document.getElementById('panVaaram');
        if (vaaramEl) {
            vaaramEl.textContent = (isTe ? vaaramTE : vaaramEN)[ist.weekday];
        }

        /* Astronomical positions are computed for the current absolute moment
           (UTC milliseconds); this matches the panchangam observed in India now. */
        const moon = moonLongitudeDeg(now);
        const sun  = sunLongitudeDeg(now);
        let phase = ((moon - sun) % 360 + 360) % 360;
        const tIdx = Math.min(29, Math.floor(phase / 12));

        const tithiEl = document.getElementById('panTithi');
        if (tithiEl) {
            const names = isTe ? tithiNamesTE : tithiNamesEN;
            tithiEl.textContent = names[tIdx];
        }

        const pakshaEl = document.getElementById('panPaksha');
        if (pakshaEl) {
            const isShukla = tIdx < 15;
            pakshaEl.textContent = isShukla ? (isTe ? 'శుక్ల' : 'Shukla') : (isTe ? 'కృష్ణ' : 'Krishna');
        }

        const nakIdx = Math.floor(moon / (360/27));
        const nakEl = document.getElementById('panNakshatra');
        if (nakEl) {
            nakEl.textContent = (isTe ? nakshatraNamesTE : nakshatraNamesEN)[nakIdx];
        }

        const legacyTithi = document.getElementById('todayTithi');
        if (legacyTithi) {
            const names = isTe ? tithiNamesTE : tithiNamesEN;
            const isShukla = tIdx < 15;
            const paksha = isShukla ? (isTe ? 'శుక్ల' : 'Shukla') : (isTe ? 'కృష్ణ' : 'Krishna');
            legacyTithi.textContent = `${paksha} ${names[tIdx]}`;
        }
    }
    updatePanchangam();
    document.querySelectorAll('.lang-switch__btn').forEach((b) =>
        b.addEventListener('click', () => setTimeout(updatePanchangam, 0))
    );
    setInterval(updatePanchangam, 1000 * 60);


    /* =========================================================
       6b. STOTRAS — grid, drawer, reader
       ========================================================= */
    const stotras = (window.STOTRAS && Array.isArray(window.STOTRAS)) ? window.STOTRAS : [];
    const stotrasGrid    = document.getElementById('stotrasGrid');
    const drawer         = document.getElementById('stotraDrawer');
    const drawerList     = document.getElementById('stotraDrawerList');
    const drawerBackdrop = document.getElementById('stotraBackdrop');
    const drawerClose    = document.getElementById('stotraDrawerClose');
    const fab            = document.getElementById('stotraFab');
    const reader         = document.getElementById('stotraReader');
    const readerTitle    = document.getElementById('readerTitle');
    const readerSubtitle = document.getElementById('readerSubtitle');
    const readerBody     = document.getElementById('readerBody');
    const readerClose    = document.getElementById('readerClose');
    const readerLarger   = document.getElementById('readerLarger');
    const readerSmaller  = document.getElementById('readerSmaller');

    function escapeHTML(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    /* Deity metadata for category grouping */
    const DEITY_META = {
        rama:    { en: 'Sri Rama',          te: 'శ్రీ రామ',           sym: '\u0950' },
        vishnu:  { en: 'Lord Vishnu',       te: 'శ్రీ మహావిష్ణు',     sym: '\u0950' },
        hanuman: { en: 'Sri Hanuman',       te: 'శ్రీ హనుమాన్',        sym: '\u0950' },
        surya:   { en: 'Surya Bhagavan',    te: 'సూర్య భగవాన్',       sym: '\u2600' },
        daily:   { en: 'Daily Prayers',     te: 'నిత్య పారాయణం',      sym: '\u0950' },
        other:   { en: 'Other Stotras',     te: 'ఇతర స్తోత్రాలు',     sym: '\u0950' }
    };
    const DEITY_ORDER = ['rama', 'vishnu', 'hanuman', 'surya', 'daily', 'other'];

    function groupByDeity(list) {
        const groups = {};
        list.forEach((s) => {
            const d = (s.deity && DEITY_META[s.deity]) ? s.deity : 'other';
            if (!groups[d]) groups[d] = [];
            groups[d].push(s);
        });
        return groups;
    }

    function stotraCardHTML(s) {
        const verseCount = (s.verses || []).filter((v) => v.type !== 'note').length;
        return `
            <button class="stotra-card" data-stotra-id="${escapeHTML(s.id)}" type="button">
                <span class="stotra-card__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4z"/>
                        <path d="M4 4v14a2 2 0 0 0 2 2"/>
                        <line x1="8" y1="9" x2="16" y2="9"/>
                        <line x1="8" y1="13" x2="16" y2="13"/>
                    </svg>
                </span>
                <span class="stotra-card__title-en">${escapeHTML(s.title_en || '')}</span>
                <h3 class="stotra-card__title-te">${escapeHTML(s.title_te || '')}</h3>
                <p class="stotra-card__sub">${escapeHTML(s.subtitle_te || '')}</p>
                <div class="stotra-card__meta">
                    <span data-stotra-verses>${verseCount} verses</span>
                    <span class="stotra-card__read" data-i18n="stotraCard.read">Read →</span>
                </div>
            </button>
        `;
    }

    /* Render landing-page grid of stotra cards, grouped by deity */
    function renderStotrasGrid() {
        if (!stotrasGrid) return;
        const groups = groupByDeity(stotras);
        const isTe = document.documentElement.lang === 'te';
        const html = DEITY_ORDER
            .filter((d) => groups[d] && groups[d].length)
            .map((d) => {
                const meta = DEITY_META[d];
                const heading = isTe ? meta.te : meta.en;
                return `
                    <div class="stotras-category" data-deity="${d}">
                        <header class="stotras-category__head">
                            <span class="stotras-category__sym" aria-hidden="true">${meta.sym}</span>
                            <h3 class="stotras-category__title">${escapeHTML(heading)}</h3>
                            <span class="stotras-category__count">${groups[d].length}</span>
                        </header>
                        <div class="stotras-category__grid">
                            ${groups[d].map(stotraCardHTML).join('')}
                        </div>
                    </div>
                `;
            }).join('');

        stotrasGrid.innerHTML = html + `
            <p class="stotras-credit">
                <span data-i18n="stotras.credit">More stotras &amp; mantras at</span>
                <a href="https://www.vignanam.org/telugu.html" target="_blank" rel="noopener">Vaidika Vignanam</a>
            </p>
        `;

        stotrasGrid.querySelectorAll('.stotra-card').forEach((card) => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-stotra-id');
                openReader(id);
            });
        });
    }

    function renderDrawerList() {
        if (!drawerList) return;
        const groups = groupByDeity(stotras);
        const isTe = document.documentElement.lang === 'te';
        drawerList.innerHTML = DEITY_ORDER
            .filter((d) => groups[d] && groups[d].length)
            .map((d) => {
                const meta = DEITY_META[d];
                const heading = isTe ? meta.te : meta.en;
                return `
                    <li class="stotra-drawer__group">
                        <div class="stotra-drawer__group-head">${escapeHTML(heading)}</div>
                        <ul class="stotra-drawer__sublist">
                            ${groups[d].map((s) => `
                                <li class="stotra-drawer__item">
                                    <button class="stotra-drawer__btn" data-stotra-id="${escapeHTML(s.id)}" type="button">
                                        <span class="stotra-drawer__btn-te">${escapeHTML(s.title_te || '')}</span>
                                        <span class="stotra-drawer__btn-en">${escapeHTML(s.title_en || '')}</span>
                                    </button>
                                </li>
                            `).join('')}
                        </ul>
                    </li>
                `;
            }).join('');

        drawerList.querySelectorAll('.stotra-drawer__btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-stotra-id');
                closeDrawer();
                openReader(id);
            });
        });
    }

    function openDrawer() {
        if (!drawer) return;
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        if (drawerBackdrop) drawerBackdrop.classList.add('is-open');
    }
    function closeDrawer() {
        if (!drawer) return;
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
        if (drawerBackdrop) drawerBackdrop.classList.remove('is-open');
    }

    function renderVerse(v) {
        const cls = `verse verse--${v.type || 'shloka'}`;
        const num = v.n != null ? `<span class="verse__num">${v.n}</span>` : '';
        const text = escapeHTML(v.text || '');
        return `<p class="${cls}">${num}${text}</p>`;
    }

    let currentStotraId = null;

    function buildReaderNav(currentId) {
        const idx = stotras.findIndex((x) => x.id === currentId);
        if (idx < 0) return '';
        const prev = idx > 0 ? stotras[idx - 1] : null;
        const next = idx < stotras.length - 1 ? stotras[idx + 1] : null;
        const isTe = document.documentElement.lang === 'te';
        const prevLbl = isTe ? 'మునుపటి' : 'Previous';
        const nextLbl = isTe ? 'తరువాత' : 'Next';
        const dash = '—';
        return `
            <nav class="stotra-reader__nav" aria-label="Stotra navigation">
                <button class="stotra-reader__nav-btn" data-nav="prev" ${prev ? '' : 'disabled'} type="button">
                    <span class="stotra-reader__nav-arrow">←</span>
                    <span class="stotra-reader__nav-text">
                        <span class="stotra-reader__nav-label">${prevLbl}</span>
                        <span class="stotra-reader__nav-name">${escapeHTML(prev ? (prev.title_te || prev.title_en) : dash)}</span>
                    </span>
                </button>
                <button class="stotra-reader__nav-btn stotra-reader__nav-btn--next" data-nav="next" ${next ? '' : 'disabled'} type="button">
                    <span class="stotra-reader__nav-text">
                        <span class="stotra-reader__nav-label">${nextLbl}</span>
                        <span class="stotra-reader__nav-name">${escapeHTML(next ? (next.title_te || next.title_en) : dash)}</span>
                    </span>
                    <span class="stotra-reader__nav-arrow">→</span>
                </button>
            </nav>
        `;
    }

    function openReader(id) {
        const s = stotras.find((x) => x.id === id);
        if (!s || !reader) return;
        currentStotraId = s.id;
        if (readerTitle)    readerTitle.textContent    = s.title_te || s.title_en || '';
        if (readerSubtitle) readerSubtitle.textContent = s.subtitle_te || s.title_en || '';
        if (readerBody) {
            const versesHtml = (s.verses || []).map(renderVerse).join('');
            const navHtml = buildReaderNav(s.id);
            readerBody.innerHTML = versesHtml + navHtml;
            readerBody.scrollTop = 0;
            readerBody.querySelectorAll('[data-nav]').forEach((b) => {
                b.addEventListener('click', () => {
                    const dir = b.getAttribute('data-nav');
                    const idx = stotras.findIndex((x) => x.id === currentStotraId);
                    const target = dir === 'prev' ? stotras[idx - 1] : stotras[idx + 1];
                    if (target) openReader(target.id);
                });
            });
        }
        reader.classList.add('is-open');
        reader.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeReader() {
        if (!reader) return;
        reader.classList.remove('is-open');
        reader.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (fab)            fab.addEventListener('click', openDrawer);
    if (drawerClose)    drawerClose.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);
    if (readerClose)    readerClose.addEventListener('click', closeReader);
    if (reader) reader.addEventListener('click', (e) => {
        if (e.target === reader) closeReader();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (reader && reader.classList.contains('is-open')) { closeReader(); return; }
        if (drawer && drawer.classList.contains('is-open')) { closeDrawer(); return; }
    });

    let readerFs = 19;
    function setReaderFs(v) {
        readerFs = Math.max(14, Math.min(28, v));
        if (readerBody) readerBody.style.setProperty('--reader-fs', readerFs + 'px');
    }
    if (readerLarger)  readerLarger.addEventListener('click', () => setReaderFs(readerFs + 2));
    if (readerSmaller) readerSmaller.addEventListener('click', () => setReaderFs(readerFs - 2));

    function refreshVerseCounts() {
        const isTe = document.documentElement.lang === 'te';
        const label = isTe ? 'శ్లోకాలు' : 'verses';
        document.querySelectorAll('[data-stotra-verses]').forEach((el) => {
            const m = (el.textContent || '').match(/(\d+)/);
            const n = m ? m[1] : '0';
            el.textContent = `${n} ${label}`;
        });
    }

    renderStotrasGrid();
    renderDrawerList();
    refreshVerseCounts();
    document.querySelectorAll('.lang-switch__btn').forEach((b) =>
        b.addEventListener('click', () => setTimeout(() => {
            renderStotrasGrid();
            renderDrawerList();
            refreshVerseCounts();
        }, 0))
    );


    /* =========================================================
       6b. GALLERY — load photos from Supabase (admin uploads)
       ========================================================= */
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryNote = document.getElementById('galleryNote');
    const galleryCfg = window.SITE_CONFIG || {};
    let galleryLightbox = null;

    function galleryEscape(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function galleryCaption(item) {
        const isTe = document.documentElement.lang === 'te';
        if (isTe && item.caption_te) return item.caption_te;
        if (item.caption_en) return item.caption_en;
        if (item.caption_te) return item.caption_te;
        return isTe ? 'ఆలయ చిత్రం' : 'Temple photo';
    }

    function gallerySizeClass(index, total) {
        if (total === 1) return 'gallery__item--1';
        if (index === 0) return 'gallery__item--1';
        if (index === 1) return 'gallery__item--2';
        return 'gallery__item--3';
    }

    function openGalleryLightbox(src, caption) {
        if (!galleryLightbox) {
            galleryLightbox = document.createElement('div');
            galleryLightbox.className = 'gallery-lightbox';
            galleryLightbox.innerHTML = `
                <button class="gallery-lightbox__close" type="button" aria-label="Close">&times;</button>
                <figure class="gallery-lightbox__inner">
                    <img class="gallery-lightbox__img" src="" alt="" />
                    <figcaption class="gallery-lightbox__cap"></figcaption>
                </figure>
            `;
            document.body.appendChild(galleryLightbox);
            galleryLightbox.addEventListener('click', (e) => {
                if (e.target === galleryLightbox || e.target.closest('.gallery-lightbox__close')) {
                    galleryLightbox.classList.remove('is-open');
                    document.body.style.overflow = '';
                }
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && galleryLightbox.classList.contains('is-open')) {
                    galleryLightbox.classList.remove('is-open');
                    document.body.style.overflow = '';
                }
            });
        }
        galleryLightbox.querySelector('.gallery-lightbox__img').src = src;
        galleryLightbox.querySelector('.gallery-lightbox__img').alt = caption;
        galleryLightbox.querySelector('.gallery-lightbox__cap').textContent = caption;
        galleryLightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function renderGalleryItems(items) {
        if (!galleryGrid || !items.length) return false;
        galleryGrid.innerHTML = items.map((item, i) => {
            const cap = galleryCaption(item);
            const cls = gallerySizeClass(i, items.length);
            return `
                <figure class="gallery__item gallery__item--photo ${cls}">
                    <button class="gallery__photo-btn" type="button" data-src="${galleryEscape(item.image_url)}" data-cap="${galleryEscape(cap)}" aria-label="${galleryEscape(cap)}">
                        <img class="gallery__photo" src="${galleryEscape(item.image_url)}" alt="${galleryEscape(cap)}" loading="lazy" />
                        <span class="gallery__photo-cap">${galleryEscape(cap)}</span>
                    </button>
                </figure>
            `;
        }).join('');

        galleryGrid.querySelectorAll('.gallery__photo-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                openGalleryLightbox(btn.getAttribute('data-src'), btn.getAttribute('data-cap'));
            });
        });
        return true;
    }

    async function loadGalleryFromSupabase() {
        if (!galleryGrid) return;
        if (!galleryCfg.supabaseUrl || !galleryCfg.supabaseAnonKey) return;
        if (typeof window.supabase === 'undefined' || !window.supabase.createClient) return;

        try {
            const client = window.supabase.createClient(galleryCfg.supabaseUrl, galleryCfg.supabaseAnonKey);
            const { data, error } = await client
                .from('gallery_items')
                .select('image_url, caption_en, caption_te, created_at')
                .order('created_at', { ascending: false })
                .limit(24);

            if (error || !data || !data.length) {
                if (galleryNote && !data?.length) {
                    const isTe = document.documentElement.lang === 'te';
                    galleryNote.textContent = isTe
                        ? (translations.te['gallery.empty'] || 'No photos uploaded yet.')
                        : 'No photos uploaded yet. Temple staff can add them via the admin page.';
                }
                return;
            }

            renderGalleryItems(data);
            if (galleryNote) galleryNote.hidden = true;
        } catch (_) {
            /* keep placeholder tiles on failure */
        }
    }

    loadGalleryFromSupabase();
    document.querySelectorAll('.lang-switch__btn').forEach((b) =>
        b.addEventListener('click', () => setTimeout(loadGalleryFromSupabase, 0))
    );


    /* =========================================================
       6c. YOUTUBE — live Videos & Shorts from channel RSS
       ========================================================= */
    const ytStatusEl     = document.getElementById('youtubeStatus');
    const ytFeaturedEl   = document.getElementById('youtubeFeatured');
    const ytFeaturedLink = document.getElementById('youtubeFeaturedLink');
    const ytFeaturedThumb= document.getElementById('youtubeFeaturedThumb');
    const ytFeaturedTitle= document.getElementById('youtubeFeaturedTitle');
    const ytFeaturedDate = document.getElementById('youtubeFeaturedDate');
    const ytFeaturedNew  = document.getElementById('youtubeFeaturedNew');
    const ytShortsBlock  = document.getElementById('youtubeShortsBlock');
    const ytShortsEl     = document.getElementById('youtubeShorts');
    const ytVideosBlock  = document.getElementById('youtubeVideosBlock');
    const ytVideosEl     = document.getElementById('youtubeVideos');
    const ytChannelLink  = document.getElementById('youtubeChannelLink');
    const ytUpdatedEl    = document.getElementById('youtubeUpdated');

    let resolvedChannelId = YOUTUBE_CONFIG.channelId || '';
    let ytRefreshTimer = null;

    function ytLabel(key, fallback) {
        const isTe = document.documentElement.lang === 'te';
        if (isTe && translations.te[key]) return translations.te[key];
        return fallback;
    }

    function ytSetStatus(msg) {
        if (ytStatusEl) ytStatusEl.textContent = msg;
    }

    async function ytFetchText(url) {
        const targets = [
            'https://api.allorigins.win/raw?url=' + encodeURIComponent(url),
            'https://corsproxy.io/?' + encodeURIComponent(url)
        ];
        let lastErr;
        for (const proxyUrl of targets) {
            try {
                const res = await fetch(proxyUrl, { cache: 'no-store' });
                if (!res.ok) throw new Error('HTTP ' + res.status);
                const text = await res.text();
                if (text && text.length > 50) return text;
            } catch (err) {
                lastErr = err;
            }
        }
        throw lastErr || new Error('Fetch failed');
    }

    async function ytResolveChannelId() {
        if (resolvedChannelId) return resolvedChannelId;
        const handle = (YOUTUBE_CONFIG.channelHandle || '').replace(/^@/, '');
        if (!handle) throw new Error('No channel ID or handle configured');

        const pageUrl = 'https://www.youtube.com/@' + handle;
        const html = await ytFetchText(pageUrl);
        const patterns = [
            /"channelId":"(UC[\w-]{20,})"/,
            /"externalId":"(UC[\w-]{20,})"/,
            /channel_id=(UC[\w-]{20,})/,
            /\/channel\/(UC[\w-]{20,})/
        ];
        for (const re of patterns) {
            const m = html.match(re);
            if (m) {
                resolvedChannelId = m[1];
                return resolvedChannelId;
            }
        }
        throw new Error('Could not resolve channel ID from @' + handle);
    }

    function ytParseFeed(xmlText) {
        const doc = new DOMParser().parseFromString(xmlText, 'text/xml');
        if (doc.querySelector('parsererror')) throw new Error('Invalid RSS XML');

        const entries = Array.from(doc.querySelectorAll('entry'));
        return entries.map((entry) => {
            const videoId = (entry.querySelector('videoId') || entry.querySelector('yt\\:videoId'))?.textContent
                || (entry.querySelector('id')?.textContent || '').split(':').pop();
            const title = entry.querySelector('title')?.textContent || '';
            const published = entry.querySelector('published')?.textContent || '';
            const linkEl = entry.querySelector('link');
            const link = linkEl?.getAttribute('href') || ('https://www.youtube.com/watch?v=' + videoId);
            const thumbEl = entry.querySelector('thumbnail') || entry.querySelector('media\\:thumbnail');
            const thumb = thumbEl?.getAttribute('url')
                || ('https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg');
            const contentEl = entry.querySelector('content') || entry.querySelector('media\\:content');
            const duration = parseInt(contentEl?.getAttribute('duration') || '0', 10);

            return { videoId, title, published, link, thumb, duration };
        }).filter((v) => v.videoId);
    }

    function ytIsShort(item) {
        if (!item) return false;
        if (item.duration > 0 && item.duration <= 60) return true;
        if (/shorts?/i.test(item.title)) return true;
        if (item.link.includes('/shorts/')) return true;
        return false;
    }

    function ytWatchUrl(item) {
        if (ytIsShort(item)) return 'https://www.youtube.com/shorts/' + item.videoId;
        return 'https://www.youtube.com/watch?v=' + item.videoId;
    }

    function ytFormatDate(iso, isTe) {
        if (!iso) return '';
        const d = new Date(iso);
        return d.toLocaleDateString(isTe ? 'te-IN' : 'en-IN', {
            timeZone: 'Asia/Kolkata',
            day: 'numeric', month: 'short', year: 'numeric'
        });
    }

    function ytEscape(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function ytCardHTML(item, opts) {
        const isShort = opts?.isShort ?? ytIsShort(item);
        const isNew = opts?.isNew ?? false;
        const featured = opts?.featured ?? false;
        const cls = [
            'youtube-card',
            isShort ? 'youtube-card--short' : 'youtube-card--video',
            featured ? 'youtube-card--featured' : ''
        ].filter(Boolean).join(' ');

        return `
            <a class="${cls}" href="${ytEscape(ytWatchUrl(item))}" target="_blank" rel="noopener noreferrer" role="listitem">
                <span class="youtube-card__media">
                    <img class="youtube-card__thumb" src="${ytEscape(item.thumb)}" alt="${ytEscape(item.title)}" loading="lazy" />
                    ${isShort ? `<span class="youtube-badge-shorts">${ytEscape(ytLabel('videos.shortBadge', 'Short'))}</span>` : ''}
                    ${isNew ? `<span class="youtube-badge-new">${ytEscape(ytLabel('videos.new', 'NEW'))}</span>` : ''}
                </span>
                <span class="youtube-card__body">
                    <span class="youtube-card__title">${ytEscape(item.title)}</span>
                    <span class="youtube-card__date">${ytEscape(ytFormatDate(item.published, document.documentElement.lang === 'te'))}</span>
                </span>
            </a>
        `;
    }

    function ytUpdateChannelLink(channelId) {
        const handle = YOUTUBE_CONFIG.channelHandle;
        const href = handle
            ? 'https://www.youtube.com/@' + handle.replace(/^@/, '')
            : 'https://www.youtube.com/channel/' + channelId;
        if (ytChannelLink) ytChannelLink.href = href;
        const ytChannelBar = document.getElementById('youtubeChannelBar');
        if (ytChannelBar) ytChannelBar.href = href;
    }

    function ytRenderFeed(items) {
        if (!items.length) {
            ytSetStatus(ytLabel('videos.empty', 'No videos found yet.'));
            return;
        }

        const newestId = items[0].videoId;
        let prevId = '';
        try { prevId = sessionStorage.getItem(YT_STORAGE_KEY) || ''; } catch (_) {}
        const hasNewUpload = prevId && newestId !== prevId;
        try { sessionStorage.setItem(YT_STORAGE_KEY, newestId); } catch (_) {}

        const shorts = items.filter(ytIsShort).slice(0, YOUTUBE_CONFIG.maxShorts);
        const videos = items.filter((v) => !ytIsShort(v)).slice(0, YOUTUBE_CONFIG.maxVideos);

        if (ytStatusEl) ytStatusEl.hidden = true;

        if (shorts.length && ytFeaturedEl) {
            const featured = shorts[0];
            ytFeaturedEl.hidden = false;
            if (ytFeaturedLink) {
                ytFeaturedLink.href = ytWatchUrl(featured);
                ytFeaturedLink.classList.add('is-newest');
            }
            if (ytFeaturedThumb) {
                ytFeaturedThumb.src = featured.thumb;
                ytFeaturedThumb.alt = featured.title;
            }
            if (ytFeaturedTitle) ytFeaturedTitle.textContent = featured.title;
            if (ytFeaturedDate) ytFeaturedDate.textContent = ytFormatDate(featured.published, document.documentElement.lang === 'te');
            if (ytFeaturedNew) ytFeaturedNew.hidden = !(hasNewUpload && featured.videoId === newestId);
        }

        if (shorts.length > 1 && ytShortsBlock && ytShortsEl) {
            ytShortsBlock.hidden = false;
            ytShortsEl.innerHTML = shorts.slice(1).map((item, i) =>
                ytCardHTML(item, { isShort: true, isNew: hasNewUpload && i === 0 && item.videoId === newestId })
            ).join('');
        }

        if (videos.length && ytVideosBlock && ytVideosEl) {
            ytVideosBlock.hidden = false;
            ytVideosEl.innerHTML = videos.map((item, i) =>
                ytCardHTML(item, { isShort: false, isNew: hasNewUpload && !shorts.length && i === 0 && item.videoId === newestId })
            ).join('');
        }

        if (ytUpdatedEl) {
            const now = new Date();
            const timeStr = now.toLocaleTimeString(document.documentElement.lang === 'te' ? 'te-IN' : 'en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: 'numeric', minute: '2-digit', hour12: true
            });
            ytUpdatedEl.textContent = ytLabel('videos.updated', 'Updated') + ' · ' + timeStr + ' IST';
        }

        document.querySelectorAll('#youtubeShorts .youtube-card, #youtubeVideos .youtube-card').forEach((el, i) => {
            el.setAttribute('data-reveal', '');
            el.style.transitionDelay = Math.min(i * 40, 320) + 'ms';
            if ('IntersectionObserver' in window) {
                const io = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            io.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
                io.observe(el);
            } else {
                el.classList.add('is-visible');
            }
        });
    }

    async function ytLoadFeedItems(channelId) {
        /* Primary: same-origin JSON (refreshed by GitHub Actions — no CORS issues) */
        try {
            const res = await fetch('youtube-feed.json?ts=' + Date.now(), { cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                if (data.items && data.items.length) return data.items;
            }
        } catch (_) { /* fall through */ }

        /* Fallback: RSS via proxy (often blocked in browsers) */
        const feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + channelId;
        const xml = await ytFetchText(feedUrl);
        return ytParseFeed(xml);
    }

    async function ytRefresh() {
        if (!ytStatusEl) return;
        try {
            ytSetStatus(ytLabel('videos.loading', 'Loading latest videos…'));
            ytStatusEl.hidden = false;
            if (ytFeaturedEl) ytFeaturedEl.hidden = true;
            if (ytShortsBlock) ytShortsBlock.hidden = true;
            if (ytVideosBlock) ytVideosBlock.hidden = true;

            const channelId = await ytResolveChannelId();
            ytUpdateChannelLink(channelId);

            const items = await ytLoadFeedItems(channelId);
            ytRenderFeed(items);
        } catch (err) {
            console.warn('YouTube feed error:', err);
            ytSetStatus(ytLabel('videos.error', 'Could not load videos. Please try again later.'));
            ytStatusEl.hidden = false;
        }
    }

    function ytStartPolling() {
        ytRefresh();
        if (ytRefreshTimer) clearInterval(ytRefreshTimer);
        ytRefreshTimer = setInterval(ytRefresh, YOUTUBE_CONFIG.refreshMinutes * 60 * 1000);
    }

    if (document.getElementById('videos')) {
        ytStartPolling();
        document.querySelectorAll('.lang-switch__btn').forEach((b) =>
            b.addEventListener('click', () => setTimeout(ytRefresh, 0))
        );
    }


    /* =========================================================
       7. ACTIVE NAV TRACKING
       ========================================================= */
    const sections = ['home','about','darshan','dhanurmasam','sevas','festivals','gallery','videos','stotras','donate','contact']
        .map((id) => document.getElementById(id))
        .filter(Boolean);
    const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
    if ('IntersectionObserver' in window && sections.length) {
        const sectIO = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    const id = e.target.id;
                    navLinks.forEach((link) => {
                        const isActive = link.getAttribute('href') === `#${id}`;
                        link.style.color = isActive ? 'var(--c-maroon)' : '';
                        if (link.classList.contains('nav-cta')) link.style.color = '';
                    });
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
        sections.forEach((s) => sectIO.observe(s));
    }
})();
