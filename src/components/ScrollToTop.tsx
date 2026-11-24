import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

/**
 * Automatically scrolls window to top on route / page changes.
 * Handles hash navigation (e.g. #projects) with smooth element scrolling.
 */
export const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow DOM to render if route just changed
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, search, hash]);

  return null;
};

/**
 * Floating Scroll-To-Top Button that smoothly appears as user scrolls down.
 * Features SVG progress ring, smooth scrolling, and accessible ARIA attributes.
 */
export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      
      setScrollProgress(progress);
      // Appear once scrolled down past 250px
      setIsVisible(scrollTop > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Scroll to top"
        className="relative group w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow-xl hover:shadow-2xl border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-400 transition-all active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-sky-500"
      >
        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-slate-100 dark:stroke-slate-800 fill-none"
            strokeWidth="2.5"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-sky-500 dark:stroke-sky-400 fill-none transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Upward Arrow Icon */}
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-sky-600 dark:text-sky-400" />
      </button>
    </div>
  );
};
