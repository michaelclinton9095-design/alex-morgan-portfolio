import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { GraduationCap, Building2, Wrench, Code, Layers, Sparkles, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const { profile } = usePortfolio();

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About My Background &amp; Engineering Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
              Bridging Rigorous Computer Science with Practical Support &amp; Full-Stack Engineering.
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {profile.aboutDetails.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Deep Troubleshooting</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Expertise in isolating edge-case defects and analyzing system logs in production.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Scalable Architecture</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Component reusability, clean separation of concerns, and robust TypeScript typing.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Identity & Profile Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl -z-10 pointer-events-none" />

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center justify-between">
                <span>Verified Credentials</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300">Verified</span>
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 text-sky-600 dark:text-sky-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Highest Academic Degree</span>
                    <strong className="text-sm font-semibold text-slate-900 dark:text-white block mt-0.5">
                      {profile.qualification}
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Computer Science Postgraduate</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 text-sky-600 dark:text-sky-400 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Current Organization</span>
                    <strong className="text-sm font-semibold text-slate-900 dark:text-white block mt-0.5">
                      {profile.organization}
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{profile.designation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Freelance Availability</span>
                    <strong className="text-sm font-semibold text-slate-900 dark:text-white block mt-0.5">
                      Accepting New Projects
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400">Contracts, modernizations &amp; full builds</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700/80">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center py-2.5 px-4 text-xs font-semibold text-slate-900 dark:text-white bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-xl border border-slate-300 dark:border-slate-600 transition-colors shadow-sm"
                >
                  Discuss a Freelance Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
