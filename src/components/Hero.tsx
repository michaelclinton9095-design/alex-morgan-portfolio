import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowRight, Briefcase, GraduationCap, Play } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { VideoModal } from './VideoModal';

export const Hero: React.FC = () => {
  const { profile } = usePortfolio();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Freelance Projects & Engineering Contracts</span>
          </div>

          {/* Designation subhead */}
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold tracking-wide text-sky-600 dark:text-sky-400 uppercase mb-3">
            <span>{profile.title}</span>
          </div>

          {/* Required Primary Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-6">
            {profile.bioIntro || "Building Modern Digital Experiences Through Clean Code & Thoughtful Engineering."}
          </h1>

          {/* Required Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            {profile.aboutDetails && profile.aboutDetails[0]
              ? profile.aboutDetails[0]
              : "I'm a Computer Science postgraduate and Technical Support Engineer passionate about building scalable, user-friendly web applications. I enjoy turning ideas into practical digital solutions, from e-commerce platforms and content management systems to real-time communication applications."}
          </p>

          {/* Key verified trust credentials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 pt-2 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <GraduationCap className="w-4 h-4 text-sky-500 shrink-0" />
              <span>{profile.qualification}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
              <Briefcase className="w-4 h-4 text-sky-500 shrink-0" />
              <span>{profile.designation} at <strong className="font-semibold text-slate-900 dark:text-white">{profile.organization}</strong></span>
            </div>
          </div>

          {/* CTA Buttons & Social Links */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 hover:from-sky-500 hover:to-purple-500 rounded-xl shadow-lg hover:shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 group cursor-pointer"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
              </span>
              <span>Watch Master Showcase</span>
            </button>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm transition-all"
            >
              <span>View Projects</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-slate-200 sm:dark:border-slate-800 sm:ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Master Showcase Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/videos/ALL-PROJECTS-SUMMARY.mp4"
        title="Full-Stack Monorepo Master Showcase"
        subtitle="3 Production Applications • React 19 • Express 5 • MongoDB • Socket.IO"
        badges={[
          { label: '19/19 E2E Tests' },
          { label: '3 Active Databases' },
          { label: '100% Production Ready' }
        ]}
      />
    </section>
  );
};
