import React, { useState } from 'react';
import { SchoolProfile } from '../../types/curriculum';
import { DocumentHeader } from '../DocumentHeader';
import { SignatureBlock } from '../SignatureBlock';
import { BANK_SOAL_HOTS_BAB_1 } from '../../data/cp020Data';
import {
  FileCheck2,
  Printer,
  Copy,
  Check,
  Eye,
  EyeOff,
  Flame,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';

interface TabAsesmenSoalProps {
  profile: SchoolProfile;
  onPrint: () => void;
}

export const TabAsesmenSoal: React.FC<TabAsesmenSoalProps> = ({ profile, onPrint }) => {
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(true);
  const [userAnswers, setUserAnswers] = useState<{ [id: string]: string }>({});
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectAnswer = (soalId: string, label: string) => {
    setUserAnswers((prev) => ({ ...prev, [soalId]: label }));
  };

  const handleCopyMarkdown = () => {
    let md = `# KISI-KISI & BANK SOAL ASESMEN SUMATIF BERBASIS HOTS\n`;
    md += `Mata Pelajaran: ${profile.mataPelajaran}\nFase / Kelas: ${profile.fase} / ${profile.kelas}\n\n`;
    BANK_SOAL_HOTS_BAB_1.forEach((s) => {
      md += `### Soal No. ${s.no} (${s.tipe} - Level ${s.levelKognitif})\n`;
      md += `Indikator: ${s.indikatorSoal}\n\n`;
      md += `Stimulus:\n${s.stimulus}\n\n`;
      md += `Pertanyaan: ${s.pertanyaan}\n\n`;
      if (s.pilihanJawaban) {
        s.pilihanJawaban.forEach((p) => {
          md += `- ${p.label}. ${p.teks}\n`;
        });
        md += '\n';
      }
      md += `**Kunci Jawaban:** ${s.kunciJawaban}\n`;
      md += `**Pembahasan:** ${s.pembahasan}\n`;
      md += `**Pedoman Penskoran:** ${s.pedomanPenskoran}\n\n---\n\n`;
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
          <FileCheck2 className="w-5 h-5 text-emerald-700" />
          <div>
            <h3 className="font-bold text-sm text-slate-800">
              Instrumen Asesmen & Bank Soal Evaluasi HOTS
            </h3>
            <p className="text-xs text-slate-500">
              C4 (Menganalisis) • C5 (Mengevaluasi) • C6 (Mencipta) • Kisi-kisi & Rubrik Lengkap
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle Kunci Jawaban */}
          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              showAnswerKey
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-slate-100 text-slate-700 border border-slate-200'
            }`}
            title="Sembunyikan kunci jawaban untuk mencetak naskah ujian bagi siswa"
          >
            {showAnswerKey ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            {showAnswerKey ? 'Mode Guru (Kunci Aktif)' : 'Mode Siswa (Kunci Tersembunyi)'}
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Tersalin' : 'Salin Soal'}
          </button>
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs hover:shadow transition-all"
          >
            <Printer className="w-3.5 h-3.5" /> Cetak Lembar Asesmen
          </button>
        </div>
      </div>

      {/* Official Print Layout */}
      <div className="bg-white p-6 md:p-10 rounded-xl border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <DocumentHeader
          profile={profile}
          judulDokumen="KISI-KISI & NASKAH SOAL EVALUASI HOTS BAHASA INDONESIA"
          subJudul="Asesmen Sumatif Lingkup Materi Bab 1: Menyelami Pesona Teks Deskripsi"
          nomorDokumen="421.3 / 107 / EVAL / BI / 2026"
        />

        {/* Tabel Kisi-Kisi Soal HOTS */}
        <div className="mb-6 avoid-break">
          <h4 className="font-bold text-slate-900 uppercase text-xs mb-2 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-rose-600" /> A. MATRIKS KISI-KISI PENULISAN SOAL HOTS
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-300 p-1.5 w-10 text-center">No</th>
                  <th className="border border-slate-300 p-1.5 w-32">Elemen CP</th>
                  <th className="border border-slate-300 p-1.5">Indikator Soal & Bentuk Stimulus</th>
                  <th className="border border-slate-300 p-1.5 w-28 text-center">Level Kognitif</th>
                  <th className="border border-slate-300 p-1.5 w-24 text-center">Bentuk Soal</th>
                  <th className="border border-slate-300 p-1.5 w-12 text-center">Skor</th>
                </tr>
              </thead>
              <tbody>
                {BANK_SOAL_HOTS_BAB_1.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="border border-slate-300 p-1.5 text-center font-bold">{s.no}</td>
                    <td className="border border-slate-300 p-1.5 text-slate-700">{s.elemen}</td>
                    <td className="border border-slate-300 p-1.5 text-slate-800 leading-relaxed">{s.indikatorSoal}</td>
                    <td className="border border-slate-300 p-1.5 text-center font-semibold text-emerald-800">
                      {s.levelKognitif}
                    </td>
                    <td className="border border-slate-300 p-1.5 text-center text-slate-700">{s.tipe}</td>
                    <td className="border border-slate-300 p-1.5 text-center font-bold">
                      {s.tipe === 'Pilihan Ganda' ? '1' : s.tipe === 'Isian Singkat' ? '2' : '10'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Naskah Soal Lengkap */}
        <div className="mb-6 page-break">
          <div className="flex justify-between items-center mb-3 border-b border-slate-300 pb-2">
            <h4 className="font-bold text-slate-900 uppercase text-xs">
              B. BUTIR NASKAH SOAL EVALUASI MANDIRI
            </h4>
            <span className="text-[11px] text-slate-500 italic">
              Petunjuk: Kerjakan dengan jujur, cermat, dan bernalar kritis.
            </span>
          </div>

          <div className="space-y-6">
            {BANK_SOAL_HOTS_BAB_1.map((soal) => {
              const isSelected = userAnswers[soal.id];
              return (
                <div
                  key={soal.id}
                  className="border border-slate-300 rounded-lg p-4 bg-white avoid-break shadow-2xs"
                >
                  {/* Badge Nomor & Level */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center">
                        {soal.no}
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        Bentuk: {soal.tipe}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-rose-50 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded border border-rose-200">
                        {soal.levelKognitif}
                      </span>
                      <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded border border-slate-200">
                        Elemen: {soal.elemen}
                      </span>
                    </div>
                  </div>

                  {/* Stimulus Teks */}
                  <div className="bg-slate-50 p-3 rounded border border-slate-200 text-xs text-slate-800 font-serif-doc mb-3 leading-relaxed whitespace-pre-line italic">
                    {soal.stimulus}
                  </div>

                  {/* Pertanyaan */}
                  <p className="text-xs font-semibold text-slate-950 mb-3 leading-relaxed whitespace-pre-line">
                    {soal.pertanyaan}
                  </p>

                  {/* Opsi Pilihan Ganda (jika ada) */}
                  {soal.pilihanJawaban && (
                    <div className="space-y-2 mb-3 text-xs pl-2">
                      {soal.pilihanJawaban.map((pil) => {
                        const checked = isSelected === pil.label;
                        const isCorrect = showAnswerKey && soal.kunciJawaban === pil.label;

                        return (
                          <div
                            key={pil.label}
                            onClick={() => handleSelectAnswer(soal.id, pil.label)}
                            className={`flex items-start gap-2.5 p-2 rounded-lg cursor-pointer transition-all border ${
                              isCorrect
                                ? 'bg-emerald-50 border-emerald-400 font-medium text-emerald-950'
                                : checked
                                ? 'bg-slate-100 border-slate-400'
                                : 'hover:bg-slate-50 border-transparent'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 border ${
                                isCorrect
                                  ? 'bg-emerald-700 text-white border-emerald-700'
                                  : checked
                                  ? 'bg-slate-800 text-white border-slate-800'
                                  : 'bg-white text-slate-700 border-slate-300'
                              }`}
                            >
                              {pil.label}
                            </span>
                            <span className="leading-relaxed text-slate-800">{pil.teks}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Ruang Lembar Jawaban Siswa saat dicetak */}
                  {soal.tipe !== 'Pilihan Ganda' && !showAnswerKey && (
                    <div className="mt-3 pl-2 space-y-2">
                      <p className="text-[10px] text-slate-400 italic">Lembar Jawaban Peserta Didik:</p>
                      <div className="h-6 border-b border-slate-200"></div>
                      <div className="h-6 border-b border-slate-200"></div>
                      {soal.tipe === 'Uraian (Essay)' && (
                        <>
                          <div className="h-6 border-b border-slate-200"></div>
                          <div className="h-6 border-b border-slate-200"></div>
                          <div className="h-6 border-b border-slate-200"></div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Kunci Jawaban & Pembahasan Lengkap (Bisa Di-toggle) */}
                  {showAnswerKey && (
                    <div className="mt-3 p-3 bg-emerald-50/70 rounded-lg border border-emerald-200 text-xs space-y-1.5 avoid-break font-sans">
                      <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                        <CheckCircle className="w-4 h-4 text-emerald-700" />
                        <span>Kunci Jawaban Resmi:</span>
                        <span className="bg-emerald-700 text-white px-2 py-0.5 rounded text-[11px]">
                          {soal.kunciJawaban}
                        </span>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-[11px]">
                        <strong className="text-slate-900">Pembahasan Pedagogis:</strong> {soal.pembahasan}
                      </p>
                      <p className="text-slate-600 text-[11px] border-t border-emerald-200/60 pt-1.5 whitespace-pre-line">
                        <strong className="text-slate-900">Pedoman Penskoran:</strong> {soal.pedomanPenskoran}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tanda Tangan Pengesahan */}
        <SignatureBlock profile={profile} tanggalDokumen={`${profile.kotaKabupaten}, 14 Juli 2025`} />
      </div>
    </div>
  );
};
