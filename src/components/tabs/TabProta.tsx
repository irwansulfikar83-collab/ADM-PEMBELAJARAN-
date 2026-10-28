import React, { useState } from 'react';
import { SchoolProfile } from '../../types/curriculum';
import { DocumentHeader } from '../DocumentHeader';
import { SignatureBlock } from '../SignatureBlock';
import { PROTA_DATA } from '../../data/cp020Data';
import { Calendar, Printer, Copy, Check, Clock } from 'lucide-react';

interface TabProtaProps {
  profile: SchoolProfile;
  onPrint: () => void;
}

export const TabProta: React.FC<TabProtaProps> = ({ profile, onPrint }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const totalJPSemester1 = PROTA_DATA.filter((p) => p.semester === 1).reduce((acc, c) => acc + c.alokasiJP, 0);
  const totalJPSemester2 = PROTA_DATA.filter((p) => p.semester === 2).reduce((acc, c) => acc + c.alokasiJP, 0);
  const totalJPTahunan = totalJPSemester1 + totalJPSemester2;

  const handleCopyMarkdown = () => {
    let md = `# PROGRAM TAHUNAN (PROTA)\n`;
    md += `Satuan Pendidikan: ${profile.namaSekolah}\n`;
    md += `Mata Pelajaran: ${profile.mataPelajaran}\n`;
    md += `Fase / Kelas: ${profile.fase} / ${profile.kelas}\n`;
    md += `Tahun Pelajaran: ${profile.tahunAjaran}\n\n`;
    md += `| No | Bab / Lingkup Materi | Tujuan Pembelajaran | Alokasi JP | Semester |\n`;
    md += `|---|---|---|---|---|\n`;
    PROTA_DATA.forEach((item) => {
      md += `| ${item.no} | ${item.bab}: ${item.judulMateri} | ${item.tujuanPembelajaranRingkas} | ${item.alokasiJP} JP | Sem ${item.semester} |\n`;
    });
    md += `\n**Total Jam Pelajaran:** ${totalJPTahunan} JP\n`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar (no-print) */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-emerald-700" />
          <div>
            <h3 className="font-bold text-sm text-slate-800">Program Tahunan (PROTA) 1 Tahun Penuh</h3>
            <p className="text-xs text-slate-500">Tahun Pelajaran {profile.tahunAjaran} • Total Alokasi: {totalJPTahunan} JP</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Tersalin' : 'Salin Format'}
          </button>
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs hover:shadow transition-all"
          >
            <Printer className="w-3.5 h-3.5" /> Cetak Dokumen
          </button>
        </div>
      </div>

      {/* Official Print Layout */}
      <div className="bg-white p-6 md:p-10 rounded-xl border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <DocumentHeader
          profile={profile}
          judulDokumen="PROGRAM TAHUNAN (PROTA)"
          subJudul={`Tahun Pelajaran ${profile.tahunAjaran}`}
          nomorDokumen="421.3 / 103 / KUR / 2026"
        />

        {/* Perhitungan Jam Pelajaran */}
        <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-300 text-xs avoid-break">
          <h4 className="font-bold text-slate-800 uppercase mb-2 flex items-center gap-1.5 text-xs">
            <Clock className="w-4 h-4 text-emerald-700" />
            A. Rekapitulasi Alokasi Waktu Efektif Belajar
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Semester 1 (Ganjil)</span>
              <p className="font-bold text-slate-800 text-sm">18 Minggu Efektif</p>
              <p className="text-[11px] text-emerald-700 font-semibold">18 x 3-4 JP = {totalJPSemester1} JP</p>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Semester 2 (Genap)</span>
              <p className="font-bold text-slate-800 text-sm">18 Minggu Efektif</p>
              <p className="text-[11px] text-emerald-700 font-semibold">18 x 3-4 JP = {totalJPSemester2} JP</p>
            </div>
            <div className="bg-emerald-50 p-2.5 rounded border border-emerald-200">
              <span className="text-emerald-800 block text-[11px] font-medium">Total JP Pembelajaran Tahunan</span>
              <p className="font-extrabold text-emerald-900 text-base">{totalJPTahunan} Jam Pelajaran</p>
              <p className="text-[10px] text-emerald-700">Sesuai Permendikbudristek No. 12 Tahun 2024</p>
            </div>
          </div>
        </div>

        {/* Tabel Distribusi Program Tahunan */}
        <div className="mb-6">
          <h4 className="font-bold text-slate-800 uppercase mb-2 text-xs">
            B. Distribusi Jam Pelajaran per Lingkup Materi / Bab
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                  <th className="border border-slate-300 p-2 text-center w-12">No</th>
                  <th className="border border-slate-300 p-2 text-center w-24">Semester</th>
                  <th className="border border-slate-300 p-2 w-52">Bab / Lingkup Materi</th>
                  <th className="border border-slate-300 p-2">Tujuan Pembelajaran Inti</th>
                  <th className="border border-slate-300 p-2 text-center w-20">Alokasi</th>
                  <th className="border border-slate-300 p-2 w-44">Keterangan / Model</th>
                </tr>
              </thead>
              <tbody>
                {/* Semester 1 Section */}
                <tr className="bg-emerald-50/70 font-semibold text-emerald-950">
                  <td colSpan={6} className="border border-slate-300 p-2 uppercase tracking-wider text-[11px]">
                    SEMESTER 1 (GANJIL) - ALOKASI: {totalJPSemester1} JP
                  </td>
                </tr>
                {PROTA_DATA.filter((p) => p.semester === 1).map((item) => (
                  <tr key={item.no} className="hover:bg-slate-50 avoid-break">
                    <td className="border border-slate-300 p-2 text-center font-bold text-slate-700">{item.no}</td>
                    <td className="border border-slate-300 p-2 text-center font-medium">1 (Ganjil)</td>
                    <td className="border border-slate-300 p-2 font-semibold text-slate-900">{item.bab}: {item.judulMateri}</td>
                    <td className="border border-slate-300 p-2 text-slate-700 leading-relaxed">{item.tujuanPembelajaranRingkas}</td>
                    <td className="border border-slate-300 p-2 text-center font-bold text-emerald-800">{item.alokasiJP} JP</td>
                    <td className="border border-slate-300 p-2 text-slate-600 text-[11px]">{item.keterangan}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-bold">
                  <td colSpan={4} className="border border-slate-300 p-2 text-right">Subtotal Jam Pelajaran Semester 1:</td>
                  <td className="border border-slate-300 p-2 text-center text-emerald-800">{totalJPSemester1} JP</td>
                  <td className="border border-slate-300 p-2 text-slate-500 text-[11px]">Termasuk STS & SAS</td>
                </tr>

                {/* Semester 2 Section */}
                <tr className="bg-emerald-50/70 font-semibold text-emerald-950">
                  <td colSpan={6} className="border border-slate-300 p-2 uppercase tracking-wider text-[11px]">
                    SEMESTER 2 (GENAP) - ALOKASI: {totalJPSemester2} JP
                  </td>
                </tr>
                {PROTA_DATA.filter((p) => p.semester === 2).map((item) => (
                  <tr key={item.no} className="hover:bg-slate-50 avoid-break">
                    <td className="border border-slate-300 p-2 text-center font-bold text-slate-700">{item.no}</td>
                    <td className="border border-slate-300 p-2 text-center font-medium">2 (Genap)</td>
                    <td className="border border-slate-300 p-2 font-semibold text-slate-900">{item.bab}: {item.judulMateri}</td>
                    <td className="border border-slate-300 p-2 text-slate-700 leading-relaxed">{item.tujuanPembelajaranRingkas}</td>
                    <td className="border border-slate-300 p-2 text-center font-bold text-emerald-800">{item.alokasiJP} JP</td>
                    <td className="border border-slate-300 p-2 text-slate-600 text-[11px]">{item.keterangan}</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-bold">
                  <td colSpan={4} className="border border-slate-300 p-2 text-right">Subtotal Jam Pelajaran Semester 2:</td>
                  <td className="border border-slate-300 p-2 text-center text-emerald-800">{totalJPSemester2} JP</td>
                  <td className="border border-slate-300 p-2 text-slate-500 text-[11px]">Termasuk STS & SAT</td>
                </tr>

                {/* Grand Total */}
                <tr className="bg-emerald-100/60 font-extrabold text-emerald-950 text-xs">
                  <td colSpan={4} className="border border-slate-300 p-2.5 text-right uppercase">
                    TOTAL KESELURUHAN ALOKASI WAKTU 1 TAHUN:
                  </td>
                  <td className="border border-slate-300 p-2.5 text-center text-emerald-900 text-sm">
                    {totalJPTahunan} JP
                  </td>
                  <td className="border border-slate-300 p-2.5 text-[11px] text-emerald-900">
                    Tuntas 36 Minggu Efektif
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tanda Tangan Pengesahan */}
        <SignatureBlock profile={profile} tanggalDokumen={`${profile.kotaKabupaten}, 14 Juli 2025`} />
      </div>
    </div>
  );
};
