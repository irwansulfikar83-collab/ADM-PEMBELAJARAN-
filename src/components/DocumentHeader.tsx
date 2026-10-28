import React from 'react';
import { SchoolProfile } from '../types/curriculum';

interface DocumentHeaderProps {
  profile: SchoolProfile;
  judulDokumen: string;
  subJudul?: string;
  nomorDokumen?: string;
}

export const DocumentHeader: React.FC<DocumentHeaderProps> = ({
  profile,
  judulDokumen,
  subJudul,
  nomorDokumen,
}) => {
  return (
    <div className="w-full mb-6 font-serif-doc text-slate-900">
      {/* Kop Surat Resmi Kemendikbudristek / Dinas Pendidikan */}
      <div className="flex items-center justify-between pb-3 border-b-2 border-slate-900 gap-4">
        {/* Logo Lambang Pendidikan Tut Wuri Handayani (SVG Vector) */}
        <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-16 h-16 text-emerald-800 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="46" fill="#0f766e" opacity="0.1" />
            <path
              d="M50 12 L78 28 L78 68 L50 88 L22 68 L22 28 Z"
              fill="none"
              stroke="#0f766e"
              strokeWidth="4"
            />
            {/* Sayap & Obor Tut Wuri Handayani Stylized */}
            <path
              d="M50 32 L56 46 L70 48 L60 58 L63 72 L50 64 L37 72 L40 58 L30 48 L44 46 Z"
              fill="#0d9488"
            />
            <circle cx="50" cy="24" r="5" fill="#f59e0b" />
          </svg>
        </div>

        {/* Identitas Instansi */}
        <div className="flex-1 text-center leading-tight">
          <h4 className="text-xs font-semibold tracking-wider uppercase text-slate-700">
            PEMERINTAH DAERAH PROVINSI / KABUPATEN / KOTA {profile.kotaKabupaten.toUpperCase()}
          </h4>
          <h3 className="text-xs font-semibold uppercase text-slate-800">
            DINAS PENDIDIKAN DAN KEBUDAYAAN
          </h3>
          <h1 className="text-lg md:text-xl font-bold uppercase tracking-wide text-slate-950 mt-0.5">
            {profile.namaSekolah.toUpperCase()}
          </h1>
          <p className="text-[11px] text-slate-600 mt-0.5">
            Alamat: Jl. Pendidikan No. 45 {profile.kotaKabupaten}, Prov. {profile.provinsi} | NPSN: {profile.npsn}
          </p>
          <p className="text-[10px] text-slate-500 italic">
            Kurikulum Merdeka • Berpedoman pada SK BSKAP Capaian Pembelajaran No. 020/H/KR/2026
          </p>
        </div>

        {/* Lambang Logo Kurikulum Merdeka Stylized */}
        <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border border-emerald-600/30 bg-emerald-50/50 flex flex-col items-center justify-center text-center p-1">
            <span className="text-[9px] font-bold text-emerald-800 leading-none">KURIKULUM</span>
            <span className="text-[11px] font-extrabold text-emerald-600 leading-tight">MERDEKA</span>
            <span className="text-[8px] font-medium text-slate-600">CP 020/2026</span>
          </div>
        </div>
      </div>

      {/* Garis Ganda Standar Tata Naskah Dinas */}
      <div className="w-full border-t border-slate-900 mt-1 mb-5"></div>

      {/* Judul Dokumen */}
      <div className="text-center my-4">
        <h2 className="text-base md:text-lg font-bold uppercase underline tracking-wide text-slate-900">
          {judulDokumen}
        </h2>
        {nomorDokumen && (
          <p className="text-xs text-slate-600 font-mono mt-0.5">
            Nomor: {nomorDokumen}
          </p>
        )}
        {subJudul && (
          <p className="text-xs md:text-sm font-medium text-slate-700 mt-1">
            {subJudul}
          </p>
        )}
      </div>

      {/* Tabel Identitas Singkat Dokumen */}
      <div className="bg-slate-50/70 p-3 rounded border border-slate-300 text-xs grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 font-sans avoid-break">
        <div>
          <span className="text-slate-500 block">Mata Pelajaran:</span>
          <span className="font-semibold text-slate-800">{profile.mataPelajaran}</span>
        </div>
        <div>
          <span className="text-slate-500 block">Fase / Kelas:</span>
          <span className="font-semibold text-slate-800">{profile.fase} / {profile.kelas}</span>
        </div>
        <div>
          <span className="text-slate-500 block">Tahun Pelajaran:</span>
          <span className="font-semibold text-slate-800">{profile.tahunAjaran}</span>
        </div>
        <div>
          <span className="text-slate-500 block">Guru Pengampu:</span>
          <span className="font-semibold text-slate-800">{profile.namaGuru}</span>
        </div>
      </div>
    </div>
  );
};
