import React, { useState } from 'react';
import { SchoolProfile } from '../../types/curriculum';
import { DocumentHeader } from '../DocumentHeader';
import { SignatureBlock } from '../SignatureBlock';
import {
  Wand2,
  Sparkles,
  Printer,
  Copy,
  Check,
  RefreshCw,
  BookOpen,
  Send,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

interface TabAIGeneratorProps {
  profile: SchoolProfile;
  onPrint: () => void;
}

export const TabAIGenerator: React.FC<TabAIGeneratorProps> = ({ profile, onPrint }) => {
  const [materiInput, setMateriInput] = useState<string>('Teks Cerita Fantasi Berkelana di Semesta Waktu');
  const [elemenPilihan, setElemenPilihan] = useState<string>('Membaca dan Memirsa & Menulis');
  const [modelPilihan, setModelPilihan] = useState<string>('Problem-Based Learning dipadu Deep Learning (Mindful, Meaningful, Joyful)');
  const [konteksLokal, setKonteksLokal] = useState<string>('Mitologi Nusantara & Konservasi Hutan Tropis Indonesia');
  const [copied, setCopied] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Dynamic state for generated content
  const [generatedModul, setGeneratedModul] = useState({
    judul: 'Teks Cerita Fantasi: Berkelana Menembus Waktu untuk Bumi Nusantara',
    alokasi: '6 JP (3 Pertemuan x 2 JP)',
    elemen: 'Membaca dan Memirsa & Menulis',
    tujuan: [
      'Menganalisis unsur intrinsik (alur kilas balik, perwatakan tokoh multidimensi, dan latar semesta fiksi) pada teks cerita fantasi bertema lingkungan hidup.',
      'Membedakan unsur fantasi total dan fantasi irisan yang berakar pada legenda kearifan lokal.',
      'Memproduksi teks cerita fantasi orisinal dengan memanfaatkan dialog ekspresif dan konjungsi kronologis sesuai kaidah EYD V.',
    ],
    pemahamanBermakna:
      'Imajinasi adalah sayap nurani: melalui cerita fantasi, kita dapat memvisualisasikan dampak krisis lingkungan masa kini terhadap masa depan serta menginspirasi tindakan nyata pelestarian alam.',
    pertanyaanPemantik: [
      'Bagaimana jika kamu menemukan sebuah gerbang waktu di bawah pohon beringin tua sekolahmu yang membawamu ke Indonesia pada tahun 2150?',
      'Mengapa cerita dengan keajaiban supranatural sering kali justru menyampaikan pesan moral kemanusiaan yang paling menyentuh hati?',
    ],
    deepLearning: {
      meaningful: 'Mengaitkan konflik fantasi dengan keresahan nyata peserta didik tentang perubahan iklim dan kepunahan satwa endemik.',
      mindful: 'Latihan visualisasi imajinatif (Creative Mindfulness): siswa memejamkan mata selama 2 menit dan melukiskan dalam benak rupa makhluk mitologi penjaga hutan.',
      joyful: 'Gim "Peta Petualangan Imajinasi" dan unjuk gelar pembacaan cerpen fiksi bersuara dramatis di depan kelas.',
    },
    sintaksPBL: [
      {
        tahap: 'Orientasi Masalah',
        kegiatan: 'Menyimak narasi awal tentang kepunahan sumber mata air abadi dan kemunculan makhluk misterius penjaga hutan lindung.',
      },
      {
        tahap: 'Pengorganisasian Belajar',
        kegiatan: 'Membentuk kelompok fiksi untuk merumuskan hukum alam di semesta cerita fantasi buatan masing-masing.',
      },
      {
        tahap: 'Penyelidikan Kreatif',
        kegiatan: 'Menyusun kerangka alur (orientasi, komplikasi beruntun, resolusi bermakna) dan watak tokoh protagonis-antagonis.',
      },
      {
        tahap: 'Pengembangan Karya',
        kegiatan: 'Menulis naskah cerita fiksi utuh dengan tata tulis dialog bertanda petik ganda yang cermat.',
      },
      {
        tahap: 'Evaluasi & Refleksi',
        kegiatan: 'Saling membaca cerpen dalam festival literasi kelas dan memberikan umpan balik bintang apresiasi.',
      },
    ],
    asesmen: {
      formatif: 'Lembar observasi orisinalitas ide cerita dan rubrik analitik kepaduan alur.',
      sumatif: 'Produksi cerpen fantasi orisinal (minimal 500 kata) yang dipublikasikan dalam e-mading sekolah.',
    },
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedModul({
        judul: materiInput,
        alokasi: '6 JP (3 Pertemuan x 2 JP)',
        elemen: elemenPilihan,
        tujuan: [
          `Menganalisis karakteristik, struktur, dan ciri kebahasaan esensial dari ${materiInput} secara kritis dan mendalam.`,
          `Mengevaluasi gagasan dan pesan akurat yang tersurat maupun tersirat dengan mengangkat ${konteksLokal}.`,
          `Menyusun produk karya kontekstual bermutu tinggi yang memadukan kreativitas dan kaidah kebahasaan EYD V.`,
        ],
        pemahamanBermakna: `Mempelajari ${materiInput} memperluas cakrawala berpikir bernalar kritis serta menumbuhkan empati dan kecintaan mendalam terhadap nilai kearifan lokal.`,
        pertanyaanPemantik: [
          `Bagaimana ${materiInput} dapat menjadi sarana komunikasi paling efektif dalam menyuarakan gagasan generasi muda?`,
          `Mengapa pemahaman terhadap ${konteksLokal} sangat berharga bagi pembentukan identitas diri dan kepedulian sosial kita?`,
        ],
        deepLearning: {
          meaningful: `Mengontekstualisasikan materi dengan pengalaman nyata keseharian peserta didik dan kekayaan budaya daerah ${profile.kotaKabupaten}.`,
          mindful: `Menumbuhkan fokus penuh perhatian terhadap rincian diksi, struktur logika berpikir, dan resonansi emosional teks.`,
          joyful: `Menciptakan ruang berekspresi yang aman, dinamis, kolaboratif, serta merayakan setiap keunikan gagasan siswa.`,
        },
        sintaksPBL: [
          { tahap: 'Tahap 1: Orientasi Eksplorasi Masalah', kegiatan: `Mengamati stimulus multimedia autentik terkait ${materiInput}.` },
          { tahap: 'Tahap 2: Pengorganisasian Kelompok Inkuiri', kegiatan: `Membedah struktur teks dan memetakan kata kunci konsep.` },
          { tahap: 'Tahap 3: Investigasi & Pendampingan Bertingkat', kegiatan: `Melakukan perancangan draf karya dengan bantuan panduan scaffolding.` },
          { tahap: 'Tahap 4: Gelar Karya (Showcase & Peer Review)', kegiatan: `Menyajikan hasil karya secara multimodal dan saling memberi masukan konstruktif.` },
          { tahap: 'Tahap 5: Refleksi & Penarikan Kesimpulan Makna', kegiatan: `Menyimpulkan kaidah utama dan menyusun komitmen perbaikan literasi berkelanjutan.` },
        ],
        asesmen: {
          formatif: `Rubrik kinerja proses bernalar kritis dan unjuk kerja kolaborasi kelompok.`,
          sumatif: `Uji pemahaman komprehensif berbasis stimulus HOTS serta penilaian autentik produk akhir ${materiInput}.`,
        },
      });
      setIsGenerating(false);
    }, 600);
  };

  const handleCopyMarkdown = () => {
    let md = `# MODUL AJAR HASIL GENERATOR CP 020/2026\n`;
    md += `Judul: ${generatedModul.judul}\nAlokasi: ${generatedModul.alokasi}\nElemen: ${generatedModul.elemen}\n\n`;
    md += `## Tujuan Pembelajaran:\n`;
    generatedModul.tujuan.forEach((t) => (md += `- ${t}\n`));
    md += `\n## Pemahaman Bermakna:\n${generatedModul.pemahamanBermakna}\n\n`;
    md += `## Langkah Pembelajaran PBL:\n`;
    generatedModul.sintaksPBL.forEach((s) => (md += `- **${s.tahap}:** ${s.kegiatan}\n`));

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Interactive Generator Form (no-print) */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-4 no-print">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
              <Wand2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Generator & Penyesuai Modul Ajar (CP 020/2026)
              </h3>
              <p className="text-xs text-slate-500">
                Sesuaikan bab, kearifan lokal, dan pendekatan Deep Learning untuk menghasilkan RPK instan siap pakai
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Standar BSKAP 020/2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Materi / Bab Pokok</label>
            <input
              type="text"
              value={materiInput}
              onChange={(e) => setMateriInput(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Contoh: Teks Cerita Fantasi..."
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Elemen CP Terkait</label>
            <select
              value={elemenPilihan}
              onChange={(e) => setElemenPilihan(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="Membaca dan Memirsa & Menulis">Membaca/Memirsa & Menulis</option>
              <option value="Menyimak & Berbicara">Menyimak & Berbicara/Presentasi</option>
              <option value="Empat Elemen Terpadu (Menyimak, Membaca, Berbicara, Menulis)">4 Elemen Terpadu</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Konteks / Kearifan Lokal (CRT)</label>
            <input
              type="text"
              value={konteksLokal}
              onChange={(e) => setKonteksLokal(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Contoh: Kuliner Tradisional Makassar..."
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Aksi Cepat Generator</label>
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-2 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg shadow-sm hover:shadow flex items-center justify-center gap-1.5 transition-all text-xs"
            >
              {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              {isGenerating ? 'Memproses...' : 'Terapkan & Buat Modul'}
            </button>
          </div>
        </div>

        {/* Preset Cepat Bab Bahasa Indonesia */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
          <span className="text-slate-500 font-medium">Pilihan Cepat Bab:</span>
          {[
            'Bab 1: Teks Deskripsi Alam Nusantara',
            'Bab 2: Teks Cerita Fantasi Semesta Waktu',
            'Bab 3: Puisi Rakyat Pantun & Gurindam',
            'Bab 4: Teks Prosedur Kreasi Hidup Sehat',
            'Bab 5: Teks Berita Fakta-Opini Digital',
            'Bab 6: Surat Pribadi & Surat Dinas Sekolah',
          ].map((preset) => (
            <button
              key={preset}
              onClick={() => {
                setMateriInput(preset);
                handleGenerate();
              }}
              className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 rounded-md border border-slate-200 transition-colors text-[11px]"
            >
              {preset.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Generated Official Output Layout */}
      <div className="bg-white p-6 md:p-10 rounded-xl border border-slate-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <div className="flex justify-between items-center mb-4 no-print border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              Pratinjau Dokumen Hasil Penyesuaian
            </span>
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
              <Printer className="w-3.5 h-3.5" /> Cetak Modul Ini
            </button>
          </div>
        </div>

        <DocumentHeader
          profile={profile}
          judulDokumen="MODUL AJAR / RENCANA PEMBELAJARAN KRITIS (RPK)"
          subJudul={generatedModul.judul}
          nomorDokumen="421.3 / 109 / RPK-AI / 2026"
        />

        {/* Informasi Pokok */}
        <div className="border border-slate-300 rounded-lg p-3 bg-slate-50 text-xs mb-4 grid grid-cols-2 md:grid-cols-4 gap-2 avoid-break">
          <div>
            <span className="text-slate-500 block">Alokasi Waktu:</span>
            <span className="font-bold text-slate-800">{generatedModul.alokasi}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Elemen Capaian:</span>
            <span className="font-bold text-emerald-800">{generatedModul.elemen}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Pendekatan:</span>
            <span className="font-bold text-slate-800">Deep Learning (3 Pilar)</span>
          </div>
          <div>
            <span className="text-slate-500 block">Kearifan Lokal:</span>
            <span className="font-bold text-slate-800">{konteksLokal}</span>
          </div>
        </div>

        {/* Komponen Inti */}
        <div className="space-y-4 text-xs mb-6">
          <div className="border border-slate-200 rounded p-3 bg-white avoid-break">
            <h4 className="font-bold text-emerald-900 mb-1.5 uppercase">Tujuan Pembelajaran (TP)</h4>
            <ul className="list-disc pl-5 space-y-1 text-slate-800">
              {generatedModul.tujuan.map((tp, idx) => (
                <li key={idx} className="leading-relaxed">{tp}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 avoid-break">
            <div className="border border-slate-200 rounded p-3 bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-1">Pemahaman Bermakna:</h4>
              <p className="text-slate-700 leading-relaxed">{generatedModul.pemahamanBermakna}</p>
            </div>
            <div className="border border-slate-200 rounded p-3 bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-1">Pertanyaan Pemantik:</h4>
              <ul className="list-disc pl-4 space-y-1 text-slate-700 italic">
                {generatedModul.pertanyaanPemantik.map((pp, idx) => (
                  <li key={idx}>"{pp}"</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3 Pilar Deep Learning */}
          <div className="border border-emerald-300 rounded p-3 bg-emerald-50/30 avoid-break">
            <h4 className="font-bold text-emerald-950 uppercase mb-2">
              Pendekatan Deep Learning & Culturally Responsive Teaching:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px]">
              <div className="bg-white p-2 rounded border border-emerald-200">
                <span className="font-bold text-emerald-800 block">Meaningful (Bermakna):</span>
                <p className="text-slate-600 mt-0.5">{generatedModul.deepLearning.meaningful}</p>
              </div>
              <div className="bg-white p-2 rounded border border-teal-200">
                <span className="font-bold text-teal-800 block">Mindful (Berkesadaran):</span>
                <p className="text-slate-600 mt-0.5">{generatedModul.deepLearning.mindful}</p>
              </div>
              <div className="bg-white p-2 rounded border border-amber-200">
                <span className="font-bold text-amber-800 block">Joyful (Menyenangkan):</span>
                <p className="text-slate-600 mt-0.5">{generatedModul.deepLearning.joyful}</p>
              </div>
            </div>
          </div>

          {/* Sintaks Pembelajaran */}
          <div className="border border-slate-200 rounded p-3 bg-white avoid-break">
            <h4 className="font-bold text-slate-900 mb-2 uppercase">
              Rancangan Aktivitas Sintaks Problem-Based Learning (PBL):
            </h4>
            <div className="space-y-2">
              {generatedModul.sintaksPBL.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-700">
                  <span className="w-5 h-5 rounded bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <strong className="text-slate-900">{step.tahap}:</strong> {step.kegiatan}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Asesmen */}
          <div className="border border-slate-200 rounded p-3 bg-slate-50 avoid-break">
            <h4 className="font-bold text-slate-900 mb-1.5 uppercase">Rencana Asesmen Formatif & Sumatif:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
              <div>
                <strong className="text-emerald-800 block">Asesmen Formatif:</strong>
                <span className="text-slate-700">{generatedModul.asesmen.formatif}</span>
              </div>
              <div>
                <strong className="text-emerald-800 block">Asesmen Sumatif:</strong>
                <span className="text-slate-700">{generatedModul.asesmen.sumatif}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pengesahan */}
        <SignatureBlock profile={profile} tanggalDokumen={`${profile.kotaKabupaten}, 14 Juli 2025`} />
      </div>
    </div>
  );
};
