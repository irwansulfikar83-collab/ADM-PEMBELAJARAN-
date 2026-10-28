/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SchoolProfile } from './types/curriculum';
import { SchoolProfileModal } from './components/SchoolProfileModal';
import { TabAnalisisCP } from './components/tabs/TabAnalisisCP';
import { TabProta } from './components/tabs/TabProta';
import { TabProsem } from './components/tabs/TabProsem';
import { TabModulAjar } from './components/tabs/TabModulAjar';
import { TabLKPD } from './components/tabs/TabLKPD';
import { TabAsesmenSoal } from './components/tabs/TabAsesmenSoal';
import { TabRemedial } from './components/tabs/TabRemedial';
import { TabAIGenerator } from './components/tabs/TabAIGenerator';

import {
  BookOpen,
  Calendar,
  CalendarRange,
  FileText,
  BookMarked,
  FileCheck2,
  ShieldAlert,
  Wand2,
  Printer,
  Building2,
  GraduationCap,
  Download,
  Share2,
  Check,
  ChevronRight,
  Sparkles,
  Info,
} from 'lucide-react';

const DEFAULT_PROFILE: SchoolProfile = {
  namaSekolah: 'SMP Negeri 1 Merdeka Cendekia',
  npsn: '40301234',
  namaGuru: 'Irwan Sulfikar, S.Pd., M.Pd.',
  nipGuru: '19880512 201503 1 004',
  namaKepalaSekolah: 'Drs. H. Mulyadi, M.Pd.',
  nipKepalaSekolah: '19720315 199802 1 002',
  kotaKabupaten: 'Maros',
  provinsi: 'Sulawesi Selatan',
  tahunAjaran: '2025/2026',
  mataPelajaran: 'Bahasa Indonesia',
  fase: 'Fase D (SMP/MTs)',
  kelas: 'Kelas VII (Tujuh)',
  semester: 'Semester 1 & 2 (Penuh 1 Tahun)',
};

