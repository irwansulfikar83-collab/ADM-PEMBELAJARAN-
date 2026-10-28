import React from 'react';
import { SchoolProfile } from '../types/curriculum';

interface SignatureBlockProps {
  profile: SchoolProfile;
  tanggalDokumen?: string;
}

export const SignatureBlock: React.FC<SignatureBlockProps> = ({
  profile,
  tanggalDokumen,
}) => {
  const currentDate = tanggalDokumen || `${profile.kotaKabupaten}, 14 Juli 2025`;

  return (
    <div className="mt-8 pt-4 border-t border-slate-300 font-serif-doc text-slate-900 avoid-break">
      <div className="flex justify-between items-start text-xs md:text-sm px-4">
        {/* Kolom Kiri: Kepala Sekolah */}
        <div className="text-center w-56">
          <p className="text-slate-700">Mengetahui,</p>
          <p className="font-semibold text-slate-900">Kepala {profile.namaSekolah}</p>
          <div className="h-20 flex items-center justify-center">
            {/* Ruang Tanda Tangan & Cap */}
            <span className="text-[10px] text-slate-400 italic font-sans">[Tanda Tangan & Cap Dinas]</span>
          </div>
          <p className="font-bold underline text-slate-950 uppercase">
            {profile.namaKepalaSekolah}
          </p>
          <p className="text-slate-700 text-xs mt-0.5">NIP. {profile.nipKepalaSekolah}</p>
        </div>

        {/* Kolom Kanan: Guru Pengampu */}
        <div className="text-center w-56">
          <p className="text-slate-700">{currentDate}</p>
          <p className="font-semibold text-slate-900">Guru Mata Pelajaran Bahasa Indonesia</p>
          <div className="h-20 flex items-center justify-center">
            {/* Ruang Tanda Tangan Guru */}
            <span className="text-[10px] text-slate-400 italic font-sans">[Tanda Tangan Guru]</span>
          </div>
          <p className="font-bold underline text-slate-950 uppercase">
            {profile.namaGuru}
          </p>
          <p className="text-slate-700 text-xs mt-0.5">NIP. {profile.nipGuru}</p>
        </div>
      </div>
    </div>
  );
};
