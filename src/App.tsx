/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  FileSpreadsheet, 
  ShieldCheck, 
  AlertOctagon, 
  TrendingDown, 
  SlidersHorizontal,
  Plus,
  RefreshCw,
  FileText,
  Activity,
  Layers,
  Zap,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { PersonaType, SeverityType, ContradictionItem } from './types';
import { SCENARIOS } from './data/scenarios';
import { Language, TRANSLATIONS } from './data/translations';
import { Header } from './components/Header';
import { ContradictionCard } from './components/ContradictionCard';
import { CustomAuditModal } from './components/CustomAuditModal';
import { AuditMemoModal } from './components/AuditMemoModal';
import { PlaybookModal } from './components/PlaybookModal';
import { InteractiveVideoGuideModal } from './components/InteractiveVideoGuideModal';
import { CompetitorShowcaseModal } from './components/CompetitorShowcaseModal';
import { PricingModal } from './components/PricingModal';
import { ThreeLensAuditModal } from './components/ThreeLensAuditModal';

export default function App() {
  const [currentPersona, setCurrentPersona] = useState<PersonaType>('pe_vc');
  const [severityFilter, setSeverityFilter] = useState<'all' | SeverityType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Localization state
  const [language, setLanguage] = useState<Language>('en');
  const t = TRANSLATIONS[language];

  // Free trial & automated quota state
  const [auditsUsed, setAuditsUsed] = useState(1);
  const maxFreeAudits = 2;

  // Custom uploaded contradictions state
  const [customAudits, setCustomAudits] = useState<Record<string, ContradictionItem[]>>({});
  
  // Modal states
  const [isCustomAuditOpen, setIsCustomAuditOpen] = useState(false);
  const [isAuditMemoOpen, setIsAuditMemoOpen] = useState(false);
  const [isPlaybookOpen, setIsPlaybookOpen] = useState(false);
  const [isVideoGuideOpen, setIsVideoGuideOpen] = useState(false);
  const [isCompetitorsOpen, setIsCompetitorsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isThreeLensAuditOpen, setIsThreeLensAuditOpen] = useState(false);

  const scenario = SCENARIOS[currentPersona];
  const personaCustomItems = customAudits[currentPersona] || [];
  const allContradictions = [...personaCustomItems, ...scenario.contradictions];

  // Filtering
  const filteredContradictions = allContradictions.filter((item) => {
    const matchesSeverity = severityFilter === 'all' || item.severity === severityFilter;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sourceA.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sourceB.quote.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSeverity && matchesSearch;
  });

  const handleCustomAuditComplete = (newItems: ContradictionItem[], docA: string, docB: string) => {
    setCustomAudits((prev) => ({
      ...prev,
      [currentPersona]: [...(prev[currentPersona] || []), ...newItems],
    }));
    setAuditsUsed((prev) => Math.min(prev + 1, maxFreeAudits));
  };

  const handleExportCSV = () => {
    const headers = [
      'ID',
      'Category',
      'Title',
      'Severity',
      'Financial Impact',
      'Confidence Score',
      'Source A Doc',
      'Source A Page',
      'Source A Quote',
      'Source B Doc',
      'Source B Page',
      'Source B Quote',
      'Forensic Analysis',
      'Recommended Action',
    ];

    const rows = allContradictions.map((c) => [
      `"${c.id}"`,
      `"${c.category}"`,
      `"${c.title.replace(/"/g, '""')}"`,
      `"${c.severity}"`,
      `"${c.financialImpact || 'N/A'}"`,
      `"${c.confidenceScore}%"`,
      `"${c.sourceA.docName}"`,
      `"${c.sourceA.page}"`,
      `"${c.sourceA.quote.replace(/"/g, '""')}"`,
      `"${c.sourceB.docName}"`,
      `"${c.sourceB.page}"`,
      `"${c.sourceB.quote.replace(/"/g, '""')}"`,
      `"${c.forensicAnalysis.replace(/"/g, '""')}"`,
      `"${c.recommendedAction.replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${scenario.companyName.replace(/\s+/g, '_')}_Reconciliation_Audit.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* 3-Zone Top Bar Contract */}
      <Header
        currentPersona={currentPersona}
        onSelectPersona={(persona) => {
          setCurrentPersona(persona);
          setSeverityFilter('all');
          setSearchQuery('');
        }}
        onOpenCustomAudit={() => {
          if (auditsUsed >= maxFreeAudits) {
            setIsPricingOpen(true);
          } else {
            setIsCustomAuditOpen(true);
          }
        }}
        onOpenPlaybook={() => setIsPlaybookOpen(true)}
        onOpenAuditMemo={() => setIsAuditMemoOpen(true)}
        onOpenVideoGuide={() => setIsVideoGuideOpen(true)}
        onOpenCompetitors={() => setIsCompetitorsOpen(true)}
        onOpenPricing={() => setIsPricingOpen(true)}
        onOpenThreeLensAudit={() => setIsThreeLensAuditOpen(true)}
        language={language}
        onSelectLanguage={setLanguage}
        auditsUsed={auditsUsed}
        maxFreeAudits={maxFreeAudits}
      />

      {/* Main Workspace Frame */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Context & Target Subject Banner */}
        <section className="border border-neutral-800 bg-neutral-900/50 rounded-xl p-6 relative overflow-hidden backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                <span>Domain: {scenario.badgeLabel}</span>
                <span aria-hidden="true">·</span>
                <span>Target: {scenario.targetAudience}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400">Deterministic Engine Active</span>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-neutral-400 shrink-0" />
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {scenario.companyName}
                </h1>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {scenario.headlineSummary}
              </p>
            </div>

            {/* Exposure Metric Box */}
            <div className="border border-neutral-800 bg-neutral-950/80 rounded-lg p-4 sm:p-5 shrink-0 flex flex-col justify-center min-w-[270px] shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-rose-400 font-semibold mb-1">
                <TrendingDown className="w-3.5 h-3.5" />
                {t.totalExposureLabel}
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-white tracking-tight">
                {scenario.totalExposure}
              </div>
              <div className="text-[11px] text-neutral-400 font-mono mt-1 flex items-center justify-between">
                <span>{allContradictions.length} {t.contradictionsFoundLabel}</span>
                <span className="text-emerald-400">99.4% Match</span>
              </div>
            </div>

          </div>

          {/* Real-time High-Density Financial Telemetry Bar */}
          <div className="mt-5 pt-4 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-2.5 bg-neutral-950/60 rounded border border-neutral-800/80">
              <div className="text-[10px] text-neutral-500 uppercase">Cross-Corpus Entities</div>
              <div className="text-white font-semibold text-xs mt-0.5">248 Verified Points</div>
            </div>
            <div className="p-2.5 bg-neutral-950/60 rounded border border-neutral-800/80">
              <div className="text-[10px] text-neutral-500 uppercase">Scan Latency</div>
              <div className="text-emerald-400 font-semibold text-xs mt-0.5">1.24s Client-Side</div>
            </div>
            <div className="p-2.5 bg-neutral-950/60 rounded border border-neutral-800/80">
              <div className="text-[10px] text-neutral-500 uppercase">Retention Vault</div>
              <div className="text-neutral-300 font-semibold text-xs mt-0.5">0 KB Saved (Ephemeral)</div>
            </div>
            <div className="p-2.5 bg-neutral-950/60 rounded border border-neutral-800/80">
              <div className="text-[10px] text-neutral-500 uppercase">Trial Quota Remaining</div>
              <div className="text-amber-400 font-semibold text-xs mt-0.5">{maxFreeAudits - auditsUsed} of {maxFreeAudits} Scans Left</div>
            </div>
          </div>

          {/* Corpus Evidence Section */}
          <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
              <span className="font-semibold text-neutral-300">{t.crossExaminedCorpusLabel}</span>
              {scenario.docsAnalyzed.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-neutral-950 border border-neutral-800 rounded font-mono text-[11px] text-neutral-300"
                >
                  <FileText className="w-3 h-3 text-emerald-400" />
                  <span>{doc.name}</span>
                  <span className="text-neutral-500">({doc.pages}p)</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCSV}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 rounded transition-colors whitespace-nowrap"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                {t.exportCsvLabel}
              </button>
            </div>
          </div>
        </section>

        {/* Filters & Control Bar */}
        <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Segmented Filter Controls */}
          <div className="flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-lg text-xs overflow-x-auto">
            <button
              onClick={() => setSeverityFilter('all')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
                severityFilter === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {t.allSignalsLabel} ({allContradictions.length})
            </button>
            <button
              onClick={() => setSeverityFilter('critical')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
                severityFilter === 'critical'
                  ? 'bg-rose-950 text-rose-200 border border-rose-800 shadow-sm'
                  : 'text-neutral-400 hover:text-rose-400'
              }`}
            >
              {t.criticalLabel}
            </button>
            <button
              onClick={() => setSeverityFilter('high')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
                severityFilter === 'high'
                  ? 'bg-amber-950 text-amber-200 border border-amber-800 shadow-sm'
                  : 'text-neutral-400 hover:text-amber-400'
              }`}
            >
              {t.highRiskLabel}
            </button>
            <button
              onClick={() => setSeverityFilter('caution')}
              className={`px-3 py-1.5 font-medium rounded-md transition-colors whitespace-nowrap ${
                severityFilter === 'caution'
                  ? 'bg-neutral-800 text-neutral-200 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {t.advisoriesLabel}
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full text-xs bg-neutral-900 border border-neutral-800 rounded-lg pl-8 pr-3 py-2 text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

        </section>

        {/* Contradictions Feed */}
        <section className="space-y-4">
          {filteredContradictions.length > 0 ? (
            filteredContradictions.map((item, index) => (
              <ContradictionCard key={item.id} item={item} index={index} />
            ))
          ) : (
            <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-12 text-center space-y-3">
              <AlertOctagon className="w-8 h-8 text-neutral-600 mx-auto" />
              <div className="text-sm font-semibold text-neutral-300">
                No Contradictions Match Current Filter
              </div>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Try resetting search queries or run a custom audit on new uploaded files.
              </p>
              <button
                onClick={() => {
                  setSeverityFilter('all');
                  setSearchQuery('');
                }}
                className="px-3.5 py-1.5 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 rounded hover:bg-emerald-900/30 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

      </main>

      {/* Footer (Strictly quiet links & disclaimer) */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-6 mt-12 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-neutral-400">Veritas Terminal</span>
            <span aria-hidden="true">·</span>
            <span>Deterministic Cross-Document Verification</span>
            <span aria-hidden="true">·</span>
            <span>Zero-Retention Ephemeral Execution</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setIsThreeLensAuditOpen(true)}
              className="text-rose-400 hover:underline font-semibold"
            >
              3-Lens Auditor
            </button>
            <button
              onClick={() => setIsCompetitorsOpen(true)}
              className="text-blue-400 hover:underline"
            >
              Competitor Teardown
            </button>
            <button
              onClick={() => setIsPricingOpen(true)}
              className="text-amber-400 hover:underline"
            >
              Subscription Plans
            </button>
            <button
              onClick={() => setIsPlaybookOpen(true)}
              className="text-neutral-400 hover:underline"
            >
              Founder Blueprint
            </button>
            <button
              onClick={() => setIsCustomAuditOpen(true)}
              className="text-emerald-400 hover:underline"
            >
              Upload Test Files
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CustomAuditModal
        isOpen={isCustomAuditOpen}
        onClose={() => setIsCustomAuditOpen(false)}
        onAuditComplete={handleCustomAuditComplete}
        language={language}
      />

      <AuditMemoModal
        isOpen={isAuditMemoOpen}
        onClose={() => setIsAuditMemoOpen(false)}
        scenario={scenario}
      />

      <PlaybookModal
        isOpen={isPlaybookOpen}
        onClose={() => setIsPlaybookOpen(false)}
      />

      <InteractiveVideoGuideModal
        isOpen={isVideoGuideOpen}
        onClose={() => setIsVideoGuideOpen(false)}
        onOpenCustomAudit={() => setIsCustomAuditOpen(true)}
      />

      <CompetitorShowcaseModal
        isOpen={isCompetitorsOpen}
        onClose={() => setIsCompetitorsOpen(false)}
      />

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        language={language}
        auditsUsed={auditsUsed}
        maxFreeAudits={maxFreeAudits}
      />

      <ThreeLensAuditModal
        isOpen={isThreeLensAuditOpen}
        onClose={() => setIsThreeLensAuditOpen(false)}
      />

    </div>
  );
}
