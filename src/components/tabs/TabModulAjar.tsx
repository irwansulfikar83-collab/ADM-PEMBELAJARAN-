import React, { useState } from 'react';
import { SchoolProfile } from '../../types/curriculum';
import { DocumentHeader } from '../DocumentHeader';
import { SignatureBlock } from '../SignatureBlock';
import { MODUL_AJAR_LENGKAP } from '../../data/cp020Data';
import {
  FileText,
  Printer,
  Copy,
  Check,
  Brain,
  Sparkles,
  Heart,
  Target,
  Users,
  Compass,
} from 'lucide-react';

interface TabModulAjarProps {
  profile: SchoolProfile;
  onPrint: () => void;
}

export const TabModulAjar: React.FC<TabModulAjarProps> = ({ profile, onPrint }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const modul = MODUL_AJAR_LENGKAP;

  const handleCopyMarkdown = () => {
    let md = `# MODUL AJAR / RENCANA PEMBELAJARAN KRITIS (RPK) LENGKAP\n`;
    md += `Satuan Pendidikan: ${profile.namaSekolah}\n`;
    md += `Mata Pelajaran: ${profile.mataPelajaran}\n`;
    md += `Fase / Kelas: ${profile.fase} / ${profile.kelas}\n`;
    md += `Bab: ${modul.bab} - ${modul.judul}\n`;
    md += `Alokasi Waktu: ${modul.alokasiWaktu}\n\n`;

    md += `## I. INFORMASI UMUM\n`;
    md += `- Model: ${modul.modelPembelajaran}\n`;
    md += `- Target Siswa: ${modul.targetPesertaDidik}\n\n`;

    md += `## II. KOMPONEN INTI\n`;
    md += `### Tujuan Pembelajaran:\n`;
    modul.tujuanPembelajaran.forEach((tp) => (md += `- ${tp}\n`));
    md += `\n### Pemahaman Bermakna:\n`;
    modul.pemahamanBermakna.forEach((pb) => (md += `- ${pb}\n`));
    md += `\n### Pertanyaan Pemantik:\n`;
    modul.pertanyaanPemantik.forEach((pp) => (md += `- ${pp}\n`));

    md += `\n## III. KEGIATAN PEMBELAJARAN DEEP LEARNING\n`;
    md += `Awal: ${modul.kegiatanAwal.aktivitas.join('; ')}\n`;
    modul.kegiatanInti.forEach((ki) => {
      md += `\n**${ki.faseSintaks}**\n- Guru: ${ki.aktivitasGuru.join('; ')}\n- Siswa: ${ki.aktivitasSiswa.join('; ')}\n`;
    });
    md += `\nPenutup: ${modul.kegiatanPenutup.aktivitas.join('; ')}\n`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Control Actions (no-print) */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-emerald-700" />
          <div>
            <h3 className="font-bold text-sm text-slate-800">
              Modul Ajar / Rencana Pembelajaran Kritis (RPK)
            </h3>
            <p className="text-xs text-slate-500">
              {modul.bab}: {modul.judul} • Pendekatan Deep Learning & CRT
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Tersalin' : 'Salin Markdown'}
          </button>
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs hover:shadow transition-all"
          >
            <Printer className="w-3.5 h-3.5" /> Cetak Modul Ajar
          </button>
        </div>
      </div>

      {/* Official Print Layout */}
      <div className="bg-white p-6 md:p-10 rounded-xl border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <DocumentHeader
          profile={profile}
          judulDokumen="MODUL AJAR / RENCANA PEMBELAJARAN KRITIS (RPK)"
          subJudul={`${modul.bab}: ${modul.judul}`}
          nomorDokumen="421.3 / 105 / MODUL / BI / 2026"
        />

        {/* 1. INFORMASI UMUM */}
        <section className="mb-6 avoid-break">
          <h3 className="text-sm font-bold uppercase text-emerald-900 border-b border-emerald-900/30 pb-1 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs">
              I
            </span>
            INFORMASI UMUM
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-3">
            <div className="border border-slate-200 rounded p-3 bg-slate-50/50 space-y-1">
              <p><strong className="text-slate-800">Nama Penyusun:</strong> {profile.namaGuru}</p>
              <p><strong className="text-slate-800">Satuan Pendidikan:</strong> {profile.namaSekolah}</p>
              <p><strong className="text-slate-800">Fase / Kelas / Sem:</strong> {profile.fase} / {profile.kelas} / Semester 1</p>
              <p><strong className="text-slate-800">Mata Pelajaran:</strong> {profile.mataPelajaran}</p>
              <p><strong className="text-slate-800">Alokasi Waktu:</strong> {modul.alokasiWaktu}</p>
            </div>
            <div className="border border-slate-200 rounded p-3 bg-slate-50/50 space-y-1">
              <p><strong className="text-slate-800">Target Siswa:</strong> {modul.targetPesertaDidik}</p>
              <p><strong className="text-slate-800">Model Pembelajaran:</strong> {modul.modelPembelajaran}</p>
              <p><strong className="text-slate-800">Metode:</strong> {modul.metodePembelajaran}</p>
              <p><strong className="text-slate-800">Tahun Ajaran:</strong> {profile.tahunAjaran}</p>
            </div>
          </div>

          {/* Sarana & Prasarana */}
          <div className="border border-slate-200 rounded p-3 text-xs bg-white mb-3">
            <strong className="text-slate-800 block mb-1">Sarana dan Prasarana Pendukung:</strong>
            <ul className="list-disc pl-4 text-slate-700 space-y-0.5">
              {modul.sarpras.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Dimensi Profil Pelajar Pancasila */}
          <div className="border border-slate-200 rounded p-3 text-xs bg-white">
            <strong className="text-slate-800 block mb-1.5 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-emerald-700" /> Dimensi Profil Pelajar Pancasila:
            </strong>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {modul.dimensiProfilPancasila.map((d, i) => (
                <div key={i} className="bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="font-bold text-emerald-800 block">{d.dimensi}</span>
                  <span className="text-[10px] text-slate-500 font-medium block">{d.elemen}</span>
                  <p className="text-[11px] text-slate-600 mt-1">{d.deskripsi}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. KOMPONEN INTI */}
        <section className="mb-6 avoid-break">
          <h3 className="text-sm font-bold uppercase text-emerald-900 border-b border-emerald-900/30 pb-1 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs">
              II
            </span>
            KOMPONEN INTI PEMBELAJARAN
          </h3>

          <div className="space-y-3 text-xs">
            {/* Tujuan Pembelajaran */}
            <div className="border border-slate-200 rounded-lg p-3 bg-emerald-50/40">
              <h4 className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                <Target className="w-4 h-4 text-emerald-700" /> A. Tujuan Pembelajaran (TP)
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-800">
                {modul.tujuanPembelajaran.map((tp, idx) => (
                  <li key={idx} className="leading-relaxed">{tp}</li>
                ))}
              </ul>
            </div>

            {/* Pemahaman Bermakna & Pertanyaan Pemantik */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                  <Brain className="w-4 h-4 text-emerald-700" /> B. Pemahaman Bermakna
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-slate-700">
                  {modul.pemahamanBermakna.map((pb, idx) => (
                    <li key={idx} className="leading-relaxed">{pb}</li>
                  ))}
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-3 bg-slate-50">
                <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" /> C. Pertanyaan Pemantik
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-slate-700">
                  {modul.pertanyaanPemantik.map((pp, idx) => (
                    <li key={idx} className="leading-relaxed italic">"{pp}"</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3 PILAR PENDEKATAN DEEP LEARNING & CRT */}
            <div className="border-2 border-emerald-600/30 rounded-lg p-3.5 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-white">
              <h4 className="font-bold text-emerald-950 uppercase text-xs mb-2 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-600" /> D. Penerapan 3 Pilar Deep Learning & Culturally Responsive Teaching
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-2">
                <div className="bg-white p-2.5 rounded border border-emerald-200">
                  <span className="font-bold text-emerald-800 block mb-0.5">1. Meaningful (Bermakna)</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{modul.pendekatanDeepLearning.meaningful}</p>
                </div>
                <div className="bg-white p-2.5 rounded border border-teal-200">
                  <span className="font-bold text-teal-800 block mb-0.5">2. Mindful (Kesadaran Penuh)</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{modul.pendekatanDeepLearning.mindful}</p>
                </div>
                <div className="bg-white p-2.5 rounded border border-amber-200">
                  <span className="font-bold text-amber-800 block mb-0.5">3. Joyful (Menyenangkan)</span>
                  <p className="text-slate-600 text-[11px] leading-relaxed">{modul.pendekatanDeepLearning.joyful}</p>
                </div>
              </div>
              <div className="bg-white p-2.5 rounded border border-slate-200 text-[11px] text-slate-700">
                <strong className="text-slate-900 block mb-0.5">Culturally Responsive Teaching (CRT):</strong>
                {modul.culturallyResponsiveTeaching}
              </div>
            </div>
          </div>
        </section>

        {/* 3. LANGKAH-LANGKAH PEMBELAJARAN (SINTAKS PBL & DIFERENSIASI) */}
        <section className="mb-6 page-break">
          <h3 className="text-sm font-bold uppercase text-emerald-900 border-b border-emerald-900/30 pb-1 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs">
              III
            </span>
            KEGIATAN PEMBELAJARAN (SINTAKS PROBLEM-BASED LEARNING)
          </h3>

          {/* Kegiatan Awal */}
          <div className="border border-slate-300 rounded-lg p-3 bg-slate-50 mb-3 text-xs avoid-break">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-slate-900 uppercase">A. Kegiatan Awal (Pendahuluan)</h4>
              <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[11px]">
                {modul.kegiatanAwal.waktu}
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              {modul.kegiatanAwal.aktivitas.map((act, idx) => (
                <li key={idx} className="leading-relaxed">{act}</li>
              ))}
            </ul>
          </div>

          {/* Kegiatan Inti (5 Fase PBL) */}
          <div className="space-y-3 mb-3">
            <h4 className="font-bold text-slate-900 uppercase text-xs">
              B. Kegiatan Inti (Diferensiasi Konten, Proses, Produk)
            </h4>
            {modul.kegiatanInti.map((fase, idx) => (
              <div key={idx} className="border border-slate-300 rounded-lg p-3 bg-white text-xs avoid-break">
                <div className="border-b border-slate-200 pb-1 mb-2">
                  <h5 className="font-bold text-emerald-800">{fase.faseSintaks}</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
                  <div>
                    <span className="font-semibold text-slate-800 block text-[11px]">Peran & Aktivitas Guru:</span>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-700 text-[11px]">
                      {fase.aktivitasGuru.map((g, i) => (
                        <li key={i}>{g}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800 block text-[11px]">Aktivitas Peserta Didik:</span>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-700 text-[11px]">
                      {fase.aktivitasSiswa.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Diferensiasi Box */}
                <div className="bg-slate-50 p-2 rounded border border-slate-200 text-[11px] grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div>
                    <strong className="text-emerald-800 block">Diferensiasi Konten:</strong>
                    <span className="text-slate-600">{fase.diferensiasi.konten}</span>
                  </div>
                  <div>
                    <strong className="text-teal-800 block">Diferensiasi Proses:</strong>
                    <span className="text-slate-600">{fase.diferensiasi.proses}</span>
                  </div>
                  <div>
                    <strong className="text-amber-800 block">Diferensiasi Produk:</strong>
                    <span className="text-slate-600">{fase.diferensiasi.produk}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kegiatan Penutup */}
          <div className="border border-slate-300 rounded-lg p-3 bg-slate-50 text-xs avoid-break">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-slate-900 uppercase">C. Kegiatan Penutup & Refleksi</h4>
              <span className="text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded text-[11px]">
                {modul.kegiatanPenutup.waktu}
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              {modul.kegiatanPenutup.aktivitas.map((act, idx) => (
                <li key={idx} className="leading-relaxed">{act}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. ASESMEN & RUBRIK LENGKAP */}
        <section className="mb-6 page-break">
          <h3 className="text-sm font-bold uppercase text-emerald-900 border-b border-emerald-900/30 pb-1 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs">
              IV
            </span>
            INSTRUMEN ASESMEN & RUBRIK PENILAIAN LENGKAP
          </h3>

          {/* Diagnostik */}
          <div className="border border-slate-200 rounded p-3 text-xs bg-white mb-3 avoid-break">
            <h4 className="font-bold text-slate-900 mb-1">A. Asesmen Diagnostik (Awal Pembelajaran)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="font-semibold text-slate-800 text-[11px] block">Diagnostik Kognitif:</span>
                <ul className="list-disc pl-4 text-slate-600 space-y-0.5 text-[11px]">
                  {modul.asesmenDiagnostik.kognitif.map((k, i) => (
                    <li key={i}>{k}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-semibold text-slate-800 text-[11px] block">Diagnostik Non-Kognitif:</span>
                <ul className="list-disc pl-4 text-slate-600 space-y-0.5 text-[11px]">
                  {modul.asesmenDiagnostik.nonKognitif.map((nk, i) => (
                    <li key={i}>{nk}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Formatif & Rubrik Analitik 4 Level */}
          <div className="border border-slate-200 rounded p-3 text-xs bg-white mb-3 avoid-break">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-slate-900">B. Asesmen Formatif (Rubrik Kinerja Keterampilan Tulis)</h4>
              <span className="text-[10px] text-slate-500">{modul.asesmenFormatif.teknik}</span>
            </div>
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left text-[11px] border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="border border-slate-300 p-1.5 w-36">Aspek Penilaian</th>
                    <th className="border border-slate-300 p-1.5">Mahir (Skor 4)</th>
                    <th className="border border-slate-300 p-1.5">Cakap (Skor 3)</th>
                    <th className="border border-slate-300 p-1.5">Layak (Skor 2)</th>
                    <th className="border border-slate-300 p-1.5">Berkembang (Skor 1)</th>
                  </tr>
                </thead>
                <tbody>
                  {modul.asesmenFormatif.rubrik.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-1.5 font-bold text-slate-900">{r.aspek}</td>
                      <td className="border border-slate-300 p-1.5 text-slate-700 bg-emerald-50/20">{r.mahir}</td>
                      <td className="border border-slate-300 p-1.5 text-slate-700">{r.cakap}</td>
                      <td className="border border-slate-300 p-1.5 text-slate-700">{r.layak}</td>
                      <td className="border border-slate-300 p-1.5 text-slate-700 bg-rose-50/20">{r.berkembang}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sumatif & Kriteria Ketercapaian Tujuan Pembelajaran (KKTP) */}
          <div className="border border-slate-200 rounded p-3 text-xs bg-white avoid-break">
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-slate-900">C. Asesmen Sumatif & Interval Nilai KKTP</h4>
              <span className="text-[10px] text-slate-500">{modul.asesmenSumatif.teknik}</span>
            </div>
            <p className="text-[11px] text-slate-600 mb-2">{modul.asesmenSumatif.deskripsi}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="border border-slate-300 p-1.5 w-24 text-center">Interval Nilai</th>
                    <th className="border border-slate-300 p-1.5 w-36 text-center">Kategori Capaian</th>
                    <th className="border border-slate-300 p-1.5">Tindak Lanjut & Intervensi Guru</th>
                  </tr>
                </thead>
                <tbody>
                  {modul.asesmenSumatif.kktp.map((k, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-1.5 text-center font-bold text-emerald-800">{k.interval}</td>
                      <td className="border border-slate-300 p-1.5 text-center font-semibold text-slate-900">{k.kriteria}</td>
                      <td className="border border-slate-300 p-1.5 text-slate-700">{k.intervensi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 5. REFLEKSI GURU & SISWA */}
        <section className="mb-6 avoid-break">
          <h3 className="text-sm font-bold uppercase text-emerald-900 border-b border-emerald-900/30 pb-1 mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-xs">
              V
            </span>
            LEMBAR REFLEKSI GURU DAN PESERTA DIDIK
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            <div className="border border-slate-200 rounded p-3 bg-slate-50">
              <strong className="text-slate-800 block mb-1">Pertanyaan Refleksi Pendidik:</strong>
              <ul className="list-disc pl-4 text-slate-700 space-y-1 text-[11px]">
                {modul.refleksiGuru.map((rg, i) => (
                  <li key={i}>{rg}</li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded p-3 bg-slate-50">
              <strong className="text-slate-800 block mb-1">Pertanyaan Refleksi Peserta Didik:</strong>
              <ul className="list-disc pl-4 text-slate-700 space-y-1 text-[11px]">
                {modul.refleksiSiswa.map((rs, i) => (
                  <li key={i}>{rs}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pengesahan */}
        <SignatureBlock profile={profile} tanggalDokumen={`${profile.kotaKabupaten}, 14 Juli 2025`} />
      </div>
    </div>
  );
};
