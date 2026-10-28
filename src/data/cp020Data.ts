import {
  ElemenCP,
  TPItem,
  ATPItem,
  ProtaItem,
  ProsemItem,
  ModulAjar,
  LKPDItem,
  SoalHOTS,
  ProgramRemedialPengayaan,
} from '../types/curriculum';

export const ELEMEN_CP_020_2026: ElemenCP[] = [
  {
    nama: 'Menyimak',
    deskripsi:
      'Peserta didik mampu menganalisis dan mengevaluasi informasi berupa gagasan, pikiran, perasaan, pandangan, arahan atau pesan yang akurat dari berbagai tipe teks (fiksi dan nonfiksi) audio visual dan aural dalam bentuk monolog, dialog, dan gelar wicara. Peserta didik mampu mengeksplorasi dan mengevaluasi berbagai topik aktual yang didengar.',
    kompetensiKunci: [
      'Menganalisis gagasan dan pesan akurat',
      'Mengevaluasi efektivitas paparan lisan/audio',
      'Mengidentifikasi bias atau praduga dalam tuturan',
      'Menyimpulkan isi gelar wicara dan monolog kritis',
    ],
    materiEsensial: [
      'Teks deskripsi lisan & audio monolog',
      'Wawancara & gelar wicara (talk show) edukatif',
      'Akurasi data dalam siaran berita aural/podcast',
      'Unsur intonasi, tempo, dan gestur pembicara',
    ],
  },
  {
    nama: 'Membaca dan Memirsa',
    deskripsi:
      'Peserta didik memahami informasi berupa gagasan, pikiran, pandangan, arahan atau pesan dari berbagai teks misalnya teks deskripsi, narasi, puisi, eksplanasi dan eksposisi dari teks visual dan audiovisual untuk menemukan makna yang tersurat dan tersirat. Peserta didik menginterpretasikan informasi untuk mengungkapkan simpati, kepedulian, empati atau pendapat pro dan kontra dari teks visual dan audiovisual. Peserta didik menggunakan sumber informasi lain untuk menilai akurasi dan kualitas data serta membandingkan informasi pada teks. Peserta didik mampu mengeksplorasi dan mengevaluasi berbagai topik aktual yang dibaca dan dipirsa.',
    kompetensiKunci: [
      'Menemukan makna tersurat dan tersirat (inferensial)',
      'Menginterpretasi pesan empati dan nilai kemanusiaan',
      'Menilai akurasi data & membandingkan multi-teks',
      'Membedakan fakta objektif dengan opini atau hoaks',
    ],
    materiEsensial: [
      'Teks deskripsi objek wisata & kuliner Nusantara',
      'Teks cerita fantasi & novel fiksi remaja',
      'Puisi rakyat (pantun, gurindam, syair) & puisi modern',
      'Infografik data, teks eksplanasi, dan teks prosedur',
    ],
  },
  {
    nama: 'Berbicara dan Mempresentasikan',
    deskripsi:
      'Peserta didik mampu menyampaikan gagasan, pikiran, pandangan, arahan atau pesan untuk tujuan pengajuan usul, pemecahan masalah, dan pemberian solusi secara lisan dalam bentuk monolog dan dialog logis, kritis, dan kreatif. Peserta didik mampu menggunakan dan memaknai kosakata baru yang memiliki makna denotatif, konotatif, dan kiasan untuk berbicara dan menyajikan gagasannya. Peserta didik mampu menggunakan ungkapan sesuai dengan norma kesopanan dalam berkomunikasi. Peserta didik mampu berdiskusi secara aktif, kontributif, efektif, dan santun. Peserta didik mampu menuturkan dan menyajikan ungkapan simpati, empati, peduli, perasaan, dan penghargaan dalam bentuk teks informasional dan fiksi melalui teks multimodal. Peserta didik mampu mengungkapkan dan mempresentasikan berbagai topik aktual secara kritis.',
    kompetensiKunci: [
      'Menyampaikan gagasan solutif dan kritis secara lisan',
      'Menggunakan kosakata denotatif, konotatif, dan majas',
      'Menerapkan etika dan kesantunan berbahasa',
      'Mempresentasikan materi secara multimodal kreatif',
    ],
    materiEsensial: [
      'Praktik berpidato, kultum, dan monolog deskriptif',
      'Diskusi kelompok terarah (FGD) & debat santun',
      'Pelantunan puisi rakyat dan musikalisasi puisi',
      'Presentasi gelar karya visual & digital vlog',
    ],
  },
  {
    nama: 'Menulis',
    deskripsi:
      'Peserta didik mampu menulis gagasan, pikiran, pandangan, arahan atau pesan tertulis untuk berbagai tujuan secara logis, kritis, dan kreatif. Peserta didik juga menuliskan hasil penelitian singkat dengan mengutip sumber rujukan secara etis dan benar. Peserta didik menggunakan kosakata baru yang memiliki makna denotatif, konotatif, dan kiasan. Peserta didik menyampaikan ungkapan rasa simpati, empati, peduli, dan pendapat pro/kontra secara etis dalam teks multimodal. Peserta didik mampu menggunakan kaidah kebahasaan dan ejaan bahasa Indonesia secara cermat. Peserta didik mampu merevisi dan menyunting tulisannya sesuai dengan norma kesopanan dan kaidah kebahasaan.',
    kompetensiKunci: [
      'Menulis teks faktual dan fiksi secara kreatif',
      'Menulis laporan penelitian sederhana dengan etika sitasi',
      'Menerapkan EYD V (Ejaan Yang Disempurnakan) & tata bahasa baku',
      'Melakukan swa-sunting dan sunting rekan sejawat (peer review)',
    ],
    materiEsensial: [
      'Penulisan teks deskripsi berdaya bayang tinggi',
      'Penyusunan teks cerita imajinatif dengan alur runtut',
      'Penulisan teks prosedur panduan hidup sehat/kriya',
      'Penyuntingan mekanik bahasa (tanda baca, kapitalisasi, diksi)',
    ],
  },
];

