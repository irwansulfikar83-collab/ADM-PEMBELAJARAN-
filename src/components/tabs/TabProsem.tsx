import React, { useState } from 'react';
import { SchoolProfile } from '../../types/curriculum';
import { DocumentHeader } from '../DocumentHeader';
import { SignatureBlock } from '../SignatureBlock';
import { PROSEM_SEMESTER_1, PROSEM_SEMESTER_2 } from '../../data/cp020Data';
import { CalendarRange, Printer, Copy, Check } from 'lucide-react';

interface TabProsemProps {
  profile: SchoolProfile;
  onPrint: () => void;
}

export const TabProsem: React.FC<TabProsemProps> = ({ profile, onPrint }) => {
  const [selectedSemester, setSelectedSemester] = useState<1 | 2>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const monthsSem1 = [
    { name: 'Juli', weeks: [1, 2, 3, 4] },
    { name: 'Agustus', weeks: [1, 2, 3, 4, 5] },
    { name: 'September', weeks: [1, 2, 3, 4] },
    { name: 'Oktober', weeks: [1, 2, 3, 4, 5] },
    { name: 'November', weeks: [1, 2, 3, 4] },
    { name: 'Desember', weeks: [1, 2, 3, 4] },
  ];

  const monthsSem2 = [
    { name: 'Januari', weeks: [1, 2, 3, 4, 5] },
    { name: 'Februari', weeks: [1, 2, 3, 4] },
    { name: 'Maret', weeks: [1, 2, 3, 4, 5] },
    { name: 'April', weeks: [1, 2, 3, 4] },
    { name: 'Mei', weeks: [1, 2, 3, 4, 5] },
    { name: 'Juni', weeks: [1, 2, 3, 4] },
  ];

  const currentMonths = selectedSemester === 1 ? monthsSem1 : monthsSem2;
  const currentData = selectedSemester === 1 ? PROSEM_SEMESTER_1 : PROSEM_SEMESTER_2;
  const totalJP = currentData.reduce((acc, c) => acc + c.alokasiJP, 0);

  const handleCopyMarkdown = () => {
    let md = `# PROGRAM SEMESTER (PROSEM) - SEMESTER ${selectedSemester === 1 ? '1 (GANJIL)' : '2 (GENAP)'}\n`;
    md += `Satuan Pendidikan: ${profile.namaSekolah}\n`;
    md += `Mata Pelajaran: ${profile.mataPelajaran}\n`;
    md += `Fase / Kelas: ${profile.fase} / ${profile.kelas}\n\n`;
    currentData.forEach((item) => {
      md += `### ${item.no}. ${item.tujuanPembelajaran} (${item.alokasiJP} JP)\n`;
      md += `Materi Pokok: ${item.materiPokok}\n\n`;
    });

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls (no-print) */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-3">
          <CalendarRange className="w-5 h-5 text-emerald-700" />
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setSelectedSemester(1)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedSemester === 1
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semester 1 (Ganjil)
            </button>
            <button
              onClick={() => setSelectedSemester(2)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedSemester === 2
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semester 2 (Genap)
            </button>
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
      <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <DocumentHeader
          profile={profile}
          judulDokumen={`PROGRAM SEMESTER (PROSEM) ${selectedSemester === 1 ? 'GANJIL' : 'GENAP'}`}
          subJudul={`Tahun Pelajaran ${profile.tahunAjaran} • Alokasi Efektif ${totalJP} JP`}
          nomorDokumen={`421.3 / 104 / KUR / ${selectedSemester === 1 ? 'I' : 'II'} / 2026`}
        />

        {/* Legend / Keterangan Warna */}
        <div className="mb-4 flex flex-wrap items-center gap-4 text-[11px] text-slate-600 font-sans avoid-break">
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 bg-emerald-700 text-white rounded text-[10px] font-bold flex items-center justify-center">4</span>
            <span>Jam Pelajaran (JP) Tatap Muka</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 bg-amber-500 text-white rounded text-[9px] font-bold flex items-center justify-center">STS</span>
            <span>Sumatif Tengah Semester</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-4 bg-rose-500 text-white rounded text-[9px] font-bold flex items-center justify-center">SAS</span>
            <span>Sumatif Akhir Semester / Rapor</span>
          </div>
        </div>

        {/* Tabel Distribusi Mingguan Matriks Kalender */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left text-[11px] border-collapse border border-slate-400">
            <thead>
              {/* Baris 1: Bulan Header */}
              <tr className="bg-slate-200 text-slate-900 border-b border-slate-400 text-center font-bold">
                <th rowSpan={2} className="border border-slate-400 p-1.5 w-8">No</th>
                <th rowSpan={2} className="border border-slate-400 p-1.5 w-60">Tujuan Pembelajaran & Materi Pokok</th>
                <th rowSpan={2} className="border border-slate-400 p-1.5 w-12">JP</th>
                {currentMonths.map((m) => (
                  <th
                    key={m.name}
                    colSpan={m.weeks.length}
                    className="border border-slate-400 p-1 uppercase tracking-wider text-[10px]"
                  >
                    {m.name}
                  </th>
                ))}
              </tr>
              {/* Baris 2: Minggu Header (1, 2, 3, 4...) */}
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-400 text-center font-semibold">
                {currentMonths.map((m) =>
                  m.weeks.map((w) => (
                    <th key={`${m.name}-${w}`} className="border border-slate-400 p-1 w-6 text-[10px]">
                      {w}
                    </th>
                  ))
                )}
              </tr>
            </thead>
            <tbody>
              {currentData.map((row) => (
                <tr key={row.no} className="hover:bg-slate-50 avoid-break">
                  <td className="border border-slate-400 p-1.5 text-center font-bold text-slate-700">{row.no}</td>
                  <td className="border border-slate-400 p-1.5">
                    <p className="font-semibold text-slate-900">{row.tujuanPembelajaran}</p>
                    <p className="text-[10px] text-slate-600 italic">{row.materiPokok}</p>
                  </td>
                  <td className="border border-slate-400 p-1.5 text-center font-bold text-emerald-800">
                    {row.alokasiJP}
                  </td>
                  {/* Grid Minggu */}
                  {currentMonths.map((m) =>
                    m.weeks.map((w) => {
                      const key = `${m.name}-${w}`;
                      const val = row.distribusiMinggu[key];
                      return (
                        <td
                          key={key}
                          className={`border border-slate-400 p-1 text-center font-bold text-[10px] ${
                            val
                              ? val === 4
                                ? 'bg-emerald-700 text-white'
                                : 'bg-emerald-600 text-white'
                              : ''
                          }`}
                        >
                          {val || ''}
                        </td>
                      );
                    })
                  )}
                </tr>
              ))}
              {/* Total Row */}
              <tr className="bg-slate-100 font-extrabold text-slate-900">
                <td colSpan={2} className="border border-slate-400 p-1.5 text-right uppercase">
                  Jumlah Jam Pelajaran Efektif:
                </td>
                <td className="border border-slate-400 p-1.5 text-center text-emerald-900 font-bold">
                  {totalJP}
                </td>
                {currentMonths.map((m) =>
                  m.weeks.map((w) => {
                    const key = `${m.name}-${w}`;
                    const weekTotal = currentData.reduce((acc, row) => acc + (row.distribusiMinggu[key] || 0), 0);
                    return (
                      <td key={key} className="border border-slate-400 p-1 text-center text-[10px] text-emerald-900">
                        {weekTotal > 0 ? weekTotal : ''}
                      </td>
                    );
                  })
                )}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tanda Tangan Pengesahan */}
        <SignatureBlock
          profile={profile}
          tanggalDokumen={selectedSemester === 1 ? `${profile.kotaKabupaten}, 14 Juli 2025` : `${profile.kotaKabupaten}, 5 Januari 2026`}
        />
      </div>
    </div>
  );
};