export default function App() {
  const [profile, setProfile] = useState<SchoolProfile>(() => {
    const saved = localStorage.getItem('siadmin_bi_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_PROFILE;
      }
    }
    return DEFAULT_PROFILE;
  });

  const [activeTab, setActiveTab] = useState<string>('cp');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('siadmin_bi_profile', JSON.stringify(profile));
  }, [profile]);

  const handlePrint = () => {
    window.print();
  };

  const handleExportWord = () => {
    // Generate a downloadable HTML/Word document
    const content = document.getElementById('printable-area')?.innerHTML || '';
    const html = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>Administrasi Pembelajaran Bahasa Indonesia - ${profile.namaSekolah}</title>
        <style>
          body { font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.3; }
          table { border-collapse: collapse; width: 100%; margin: 10px 0; }
          th, td { border: 1px solid #333; padding: 6px; font-size: 10pt; }
          th { background-color: #f2f2f2; }
          .no-print { display: none; }
        </style>
      </head>
      <body>
        ${content}
      </body>
      </html>
    `;
    const blob = new Blob(['\ufeff', html], {
      type: 'application/msword',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Administrasi_Bahasa_Indonesia_${activeTab.toUpperCase()}_${profile.kelas.replace(/\s+/g, '_')}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const handleResetProfile = () => {
    setProfile(DEFAULT_PROFILE);
    localStorage.removeItem('siadmin_bi_profile');
  };

  const navigationTabs = [
    { id: 'cp', label: '1. Analisis CP 020/2026', icon: BookOpen, desc: 'Peta 4 Elemen, TP & ATP' },
    { id: 'prota', label: '2. Program Tahunan', icon: Calendar, desc: 'Alokasi 108 JP 1 Tahun' },
    { id: 'prosem', label: '3. Program Semester', icon: CalendarRange, desc: 'Matriks Mingguan Ganjil & Genap' },
    { id: 'modul', label: '4. Modul Ajar / RPK', icon: FileText, desc: 'Deep Learning, CRT & PBL' },
    { id: 'lkpd', label: '5. Materi & LKPD', icon: BookMarked, desc: 'Diferensiasi A, B, C' },
    { id: 'asesmen', label: '6. Asesmen & Soal HOTS', icon: FileCheck2, desc: 'Kisi-kisi, PG, Isian & Uraian' },
    { id: 'remedial', label: '7. Remedial & Pengayaan', icon: ShieldAlert, desc: 'Intervensi & Tantangan Siswa' },
    { id: 'generator', label: '8. AI Generator Modul', icon: Wand2, desc: 'Kustomisasi Bab & Topik Lain' },
  ];

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      {/* 1. Global Announcement / Government Compliance Bar (no-print) */}
      <header className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white border-b border-emerald-800/40 no-print sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Logo & Application Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-sm sm:text-base tracking-tight text-white leading-tight">
                  Si-Admin Guru Bahasa Indonesia
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <Sparkles className="w-3 h-3 text-emerald-400" /> CP 020/H/KR/2026
                </span>
              </div>
              <p className="text-[11px] text-emerald-200/80 hidden sm:block">
                Aplikasi Administrasi Pembelajaran Lengkap & Modul Ajar Terpadu Kurikulum Merdeka
              </p>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            {/* School Profile Trigger */}
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-emerald-100 rounded-lg border border-white/10 transition-colors"
              title="Sesuaikan identitas sekolah, kepala sekolah, dan guru"
            >
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="max-w-[120px] sm:max-w-[180px] truncate text-left">
                {profile.namaSekolah}
              </span>
            </button>

            {/* Export Word (.doc) Button */}
            <button
              onClick={handleExportWord}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg shadow-sm hover:shadow transition-all"
              title="Unduh dokumen saat ini ke format Microsoft Word / HTML"
            >
              {downloadSuccess ? <Check className="w-3.5 h-3.5 text-emerald-200" /> : <Download className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{downloadSuccess ? 'Berhasil Unduh' : 'Unduh .doc'}</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg shadow-sm hover:shadow transition-all"
              title="Cetak langsung ke kertas A4 atau simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cetak Dokumen</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Secondary Info Banner (no-print) */}
      <div className="bg-emerald-900/10 border-b border-emerald-900/15 text-slate-700 py-2 px-4 no-print">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
              Guru: {profile.namaGuru}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-700 font-medium">
              {profile.fase} • {profile.kelas} • TP {profile.tahunAjaran}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-600">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <Check className="w-3 h-3" /> Pendekatan Deep Learning (Mindful, Meaningful, Joyful)
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-teal-700 font-medium">
              <Check className="w-3 h-3" /> Culturally Responsive Teaching (CRT)
            </span>
          </div>
        </div>
      </div>

      {/* 3. Horizontal Scrollable Navigation Tabs (no-print) */}
      <div className="bg-white border-b border-slate-200 sticky top-[57px] z-30 shadow-2xs no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
            {navigationTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-700'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Main Body Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <div id="printable-area">
          {activeTab === 'cp' && <TabAnalisisCP profile={profile} onPrint={handlePrint} />}
          {activeTab === 'prota' && <TabProta profile={profile} onPrint={handlePrint} />}
          {activeTab === 'prosem' && <TabProsem profile={profile} onPrint={handlePrint} />}
          {activeTab === 'modul' && <TabModulAjar profile={profile} onPrint={handlePrint} />}
          {activeTab === 'lkpd' && <TabLKPD profile={profile} onPrint={handlePrint} />}
          {activeTab === 'asesmen' && <TabAsesmenSoal profile={profile} onPrint={handlePrint} />}
          {activeTab === 'remedial' && <TabRemedial profile={profile} onPrint={handlePrint} />}
          {activeTab === 'generator' && <TabAIGenerator profile={profile} onPrint={handlePrint} />}
        </div>
      </main>

      {/* 5. Document Footer & Support Credits (no-print) */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-xs text-slate-500 text-center no-print mt-12">
        <div className="max-w-7xl mx-auto space-y-2">
          <p className="font-medium text-slate-700">
            Aplikasi Administrasi Pembelajaran Bahasa Indonesia Berbasis Capaian Pembelajaran Terbaru No. 020/H/KR/2026
          </p>
          <p className="text-[11px] text-slate-500">
            Didesain khusus untuk Bapak/Ibu Guru Bahasa Indonesia (SMP/MTs Fase D & Jenjang Terkait) • Mendukung Pencetakan Berstandar Format Dinas Pendidikan Republik Indonesia
          </p>
          <div className="flex justify-center gap-4 pt-2 text-[11px] text-emerald-800 font-semibold">
            <button onClick={() => setIsProfileModalOpen(true)} className="hover:underline">
              Ubah Profil Sekolah & Guru
            </button>
            <span>•</span>
            <button onClick={handlePrint} className="hover:underline">
              Cetak Dokumen A4
            </button>
            <span>•</span>
            <button onClick={handleExportWord} className="hover:underline">
              Ekspor Dokumen ke Word
            </button>
          </div>
        </div>
      </footer>

      {/* Profile Configuration Modal */}
      <SchoolProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={profile}
        onSave={(newProfile) => setProfile(newProfile)}
        onReset={handleResetProfile}
      />
    </div>
  );
}