export const DAFTAR_TP_FASE_D: TPItem[] = [
  {
    id: 'tp-1',
    kodeTP: 'TP 7.1',
    elemen: 'Membaca dan Memirsa',
    rumusanTP:
      'Peserta didik mampu menganalisis struktur dan ciri kebahasaan teks deskripsi (kata konkret, majas personifikasi, serapan panca indra) dari objek wisata dan kebudayaan Nusantara secara kritis.',
    alokasiJP: 6,
    profilPancasila: ['Bernalar Kritis', 'Berkebinekaan Global'],
    materiPokok: 'Struktur dan Unsur Kebahasaan Teks Deskripsi',
    indikatorKetercapaian: [
      'Mengidentifikasi bagian deskripsi umum dan deskripsi bagian.',
      'Menemukan kata serapan panca indra (penglihatan, pendengaran, penciuman).',
      'Menganalisis fungsi majas personifikasi dalam membangun daya bayang pembaca.',
    ],
  },
  {
    id: 'tp-2',
    kodeTP: 'TP 7.2',
    elemen: 'Menyimak',
    rumusanTP:
      'Peserta didik mampu mengevaluasi akurasi informasi dan kesan visual yang disampaikan dalam paparan audio/audiovisual deskripsi lingkungan alam dengan cermat.',
    alokasiJP: 6,
    profilPancasila: ['Mandiri', 'Bernalar Kritis'],
    materiPokok: 'Menyimak Paparan Audio/Vlog Deskripsi Alam',
    indikatorKetercapaian: [
      'Mencatat poin-poin penting deskripsi objek dari tayangan video.',
      'Membandingkan objek yang digambarkan secara lisan dengan data faktual pendukung.',
    ],
  },
  {
    id: 'tp-3',
    kodeTP: 'TP 7.3',
    elemen: 'Menulis',
    rumusanTP:
      'Peserta didik mampu menyusun teks deskripsi tentang kearifan lokal atau destinasi sekitar dengan memanfaatkan ragam majas, kata konkret, dan penerapan EYD V secara kreatif.',
    alokasiJP: 6,
    profilPancasila: ['Kreatif', 'Gotong Royong'],
    materiPokok: 'Keterampilan Menulis Teks Deskripsi Kontekstual',
    indikatorKetercapaian: [
      'Menyusun kerangka tulisan berbasis pengamatan langsung.',
      'Mengembangkan draf menjadi teks utuh yang kaya citraan rungu, visual, dan rasa.',
      'Melakukan penyuntingan kebahasaan bersama rekan sejawat.',
    ],
  },
  {
    id: 'tp-4',
    kodeTP: 'TP 7.4',
    elemen: 'Berbicara dan Mempresentasikan',
    rumusanTP:
      'Peserta didik mampu mempresentasikan objek deskripsi secara lisan dengan teknik intonasi ekspresif, kontak mata, dan media pendukung (multimodal/vlog) di depan kelas.',
    alokasiJP: 4,
    profilPancasila: ['Mandiri', 'Kreatif'],
    materiPokok: 'Presentasi Lisan & Vlog Promosi Wisata/Budaya',
    indikatorKetercapaian: [
      'Menyampaikan pengenalan objek dengan gaya bicara yang santun dan menarik.',
      'Mengintegrasikan infografis/foto sebagai daya dukung presentasi.',
    ],
  },
  {
    id: 'tp-5',
    kodeTP: 'TP 7.5',
    elemen: 'Membaca dan Memirsa',
    rumusanTP:
      'Peserta didik mampu menganalisis unsur intrinsik (alur, tokoh, latar, sudut pandang, amanat) dan tema kemanusiaan dalam teks cerita fantasi kontemporer.',
    alokasiJP: 6,
    profilPancasila: ['Bernalar Kritis', 'Kreatif'],
    materiPokok: 'Unsur Intrinsik Cerita Fantasi',
    indikatorKetercapaian: [
      'Membedakan unsur fantasi total dan fantasi irisan.',
      'Menilai keterikatan hubungan sebab-akibat antarperistiwa pada alur cerita.',
    ],
  },
  {
    id: 'tp-6',
    kodeTP: 'TP 7.6',
    elemen: 'Menulis',
    rumusanTP:
      'Peserta didik mampu memproduksi teks cerita fantasi orisinal yang memuat pesan moral lingkungan hidup dengan menggunakan konjungsi urutan waktu dan dialog ekspresif.',
    alokasiJP: 6,
    profilPancasila: ['Kreatif', 'Berakhlak Mulia'],
    materiPokok: 'Menulis Cerita Fantasi Berkarakter',
    indikatorKetercapaian: [
      'Merancang premis cerita dan konflik fantasi yang logis dalam semesta fiksi.',
      'Menulis dialog yang mencerminkan watak tokoh menggunakan tanda petik yang tepat.',
    ],
  },
  {
    id: 'tp-7',
    kodeTP: 'TP 7.7',
    elemen: 'Membaca dan Memirsa',
    rumusanTP:
      'Peserta didik mampu menelaah struktur, pesan moral, dan rima pada puisi rakyat (pantun, syair, gurindam) sebagai warisan nilai luhur kepribadian bangsa.',
    alokasiJP: 6,
    profilPancasila: ['Berkebinekaan Global', 'Beriman, Bertakwa kepada Tuhan YME'],
    materiPokok: 'Kearifan Lokal Puisi Rakyat (Pantun & Gurindam)',
    indikatorKetercapaian: [
      'Menjelaskan ciri sampiran dan isi pada pantun.',
      'Menganalisis pola rima a-a-a-a, a-b-a-b, dan kaidah syarat baris.',
      'Menghubungkan nasihat dalam gurindam dengan kehidupan nyata di sekolah.',
    ],
  },
  {
    id: 'tp-8',
    kodeTP: 'TP 7.8',
    elemen: 'Menulis & Berbicara',
    rumusanTP:
      'Peserta didik mampu mencipta dan melantunkan pantun serta gurindam bertema persahabatan dan cinta tanah air secara berbalas dengan penuh percaya diri.',
    alokasiJP: 6,
    profilPancasila: ['Kreatif', 'Mandiri'],
    materiPokok: 'Cipta dan Balas Pantun Tradisi',
    indikatorKetercapaian: [
      'Menulis bait pantun dengan memperhatikan rima dan suku kata (8-12 suku kata).',
      'Mendemonstrasikan aksi berbalas pantun secara spontan dan beretika santun.',
    ],
  },
  {
    id: 'tp-9',
    kodeTP: 'TP 7.9',
    elemen: 'Membaca dan Memirsa',
    rumusanTP:
      'Peserta didik mampu membedakan kalimat perintah (imperatif), kalimat saran, dan kalimat larangan dalam teks prosedur serta mengevaluasi kelengkapan panduannya.',
    alokasiJP: 6,
    profilPancasila: ['Bernalar Kritis'],
    materiPokok: 'Kaidah Kebahasaan Teks Prosedur',
    indikatorKetercapaian: [
      'Mengklasifikasikan jenis kalimat perintah, deklaratif, dan interogatif.',
      'Menemukan kata keterangan (adverbia) takaran, alat, dan cara.',
    ],
  },
  {
    id: 'tp-10',
    kodeTP: 'TP 7.10',
    elemen: 'Menulis & Mempresentasikan',
    rumusanTP:
      'Peserta didik mampu merancang teks prosedur berbentuk infografik atau video panduan (tutorial kreasi lokal/makanan sehat) yang mudah dipahami khalayak.',
    alokasiJP: 6,
    profilPancasila: ['Kreatif', 'Gotong Royong'],
    materiPokok: 'Produksi Teks Prosedur Multimodal',
    indikatorKetercapaian: [
      'Menyusun urutan langkah-langkah secara logis dan runtut.',
      'Membuat media visual panduan dengan tata letak yang ramah pengguna.',
    ],
  },
  {
    id: 'tp-11',
    kodeTP: 'TP 7.11',
    elemen: 'Menyimak & Membaca',
    rumusanTP:
      'Peserta didik mampu memilah fakta dan opini serta mendeteksi potensi misinformasi/hoaks dalam teks berita daring dengan prinsip kritis 5W+1H (ADiKSiMBa).',
    alokasiJP: 6,
    profilPancasila: ['Bernalar Kritis', 'Mandiri'],
    materiPokok: 'Literasi Kritis Teks Berita Digital',
    indikatorKetercapaian: [
      'Menganalisis unsur 5W+1H dalam lead dan tubuh berita.',
      'Menemukan perbedaan kalimat fakta dengan kalimat opini penulis.',
      'Melakukan verifikasi sumber data berita melalui rujukan silang (cross-check).',
    ],
  },
  {
    id: 'tp-12',
    kodeTP: 'TP 7.12',
    elemen: 'Menulis',
    rumusanTP:
      'Peserta didik mampu menyusun surat resmi permohonan izin/kerja sama sekolah dan surat pribadi kepada sahabat dengan santun dan format korespondensi baku.',
    alokasiJP: 6,
    profilPancasila: ['Mandiri', 'Berakhlak Mulia'],
    materiPokok: 'Tata Tulis Surat Pribadi dan Surat Dinas/Resmi',
    indikatorKetercapaian: [
      'Membedakan kop surat, nomor, lampiran, perihal, dan penutup pada surat dinas.',
      'Menulis surat dinas untuk kegiatan OSIS dengan bahasa lugas dan efektif.',
    ],
  },
];

