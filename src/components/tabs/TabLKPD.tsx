import React, { useState } from 'react';
import { SchoolProfile } from '../../types/curriculum';
import { DocumentHeader } from '../DocumentHeader';
import { LKPD_BAB_1 } from '../../data/cp020Data';
import { BookMarked, Printer, Copy, Check, Users, Sparkles, HelpCircle } from 'lucide-react';

interface TabLKPDProps {
  profile: SchoolProfile;
  onPrint: () => void;
}

export const TabLKPD: React.FC<TabLKPDProps> = ({ profile, onPrint }) => {
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');
  const [copied, setCopied] = useState<boolean>(false);
  const lkpd = LKPD_BAB_1;

  const handleCopyMarkdown = () => {
    let md = `# ${lkpd.judulLKPD}\n`;
    md += `Tujuan: ${lkpd.tujuanKegiatan}\n\n`;
    md += `## Teks Stimulus: ${lkpd.teksStimulus.judul}\n${lkpd.teksStimulus.isi}\n\n`;
    lkpd.diferensiasiTingkat.forEach((d) => {
      md += `### ${d.level}\n${d.deskripsi}\n`;
      d.tugas.forEach((t, i) => (md += `${i + 1}. ${t}\n`));
      md += '\n';
    });

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls (no-print) */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <BookMarked className="w-5 h-5 text-emerald-700" />
          <div>
            <h3 className="font-bold text-sm text-slate-800">Materi Ajar & LKPD Berdiferensiasi</h3>
            <p className="text-xs text-slate-500">
              {lkpd.bab} • Diferensiasi Berbasis Kesiapan Belajar (Proses, Produk, Konten)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs">
            <button
              onClick={() => setSelectedLevel('all')}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                selectedLevel === 'all' ? 'bg-emerald-700 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Level
            </button>
            <button
              onClick={() => setSelectedLevel(0)}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                selectedLevel === 0 ? 'bg-emerald-700 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kelompok A (Dasar)
            </button>
            <button
              onClick={() => setSelectedLevel(1)}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                selectedLevel === 1 ? 'bg-emerald-700 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kelompok B (Reguler)
            </button>
            <button
              onClick={() => setSelectedLevel(2)}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                selectedLevel === 2 ? 'bg-emerald-700 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kelompok C (HOTS)
            </button>
          </div>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Tersalin' : 'Salin LKPD'}
          </button>
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs hover:shadow transition-all"
          >
            <Printer className="w-3.5 h-3.5" /> Cetak LKPD
          </button>
        </div>
      </div>

      {/* Official Printable Sheet */}
      <div className="bg-white p-6 md:p-10 rounded-xl border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <DocumentHeader
          profile={profile}
          judulDokumen="LEMBAR KERJA PESERTA DIDIK (LKPD) BERDIFERENSIASI"
          subJudul={`${lkpd.bab}: Teks Deskripsi Kearifan Lokal Nusantara`}
          nomorDokumen="421.3 / 106 / LKPD / BI / 2026"
        />

        {/* Identitas Siswa pada Lembar Kerja */}
        <div className="border border-slate-300 rounded p-3 text-xs grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 bg-slate-50 font-sans avoid-break">
          <div>
            <span className="text-slate-500 block">Nama Anggota Kelompok:</span>
            <div className="h-4 border-b border-dotted border-slate-400 mt-1"></div>
          </div>
          <div>
            <span className="text-slate-500 block">Kelas / Nomor Absen:</span>
            <div className="h-4 border-b border-dotted border-slate-400 mt-1"></div>
          </div>
          <div>
            <span className="text-slate-500 block">Tanggal Pengerjaan:</span>
            <div className="h-4 border-b border-dotted border-slate-400 mt-1"></div>
          </div>
          <div>
            <span className="text-slate-500 block">Kategori Tingkat:</span>
            <span className="font-bold text-emerald-800">
              {selectedLevel === 'all' ? 'Tiga Tingkat Diferensiasi' : lkpd.diferensiasiTingkat[selectedLevel].level}
            </span>
          </div>
        </div>

        {/* Ringkasan Materi & Petunjuk */}
        <div className="mb-4 text-xs space-y-2 avoid-break">
          <div className="bg-emerald-50/50 p-3 rounded border border-emerald-200">
            <h4 className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-700" /> Tujuan Pembelajaran:
            </h4>
            <p className="text-slate-700 leading-relaxed">{lkpd.tujuanKegiatan}</p>
          </div>

          <div className="bg-slate-50 p-3 rounded border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-slate-600" /> Petunjuk Pengerjaan:
            </h4>
            <ul className="list-disc pl-5 space-y-0.5 text-slate-700">
              {lkpd.petunjukUmum.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Teks Stimulus Autentik */}
        <div className="mb-6 border-2 border-slate-300 rounded-lg p-4 bg-amber-50/20 avoid-break font-serif-doc">
          <div className="text-center mb-3">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full font-sans">
              Teks Stimulus Bacaan Multimodal
            </span>
            <h3 className="text-base font-bold text-slate-900 mt-1">
              {lkpd.teksStimulus.judul}
            </h3>
            <p className="text-[11px] text-slate-500 italic font-sans">
              Sumber: {lkpd.teksStimulus.sumber}
            </p>
          </div>

          <div className="text-xs text-slate-800 leading-relaxed text-justify space-y-2 whitespace-pre-line border-t border-slate-200 pt-3">
            {lkpd.teksStimulus.isi}
          </div>
        </div>

        {/* Lembar Tugas Berdiferensiasi */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase text-slate-900 tracking-wider flex items-center gap-1.5">
            <Users className="w-4 h-4 text-emerald-700" /> TUGAS KERJA KELOMPOK SESUAI KESIAPAN BELAJAR
          </h4>

          {lkpd.diferensiasiTingkat.map((tingkat, idx) => {
            if (selectedLevel !== 'all' && selectedLevel !== idx) return null;

            return (
              <div
                key={idx}
                className="border-2 border-slate-300 rounded-lg p-4 bg-white avoid-break shadow-2xs"
              >
                <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-2 mb-3 gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded text-white ${
                        idx === 0 ? 'bg-teal-700' : idx === 1 ? 'bg-emerald-700' : 'bg-indigo-700'
                      }`}
                    >
                      {tingkat.level}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 italic">
                    {tingkat.deskripsi}
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  {tingkat.tugas.map((t, i) => (
                    <div key={i} className="space-y-1">
                      <p className="font-semibold text-slate-800 flex items-start gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5 font-bold">
                          {i + 1}
                        </span>
                        <span>{t}</span>
                      </p>
                      {/* Blank writing lines for student response in print */}
                      <div className="pl-6 space-y-1.5 pt-1">
                        <div className="h-5 border-b border-slate-200"></div>
                        <div className="h-5 border-b border-slate-200"></div>
                        {i === tingkat.tugas.length - 1 && (
                          <>
                            <div className="h-5 border-b border-slate-200"></div>
                            <div className="h-5 border-b border-slate-200"></div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rubrik Penilaian LKPD */}
        <div className="border border-slate-300 rounded-lg p-3 bg-slate-50 text-xs avoid-break mb-6">
          <h4 className="font-bold text-slate-900 mb-2">Rubrik Penilaian Unjuk Kerja LKPD</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-200 text-slate-800">
                  <th className="border border-slate-300 p-1.5 w-48">Kriteria Penilaian</th>
                  <th className="border border-slate-300 p-1.5">Sangat Baik (Skor 4)</th>
                  <th className="border border-slate-300 p-1.5">Baik (Skor 3)</th>
                  <th className="border border-slate-300 p-1.5">Cukup (Skor 2)</th>
                  <th className="border border-slate-300 p-1.5">Perlu Bimbingan (Skor 1)</th>
                </tr>
              </thead>
              <tbody>
                {lkpd.rubrikPenilaianLKPD.map((r, i) => (
                  <tr key={i} className="hover:bg-white">
                    <td className="border border-slate-300 p-1.5 font-semibold text-slate-900">{r.kriteria}</td>
                    <td className="border border-slate-300 p-1.5 text-slate-700">{r.skor4}</td>
                    <td className="border border-slate-300 p-1.5 text-slate-700">{r.skor3}</td>
                    <td className="border border-slate-300 p-1.5 text-slate-700">{r.skor2}</td>
                    <td className="border border-slate-300 p-1.5 text-slate-700">{r.skor1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lembar Catatan Guru & Paraf */}
        <div className="border border-slate-300 rounded p-3 text-xs grid grid-cols-2 gap-4 avoid-break">
          <div>
            <span className="font-semibold text-slate-700 block mb-1">Catatan Umpan Balik Guru:</span>
            <div className="h-14 border border-dashed border-slate-300 rounded bg-slate-50 p-1 text-[10px] text-slate-400">
              [Ruang komentar perbaikan dan apresiasi guru]
            </div>
          </div>
          <div className="flex justify-between items-end text-center px-4">
            <div>
              <p className="text-[11px] text-slate-500">Nilai Akhir</p>
              <div className="w-16 h-12 border-2 border-emerald-700 rounded flex items-center justify-center font-bold text-lg text-emerald-800">
                --
              </div>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 mb-8">Paraf Pendidik</p>
              <p className="font-semibold text-slate-800 text-[11px]">({profile.namaGuru})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
