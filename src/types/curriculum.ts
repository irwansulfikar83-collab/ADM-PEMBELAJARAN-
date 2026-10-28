export type JenjangFase = 'SD-A' | 'SD-B' | 'SD-C' | 'SMP-D' | 'SMA-E' | 'SMA-F';

export interface SchoolProfile {
  namaSekolah: string;
  npsn: string;
  namaGuru: string;
  nipGuru: string;
  namaKepalaSekolah: string;
  nipKepalaSekolah: string;
  kotaKabupaten: string;
  provinsi: string;
  tahunAjaran: string;
  mataPelajaran: string;
  fase: string;
  kelas: string;
  semester: string;
}

export interface ElemenCP {
  nama: 'Menyimak' | 'Membaca dan Memirsa' | 'Berbicara dan Mempresentasikan' | 'Menulis';
  deskripsi: string;
  kompetensiKunci: string[];
  materiEsensial: string[];
}

export interface TPItem {
  id: string;
  kodeTP: string;
  elemen: string;
  rumusanTP: string;
  alokasiJP: number;
  profilPancasila: string[];
  materiPokok: string;
  indikatorKetercapaian: string[];
}

export interface ATPItem {
  no: number;
  bab: string;
  judulBab: string;
  tujuanPembelajaran: string[];
  elemenTerkait: string[];
  alokasiJP: number;
  semester: 1 | 2;
  kataKunci: string[];
  glosarium: { istilah: string; arti: string }[];
}

export interface ProtaItem {
  no: number;
  bab: string;
  judulMateri: string;
  tujuanPembelajaranRingkas: string;
  alokasiJP: number;
  semester: 1 | 2;
  keterangan: string;
}

export interface ProsemBulan {
  namaBulan: string;
  minggu: number[]; // e.g. [1, 2, 3, 4]
}

export interface ProsemItem {
  no: number;
  tujuanPembelajaran: string;
  materiPokok: string;
  alokasiJP: number;
  distribusiMinggu: { [bulanMingguKey: string]: number }; // e.g. "Juli-1": 4
}

export interface ModulAjar {
  id: string;
  bab: string;
  judul: string;
  alokasiWaktu: string;
  faseKelas: string;
  targetPesertaDidik: string;
  modelPembelajaran: string;
  metodePembelajaran: string;
  sarpras: string[];
  dimensiProfilPancasila: { dimensi: string; elemen: string; deskripsi: string }[];
  
  // Komponen Inti
  tujuanPembelajaran: string[];
  pemahamanBermakna: string[];
  pertanyaanPemantik: string[];
  
  // 3 Pilar Deep Learning (Meaningful, Mindful, Joyful)
  pendekatanDeepLearning: {
    meaningful: string;
    mindful: string;
    joyful: string;
  };
  culturallyResponsiveTeaching: string;
  
  // Langkah Pembelajaran
  kegiatanAwal: { waktu: string; aktivitas: string[] };
  kegiatanInti: {
    faseSintaks: string;
    aktivitasGuru: string[];
    aktivitasSiswa: string[];
    diferensiasi: {
      konten: string;
      proses: string;
      produk: string;
    };
  }[];
  kegiatanPenutup: { waktu: string; aktivitas: string[] };
  
  // Asesmen & Rubrik
  asesmenDiagnostik: {
    kognitif: string[];
    nonKognitif: string[];
  };
  asesmenFormatif: {
    teknik: string;
    instrumen: string;
    rubrik: { aspek: string; mahir: string; cakap: string; layak: string; berkembang: string }[];
  };
  asesmenSumatif: {
    teknik: string;
    deskripsi: string;
    kktp: { interval: string; kriteria: string; intervensi: string }[];
  };
  
  // Refleksi
  refleksiGuru: string[];
  refleksiSiswa: string[];
}

export interface LKPDItem {
  id: string;
  bab: string;
  judulLKPD: string;
  tujuanKegiatan: string;
  petunjukUmum: string[];
  teksStimulus: {
    judul: string;
    sumber: string;
    isi: string;
  };
  diferensiasiTingkat: {
    level: 'Kelompok A (Scaffolding / Dasar)' | 'Kelompok B (Reguler / Mandiri)' | 'Kelompok C (Pengayaan / HOTS Kritis)';
    deskripsi: string;
    tugas: string[];
  }[];
  rubrikPenilaianLKPD: {
    kriteria: string;
    skor4: string;
    skor3: string;
    skor2: string;
    skor1: string;
  }[];
}

export interface SoalHOTS {
  id: string;
  no: number;
  tipe: 'Pilihan Ganda' | 'Isian Singkat' | 'Uraian (Essay)';
  levelKognitif: 'C4 (Menganalisis)' | 'C5 (Mengevaluasi)' | 'C6 (Mencipta)';
  elemen: string;
  indikatorSoal: string;
  stimulus: string;
  pertanyaan: string;
  pilihanJawaban?: { label: string; teks: string }[];
  kunciJawaban: string;
  pembahasan: string;
  pedomanPenskoran: string;
}

export interface ProgramRemedialPengayaan {
  bab: string;
  materiPokok: string;
  kktpMinimal: number;
  remedial: {
    identifikasiMasalah: string[];
    strategiTindakLanjut: string[];
    formatKegiatan: {
      namaKegiatan: string;
      pelaksanaan: string;
      evaluasiUlang: string;
    }[];
  };
  pengayaan: {
    targetSiswa: string;
    tujuanPengayaan: string;
    aktivitasTantangan: {
      judul: string;
      deskripsi: string;
      output: string;
    }[];
  };
}