export const DAFTAR_ATP_FASE_D: ATPItem[] = [
  {
    no: 1,
    bab: 'Bab 1',
    judulBab: 'Jelajah Keindahan Alam & Budaya Nusantara (Teks Deskripsi)',
    tujuanPembelajaran: [
      'TP 7.1 Menganalisis struktur dan ciri kebahasaan teks deskripsi.',
      'TP 7.2 Mengevaluasi akurasi informasi lisan/audio deskripsi.',
      'TP 7.3 Menyusun teks deskripsi kontekstual kearifan lokal.',
      'TP 7.4 Mempresentasikan teks deskripsi secara multimodal lisan/vlog.',
    ],
    elemenTerkait: ['Membaca & Memirsa', 'Menyimak', 'Menulis', 'Berbicara & Mempresentasikan'],
    alokasiJP: 22,
    semester: 1,
    kataKunci: ['Deskripsi', 'Kata Konkret', 'Majas Personifikasi', 'Citraan Indra', 'Kearifan Lokal'],
    glosarium: [
      { istilah: 'Citraan', arti: 'Gambaran angan yang timbul dalam pikiran pembaca melalui panca indra.' },
      { istilah: 'Majas', arti: 'Gaya bahasa kiasan untuk menciptakan efek estetika dan kedalaman makna.' },
      { istilah: 'Multimodal', arti: 'Penggunaan gabungan teks verbal, visual, audio, dan spasial dalam berkomunikasi.' },
    ],
  },
  {
    no: 2,
    bab: 'Bab 2',
    judulBab: 'Berkelana di Alam Fantasi dan Imajinasi (Teks Cerita Fantasi)',
    tujuanPembelajaran: [
      'TP 7.5 Menganalisis unsur intrinsik dan tema kemanusiaan cerita fantasi.',
      'TP 7.6 Memproduksi teks cerita fantasi orisinal bertema pelestarian lingkungan.',
    ],
    elemenTerkait: ['Membaca & Memirsa', 'Menulis'],
    alokasiJP: 16,
    semester: 1,
    kataKunci: ['Alur', 'Tokoh Karakter', 'Latar Ruang & Waktu', 'Fantasi Total', 'Konflik'],
    glosarium: [
      { istilah: 'Fantasi Irisan', arti: 'Cerita fantasi yang masih menggunakan nama tempat atau peristiwa di dunia nyata.' },
      { istilah: 'Protagonis', arti: 'Tokoh utama yang menjadi penggerak alur dan mengusung nilai kebaikan.' },
    ],
  },
  {
    no: 3,
    bab: 'Bab 3',
    judulBab: 'Menapaki Jejak Kearifan Leluhur lewat Puisi Rakyat (Pantun & Gurindam)',
    tujuanPembelajaran: [
      'TP 7.7 Menelaah struktur, pesan moral, dan rima puisi rakyat.',
      'TP 7.8 Mencipta dan mendemonstrasikan aksi berbalas pantun tradisi.',
    ],
    elemenTerkait: ['Membaca & Memirsa', 'Menulis & Berbicara'],
    alokasiJP: 16,
    semester: 1,
    kataKunci: ['Pantun', 'Gurindam', 'Syair', 'Sampiran & Isi', 'Rima a-b-a-b'],
    glosarium: [
      { istilah: 'Sampiran', arti: 'Dua baris pertama pada pantun yang menyiapkan rima dan irama sebelum isi.' },
      { istilah: 'Gurindam', arti: 'Puisi lama dua baris berima sama (a-a) yang berisi petuah atau nasihat moral.' },
    ],
  },
  {
    no: 4,
    bab: 'Bab 4',
    judulBab: 'Membuka Gerbang Keterampilan Mandiri (Teks Prosedur)',
    tujuanPembelajaran: [
      'TP 7.9 Membedakan kalimat imperatif dan mengevaluasi kelengkapan teks prosedur.',
      'TP 7.10 Merancang panduan prosedur infografis/video tutorial kreasi sehat.',
    ],
    elemenTerkait: ['Membaca & Memirsa', 'Menulis & Mempresentasikan'],
    alokasiJP: 18,
    semester: 2,
    kataKunci: ['Kalimat Imperatif', 'Langkah Berurut', 'Konjungsi Urutan', 'Infografik Panduan'],
    glosarium: [
      { istilah: 'Imperatif', arti: 'Bentuk kalimat yang bersifat memerintah, memberi arahan, atau melarang sesuatu.' },
      { istilah: 'Adverbia', arti: 'Kata keterangan yang menjelaskan cara, alat, waktu, atau kuantitas.' },
    ],
  },
  {
    no: 5,
    bab: 'Bab 5',
    judulBab: 'Menjadi Pembaca Cerdas di Era Informasi Digital (Teks Berita)',
    tujuanPembelajaran: [
      'TP 7.11 Memilah fakta-opini dan mendeteksi hoaks dengan formula ADiKSiMBa.',
    ],
    elemenTerkait: ['Menyimak', 'Membaca & Memirsa'],
    alokasiJP: 18,
    semester: 2,
    kataKunci: ['ADiKSiMBa (5W+1H)', 'Fakta vs Opini', 'Kredibilitas Sumber', 'Verifikasi'],
    glosarium: [
      { istilah: 'ADiKSiMBa', arti: 'Akronim Indonesia untuk Apa, Di mana, Kapan, Siapa, Mengapa, dan Bagaimana.' },
      { istilah: 'Lead Berita', arti: 'Paragraf pembuka berita yang memuat ringkasan fakta terpenting.' },
    ],
  },
  {
    no: 6,
    bab: 'Bab 6',
    judulBab: 'Menyampaikan Aspirasi dan Silaturahmi (Surat Pribadi & Surat Dinas)',
    tujuanPembelajaran: [
      'TP 7.12 Menyusun surat dinas resmi kegiatan sekolah dan surat pribadi santun.',
    ],
    elemenTerkait: ['Menulis'],
    alokasiJP: 18,
    semester: 2,
    kataKunci: ['Surat Dinas', 'Surat Pribadi', 'Kop Surat', 'Tata Etika Korespondensi'],
    glosarium: [
      { istilah: 'Kop Surat', arti: 'Kepala surat yang memuat identitas resmi institusi, alamat, dan kontak organisasi.' },
      { istilah: 'Register Bahasa', arti: 'Variasi bahasa yang digunakan berdasarkan konteks sosial resmi atau akrab.' },
    ],
  },
];

export const PROTA_DATA: ProtaItem[] = [
  // Semester 1 (Total: 54 JP)
  {
    no: 1,
    bab: 'Bab 1',
    judulMateri: 'Teks Deskripsi: Menjelajah Keindahan Alam & Budaya Nusantara',
    tujuanPembelajaranRingkas: 'Menganalisis, menyimak, menulis, dan mempresentasikan teks deskripsi berdaya bayang tinggi.',
    alokasiJP: 22,
    semester: 1,
    keterangan: 'Tatap muka terpadu + Proyek Mini Deskripsi Budaya',
  },
  {
    no: 2,
    bab: 'Bab 2',
    judulMateri: 'Teks Cerita Fantasi: Berkelana di Alam Imajinasi',
    tujuanPembelajaranRingkas: 'Menganalisis unsur fiksi dan memproduksi cerita fantasi penyelamatan lingkungan.',
    alokasiJP: 16,
    semester: 1,
    keterangan: 'Penerapan Model Discovery Learning & Creative Writing',
  },
  {
    no: 3,
    bab: 'Bab 3',
    judulMateri: 'Puisi Rakyat: Menapaki Jejak Kearifan Leluhur (Pantun & Gurindam)',
    tujuanPembelajaranRingkas: 'Menelaah rima dan nilai moral serta mencipta dan melantunkan balasan pantun.',
    alokasiJP: 16,
    semester: 1,
    keterangan: 'Culturally Responsive Teaching (CRT) tradisi pantun',
  },
  // Semester 2 (Total: 54 JP)
  {
    no: 4,
    bab: 'Bab 4',
    judulMateri: 'Teks Prosedur: Membuka Gerbang Keterampilan Mandiri',
    tujuanPembelajaranRingkas: 'Menelaah kalimat imperatif dan menyusun infografis panduan hidup sehat/kriya lokal.',
    alokasiJP: 18,
    semester: 2,
    keterangan: 'Project-Based Learning (PjBL) infografis digital/manual',
  },
  {
    no: 5,
    bab: 'Bab 5',
    judulMateri: 'Teks Berita: Membuka Cakrawala Dunia Digital',
    tujuanPembelajaranRingkas: 'Membedakan fakta-opini dan menyaring misinformasi dengan prinsip ADiKSiMBa.',
    alokasiJP: 18,
    semester: 2,
    keterangan: 'Literasi Kritis Media & Analisis Multi-Sumber',
  },
  {
    no: 6,
    bab: 'Bab 6',
    judulMateri: 'Surat Pribadi dan Surat Dinas: Menyampaikan Aspirasi Santun',
    tujuanPembelajaranRingkas: 'Menyusun surat dinas kegiatan kesiswaan dan surat pribadi penuh kehangatan.',
    alokasiJP: 18,
    semester: 2,
    keterangan: 'Simulasi Korespondensi Organisasi Sekolah',
  },
];

