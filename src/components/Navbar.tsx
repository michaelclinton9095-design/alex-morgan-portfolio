import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolio } from '../context/PortfolioContext';
import { Sun, Moon, Menu, X, ExternalLink, Terminal, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoModal } from './VideoModal';
import { AvatarModal } from './AvatarModal';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { profile } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const avatarSrc = profile.avatarUrl || '/avatar.svg';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#' || href === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <div className="flex items-center gap-3">
            {/* Clickable Avatar with WhatsApp-style popup */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsAvatarOpen(true);
              }}
              title="Click to view full profile photo"
              className="relative shrink-0 group cursor-pointer focus:outline-none"
            >
              <img
                src={avatarSrc}
                alt={profile.name || "Alex Morgan"}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-500/40 group-hover:ring-sky-500 group-hover:scale-105 transition-all shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full shadow-xs" />
            </button>

            {/* Clickable Name to scroll to top */}
            <a href="#" onClick={handleLogoClick} className="group flex flex-col cursor-pointer">
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight block group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                {profile.name || 'Alex Morgan'}
              </span>
              <span className="text-xs text-sky-600 dark:text-sky-400 font-medium block">
                {profile.designation || 'Technical Support Engineer'}
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Video Demo Button */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-white dark:hover:text-white bg-sky-50 dark:bg-sky-950/70 hover:bg-sky-600 dark:hover:bg-sky-600 rounded-lg transition-all border border-sky-200 dark:border-sky-800 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Video Demo</span>
            </button>

            {/* Primary CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 rounded-lg shadow-sm hover:shadow transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsVideoOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-indigo-600 rounded-lg shadow-sm"
              >
                <Play className="w-4 h-4 fill-white" /> Watch Showcase Video
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Navbar Video Demo Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="/videos/ALL-PROJECTS-SUMMARY.mp4"
        title="Full-Stack Monorepo Master Showcase"
        subtitle="Live Demo: RedStore, CodeNest, and Pulse Collaboration Suite"
        badges={[
          { label: 'Verified H.264 MP4' },
          { label: '3 Production Apps' }
        ]}
      />

      {/* WhatsApp-style Avatar Profile Popup Modal */}
      <AvatarModal
        isOpen={isAvatarOpen}
        onClose={() => setIsAvatarOpen(false)}
        imageUrl={avatarSrc}
      />
    </header>
  );
};
