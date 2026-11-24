import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Briefcase, GraduationCap, Plus, Trash2, Edit3, X, Check } from 'lucide-react';

export const AdminExperience: React.FC = () => {
  const { 
    experience, addExperience, updateExperience, deleteExperience,
    education, addEducation, updateEducation, deleteEducation 
  } = usePortfolio();

  // Exp Modal state
  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [editingExpId, setEditingExpId] = useState<string | null>(null);
  const [expForm, setExpForm] = useState({
    role: '',
    company: '',
    period: '',
    location: '',
    description: [''],
    skills: [''],
    current: false
  });

  // Edu Modal state
  const [isEduModalOpen, setIsEduModalOpen] = useState(false);
  const [editingEduId, setEditingEduId] = useState<string | null>(null);
  const [eduForm, setEduForm] = useState({
    degree: '',
    institution: '',
    year: '',
    details: ''
  });

  const openAddExp = () => {
    setEditingExpId(null);
    setExpForm({
      role: '',
      company: '',
      period: '2024 - Present',
      location: 'Remote',
      description: ['Diagnose and resolve system issues.'],
      skills: ['Troubleshooting', 'System Analysis'],
      current: true
    });
    setIsExpModalOpen(true);
  };

  const handleSaveExp = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingExpId) {
      updateExperience(editingExpId, expForm);
    } else {
      addExperience(expForm);
    }
    setIsExpModalOpen(false);
  };

  const openAddEdu = () => {
    setEditingEduId(null);
    setEduForm({
      degree: "Master's Degree in Computer Science",
      institution: 'University Name',
      year: 'Graduation Year',
      details: 'Core graduate studies in software architecture and algorithms.'
    });
    setIsEduModalOpen(true);
  };

  const handleSaveEdu = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingEduId) {
      updateEducation(editingEduId, eduForm);
    } else {
      addEducation(eduForm);
    }
    setIsEduModalOpen(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Experience Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-sky-500" />
              <span>Career Experience</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Manage professional roles and company details.
            </p>
          </div>
          <button
            onClick={openAddExp}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl"
          >
            <Plus className="w-3.5 h-3.5" /> Add Experience
          </button>
        </div>

        <div className="space-y-3">
          {experience.map((exp) => (
            <div key={exp.id} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">{exp.role}</span>
                  <span className="text-xs text-sky-600 dark:text-sky-400 font-semibold">@ {exp.company}</span>
                  {exp.current && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      Current
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">{exp.period} • {exp.location}</div>
                <ul className="mt-2 space-y-1">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-300">• {desc}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setEditingExpId(exp.id);
                    setExpForm({
                      role: exp.role,
                      company: exp.company,
                      period: exp.period,
                      location: exp.location,
                      description: [...exp.description],
                      skills: [...exp.skills],
                      current: exp.current
                    });
                    setIsExpModalOpen(true);
                  }}
                  className="p-1.5 text-slate-400 hover:text-sky-600"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    if (confirm('Delete this experience?')) deleteExperience(exp.id);
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-sky-500" />
              <span>Education &amp; Qualifications</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Update degree specifications, institution placeholders, and year of completion.
            </p>
          </div>
          <button
            onClick={openAddEdu}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl"
          >
            <Plus className="w-3.5 h-3.5" /> Add Education
          </button>
        </div>

        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.id} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4">
              <div>
                <strong className="text-sm font-bold text-slate-900 dark:text-white block">{edu.degree}</strong>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">{edu.institution} • {edu.year}</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{edu.details}</p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setEditingEduId(edu.id);
                    setEduForm({
                      degree: edu.degree,
                      institution: edu.institution,
                      year: edu.year,
                      details: edu.details
                    });
                    setIsEduModalOpen(true);
                  }}
                  className="p-1.5 text-slate-400 hover:text-sky-600"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    if (confirm('Delete this education record?')) deleteEducation(edu.id);
                  }}
                  className="p-1.5 text-slate-400 hover:text-rose-600"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Modal */}
      {isExpModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl text-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {editingExpId ? 'Edit Experience' : 'Add Experience'}
            </h3>
            <form onSubmit={handleSaveExp} className="space-y-3">
              <div>
                <label className="block font-semibold mb-1">Company / Organization *</label>
                <input
                  type="text"
                  required
                  value={expForm.company}
                  onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Role / Designation *</label>
                <input
                  type="text"
                  required
                  value={expForm.role}
                  onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Period (e.g. 2024 - Present)</label>
                  <input
                    type="text"
                    value={expForm.period}
                    onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Location</label>
                  <input
                    type="text"
                    value={expForm.location}
                    onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="currentRole"
                  checked={expForm.current}
                  onChange={(e) => setExpForm({ ...expForm, current: e.target.checked })}
                />
                <label htmlFor="currentRole" className="font-semibold">Current Position</label>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsExpModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-sky-600 text-white font-semibold"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Education Modal */}
      {isEduModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl text-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {editingEduId ? 'Edit Education' : 'Add Education'}
            </h3>
            <form onSubmit={handleSaveEdu} className="space-y-3">
              <div>
                <label className="block font-semibold mb-1">Degree Title *</label>
                <input
                  type="text"
                  required
                  value={eduForm.degree}
                  onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Institution</label>
                  <input
                    type="text"
                    value={eduForm.institution}
                    onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Year</label>
                  <input
                    type="text"
                    value={eduForm.year}
                    onChange={(e) => setEduForm({ ...eduForm, year: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Details &amp; Coursework</label>
                <textarea
                  rows={3}
                  value={eduForm.details}
                  onChange={(e) => setEduForm({ ...eduForm, details: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsEduModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-sky-600 text-white font-semibold"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