export const PROSEM_SEMESTER_1: ProsemItem[] = [
  {
    no: 1,
    tujuanPembelajaran: '7.1 & 7.2 Analisis Struktur, Ciri Kebahasaan, dan Simakan Teks Deskripsi',
    materiPokok: 'Pengertian teks deskripsi, identifikasi serapan indra & majas personifikasi',
    alokasiJP: 12,
    distribusiMinggu: {
      'Juli-3': 4,
      'Juli-4': 4,
      'Agustus-1': 4,
    },
  },
  {
    no: 2,
    tujuanPembelajaran: '7.3 & 7.4 Keterampilan Menulis Teks Deskripsi & Gelar Presentasi/Vlog',
    materiPokok: 'Kerangka penulisan, swasunting EYD V, dan presentasi ekspresif objek wisata',
    alokasiJP: 10,
    distribusiMinggu: {
      'Agustus-2': 4,
      'Agustus-3': 4,
      'Agustus-4': 2,
    },
  },
  {
    no: 3,
    tujuanPembelajaran: '7.5 Menelaah Unsur Intrinsik Cerita Fantasi & Karakter Tokoh',
    materiPokok: 'Alur maju-mundur, latar fantasi lintas waktu, dan pesan moral kemanusiaan',
    alokasiJP: 8,
    distribusiMinggu: {
      'September-1': 4,
      'September-2': 4,
    },
  },
  {
    no: 4,
    tujuanPembelajaran: '7.6 Menulis Cerita Fantasi Orisinal Berwawasan Lingkungan Hidup',
    materiPokok: 'Merancang semesta imajinasi, penulisan dialog bertanda petik, dan finalisasi cerpen',
    alokasiJP: 8,
    distribusiMinggu: {
      'September-3': 4,
      'September-4': 4,
    },
  },
  {
    no: 5,
    tujuanPembelajaran: 'Asesmen Sumatif Tengah Semester (STS) & Refleksi Belajar',
    materiPokok: 'Evaluasi Capaian Bab 1 & Bab 2',
    alokasiJP: 4,
    distribusiMinggu: {
      'Oktober-1': 4,
    },
  },
  {
    no: 6,
    tujuanPembelajaran: '7.7 Menelaah Struktur, Makna, dan Nilai Luhur Puisi Rakyat',
    materiPokok: 'Ciri pantun, syair, gurindam, kaidah rima, serta petuah kebajikan',
    alokasiJP: 8,
    distribusiMinggu: {
      'Oktober-2': 4,
      'Oktober-3': 4,
    },
  },
  {
    no: 7,
    tujuanPembelajaran: '7.8 Cipta dan Berbalas Pantun Tradisi Nusantara',
    materiPokok: 'Penyusunan sampiran & isi bermakna serta unjuk kebolehan berbalas pantun',
    alokasiJP: 8,
    distribusiMinggu: {
      'November-1': 4,
      'November-2': 4,
    },
  },
  {
    no: 8,
    tujuanPembelajaran: 'Asesmen Sumatif Akhir Semester (SAS) & Pengolahan Rapor',
    materiPokok: 'Evaluasi Pembelajaran Semester 1 & Remedial/Pengayaan',
    alokasiJP: 8,
    distribusiMinggu: {
      'November-4': 4,
      'Desember-1': 4,
    },
  },
];

export const PROSEM_SEMESTER_2: ProsemItem[] = [
  {
    no: 1,
    tujuanPembelajaran: '7.9 Menelaah Kaidah Kebahasaan & Kalimat Imperatif Teks Prosedur',
    materiPokok: 'Ciri teks prosedur, kata kerja imperatif, kalimat saran, dan adverbia',
    alokasiJP: 8,
    distribusiMinggu: {
      'Januari-2': 4,
      'Januari-3': 4,
    },
  },
  {
    no: 2,
    tujuanPembelajaran: '7.10 Merancang Panduan Prosedur Infografis & Kreasi Multimodal',
    materiPokok: 'Pembuatan panduan langkah sistematis dan infografik resep/kerajinan lokal',
    alokasiJP: 10,
    distribusiMinggu: {
      'Januari-4': 4,
      'Februari-1': 4,
      'Februari-2': 2,
    },
  },
  {
    no: 3,
    tujuanPembelajaran: '7.11 Membedakan Fakta-Opini & Literasi Kritis Teks Berita ADiKSiMBa',
    materiPokok: 'Unsur 5W+1H, membedakan fakta objektif dengan opini opini dan teknik cek fakta',
    alokasiJP: 12,
    distribusiMinggu: {
      'Februari-3': 4,
      'Februari-4': 4,
      'Maret-1': 4,
    },
  },
  {
    no: 4,
    tujuanPembelajaran: 'Asesmen Sumatif Tengah Semester (STS) Genap',
    materiPokok: 'Evaluasi Capaian Bab 4 & Bab 5',
    alokasiJP: 4,
    distribusiMinggu: {
      'Maret-2': 4,
    },
  },
  {
    no: 5,
    tujuanPembelajaran: '7.12 Menulis Surat Pribadi & Surat Dinas dengan Kaidah Baku',
    materiPokok: 'Struktur surat resmi, pemakaian kop/perihal, dan bahasa santun korespondensi',
    alokasiJP: 14,
    distribusiMinggu: {
      'April-2': 4,
      'April-3': 4,
      'April-4': 4,
      'Mei-1': 2,
    },
  },
  {
    no: 6,
    tujuanPembelajaran: 'Asesmen Sumatif Akhir Tahun (SAT) & Pameran Portofolio Literasi',
    materiPokok: 'Evaluasi Ketercapaian TP Tahunan & Pameran Karya Tulis Siswa',
    alokasiJP: 6,
    distribusiMinggu: {
      'Mei-3': 4,
      'Mei-4': 2,
    },
  },
];

