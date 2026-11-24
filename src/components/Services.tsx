import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Layers, ShoppingCart, BarChart3, BookOpen, MessageSquare, 
  Cpu, RefreshCw, Wrench, Zap, Palette, CheckCircle, Sparkles, ArrowRight 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
};

export const Services: React.FC = () => {
  const { services } = usePortfolio();
  const activeServices = services.filter(s => s.active);

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Freelance &amp; Engineering Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Services Offered for Independent Clients
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Turnkey software engineering services backed by proven full-stack application experience and deep production debugging capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-sky-500/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 w-fit mb-5 group-hover:scale-105 transition-transform">
                  {iconMap[service.icon] || <Layers className="w-5 h-5" />}
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Scope &amp; Deliverables
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  <span>Request Quote &amp; Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
