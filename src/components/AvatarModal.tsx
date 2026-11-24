import React, { useEffect } from 'react';
import { X, MessageSquare, Info, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface AvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
}

export const AvatarModal: React.FC<AvatarModalProps> = ({
  isOpen,
  onClose,
  imageUrl = '/avatar.svg'
}) => {
  const { profile } = usePortfolio();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 text-white rounded-3xl max-w-sm sm:max-w-md w-full overflow-hidden shadow-2xl border border-slate-800 flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* WhatsApp-style Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-slate-900/90">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight leading-tight">
              {profile.name || 'Alex Morgan'}
            </h3>
            <p className="text-xs text-sky-400 font-medium mt-0.5">
              {profile.designation || 'Technical Support Engineer'}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* WhatsApp-style Big Image Container */}
        <div className="relative w-full aspect-square bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 flex items-center justify-center p-6 select-none overflow-hidden group">
          <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <img
            src={imageUrl}
            alt={profile.name || 'Profile Picture'}
            className="w-full h-full max-w-[320px] max-h-[320px] rounded-2xl object-cover shadow-2xl ring-4 ring-sky-500/30 group-hover:ring-sky-500 transition-all duration-300"
          />
          {/* Active Status Badge floating at bottom right */}
          <div className="absolute bottom-9 right-9 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-emerald-400 text-xs font-semibold backdrop-blur-sm shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active</span>
          </div>
        </div>

        {/* WhatsApp-style Action Bottom Bar */}
        <div className="px-5 py-3.5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-around text-xs font-medium">
          <a
            href="#contact"
            onClick={onClose}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors py-1 px-4 rounded-xl hover:bg-slate-800/60"
          >
            <MessageSquare className="w-4 h-4 text-sky-400" />
            <span>Message</span>
          </a>
          <a
            href="#about"
            onClick={onClose}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-sky-400 transition-colors py-1 px-4 rounded-xl hover:bg-slate-800/60"
          >
            <Info className="w-4 h-4 text-indigo-400" />
            <span>Info &amp; Bio</span>
          </a>
        </div>
      </div>
    </div>
  );
};