export const MODUL_AJAR_LENGKAP: ModulAjar = {
  id: 'modul-bab-1-deskripsi',
  bab: 'Bab 1',
  judul: 'Menjelajahi Keindahan Alam & Budaya Nusantara (Teks Deskripsi)',
  alokasiWaktu: '6 JP (3 Pertemuan x 2 JP @ 40 Menit)',
  faseKelas: 'Fase D / Kelas VII (Tujuh)',
  targetPesertaDidik: 'Peserta didik reguler/tipikal, peserta didik dengan kesulitan belajar (scaffolding visual), dan peserta didik pencapaian tinggi (critical enrichment). Total 32 siswa.',
  modelPembelajaran: 'Problem-Based Learning (PBL) dipadukan dengan Culturally Responsive Teaching (CRT) dan Pendekatan Deep Learning (Meaningful, Mindful, Joyful).',
  metodePembelajaran: 'Observasi objek langsung, diskusi kelompok terarah (think-pair-share), bedah teks multimodal, dan lokakarya swasunting.',
  sarpras: [
    'Laptop/LCD Proyektor untuk penayangan video 4K keindahan alam nusantara',
    'Kumpulan contoh teks deskripsi autentik dari brosur wisata dan novel sastra',
    'Lembar Kerja Peserta Didik (LKPD) berjenjang berdiferensiasi',
    'Sticky notes refleksi warna-warni dan Kamus Besar Bahasa Indonesia (KBBI daring)',
  ],
  dimensiProfilPancasila: [
    {
      dimensi: 'Bernalar Kritis',
      elemen: 'Memperoleh dan memproses informasi dan gagasan',
      deskripsi: 'Mengidentifikasi, mengklarifikasi, dan menganalisis informasi penting serta membedakan rincian sensorik konkret dalam teks deskripsi.',
    },
    {
      dimensi: 'Berkebinekaan Global',
      elemen: 'Mengenal dan menghargai budaya',
      deskripsi: 'Mengeksplorasi kekayaan alam, arsitektur adat, dan tradisi lokal daerah sebagai wujud kebanggaan terhadap identitas keindonesiaan.',
    },
    {
      dimensi: 'Kreatif',
      elemen: 'Menghasilkan gagasan dan karya yang orisinal',
      deskripsi: 'Mengembangkan gagasan tulisan yang memadukan majas personifikasi dan daya khayal inderawi yang memikat pembaca.',
    },
  ],
  tujuanPembelajaran: [
    'Peserta didik mampu menganalisis struktur teks deskripsi (identifikasi/deskripsi umum dan deskripsi bagian) serta ciri kebahasaan (kata konkret, majas personifikasi, kalimat berdaya pencerapan indra) secara teliti.',
    'Peserta didik mampu menemukan makna tersurat dan tersirat dalam paparan teks deskripsi multimodal bertema kearifan lokal nusantara.',
    'Peserta didik mampu menulis draf teks deskripsi mengenai kekayaan alam/lingkungan sekitar sekolah dengan menerapkan ejaan bahasa Indonesia yang disempurnakan (EYD V) secara santun dan kreatif.',
  ],
  pemahamanBermakna: [
    'Bahasa adalah kuas pelukis dunia: dengan pilihan kata yang tepat dan kaya rincian indra, kita dapat membuat pembaca seolah-olah melihat, mendengar, dan merasakan langsung keindahan tempat yang belum pernah mereka kunjungi.',
    'Mendeskripsikan kearifan lokal menumbuhkan rasa syukur kepada Tuhan YME serta memperkokoh rasa cinta tanah air dan komitmen pelestarian warisan budaya.',
  ],
  pertanyaanPemantik: [
    'Pernahkah kalian membaca sebuah brosur atau artikel wisata yang membuat kalian seketika ingin sekali langsung terbang ke tempat tersebut? Apa rahasia kalimat di dalamnya?',
    'Bagaimana perbedaan rasa saat seseorang berkata "Pantai itu sangat indah" dibandingkan dengan "Pasir putih selembut tepung memeluk hangat telapak kaki, diselingi deburan ombak berkejaran yang membisikkan kedamaian"?',
    'Jika kalian diminta memperkenalkan salah satu keindahan atau kuliner khas kota kalian kepada sahabat di belahan dunia lain, detail unik apa yang pertama kali kalian ceritakan?',
  ],
  pendekatanDeepLearning: {
    meaningful:
      'Pembelajaran bermakna (Meaningful Learning): Siswa mengaitkan objek deskripsi dengan memori emosional pribadi dan kebanggaan lingkungan lokal tempat tinggalnya, bukan sekadar menghafal rumus definisi struktur.',
    mindful:
      'Pembelajaran berkesadaran penuh (Mindful Learning): Siswa diajak melakukan latihan hening kesadaran indrawi (sensory mindfulness) selama 2 menit, memejamkan mata, memusatkan pendengaran pada suara sekitar, dan merasakan suhu udara sebelum menuangkannya ke dalam diksi konkret.',
    joyful:
      'Pembelajaran yang menyenangkan (Joyful Learning): Menggunakan gim tebak misteri deskripsi ("Blind Description Challenge"), papan pameran galeri berjalan (gallery walk), serta apresiasi bintang apresiasi antarteman.',
  },
  culturallyResponsiveTeaching:
    'Mengangkat narasi budaya lokal (seperti keindahan Candi Prambanan/Borobudur, Tari Tor-Tor, Rammang-Rammang Maros, atau tradisi Rumah Gadang) sebagai teks acuan, serta mendorong siswa mendeskripsikan kuliner atau sudut unik warisan budaya di kampung halaman mereka masing-masing.',
  kegiatanAwal: {
    waktu: '15 Menit',
    aktivitas: [
      'Guru membuka pembelajaran dengan salam hangat, doa bersama, dan presensi ramah.',
      'Apersepsi Sensory Mindful: Guru memutar klip audio suara deburan ombak diiringi kicauan burung camar dan desau angin cemara (1 menit). Guru meminta siswa menutup mata dan menyebutkan apa yang terlintas dalam benak mereka.',
      'Penyampaian tujuan pembelajaran, gambaran alur tantangan belajar hari ini, serta kesepakatan kelas yang suportif.',
      'Asesmen Diagnostik Awal: Permainan cepat 3 menit menentukan apakah sebuah kalimat menggunakan panca indra penglihatan, pendengaran, atau perabaan via kartu jempol/papan mini.',
    ],
  },
  kegiatanInti: [
    {
      faseSintaks: 'Fase 1: Orientasi Siswa pada Masalah Nyata (PBL)',
      aktivitasGuru: [
        'Menampilkan tayangan 2 pamflet promosi wisata: Pamflet A (hanya berisi kalimat datar "Tempat ini bagus sekali dan ramai") versus Pamflet B (teks deskripsi kaya daya bayang, aroma rempah, dan lanskap tebing zamrud).',
        'Mengajukan pertanyaan pemantik: "Mengapa Pamflet B berhasil menghipnotis ratusan ribu wisatawan datang sedangkan Pamflet A diabaikan pengunjung?"',
      ],
      aktivitasSiswa: [
        'Siswa membandingkan kedua teks secara kritis dan menyampaikan argumentasi tentang kekuatan kata konkret dan majas.',
        'Siswa merumuskan hipotesis tentang unsur-unsur pembangun teks deskripsi yang memikat.',
      ],
      diferensiasi: {
        konten:
          'Disediakan teks bergambar penuh warna untuk kelompok visual/scaffolding, rekaman suara narasi puitis untuk auditori, dan objek fisik nyata (daun herbal/rempah wangi) untuk kinestetik.',
        proses:
          'Guru memberikan panduan pertanyaan bertingkat (guiding questions) untuk kelompok yang masih kesulitan menemukan ide pokok.',
        produk:
          'Siswa dapat menyajikan catatan analisis dalam bentuk peta konsep, tabel perbandingan, atau rekaman audio pendek.',
      },
    },
    {
      faseSintaks: 'Fase 2: Mengorganisasi Siswa untuk Belajar & Eksplorasi Terbimbing',
      aktivitasGuru: [
        'Membagi siswa ke dalam kelompok heterogen 4-5 orang sesuai hasil pemetaan asesmen diagnostik.',
        'Membagikan LKPD Berdiferensiasi: Kelompok A (dilengkapi bank kata sensorik dan kerangka rumpang), Kelompok B (analisis teks komparasi mandiri), Kelompok C (menemukan bias deskriptif dan majas langka).',
        'Memfasilitasi diskusi dengan teknik scaffolding berkala.',
      ],
      aktivitasSiswa: [
        'Siswa berdiskusi aktif membedah teks deskripsi "Pesona Karst Rammang-Rammang: Labirin Hijau Zamrud Sulawesi".',
        'Siswa memetakan bagian teks: Judul, Deskripsi Umum/Identifikasi, Deskripsi Bagian (tebing batu, aliran sungai Pute, gua prasejarah), dan Simpulan/Kesan Emosional.',
      ],
      diferensiasi: {
        konten: 'Teks bacaan yang sama namun dengan tingkat penandaan warna (color-coded clues) pada kelompok bimbingan.',
        proses: 'Kelompok mandiri dan mahir bekerja dengan peer-coaching tanpa intervensi langsung guru yang berlebihan.',
        produk: 'Format isian LKPD disesuaikan: ada yang centang ceklis analisis, tabel uraian, atau infografik.',
      },
    },
    {
      faseSintaks: 'Fase 3: Membimbing Penyelidikan Mandiri & Kelompok',
      aktivitasGuru: [
        'Berkeliling ke setiap kelompok, mengamati dinamika kolaborasi, mencatat kemajuan asesmen formatif dengan lembar observasi bernalar kritis.',
        'Memberikan umpan balik langsung (scaffolding) pada kelompok A yang masih bingung membedakan personifikasi dengan metafora.',
      ],
      aktivitasSiswa: [
        'Siswa memilih satu objek kearifan lokal di sekitar sekolah (taman herbal sekolah, pojok baca, pohon beringin tua, atau warung soto tradisional dekat sekolah).',
        'Siswa melakukan pengamatan 5 menit dengan mencatat sensasi rasa, bau, suara, dan penampakan visual.',
      ],
      diferensiasi: {
        konten: 'Objek observasi disesuaikan dengan minat siswa (alam, bangunan arsitektur, atau kuliner nusantara).',
        proses: 'Siswa diperbolehkan merekam suara orat-oret deskripsi sebelum menuangkannya ke draf tulisan.',
        produk: 'Draf tulisan berjenjang: minimal 2 paragraf untuk kelompok dasar, 3-4 paragraf kaya majas untuk kelompok mahir.',
      },
    },
    {
      faseSintaks: 'Fase 4: Mengembangkan dan Menyajikan Hasil Karya (Showcase)',
      aktivitasGuru: [
        'Mengatur pameran mini karya ("Galeri Berjalan / Gallery Walk").',
        'Memandu format penilaian rekan sejawat dengan rubrik sederhana tanda bintang dan catatan apresiasi (Two Stars and a Wish).',
      ],
      aktivitasSiswa: [
        'Setiap kelompok menempelkan draf teks deskripsi mereka di dinding kelas.',
        'Siswa berkeliling mengamati karya kelompok lain, membaca dengan cermat, dan menempelkan catatan apresiasi yang membangun.',
        'Perwakilan 1 kelompok menampilkan pembacaan deskripsi lisan berdaya bayang di depan kelas.',
      ],
      diferensiasi: {
        konten: 'Beragam sudut pandang objek budaya lokal yang ditampilkan antarkelompok.',
        proses: 'Siswa dapat memilih membaca lisan secara monolog atau dialog duet bersahut-sahutan.',
        produk: 'Pajangan dinding dilengkapi foto atau sketsa ilustrasi tangan buatan siswa sendiri.',
      },
    },
    {
      faseSintaks: 'Fase 5: Menganalisis & Mengevaluasi Proses Pemecahan Masalah',
      aktivitasGuru: [
        'Memberikan penguatan konsep terkait kekuatan kata konkret, fungsi majas personifikasi, dan pentingnya ketelitian EYD V.',
        'Memberikan apresiasi spesifik atas kerja sama dan kemajuan berpikir kritis seluruh peserta didik.',
      ],
      aktivitasSiswa: [
        'Siswa merevisi teks deskripsi masing-masing berdasarkan masukan "Two Stars and a Wish" dari rekan sejawat.',
        'Siswa menyimpulkan kaidah utama penulisan teks deskripsi yang memikat.',
      ],
      diferensiasi: {
        konten: 'Umpan balik personal disesuaikan dengan target peningkatan masing-masing siswa.',
        proses: 'Revisi terpandu dengan kartu panduan swasunting ejaan mandiri.',
        produk: 'Naskah final siap dikumpulkan ke portofolio literasi kelas.',
      },
    },
  ],
  kegiatanPenutup: {
    waktu: '15 Menit',
    aktivitas: [
      'Refleksi Metakognitif 3-2-1: Siswa menuliskan pada lembar sticky notes: 3 hal baru yang dipahami hari ini, 2 hal yang paling dinikmati saat berdiskusi, dan 1 pertanyaan yang masih ingin dieksplorasi.',
      'Guru bersama peserta didik menyimpulkan intisari pembelajaran dan menghubungkannya dengan nilai syukur atas keindahan ciptaan Tuhan.',
      'Penyampaian rencana tindak lanjut pertemuan berikutnya: teknik perekaman monolog/vlog deskripsi wisata.',
      'Doa penutup dan salam perpisahan penuh energi positif.',
    ],
  },
  asesmenDiagnostik: {
    kognitif: [
      'Kuis kilat 3 butir: Manakah di antara kalimat berikut yang melibatkan citraan pendengaran?',
      'Menyebutkan 2 contoh majas personifikasi yang pernah didengar dalam lagu atau percakapan sehari-hari.',
    ],
    nonKognitif: [
      'Bagaimana perasaan kalian saat diminta menulis teks bahasa Indonesia hari ini? (Emotikon: Senang / Ragu / Cemas)',
      'Gaya belajar mana yang paling kamu sukai: melihat gambar/video, mendengarkan dongeng/penjelasan, atau praktik memegang benda langsung?',
    ],
  },
  asesmenFormatif: {
    teknik: 'Observasi kinerja diskusi kelompok, unjuk kerja LKPD, dan penilaian antar-teman (Peer Assessment).',
    instrumen: 'Lembar observasi profil bernalar kritis, rubrik analitik struktur teks deskripsi, dan catatan anekdot guru.',
    rubrik: [
      {
        aspek: 'Struktur Teks (Identifikasi & Deskripsi Bagian)',
        mahir: 'Struktur teks sangat lengkap, runtut, perincian objek logis dan sangat memukau.',
        cakap: 'Struktur teks lengkap, memuat bagian umum dan bagian khusus dengan jelas.',
        layak: 'Bagian teks belum sepenuhnya lengkap, pemisahan antarbagian masih rancu.',
        berkembang: 'Hanya menuliskan satu bagian tanpa struktur deskripsi yang jelas.',
      },
      {
        aspek: 'Pilihan Kata Konkret & Citraan Indra',
        mahir: 'Menggunakan variasi kata konkret yang kaya, memadukan minimal 3 citraan panca indra secara harmonis.',
        cakap: 'Menggunakan kata konkret yang tepat dengan memadukan 2 citraan indra.',
        layak: 'Kata konkret terbatas, citraan indra yang digunakan masih dominan satu jenis saja.',
        berkembang: 'Pilihan kata masih sangat umum dan belum memunculkan daya serap panca indra.',
      },
      {
        aspek: 'Penerapan Majas Personifikasi',
        mahir: 'Majas personifikasi sangat orisinal, kontekstual, dan menghidupkan suasana objek tulisan.',
        cakap: 'Majas personifikasi tepat dan sesuai konteks objek yang dideskripsikan.',
        layak: 'Majas personifikasi terkesan dipaksakan dan kurang menyatu dengan alur kalimat.',
        berkembang: 'Belum mampu memunculkan majas personifikasi dalam draf tulisan.',
      },
      {
        aspek: 'Mekanik Kebahasaan & EYD V',
        mahir: 'Nir-kesalahan tanda baca, huruf kapital, dan konjungsi; kalimat efektif dan mengalir.',
        cakap: 'Terdapat 1-2 kesalahan kecil huruf kapital/tanda baca yang tidak mengganggu pemahaman isi.',
        layak: 'Terdapat beberapa kesalahan tanda baca dan penggunaan kata depan yang keliru.',
        berkembang: 'Banyak kesalahan ejaan mendasar sehingga makna kalimat sulit dipahami.',
      },
    ],
  },
  asesmenSumatif: {
    teknik: 'Tes Tertulis HOTS (Pilihan Ganda Kompleks & Uraian Analisis) serta Penilaian Produk Portofolio Teks Deskripsi.',
    deskripsi: 'Evaluasi ketercapaian TP 7.1 hingga TP 7.4 pada akhir lingkup materi Bab 1.',
    kktp: [
      {
        interval: '86 - 100 %',
        kriteria: 'Sangat Mahir',
        intervensi: 'Diberikan tantangan pengayaan menulis esai kritik deskriptif atau memproduksi vlog promosi pariwisata daerah.',
      },
      {
        interval: '71 - 85 %',
        kriteria: 'Cakap / Tuntas',
        intervensi: 'Mencapai tujuan pembelajaran secara optimal; melanjutkan ke materi bab berikutnya dengan tantangan mandiri.',
      },
      {
        interval: '56 - 70 %',
        kriteria: 'Layak / Cukup Tuntas',
        intervensi: 'Diberikan bimbingan terfokus pada pengayaan kata berdaya pencerapan indra dan latihan swasunting tanda baca.',
      },
      {
        interval: '0 - 55 %',
        kriteria: 'Perlu Bimbingan Khusus',
        intervensi: 'Pendampingan individual oleh guru melalui pembedahan contoh kalimat rumpang dan bantuan tutor sebaya.',
      },
    ],
  },
  refleksiGuru: [
    'Apakah alokasi waktu 6 JP cukup bagi seluruh kelompok untuk mengeksplorasi objek nyata dan melakukan swasunting karya?',
    'Bagian sintaks PBL mana yang paling menantang bagi siswa berkebutuhan bimbingan khusus (Kelompok A)?',
    'Apakah integrasi audio mindfulness di awal pembelajaran berhasil menenangkan dan memfokuskan atensi siswa?',
    'Strategi diferensiasi apa yang perlu ditingkatkan untuk pertemuan berikutnya?',
  ],
  refleksiSiswa: [
    'Apa pengalaman paling mengasyikkan yang kamu rasakan saat berusaha mendeskripsikan sebuah benda bersama teman?',
    'Kalimat manakah dalam karanganmu yang menurutmu paling indah dan berhasil membuat orang lain membayangkannya?',
    'Kesulitan apa yang masih kamu hadapi saat membedakan penulisan kata depan "di" (tempat) dengan awalan "di-"?',
  ],
};

