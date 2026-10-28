import React, { useState } from 'react';
import { SchoolProfile } from '../types/curriculum';
import { X, Building2, User, Calendar, Save, RotateCcw } from 'lucide-react';

interface SchoolProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: SchoolProfile;
  onSave: (newProfile: SchoolProfile) => void;
  onReset: () => void;
}

export const SchoolProfileModal: React.FC<SchoolProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<SchoolProfile>(profile);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto no-print">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-700/50 rounded-lg">
              <Building2 className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Pengaturan Identitas Sekolah & Guru</h3>
              <p className="text-xs text-emerald-200/90">
                Informasi ini otomatis disisipkan ke seluruh kop surat, modul ajar, dan lembar pengesahan
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Bagian Satuan Pendidikan */}
          <div>
            <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-emerald-600" /> Identitas Satuan Pendidikan
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nama Satuan Pendidikan (Sekolah)</label>
                <input
                  type="text"
                  name="namaSekolah"
                  value={formData.namaSekolah}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">NPSN</label>
                <input
                  type="text"
                  name="npsn"
                  value={formData.npsn}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Kota / Kabupaten</label>
                <input
                  type="text"
                  name="kotaKabupaten"
                  value={formData.kotaKabupaten}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Provinsi</label>
                <input
                  type="text"
                  name="provinsi"
                  value={formData.provinsi}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-3">
            <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <User className="w-4 h-4 text-emerald-600" /> Guru Mata Pelajaran & Pimpinan
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nama Guru Pengampu & Gelar</label>
                <input
                  type="text"
                  name="namaGuru"
                  value={formData.namaGuru}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">NIP Guru Pengampu</label>
                <input
                  type="text"
                  name="nipGuru"
                  value={formData.nipGuru}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nama Kepala Sekolah</label>
                <input
                  type="text"
                  name="namaKepalaSekolah"
                  value={formData.namaKepalaSekolah}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">NIP Kepala Sekolah</label>
                <input
                  type="text"
                  name="nipKepalaSekolah"
                  value={formData.nipKepalaSekolah}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-3">
            <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-600" /> Tahun Ajaran, Fase & Kelas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Tahun Pelajaran</label>
                <input
                  type="text"
                  name="tahunAjaran"
                  value={formData.tahunAjaran}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Fase</label>
                <select
                  name="fase"
                  value={formData.fase}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="Fase D (SMP/MTs)">Fase D (SMP / MTs)</option>
                  <option value="Fase E (SMA/SMK Kelas 10)">Fase E (SMA / SMK Kelas 10)</option>
                  <option value="Fase F (SMA/SMK Kelas 11-12)">Fase F (SMA / SMK Kelas 11-12)</option>
                  <option value="Fase C (SD Kelas 5-6)">Fase C (SD Kelas 5-6)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Tingkat Kelas</label>
                <input
                  type="text"
                  name="kelas"
                  value={formData.kelas}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={onReset}
              className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Kembalikan Default
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors font-medium"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm hover:shadow flex items-center gap-1.5 font-medium transition-all"
              >
                <Save className="w-4 h-4" /> Simpan Perubahan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
