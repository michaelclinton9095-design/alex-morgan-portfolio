import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, CheckCircle2, Cpu, Play, Monitor, Layers, Video } from 'lucide-react';
import { GithubIcon } from './Icons';
import { VideoModal } from './VideoModal';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'live' | 'overview' | 'video'>('live');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>('');

  useEffect(() => {
    if (project?.videoUrl) {
      setSelectedVideoUrl(project.videoUrl);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-2 pr-12">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            {project.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live on Localhost</span>
          </span>
          {project.database && (
            <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              MongoDB: {project.database}
            </span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400 mb-5">
          {project.tagline}
        </p>

        {/* View Mode Tabs */}
        <div className="flex items-center gap-2 mb-6 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 w-fit">
          {project.demoUrl && (
            <button
              onClick={() => setActiveTab('live')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'live'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Live Interactive App</span>
            </button>
          )}

          {project.videoUrl && (
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'video'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>Recorded Video Demo</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'overview'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Architecture & Specs</span>
          </button>
        </div>

        {/* Tab 1: Live Interactive App Embed */}
        {activeTab === 'live' && project.demoUrl && (
          <div className="flex flex-col mb-6">
            <div className="flex items-center justify-between px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-t-xl border border-b-0 border-slate-200 dark:border-slate-700 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-slate-500 dark:text-slate-400 ml-2">
                  {project.demoUrl}
                </span>
              </div>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 dark:text-sky-400 hover:underline font-semibold flex items-center gap-1"
              >
                <span>Open in Full Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="rounded-b-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-950 h-[520px]">
              <iframe
                src={project.demoUrl}
                title={`${project.title} Live Preview`}
                className="w-full h-full border-0 bg-white"
                allow="camera; microphone; display-capture; clipboard-read; clipboard-write"
              />
            </div>
            <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 text-center">
              💡 This is the actual live application running locally with real React 19 UI & MongoDB backend. You can click products, add to cart, and test features directly.
            </p>
          </div>
        )}

        {/* Tab 2: Recorded Video Demo */}
        {activeTab === 'video' && (project.videoUrl || selectedVideoUrl) && (
          <div className="mb-6 flex flex-col space-y-4">
            <div className="rounded-xl overflow-hidden aspect-video bg-black border border-slate-800 shadow-lg relative">
              <video
                key={selectedVideoUrl || project.videoUrl}
                src={selectedVideoUrl || project.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML5 video playback.
              </video>
            </div>

            {/* Video Selection Grid: Master Walkthrough + Feature Clips */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Select Demo Recording:
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Hardware H.264 / AVC1 • 30 FPS • 1080p
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {/* Master Walkthrough Button */}
                <button
                  type="button"
                  onClick={() => setSelectedVideoUrl(project.videoUrl || '')}
                  className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    (selectedVideoUrl === project.videoUrl || !selectedVideoUrl)
                      ? 'bg-sky-600/10 border-sky-500 text-sky-700 dark:text-sky-300 ring-1 ring-sky-500/30'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 uppercase tracking-wider">
                      Master Demo
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      0:12
                    </span>
                  </div>
                  <span className="text-xs font-semibold line-clamp-1">
                    Complete Walkthrough
                  </span>
                </button>

                {/* Feature-Specific Videos */}
                {project.featureVideos?.map((feat) => {
                  const isCurrent = selectedVideoUrl === feat.url;
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => setSelectedVideoUrl(feat.url)}
                      className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isCurrent
                          ? 'bg-sky-600/10 border-sky-500 text-sky-700 dark:text-sky-300 ring-1 ring-sky-500/30'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono">
                          {feat.id}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          {feat.duration}
                        </span>
                      </div>
                      <span className="text-xs font-semibold line-clamp-1">
                        {feat.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Architecture & Specs Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 mb-6">
            {/* Banner preview */}
            <div className="rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 max-h-[320px]">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Narrative Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Project Overview
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            {project.architectureNotes && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Architectural Highlights</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.architectureNotes}
                </p>
              </div>
            )}

            {/* Features List */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Key Implemented Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons Footer */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live App ({project.demoUrl})</span>
            </a>
          )}
          {project.adminUrl && (
            <a
              href={project.adminUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-amber-900 dark:text-amber-200 bg-amber-100 dark:bg-amber-950/80 hover:bg-amber-200 dark:hover:bg-amber-900 rounded-xl transition-colors border border-amber-300 dark:border-amber-800"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Admin Portal ({project.adminUrl})</span>
            </a>
          )}
          {project.videoUrl && (
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 rounded-xl transition-all shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Watch Video Demo</span>
            </button>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}
        </div>

        {/* Video Player Modal */}
        {project.videoUrl && (
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            videoUrl={project.videoUrl}
            title={`${project.title} — Verified Demo`}
            subtitle={project.tagline}
            badges={[
              { label: project.category },
              { label: project.database ? `DB: ${project.database}` : 'MongoDB' }
            ]}
          />
        )}
      </div>
    </div>
  );
};