export const LKPD_BAB_1: LKPDItem = {
  id: 'lkpd-bab-1-teks-deskripsi',
  bab: 'Bab 1',
  judulLKPD: 'LEMBAR KERJA PESERTA DIDIK (LKPD) BERDIFERENSIASI: MENYELAMI KEINDAHAN ALAM NUSANTARA',
  tujuanKegiatan:
    'Peserta didik mampu menganalisis struktur dan ciri kebahasaan (kata konkret, majas personifikasi, dan serapan indra) dalam teks deskripsi multimodal serta menghasilkan tulisan deskriptif yang memikat.',
  petunjukUmum: [
    'Bacalah teks stimulus "Pesona Karst Rammang-Rammang: Zamrud Tersembunyi di Tanah Maros" dengan saksama.',
    'Pilihlah lembar tugas sesuai dengan kelompok belajarmu (Kelompok A, B, atau C) yang telah disepakati bersama Guru.',
    'Diskusikan setiap pertanyaan dengan bergotong royong, saling menghargai pendapat rekan sekelompok.',
    'Gunakan Kamus Besar Bahasa Indonesia (KBBI) untuk memastikan makna kosakata baru yang kamu temukan.',
  ],
  teksStimulus: {
    judul: 'Pesona Karst Rammang-Rammang: Zamrud Tersembunyi di Tanah Maros',
    sumber: 'Dokumentasi Ekspedisi Geopark Maros-Pangkep & Adaptasi Modul Literasi Nusantara',
    isi: `Pagi masih menyisakan hawa dingin ketika perahu jolloro bermesin tempel yang kami tumpangi mulai membelah permukaan Sungai Pute. Air sungai itu begitu tenang, menyerupai cermin kaca raksasa yang memantulkan rona perbukitan kapur menjulang di kanan-kirinya. Di kejauhan, kabut putih tipis merayap perlahan, membelai mesra puncak-puncak karst yang kokoh berdiri sejak jutaan tahun silam bak benteng raksasa penjaga kedamaian alam.

Rammang-Rammang, yang dalam bahasa Bugis-Makassar bermakna "sekumpulan awan atau kabut", menyuguhkan pemandangan bentang alam karst terbesar kedua di dunia setelah Tsingy di Madagaskar. Begitu perahu merapat ke dermaga Kampung Berua, aroma lumpur basah bercampur segarnya wangi daun pandan liar langsung menyapa rongga dada. Hamparan sawah hijau membentang luas di tengah kepungan tebing batu kelabu kehitaman. Suara gemericik air jernih yang merembes dari sela batuan stalaktit bersahut-sahutan dengan kepakan sayap burung pipit yang berterbangan di antara pucuk pohon nipah.

Dinding-dinding tebing karst ini bukan sekadar batu bisu. Pada beberapa dinding gua prasejarah, tersimpan jejak cap telapak tangan manusia purba berwarna merah kecokelatan serta lukisan babi rusa yang seakan bercerita tentang peradaban masa lampau. Sungguh, melangkahkan kaki di Rammang-Rammang laksana menembus lorong waktu ke sebuah negeri dongeng yang tak lekang oleh zaman.`,
  },
  diferensiasiTingkat: [
    {
      level: 'Kelompok A (Scaffolding / Dasar)',
      deskripsi: 'Diperuntukkan bagi peserta didik yang membutuhkan panduan bertahap dengan bantuan penanda kata dan kalimat rumpang.',
      tugas: [
        'Tuliskan kembali 3 kata dalam teks yang melibatkan panca indra penglihatan (contoh: cermin kaca raksasa, ...)',
        'Tuliskan kembali 2 kata yang melibatkan panca indra pendengaran atau penciuman!',
        'Lengkapilah kalimat rumpang berikut dengan kata dari teks: "Kabut putih tipis merayap perlahan, membelai mesra puncak-puncak karst... Kalimat ini menggunakan majas ______ karena kabut diibaratkan memiliki sifat seperti manusia."',
        'Sebutkan 2 objek utama yang dijelaskan pada bagian deskripsi bagian Kampung Berua!',
      ],
    },
    {
      level: 'Kelompok B (Reguler / Mandiri)',
      deskripsi: 'Diperuntukkan bagi peserta didik yang telah menguasai konsep dasar dan siap menganalisis struktur serta kebahasaan secara utuh.',
      tugas: [
        'Petakanlah struktur teks di atas ke dalam tabel yang memuat: (a) Deskripsi Umum/Identifikasi, (b) Deskripsi Bagian, dan (c) Kesimpulan/Kesan Umum!',
        'Analisis 3 majas personifikasi yang terdapat pada teks dan jelaskan bagaimana majas tersebut membuat pembaca seolah melihat atau merasakan suasana!',
        'Tunjukkan bukti kutipan kalimat yang membuktikan bahwa Sungai Pute memiliki air yang sangat tenang dan jernih!',
        'Susunlah 1 paragraf lanjutan (4-5 kalimat) yang mendeskripsikan aktivitas warga Kampung Berua saat menyambut tamu perahu wisatawan dengan memanfaatkan serapan panca indra!',
      ],
    },
    {
      level: 'Kelompok C (Pengayaan / HOTS Kritis)',
      deskripsi: 'Diperuntukkan bagi peserta didik berpencapaian tinggi untuk menganalisis efektivitas gaya bahasa, bias sudut pandang, dan sintesis karya inovatif.',
      tugas: [
        'Evaluasilah pemilihan diksi (pilihan kata) penulis pada paragraf kedua dan ketiga. Bagaimana penulis berhasil memadukan fakta geologis dunia (karst terbesar kedua) dengan narasi puitis tanpa membuat pembaca merasa jenuh?',
        'Bandingkan efek emosional yang ditimbulkan oleh kalimat "Dinding tebing karst ini bukan sekadar batu bisu..." dengan kalimat informatif biasa "Dinding karst memiliki lukisan purba". Nilai kekuatan daya persuasi dan imajinasinya!',
        'Rancanglah sebuah teks narasi promosi multimodal (naskah video berdurasi 60 detik) untuk kampanye pelestarian Rammang-Rammang dari ancaman penambangan semen, dengan mempertahankan keindahan gaya deskripsi pencerapan panca indra!',
      ],
    },
  ],
  rubrikPenilaianLKPD: [
    {
      kriteria: 'Kemampuan Mengidentifikasi Panca Indra',
      skor4: 'Mampu menemukan dan menjelaskan >4 citraan indra berbeda dengan tepat dan mendalam.',
      skor3: 'Mampu menemukan 3 citraan indra dengan tepat.',
      skor2: 'Menemukan 1-2 citraan indra namun belum memberikan penjelasan yang relevan.',
      skor1: 'Belum mampu membedakan panca indra dalam teks.',
    },
    {
      kriteria: 'Analisis Struktur Teks',
      skor4: 'Pembagian identifikasi, deskripsi bagian, dan penutup dianalisis dengan sangat tepat beserta argumentasi rujukan paragraf.',
      skor3: 'Pembagian struktur tepat namun argumentasi masih ringkas.',
      skor2: 'Terdapat kesalahan penempatan bagian struktur.',
      skor1: 'Tidak menyajikan struktur teks deskripsi.',
    },
    {
      kriteria: 'Kreativitas Penulisan Paragraf Tambahan',
      skor4: 'Paragraf baru sangat mengalir, padat diksi konkret, majas hidup, dan ejaan EYD V sempurna.',
      skor3: 'Paragraf baru menarik, menggunakan kata konkret dan majas dengan baik.',
      skor2: 'Paragraf masih datar dan belum memuat majas/pencerapan indra.',
      skor1: 'Hanya menulis 1 kalimat terputus tanpa kohesi.',
    },
  ],
};

