import React from 'react';
import { ShieldCheck, Plus, BookOpen, Download, Globe, Layers, Zap, Swords } from 'lucide-react';
import { PersonaType } from '../types';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentPersona: PersonaType;
  onSelectPersona: (persona: PersonaType) => void;
  onOpenCustomAudit: () => void;
  onOpenPlaybook: () => void;
  onOpenAuditMemo: () => void;
  onOpenVideoGuide: () => void;
  onOpenCompetitors: () => void;
  onOpenPricing: () => void;
  onOpenThreeLensAudit: () => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  auditsUsed: number;
  maxFreeAudits: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPersona,
  onSelectPersona,
  onOpenCustomAudit,
  onOpenPlaybook,
  onOpenAuditMemo,
  onOpenVideoGuide,
  onOpenCompetitors,
  onOpenPricing,
  onOpenThreeLensAudit,
  language,
  onSelectLanguage,
  auditsUsed,
  maxFreeAudits,
}) => {
  const t = TRANSLATIONS[language];

  return (
    <header className="border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark + live vault status */}
        <div className="flex items-center gap-4">
          <a href="/" className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {t.brandTitle}
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-400 font-mono border-l border-neutral-800 pl-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            {t.vaultStatus}
          </span>
        </div>

        {/* Zone 2: Navigation / Persona selectors (clean text, no pills) */}
        <nav className="hidden xl:flex items-center gap-6 text-xs font-medium">
          <button
            onClick={() => onSelectPersona('pe_vc')}
            className={`transition-colors whitespace-nowrap ${
              currentPersona === 'pe_vc'
                ? 'text-white font-semibold border-b-2 border-emerald-500 py-5'
                : 'text-neutral-400 hover:text-neutral-200 py-5'
            }`}
          >
            PE / VC Diligence
          </button>
          <button
            onClick={() => onSelectPersona('trader')}
            className={`transition-colors whitespace-nowrap ${
              currentPersona === 'trader'
                ? 'text-white font-semibold border-b-2 border-emerald-500 py-5'
                : 'text-neutral-400 hover:text-neutral-200 py-5'
            }`}
          >
            Public 10-K Recon
          </button>
          <button
            onClick={() => onSelectPersona('cfo_ops')}
            className={`transition-colors whitespace-nowrap ${
              currentPersona === 'cfo_ops'
                ? 'text-white font-semibold border-b-2 border-emerald-500 py-5'
                : 'text-neutral-400 hover:text-neutral-200 py-5'
            }`}
          >
            CFO Overbilling Audit
          </button>
          <button
            onClick={() => onSelectPersona('researcher')}
            className={`transition-colors whitespace-nowrap ${
              currentPersona === 'researcher'
                ? 'text-white font-semibold border-b-2 border-emerald-500 py-5'
                : 'text-neutral-400 hover:text-neutral-200 py-5'
            }`}
          >
            Dataset & Research
          </button>
        </nav>

        {/* Zone 3: Primary Actions + Language Dropdown + Quota Indicator */}
        <div className="flex items-center gap-2">
          
          {/* Language Selector */}
          <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg px-2 py-1 gap-1 text-xs">
            <Globe className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <select
              value={language}
              onChange={(e) => onSelectLanguage(e.target.value as Language)}
              className="bg-transparent text-neutral-200 font-mono text-[11px] focus:outline-none cursor-pointer"
            >
              <option value="en" className="bg-neutral-900 text-white">EN (English)</option>
              <option value="hinglish" className="bg-neutral-900 text-white">HINGLISH</option>
              <option value="hi" className="bg-neutral-900 text-white">हिन्दी (Hindi)</option>
              <option value="gu" className="bg-neutral-900 text-white">ગુજરાતી (Gujarati)</option>
            </select>
          </div>

          {/* Free Trial Quota Pill */}
          <button
            onClick={onOpenPricing}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-lg bg-emerald-950/40 border border-emerald-900/60 text-emerald-300 hover:bg-emerald-900/30 transition-colors whitespace-nowrap"
            title="View Free Trial limits and upgrade options"
          >
            <Zap className="w-3 h-3 text-amber-400" />
            <span>Trial: {maxFreeAudits - auditsUsed} Left</span>
          </button>

          {/* 3-Lens Business Audit Button */}
          <button
            onClick={onOpenThreeLensAudit}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-rose-300 hover:text-white bg-rose-950/60 border border-rose-800/80 rounded-lg hover:bg-rose-900 transition-colors whitespace-nowrap"
            title="Master 3-Lens Audit: Partner, Coach, Adversary"
          >
            <Swords className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">3-Lens Audit</span>
          </button>

          {/* Competitor Intel Button */}
          <button
            onClick={onOpenCompetitors}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap"
            title="Inspect AlphaSense, Hebbia, Bloomberg designs & flaws"
          >
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden md:inline">{t.competitorsBtn}</span>
          </button>

          {/* Video Guide Button */}
          <button
            onClick={onOpenVideoGuide}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/60 border border-emerald-800/80 rounded-lg hover:bg-emerald-900 transition-colors whitespace-nowrap"
            title="Step-by-step interactive video tutorial"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="hidden sm:inline">{t.videoGuideBtn}</span>
          </button>

          {/* Founder Playbook Button */}
          <button
            onClick={onOpenPlaybook}
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap"
            title="Read how to get clients and understand competitors with ₹0 budget"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.playbookBtn}</span>
          </button>

          {/* Export Memo */}
          <button
            onClick={onOpenAuditMemo}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap"
            title="Generate printable executive memorandum"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.exportMemoBtn}</span>
          </button>

          {/* Run Audit Main CTA */}
          <button
            onClick={onOpenCustomAudit}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            {t.runAuditBtn}
          </button>

        </div>

      </div>

      {/* Mobile nav bar */}
      <div className="xl:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-neutral-900 gap-4 text-xs">
        <button
          onClick={() => onSelectPersona('pe_vc')}
          className={`whitespace-nowrap pb-1 ${
            currentPersona === 'pe_vc' ? 'text-emerald-400 border-b border-emerald-400 font-semibold' : 'text-neutral-400'
          }`}
        >
          PE / VC
        </button>
        <button
          onClick={() => onSelectPersona('trader')}
          className={`whitespace-nowrap pb-1 ${
            currentPersona === 'trader' ? 'text-emerald-400 border-b border-emerald-400 font-semibold' : 'text-neutral-400'
          }`}
        >
          10-K Recon
        </button>
        <button
          onClick={() => onSelectPersona('cfo_ops')}
          className={`whitespace-nowrap pb-1 ${
            currentPersona === 'cfo_ops' ? 'text-emerald-400 border-b border-emerald-400 font-semibold' : 'text-neutral-400'
          }`}
        >
          CFO Audit
        </button>
        <button
          onClick={() => onSelectPersona('researcher')}
          className={`whitespace-nowrap pb-1 ${
            currentPersona === 'researcher' ? 'text-emerald-400 border-b border-emerald-400 font-semibold' : 'text-neutral-400'
          }`}
        >
          Research Data
        </button>
      </div>
    </header>
  );
};
