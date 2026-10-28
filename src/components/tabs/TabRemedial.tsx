import React, { useState } from 'react';
import { SchoolProfile } from '../../types/curriculum';
import { DocumentHeader } from '../DocumentHeader';
import { SignatureBlock } from '../SignatureBlock';
import { PROGRAM_REMEDIAL_PENGAYAAN_BAB_1 } from '../../data/cp020Data';
import { ShieldAlert, Award, Printer, Copy, Check, UserCheck, ArrowUpRight } from 'lucide-react';

interface TabRemedialProps {
  profile: SchoolProfile;
  onPrint: () => void;
}

export const TabRemedial: React.FC<TabRemedialProps> = ({ profile, onPrint }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const data = PROGRAM_REMEDIAL_PENGAYAAN_BAB_1;

  const handleCopyMarkdown = () => {
    let md = `# PROGRAM REMEDIAL DAN PENGAYAAN\n`;
    md += `Satuan Pendidikan: ${profile.namaSekolah}\n`;
    md += `Mata Pelajaran: ${profile.mataPelajaran}\n`;
    md += `Fase / Kelas: ${profile.fase} / ${profile.kelas}\n`;
    md += `Bab / Materi: ${data.bab} - ${data.materiPokok}\n\n`;

    md += `## A. PROGRAM REMEDIAL (KKTP: ${data.kktpMinimal})\n`;
    md += `### Identifikasi Kesulitan:\n`;
    data.remedial.identifikasiMasalah.forEach((m) => (md += `- ${m}\n`));
    md += `\n### Strategi Tindak Lanjut:\n`;
    data.remedial.strategiTindakLanjut.forEach((s) => (md += `- ${s}\n`));

    md += `\n## B. PROGRAM PENGAYAAN\n`;
    md += `Target: ${data.pengayaan.targetSiswa}\n`;
    md += `Tujuan: ${data.pengayaan.tujuanPengayaan}\n`;
    data.pengayaan.aktivitasTantangan.forEach((a) => {
      md += `\n- **${a.judul}**\n  ${a.deskripsi}\n  Output: ${a.output}\n`;
    });

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar (no-print) */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-emerald-700" />
          <div>
            <h3 className="font-bold text-sm text-slate-800">
              Program Remedial & Pengayaan Terstruktur
            </h3>
            <p className="text-xs text-slate-500">
              Tindak Lanjut Berkelanjutan Asesmen Formatif & Sumatif • Batas Tuntas KKTP: {data.kktpMinimal}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Tersalin' : 'Salin Program'}
          </button>
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs hover:shadow transition-all"
          >
            <Printer className="w-3.5 h-3.5" /> Cetak Program Remedial
          </button>
        </div>
      </div>

      {/* Official Print Layout */}
      <div className="bg-white p-6 md:p-10 rounded-xl border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <DocumentHeader
          profile={profile}
          judulDokumen="PROGRAM REMEDIAL DAN PENGAYAAN PEMBELAJARAN"
          subJudul={`Tindak Lanjut Hasil Asesmen ${data.bab}: ${data.materiPokok}`}
          nomorDokumen="421.3 / 108 / REM-PENG / BI / 2026"
        />

        {/* 1. PROGRAM REMEDIAL */}
        <section className="mb-6 avoid-break">
          <div className="flex items-center justify-between border-b border-rose-300 pb-1.5 mb-3">
            <h3 className="text-sm font-bold uppercase text-rose-900 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600 print:hidden" />
              I. PERENCANAAN DAN PELAKSANAAN PROGRAM REMEDIAL
            </h3>
            <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              Kriteria Ketercapaian TP (KKTP): ≥ {data.kktpMinimal}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mb-4">
            <div className="border border-slate-300 rounded p-3 bg-slate-50">
              <strong className="text-slate-900 block mb-1">
                A. Identifikasi Kendala & Indikator Belum Tuntas:
              </strong>
              <ul className="list-disc pl-4 space-y-1 text-slate-700 text-[11px]">
                {data.remedial.identifikasiMasalah.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-300 rounded p-3 bg-slate-50">
              <strong className="text-slate-900 block mb-1">
                B. Bentuk Strategi & Bimbingan Khusus:
              </strong>
              <ul className="list-disc pl-4 space-y-1 text-slate-700 text-[11px]">
                {data.remedial.strategiTindakLanjut.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tabel Format Pelaksanaan Remedial */}
          <div className="mb-2">
            <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">
              Format Jurnal Pelaksanaan & Rekapitulasi Nilai Remedial:
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="border border-slate-300 p-1.5 w-8 text-center">No</th>
                    <th className="border border-slate-300 p-1.5 w-44">Nama Peserta Didik</th>
                    <th className="border border-slate-300 p-1.5 w-16 text-center">Nilai Awal</th>
                    <th className="border border-slate-300 p-1.5">Bentuk Bimbingan / Remedial</th>
                    <th className="border border-slate-300 p-1.5 w-16 text-center">Nilai Akhir</th>
                    <th className="border border-slate-300 p-1.5 w-24 text-center">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { nama: 'Ahmad Faiz Fadlillah', nilaiAwal: 58, bentuk: 'Bimbingan perorangan pembedahan kata konkret sensorik & kartu majas', nilaiAkhir: 78, status: 'Tuntas' },
                    { nama: 'Siti Nur Aisyah', nilaiAwal: 64, bentuk: 'Tutor sebaya perbaikan ejaan huruf kapital & penulisan kata depan', nilaiAkhir: 80, status: 'Tuntas' },
                    { nama: 'Muhammad Rizky Pratama', nilaiAwal: 60, bentuk: 'Latihan pengisian kalimat rumpang dan swasunting mandiri', nilaiAkhir: 76, status: 'Tuntas' },
                    { nama: 'Dewi Lestari Anggraeni', nilaiAwal: 62, bentuk: 'Penugasan terarah membuat paragraf deskripsi objek rumah', nilaiAkhir: 82, status: 'Tuntas' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-1.5 text-center font-bold">{idx + 1}</td>
                      <td className="border border-slate-300 p-1.5 font-semibold text-slate-900">{row.nama}</td>
                      <td className="border border-slate-300 p-1.5 text-center text-rose-600 font-bold">{row.nilaiAwal}</td>
                      <td className="border border-slate-300 p-1.5 text-slate-700">{row.bentuk}</td>
                      <td className="border border-slate-300 p-1.5 text-center text-emerald-800 font-bold">{row.nilaiAkhir}</td>
                      <td className="border border-slate-300 p-1.5 text-center font-semibold text-emerald-700 bg-emerald-50/50">
                        {row.status}
                      </td>
                    </tr>
                  ))}
                  {/* Empty rows for real manual print filling */}
                  {[5, 6].map((num) => (
                    <tr key={num} className="h-7 text-slate-400">
                      <td className="border border-slate-300 p-1.5 text-center">{num}</td>
                      <td className="border border-slate-300 p-1.5"></td>
                      <td className="border border-slate-300 p-1.5"></td>
                      <td className="border border-slate-300 p-1.5"></td>
                      <td className="border border-slate-300 p-1.5"></td>
                      <td className="border border-slate-300 p-1.5"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 2. PROGRAM PENGAYAAN */}
        <section className="mb-6 page-break">
          <div className="flex items-center justify-between border-b border-emerald-300 pb-1.5 mb-3">
            <h3 className="text-sm font-bold uppercase text-emerald-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-700 print:hidden" />
              II. PROGRAM PENGAYAAN SISWA BERPENCAPAIAN TINGGI (HIGH ACHIEVERS)
            </h3>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Kriteria Nilai: ≥ 86 (Kategori Sangat Mahir)
            </span>
          </div>

          <div className="bg-emerald-50/40 p-3 rounded-lg border border-emerald-200 text-xs mb-3 space-y-1">
            <p><strong className="text-emerald-950">Target Sasaran:</strong> {data.pengayaan.targetSiswa}</p>
            <p><strong className="text-emerald-950">Tujuan Pengayaan:</strong> {data.pengayaan.tujuanPengayaan}</p>
          </div>

          <div className="space-y-3 mb-4">
            <h4 className="text-xs font-bold text-slate-800 uppercase">
              Rencana Aktivitas Tantangan Kreatif:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {data.pengayaan.aktivitasTantangan.map((act, i) => (
                <div key={i} className="border border-slate-300 rounded-lg p-3 bg-white avoid-break">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
                    <h5 className="font-bold text-emerald-800 flex items-center gap-1.5">
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" /> {act.judul}
                    </h5>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-2 text-[11px]">{act.deskripsi}</p>
                  <div className="bg-slate-50 p-2 rounded border border-slate-200 text-[10px]">
                    <strong className="text-slate-900 block">Bentuk Output / Portofolio:</strong>
                    <span className="text-emerald-800 font-medium">{act.output}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Jurnal Rekapitulasi Pengayaan */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase mb-2">
              Jurnal Pelaksanaan Tantangan Pengayaan:
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100 text-slate-800">
                    <th className="border border-slate-300 p-1.5 w-8 text-center">No</th>
                    <th className="border border-slate-300 p-1.5 w-48">Nama Peserta Didik</th>
                    <th className="border border-slate-300 p-1.5 w-16 text-center">Nilai Asal</th>
                    <th className="border border-slate-300 p-1.5">Bentuk Aktivitas Pengayaan</th>
                    <th className="border border-slate-300 p-1.5 w-32">Karya / Portofolio</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { nama: 'Nadia Azzahra Putri', nilai: 94, aktivitas: 'Menyusun naskah ulasan deskripsi mendalam Benteng Rotterdam', karya: 'Artikel Siap Mading Digital' },
                    { nama: 'Rehan Aditya Pratama', nilai: 90, aktivitas: 'Memproduksi video narasi deskripsi monolog estetika alam bukit', karya: 'Video Vlog Edukasi 90 Detik' },
                    { nama: 'Clarissa Zahra Maharani', nilai: 92, aktivitas: 'Menjadi tutor sebaya klinik bahasa dan menulis puisi deskriptif', karya: 'Antologi Deskripsi Kelas' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="border border-slate-300 p-1.5 text-center font-bold">{idx + 1}</td>
                      <td className="border border-slate-300 p-1.5 font-semibold text-slate-900">{row.nama}</td>
                      <td className="border border-slate-300 p-1.5 text-center text-emerald-800 font-bold">{row.nilai}</td>
                      <td className="border border-slate-300 p-1.5 text-slate-700">{row.aktivitas}</td>
                      <td className="border border-slate-300 p-1.5 text-slate-800 font-medium">{row.karya}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tanda Tangan Pengesahan */}
        <SignatureBlock profile={profile} tanggalDokumen={`${profile.kotaKabupaten}, 14 Juli 2025`} />
      </div>
    </div>
  );
};