export const BANK_SOAL_HOTS_BAB_1: SoalHOTS[] = [
  {
    id: 'soal-1',
    no: 1,
    tipe: 'Pilihan Ganda',
    levelKognitif: 'C4 (Menganalisis)',
    elemen: 'Membaca dan Memirsa',
    indikatorSoal:
      'Disajikan penggalan teks deskripsi, peserta didik dapat menganalisis jenis citraan panca indra yang paling dominan serta fungsinya dalam membangun imajinasi pembaca.',
    stimulus: `Perhatikan kutipan berikut!\n"Ketika mentari menyembul malu-malu di balik punggung Gunung Bromo, lautan pasir berbisik lirih tersapu angin pagi yang menggigit tulang. Hawa dingin menusuk hingga ke persendian, sementara aroma belerang tipis mengambang di udara, berpadu dengan kepulan uap hangat dari segelas kopi jahe yang digenggam para pendaki."`,
    pertanyaan:
      'Citraan panca indra yang paling dominan pada kalimat "Hawa dingin menusuk hingga ke persendian, sementara aroma belerang tipis mengambang di udara..." secara berurutan adalah...',
    pilihanJawaban: [
      { label: 'A', teks: 'Perabaan dan penciuman' },
      { label: 'B', teks: 'Penglihatan dan pendengaran' },
      { label: 'C', teks: 'Pencecapan dan perabaan' },
      { label: 'D', teks: 'Pendengaran dan penciuman' },
    ],
    kunciJawaban: 'A',
    pembahasan:
      'Frasa "hawa dingin menusuk hingga ke persendian" dirasakan melalui indra kulit/tubuh sehingga termasuk citraan perabaan (taktil). Frasa "aroma belerang tipis mengambang di udara" melibatkan organ hidung/penciuman (olfaktori). Maka urutan yang benar adalah perabaan dan penciuman (Opsi A).',
    pedomanPenskoran: 'Skor 1 jika jawaban benar A, Skor 0 jika menjawab pilihan lain.',
  },
  {
    id: 'soal-2',
    no: 2,
    tipe: 'Pilihan Ganda',
    levelKognitif: 'C5 (Mengevaluasi)',
    elemen: 'Membaca dan Memirsa',
    indikatorSoal:
      'Peserta didik dapat mengevaluasi efektivitas penggunaan majas personifikasi dalam menghidupkan objek mati menjadi bernyawa.',
    stimulus: `Perhatikan dua kalimat berikut!\n(1) Pohon-pohon kelapa di tepi pantai itu melambai-lambai memanggil para peselancar untuk segera menceburkan diri ke pelukan ombak.\n(2) Pohon kelapa di tepi pantai bergoyang tertiup angin laut kencang dan ada orang-orang yang sedang berselancar di laut.`,
    pertanyaan:
      'Mengapa kalimat (1) dinilai jauh lebih efektif sebagai kalimat teks deskripsi daripada kalimat (2)?',
    pilihanJawaban: [
      { label: 'A', teks: 'Karena kalimat (1) memuat kata-kata ilmiah yang jarang diketahui oleh masyarakat umum.' },
      { label: 'B', teks: 'Karena kalimat (1) menggunakan majas personifikasi yang memberikan daya hidup emosional dan daya bayang dinamis kepada pembaca.' },
      { label: 'C', teks: 'Karena kalimat (1) memiliki jumlah kata yang lebih panjang sehingga terlihat lebih berbobot.' },
      { label: 'D', teks: 'Karena kalimat (1) membuktikan bahwa pohon kelapa memang memiliki tangan dan suara untuk memanggil orang.' },
    ],
    kunciJawaban: 'B',
    pembahasan:
      'Ciri utama teks deskripsi yang bermutu adalah kemampuannya merangsang imajinasi dan keterlibatan emosi pembaca (daya bayang). Kalimat (1) memanfaatkan majas personifikasi ("melambai-lambai memanggil", "pelukan ombak") yang menganggap benda mati bersikap layaknya manusia sehingga suasana pantai terasa akrab, hidup, dan memikat (Opsi B).',
    pedomanPenskoran: 'Skor 1 jika jawaban benar B, Skor 0 jika salah.',
  },
  {
    id: 'soal-3',
    no: 3,
    tipe: 'Isian Singkat',
    levelKognitif: 'C4 (Menganalisis)',
    elemen: 'Menulis',
    indikatorSoal:
      'Peserta didik dapat melengkapi kalimat deskripsi rumpang dengan kata serapan panca indra yang konkret dan tepat secara konteks kebahasaan.',
    stimulus: `Bacalah kalimat rumpang berikut!\n"Dari dalam dapur nenek, tercium wangi gurih santan kelapa yang beradu dengan aroma daun pandan suji yang baru saja ditumbuk. Tekstur dodol ketan itu begitu [ ... ] saat disentuh, tidak lengket di jemari, dan memancarkan kilau kecokelatan yang menggoda selera."`,
    pertanyaan:
      'Kata sifat konkret yang paling tepat untuk mengisi bagian rumpang agar sesuai dengan citraan perabaan pada tekstur dodol ketan berkualitas baik adalah...',
    kunciJawaban: 'kenyal / lembut / pulen / elastis',
    pembahasan:
      'Untuk mendeskripsikan tekstur makanan tradisional dodol ketan yang tidak lengket di tangan dan melibatkan sensasi perabaan, kata konkret yang tepat adalah "kenyal", "lembut", atau "pulen".',
    pedomanPenskoran: 'Skor 2 jika menjawab kenyal/lembut/pulen; Skor 1 jika menjawab kata sifat umum (enak/bagus); Skor 0 jika salah atau kosong.',
  },
  {
    id: 'soal-4',
    no: 4,
    tipe: 'Uraian (Essay)',
    levelKognitif: 'C6 (Mencipta)',
    elemen: 'Menulis',
    indikatorSoal:
      'Disajikan situasi kontekstual objek budaya daerah sekitar, peserta didik mampu menyusun 1 paragraf teks deskripsi orisinal yang memadukan minimal 2 panca indra dan 1 majas personifikasi sesuai kaidah EYD V.',
    stimulus: `Situasi: Sekolahmu baru saja mengadakan pameran jajanan pasar tradisional Nusantara dalam rangka Projek Penguatan Profil Pelajar Pancasila (P5). Kamu bertugas menuliskan deskripsi salah satu stan kuliner (misalnya stan kue klepon, getuk lindri, pempek, atau wedang ronde) untuk buletin sekolah.`,
    pertanyaan:
      'Tuliskan satu paragraf teks deskripsi (minimal 4 kalimat padu) mengenai salah satu kuliner tradisional pilihanmu! Pastikan paragrafmu:\n1. Memuat rincian objek konkret yang melibatkan minimal 2 panca indra (penglihatan, penciuman, pengecapan, atau perabaan).\n2. Memuat minimal 1 majas personifikasi yang alami.\n3. Menggunakan tanda baca dan huruf kapital yang tepat sesuai kaidah EYD V.',
    kunciJawaban:
      'Contoh Jawaban Ideal Siswa:\n"Di sudut stan Jawa Tengah, butiran-butiran kue klepon hijau pandan berbaris anggun di atas wadah anyaman bambu beralaskan daun pisang segar. Taburan parutan kelapa putih bersih menyelimuti tubuhnya, seakan memeluk hangat manisnya lelehan gula aren yang bersembunyi di dalamnya. Begitu digigit, letupan gula merah cair seketika menari-nari memanjakan lidah dengan rasa manis legit yang memikat. Wangi harum daun pandan alami pun semerbak menguar, menggoda setiap pasang mata pengunjung untuk mendekat dan mencicipinya."',
    pembahasan:
      'Jawaban dinilai berdasarkan kekayaan kata konkret sensorik, orisinalitas majas personifikasi ("letupan gula merah menari-nari memanjakan lidah"), koherensi antarkalimat, serta ketepatan ejaan bahasa Indonesia.',
    pedomanPenskoran:
      'Skor Maksimal: 10\n- Rincian citraan minimal 2 indra tepat & konkret: skor 3\n- Penggunaan majas personifikasi tepat & menghidupkan suasana: skor 3\n- Koherensi alur dan kepaduan kalimat: skor 2\n- Kepatuhan tata tulis EYD V (kapital, tanda baca): skor 2\nTotal Skor = (Skor diperoleh / 10) x 100.',
  },
];

