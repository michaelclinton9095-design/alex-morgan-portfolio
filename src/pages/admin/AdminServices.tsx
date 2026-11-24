import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Service } from '../../types';
import { Layers, Edit3, CheckCircle, X, Check, Plus } from 'lucide-react';

export const AdminServices: React.FC = () => {
  const { services, updateServices, toggleService } = usePortfolio();

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formDeliverables, setFormDeliverables] = useState<string[]>([]);
  const [deliverableInput, setDeliverableInput] = useState('');

  const openEdit = (svc: Service) => {
    setEditingService(svc);
    setFormTitle(svc.title);
    setFormDesc(svc.description);
    setFormDeliverables([...svc.deliverables]);
    setDeliverableInput('');
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;

    const updated = services.map(s => 
      s.id === editingService.id
        ? { ...s, title: formTitle, description: formDesc, deliverables: formDeliverables }
        : s
    );
    updateServices(updated);
    setEditingService(null);
  };

  const addDeliverable = () => {
    if (deliverableInput.trim()) {
      setFormDeliverables([...formDeliverables, deliverableInput.trim()]);
      setDeliverableInput('');
    }
  };

  const removeDeliverable = (idx: number) => {
    setFormDeliverables(formDeliverables.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Freelance Services Management
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          Enable or disable specific service offerings, refine descriptions, and update deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((svc) => (
          <div
            key={svc.id}
            className={`p-5 rounded-2xl border transition-all ${
              svc.active
                ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
                : 'bg-slate-50 dark:bg-slate-900/40 border-dashed border-slate-300 dark:border-slate-800 opacity-60'
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">{svc.title}</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleService(svc.id)}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-colors ${
                    svc.active
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {svc.active ? 'Active' : 'Disabled'}
                </button>
                <button
                  onClick={() => openEdit(svc)}
                  className="p-1 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{svc.description}</p>

            <div className="space-y-1 pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Deliverables
              </span>
              {svc.deliverables.map((del, dIdx) => (
                <div key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-3 h-3 text-sky-500 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Edit Service Modal */}
      {editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl text-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Edit Service Offering
            </h3>
            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="block font-semibold mb-1">Service Title</label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Description</label>
                <textarea
                  rows={3}
                  required
                  value={formDesc}
                  onChange={(e) => setFormDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Deliverables</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={deliverableInput}
                    onChange={(e) => setDeliverableInput(e.target.value)}
                    placeholder="New deliverable..."
                    className="flex-1 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs"
                  />
                  <button
                    type="button"
                    onClick={addDeliverable}
                    className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 font-semibold rounded-lg"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-1">
                  {formDeliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center justify-between p-1.5 rounded bg-slate-50 dark:bg-slate-800">
                      <span>{del}</span>
                      <button type="button" onClick={() => removeDeliverable(idx)} className="text-rose-500">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-sky-600 text-white font-semibold"
                >
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
