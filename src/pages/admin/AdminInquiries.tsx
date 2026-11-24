import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { MessageSquare, Mail, Trash2, CheckCircle2, Clock } from 'lucide-react';

export const AdminInquiries: React.FC = () => {
  const { inquiries, markInquiryRead, deleteInquiry } = usePortfolio();

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Inquiries Inbox
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Review submitted messages, prospective project briefs, and freelance inquiries.
          </p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
          Total: {inquiries.length}
        </span>
      </div>

      {inquiries.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
          Your inbox is completely clear. No client inquiries have been received yet.
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inq) => (
            <div
              key={inq.id}
              className={`p-6 rounded-2xl border transition-all ${
                inq.read
                  ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
                  : 'bg-sky-50/40 dark:bg-sky-950/20 border-sky-300 dark:border-sky-800 shadow-md'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">{inq.name}</h3>
                  <span className="text-xs text-slate-400">({inq.email})</span>
                  {!inq.read && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-600 text-white">
                      New
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{new Date(inq.createdAt).toLocaleString()}</span>
                </div>
              </div>

              <h4 className="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-2">
                Subject: {inq.subject}
              </h4>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4 whitespace-pre-wrap">
                {inq.message}
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={`mailto:${inq.email}?subject=Re: ${encodeURIComponent(inq.subject)}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>

                <div className="flex items-center gap-2">
                  {!inq.read && (
                    <button
                      onClick={() => markInquiryRead(inq.id)}
                      className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                    >
                      Mark as Read
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (confirm('Delete this inquiry permanently?')) deleteInquiry(inq.id);
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                    title="Delete message"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
