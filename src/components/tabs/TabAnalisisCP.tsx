import React, { useState } from 'react';
import { SchoolProfile } from '../../types/curriculum';
import { DocumentHeader } from '../DocumentHeader';
import { SignatureBlock } from '../SignatureBlock';
import { ELEMEN_CP_020_2026, DAFTAR_TP_FASE_D, DAFTAR_ATP_FASE_D } from '../../data/cp020Data';
import { BookOpen, CheckCircle2, Layers, Search, Sparkles, Printer, Copy, Check } from 'lucide-react';

interface TabAnalisisCPProps {
  profile: SchoolProfile;
  onPrint: () => void;
}

export const TabAnalisisCP: React.FC<TabAnalisisCPProps> = ({ profile, onPrint }) => {
  const [selectedElemen, setSelectedElemen] = useState<string>('Semua');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const filteredTP = DAFTAR_TP_FASE_D.filter((tp) => {
    const matchElemen = selectedElemen === 'Semua' || tp.elemen.toLowerCase().includes(selectedElemen.toLowerCase());
    const matchSearch =
      tp.rumusanTP.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tp.materiPokok.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tp.kodeTP.toLowerCase().includes(searchTerm.toLowerCase());
    return matchElemen && matchSearch;
  });

  const handleCopyMarkdown = () => {
    let md = `# ANALISIS CAPAIAN PEMBELAJARAN (CP) NO. 020 TAHUN 2026\n`;
    md += `Mata Pelajaran: ${profile.mataPelajaran}\nFase / Kelas: ${profile.fase} / ${profile.kelas}\n\n`;
    md += `## 1. PETA 4 ELEMEN CP 020/2026\n`;
    ELEMEN_CP_020_2026.forEach((el) => {
      md += `### ${el.nama}\n${el.deskripsi}\n\n`;
    });
    md += `## 2. PENURUNAN CP MENJADI TUJUAN PEMBELAJARAN (TP)\n`;
    DAFTAR_TP_FASE_D.forEach((tp) => {
      md += `- **${tp.kodeTP}** (${tp.elemen} - ${tp.alokasiJP} JP): ${tp.rumusanTP}\n  Materi: ${tp.materiPokok}\n`;
    });

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Control bar (no-print) */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-600">Filter Elemen:</span>
          <div className="flex flex-wrap gap-1.5">
            {['Semua', 'Menyimak', 'Membaca dan Memirsa', 'Berbicara dan Mempresentasikan', 'Menulis'].map((el) => (
              <button
                key={el}
                onClick={() => setSelectedElemen(el)}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-all ${
                  selectedElemen === el
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {el}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              placeholder="Cari materi atau TP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 w-48 md:w-64"
            />
          </div>
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
            title="Salin ke format Markdown"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Tersalin' : 'Salin MD'}
          </button>
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs hover:shadow transition-all"
          >
            <Printer className="w-3.5 h-3.5" />
            Cetak Dokumen
          </button>
        </div>
      </div>

      {/* Main Document Content */}
      <div className="bg-white p-6 md:p-10 rounded-xl border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <DocumentHeader
          profile={profile}
          judulDokumen="ANALISIS CAPAIAN PEMBELAJARAN (CP) & PENURUNAN TP-ATP"
          subJudul="Berdasarkan Keputusan BSKAP Kemendikbudristek No. 020/H/KR/2026"
          nomorDokumen="421.3 / 102 / KUR / 2026"
        />

        {/* 1. Rasional & Karakteristik Mapel */}
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase text-emerald-900 border-b border-emerald-900/30 pb-1 mb-2.5 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-700 print:hidden" />
            I. PETA KONSEP EMPAT ELEMEN CAPAIAN PEMBELAJARAN (CP 020/2026)
          </h3>
          <p className="text-xs text-slate-700 leading-relaxed mb-4 text-justify">
            Mata pelajaran Bahasa Indonesia berfokus pada kemampuan literasi bernalar, berbahasa, dan bersastra secara kontekstual, kritis, dan berkesantunan. Capaian Pembelajaran No. 020/H/KR/2026 mengintegrasikan 4 elemen reseptif dan produktif yang saling bersinergi dalam menumbuhkan Profil Pelajar Pancasila:
          </p>

          {/* Grid 4 Elemen CP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {ELEMEN_CP_020_2026.map((elem, idx) => (
              <div
                key={elem.nama}
                className="border border-slate-300 rounded-lg p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors avoid-break"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-800 text-white flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    Elemen {elem.nama}
                  </h4>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    {elem.nama === 'Menyimak' || elem.nama === 'Membaca dan Memirsa' ? 'Reseptif' : 'Produktif'}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed text-justify mb-3 italic">
                  "{elem.deskripsi}"
                </p>
                <div className="border-t border-slate-200 pt-2 text-[11px] space-y-1">
                  <p className="font-semibold text-slate-900">Kompetensi Kunci:</p>
                  <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                    {elem.kompetensiKunci.map((k, i) => (
                      <li key={i}>{k}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Matriks Penurunan CP menjadi TP */}
        <div className="mb-6 page-break">
          <h3 className="text-sm font-bold uppercase text-emerald-900 border-b border-emerald-900/30 pb-1 mb-2.5 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-700 print:hidden" />
            II. MATRIKS PENURUNAN CP MENJADI TUJUAN PEMBELAJARAN (TP)
          </h3>
          <p className="text-xs text-slate-700 mb-3">
            Tujuan Pembelajaran diturunkan secara hierarkis mencakup aspek kompetensi, konten esensial, dan variasi keterampilan berpikir tingkat tinggi (HOTS):
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-300">
                  <th className="border border-slate-300 p-2 w-16 text-center">Kode</th>
                  <th className="border border-slate-300 p-2 w-32">Elemen CP</th>
                  <th className="border border-slate-300 p-2">Rumusan Tujuan Pembelajaran (TP)</th>
                  <th className="border border-slate-300 p-2 w-44">Materi Pokok</th>
                  <th className="border border-slate-300 p-2 w-28 text-center">Profil Pancasila</th>
                  <th className="border border-slate-300 p-2 w-14 text-center">JP</th>
                </tr>
              </thead>
              <tbody>
                {filteredTP.map((tp) => (
                  <tr key={tp.id} className="hover:bg-slate-50/80 avoid-break">
                    <td className="border border-slate-300 p-2 text-center font-bold text-emerald-800 font-mono">
                      {tp.kodeTP}
                    </td>
                    <td className="border border-slate-300 p-2 font-medium text-slate-700">
                      {tp.elemen}
                    </td>
                    <td className="border border-slate-300 p-2 text-slate-800 leading-relaxed">
                      {tp.rumusanTP}
                      <div className="mt-1.5 pl-2 border-l-2 border-emerald-400 text-[11px] text-slate-600">
                        <span className="font-semibold block text-slate-700">Indikator Ketercapaian:</span>
                        <ul className="list-disc pl-3">
                          {tp.indikatorKetercapaian.map((ind, i) => (
                            <li key={i}>{ind}</li>
                          ))}
                        </ul>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-2 text-slate-700">
                      {tp.materiPokok}
                    </td>
                    <td className="border border-slate-300 p-2 text-center text-[10px] text-slate-600">
                      {tp.profilPancasila.map((p, i) => (
                        <span key={i} className="inline-block bg-slate-100 px-1.5 py-0.5 rounded m-0.5 border border-slate-200">
                          {p}
                        </span>
                      ))}
                    </td>
                    <td className="border border-slate-300 p-2 text-center font-bold text-slate-900">
                      {tp.alokasiJP}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Alur Tujuan Pembelajaran (ATP) */}
        <div className="mb-6 avoid-break">
          <h3 className="text-sm font-bold uppercase text-emerald-900 border-b border-emerald-900/30 pb-1 mb-2.5 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-700 print:hidden" />
            III. ALUR TUJUAN PEMBELAJARAN (ATP) PER BAB & TOPIK
          </h3>
          <div className="space-y-3">
            {DAFTAR_ATP_FASE_D.map((atp) => (
              <div key={atp.no} className="border border-slate-300 rounded-lg p-3 bg-white avoid-break">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-800 text-white font-bold text-xs px-2.5 py-1 rounded">
                      {atp.bab}
                    </span>
                    <h4 className="text-xs md:text-sm font-bold text-slate-900">{atp.judulBab}</h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span className="font-semibold text-emerald-700">Semester {atp.semester}</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-bold">
                      {atp.alokasiJP} JP
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="md:col-span-2 space-y-1">
                    <span className="font-semibold text-slate-700">Rangkaian Alur Tujuan Pembelajaran:</span>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700">
                      {atp.tujuanPembelajaran.map((tp, idx) => (
                        <li key={idx}>{tp}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded border border-slate-200 space-y-1.5 text-[11px]">
                    <div>
                      <span className="font-semibold text-slate-700 block">Kata Kunci:</span>
                      <span className="text-slate-600">{atp.kataKunci.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700 block">Glosarium Singkat:</span>
                      {atp.glosarium.map((g, i) => (
                        <p key={i} className="text-slate-600">
                          <strong className="text-slate-800">{g.istilah}:</strong> {g.arti}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tanda Tangan Pengesahan */}
        <SignatureBlock profile={profile} tanggalDokumen={`${profile.kotaKabupaten}, 14 Juli 2025`} />
      </div>
    </div>
  );
};
