# Si-Admin Guru Bahasa Indonesia (CP No. 020/H/KR/2026)

Aplikasi Administrasi Pembelajaran Lengkap Mata Pelajaran Bahasa Indonesia Kurikulum Merdeka yang berpedoman penuh pada **SK BSKAP No. 020/H/KR/2026**.

Aplikasi ini dirancang untuk memudahkan Guru Bahasa Indonesia (fokus utama Fase D / SMP & MTs serta fleksibel untuk Fase A-C SD dan Fase E-F SMA) dalam menyusun, mengelola, menyinkronkan ke Cloud, serta mencetak dokumen administrasi kurikulum resmi.

---

## 🚀 Fitur Utama

1. **Analisis Capaian Pembelajaran (CP 020/2026)**:
   - Peta Konsep 4 Elemen: *Menyimak*, *Membaca dan Memirsa*, *Berbicara dan Mempresentasikan*, *Menulis*.
   - Penurunan CP menjadi TP (Tujuan Pembelajaran) dan ATP (Alur Tujuan Pembelajaran) lengkap dengan alokasi JP.
2. **Program Tahunan (PROTA)**:
   - Alokasi waktu terdistribusi 108 JP untuk Semester 1 & 2 (36 minggu efektif belajar).
3. **Program Semester (PROSEM)**:
   - Matriks distribusi jam pelajaran mingguan untuk Semester 1 (Ganjil) dan Semester 2 (Genap) dengan penanda jadwal STS dan SAS.
4. **Modul Ajar / Rencana Pembelajaran Kritis (RPK)**:
   - Pendekatan **Deep Learning**: *Meaningful* (Bermakna), *Mindful* (Berkesadaran Penuh), dan *Joyful* (Menyenangkan).
   - Integrasi **Culturally Responsive Teaching (CRT)** dan sintaks **Problem-Based Learning (PBL)** dengan diferensiasi konten, proses, dan produk.
   - Asesmen Diagnostik, Formatif (Rubrik analitik 4 level), dan Sumatif Lingkup Materi beserta Kriteria Ketercapaian Tujuan Pembelajaran (KKTP).
5. **Materi Ajar & LKPD Berdiferensiasi**:
   - Berbasis kesiapan belajar: *Kelompok A (Scaffolding/Dasar)*, *Kelompok B (Reguler/Mandiri)*, dan *Kelompok C (Pengayaan/HOTS)*.
6. **Instrumen Asesmen & Bank Soal HOTS**:
   - Kisi-kisi soal HOTS (C4, C5, C6).
   - Bank soal Pilihan Ganda, Isian Singkat, dan Uraian (Essay) lengkap dengan kunci jawaban, pembahasan, dan pedoman penskoran.
   - Mode Guru (kunci aktif) & Mode Siswa (kunci tersembunyi).
7. **Program Remedial & Pengayaan**:
   - Jurnal bimbingan remedial (klinik tata bahasa & tutor sebaya) serta proyek tantangan pengayaan (*high achievers*).
8. **Integrasi Firebase Cloud Firestore & Autentikasi Google**:
   - Sinkronisasi identitas sekolah dan modul ajar antarperangkat secara real-time.
9. **Kop Surat Standar Dinas Pendidikan & Ekspor Word (.doc)**:
   - Format cetak A4 ramah printer (*print-friendly CSS*) dan unduhan dokumen siap serah.

---

## 🛠️ Persyaratan Sistem & Tech Stack

- **Node.js**: v18.0.0 atau lebih tinggi
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Database & Auth**: Firebase Firestore + Google Identity

---

## 📦 Panduan Instalasi Lokal

1. **Kloning Repositori**:
   ```bash
   git clone <URL_REPOSITORY_ANDA>
   cd si-admin-guru-bi
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

4. **Kompilasi / Build Produksi**:
   ```bash
   npm run build
   ```

---

## 🐙 Panduan Push ke GitHub

Untuk menyimpan dan mengunggah kode sumber ini ke repositori GitHub Anda:

```bash
# 1. Inisialisasi Git lokal (jika belum)
git init

# 2. Tambahkan semua file proyek
git add .

# 3. Buat commit pertama
git commit -m "feat: Integrasi lengkap Administrasi Guru BI CP 020/2026 dengan Firebase dan CI/CD GitHub"

# 4. Ubah nama branch utama menjadi main
git branch -M main

# 5. Hubungkan ke repositori GitHub Anda (ganti URL sesuai repositori Anda)
git remote add origin https://github.com/USERNAME_ANDA/si-admin-guru-bi.git

# 6. Unggah (push) kode ke GitHub
git push -u origin main
```

---

## ☁️ Panduan Deploy ke Firebase Hosting

Proyek ini telah dilengkapi file konfigurasi `firebase.json` dan `.firebaserc`.

1. **Instal Firebase CLI** (jika belum ada):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login ke Akun Firebase / Google**:
   ```bash
   firebase login
   ```

3. **Build Proyek**:
   ```bash
   npm run build
   ```

4. **Deploy ke Firebase Hosting**:
   ```bash
   firebase deploy --only hosting
   ```

5. **Deploy Aturan Keamanan Firestore**:
   ```bash
   firebase deploy --only firestore:rules
   ```

---

## 🌐 Deploy ke Platform Lain (Vercel / Netlify / Cloud Run)

- **Vercel**: Cukup import repositori GitHub ke Vercel, framework preset: `Vite`, output directory: `dist`.
- **Netlify**: Hubungkan repositori GitHub, build command: `npm run build`, publish directory: `dist`.