export const PROGRAM_REMEDIAL_PENGAYAAN_BAB_1: ProgramRemedialPengayaan = {
  bab: 'Bab 1',
  materiPokok: 'Teks Deskripsi (Struktur, Citraan Panca Indra, Majas Personifikasi, dan EYD V)',
  kktpMinimal: 75,
  remedial: {
    identifikasiMasalah: [
      'Sebagian siswa kesulitan membedakan kata sifat umum (contoh: "pantai itu indah") dengan rincian kata konkret indrawi (contoh: "pasir putih lembut berkilau").',
      'Masih terjadi kesalahan konvensi ejaan penulisan kata depan "di" sebagai penunjuk tempat yang dipisah dengan awalan "di-" pasif yang disambung.',
      'Siswa masih bingung mengidentifikasi majas personifikasi dan cenderung menyamakan semua gaya bahasa sebagai majas personifikasi.',
    ],
    strategiTindakLanjut: [
      'Bimbingan Perorangan (Scaffolding): Guru membimbing siswa satu per satu dengan kartu tebak kata sensorik bergambar.',
      'Metode Tutor Sebaya: Memasangkan siswa yang belum tuntas dengan teman sekelas berkategori mahir untuk merevisi draf kalimat deskripsi bersama.',
      'Latihan Kalimat Rumpang Terfokus: Memberikan latihan terarah mengisi kata depan di/ke dan kata konkret.',
    ],
    formatKegiatan: [
      {
        namaKegiatan: 'Klinik Tata Bahasa & Diksi Sensorik',
        pelaksanaan: 'Di luar jam tatap muka reguler (30 menit) menggunakan kartu manipulatif warna-warni.',
        evaluasiUlang: 'Pemberian tes instrumen paralel berbobot sama dengan fokus 5 butir soal rekonstruksi kalimat.',
      },
      {
        namaKegiatan: 'Bedah Teks Bersama Sahabat Belajar (Tutor Sebaya)',
        pelaksanaan: 'Sesi belajar kelompok 2 orang untuk menelaah kembali LKPD dan memperbaiki paragraf deskripsi.',
        evaluasiUlang: 'Pemeriksaan ulang rubrik penulisan teks deskripsi hingga mencapai predikat Cakap.',
      },
    ],
  },
  pengayaan: {
    targetSiswa: 'Peserta didik yang telah mencapai nilai capaian KKTP di atas 85 (Kategori Sangat Mahir).',
    tujuanPengayaan:
      'Memperluas wawasan literasi kritis, mengembangkan bakat penulisan kreatif tingkat lanjut, dan melatih kepemimpinan dalam mendokumentasikan kearifan lokal daerah.',
    aktivitasTantangan: [
      {
        judul: 'Proyek Penulis Cilik: Antologi E-Book Wisata & Kuliner Lokal',
        deskripsi:
          'Menyusun satu artikel ulasan deskripsi mendalam (600-800 kata) tentang warisan budaya atau kuliner khas daerah yang terancam punah, dilengkapi dengan dokumentasi foto orisinal karya siswa.',
        output: 'Diterbitkan dalam bentuk buklet digital (e-book) kelas dan dipublikasikan pada mading sekolah serta web literasi.',
      },
      {
        judul: 'Produksi Vlog Mini Budaya (Podcast/Reels Edukatif)',
        deskripsi:
          'Membuat video dokumentasi kreatif berdurasi 1-2 menit yang memadukan narasi monolog deskripsi puitis dengan visual estetik tentang tempat ikonik di lingkungan kota/kabupaten.',
        output: 'Tautan video pendek diunggah pada kanal media pembelajaran sekolah dengan takarir (caption) kaya majas.',
      },
    ],
  },
};
