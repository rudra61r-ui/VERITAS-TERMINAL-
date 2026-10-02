import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, Check, Sparkles, AlertCircle, Layers, DollarSign } from 'lucide-react';

interface CompetitorShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CompetitorProfile {
  id: string;
  name: string;
  category: string;
  pricing: string;
  website: string;
  primaryTarget: string;
  uiStyleDescription: string;
  uiHighlights: string[];
  visualMockup: {
    theme: string;
    header: string;
    leftPane: string;
    rightPane: string;
  };
  fatalFlaw: string;
  veritasMoat: string;
}

const COMPETITORS: CompetitorProfile[] = [
  {
    id: 'alphasense',
    name: 'AlphaSense',
    category: 'Market Intelligence & Search Terminal',
    pricing: '$12,000 – $25,000 / seat / year (Enterprise Contract)',
    website: 'https://www.alpha-sense.com',
    primaryTarget: 'Wall Street Hedge Funds, Equity Research, Fortune 500 Strategy',
    uiStyleDescription: 'Dense 3-column split view (Search filters on Left, Document list in Center, Full PDF viewer with yellow keyword highlights on Right).',
    uiHighlights: [
      'Keyword sentiment heatmaps (Positive / Negative mentions)',
      'Black and deep navy blue background with teal accents',
      'Table of contents tree navigation for 10-K SEC filings',
    ],
    visualMockup: {
      theme: 'bg-slate-950 border-slate-800 text-slate-200',
      header: 'AlphaSense // SEC 10-K Search: "Neuro-7 Distributor Terms"',
      leftPane: 'Filters: Earnings Transcripts (41), SEC Filings (12), Broker Research (88)',
      rightPane: 'PDF View: Page 38 highlighted in yellow. "distributor agreements extended up to 120 days..." (User must manually read and calculate)',
    },
    fatalFlaw: 'It is strictly a search engine! It finds keywords, but cannot take File 1 and File 2 and automatically calculate: "Discrepancy: $14M leakage on Clause 6.2."',
    veritasMoat: 'Veritas is a deterministic cross-examiner. Zero manual reading required—Veritas outputs the exact financial delta and conflict proof.',
  },
  {
    id: 'hebbia',
    name: 'Hebbia (Matrix)',
    category: 'AI Diligence Grid for Private Equity',
    pricing: '$30,000 – $100,000+ per firm / year',
    website: 'https://www.hebbia.ai',
    primaryTarget: 'Top 1% Tier-1 Private Equity (KKR, Blackstone, Carlyle)',
    uiStyleDescription: 'Spreadsheet-style Matrix grid where columns are custom prompt questions and rows are uploaded confidential deal PDFs.',
    uiHighlights: [
      'Minimalist cream/off-white or clean dark canvas',
      'Interactive matrix cells showing citations when clicked',
      'Long pipeline wait times (takes 10-30 mins to index 1,000 docs)',
    ],
    visualMockup: {
      theme: 'bg-neutral-900 border-neutral-700 text-neutral-200',
      header: 'Hebbia Matrix // Project Apollo Deal Room (N=42 Documents)',
      leftPane: 'Columns: [EBITDA Claim] | [Customer Concentration] | [Patent Ownership]',
      rightPane: 'Row 1 (NexaSolar): Cell A1 shows 31.2%. User must manually click and compare Row 1 against statutory filings in Row 8.',
    },
    fatalFlaw: 'Completely out of reach for 99% of businesses. Only sells to multi-billion-dollar New York funds; impossible for Indian MSMEs or mid-market CFOs to buy.',
    veritasMoat: 'Accessible, self-serve, instant 2-box comparison with zero setup overhead and transparent ₹0-entry model.',
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg Professional',
    category: 'Financial Telemetry & Market Terminal',
    pricing: '$24,240 / year per terminal license',
    website: 'https://www.bloomberg.com/professional',
    primaryTarget: 'Institutional Traders, Central Banks, Treasury Desks',
    uiStyleDescription: 'Iconic amber/orange text on pure black background, custom mechanical keyboard hotkeys, and high-density 4-pane tiling.',
    uiHighlights: [
      'Retro-futuristic command line prompt (e.g. "AAPL US <EQUITY> FA <GO>")',
      'Zero white space; 100% density with live ticking feeds',
      'Requires months of training for analysts to memorize commands',
    ],
    visualMockup: {
      theme: 'bg-black border-amber-900 text-amber-400 font-mono',
      header: 'BLOOMBERG TERMINAL // <DES> VBP US EQUITY // FINANCIAL ANALYSIS',
      leftPane: '1) Balance Sheet  2) Cash Flow  3) Footnote Recon  4) Supply Chain',
      rightPane: 'Footnote 14: Accruals $5.9M (+240%). High learning curve, no natural-language cross-document contract auditor.',
    },
    fatalFlaw: 'Ancient UX built in the 1980s. Incredible for stock market numbers, but completely useless for comparing a vendor contract against monthly freight invoices.',
    veritasMoat: 'Modern web architecture designed specifically for document contracts, invoices, and audit slips.',
  },
  {
    id: 'blackore',
    name: 'Black Ore & Vic.ai',
    category: 'AI Tax & Accounts Payable Automation',
    pricing: '$500 – $2,500 / month per organization',
    website: 'https://www.blackore.ai',
    primaryTarget: 'Mid-market CPA accounting firms and AP departments',
    uiStyleDescription: 'Modern Silicon Valley fintech look (white cards, clean typography, invoice upload drag-drop).',
    uiHighlights: [
      'Automatic GL code assignment',
      'Vendor name and tax ID extraction',
      'Single invoice approval workflow',
    ],
    visualMockup: {
      theme: 'bg-neutral-900 border-neutral-800 text-neutral-300',
      header: 'Vic.ai // Accounts Payable Batch #1094',
      leftPane: 'Invoice AP-8841: Vendor Apex Logistics, Amount ₹4,150/MT, Status: Pending Approval',
      rightPane: 'Extraction: Extracts Line Items into ERP. But DOES NOT check whether the contract permitted the ₹750 fuel surcharge in the first place!',
    },
    fatalFlaw: 'They automate the payment of invoices, but blindly approve them because they do not verify the master legal contract terms.',
    veritasMoat: 'Veritas is the security gate BEFORE payment: it catches the ₹750 illegal surcharge by cross-verifying the master contract.',
  },
];

export const CompetitorShowcaseModal: React.FC<CompetitorShowcaseModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedId, setSelectedId] = useState('alphasense');

  if (!isOpen) return null;

  const current = COMPETITORS.find((c) => c.id === selectedId) || COMPETITORS[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 bg-neutral-900/80 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <h2 className="text-base font-bold text-white tracking-tight">
                Competitor UI & Platform Intelligence Teardown
              </h2>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Top financial & diligence terminals: Unka look kaisa hai, wo kitna charge karte hain, aur hum unhe kaise beat karte hain.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Competitor Selector Bar */}
        <div className="flex items-center border-b border-neutral-800 bg-neutral-900/40 px-4 overflow-x-auto text-xs gap-2 py-2">
          {COMPETITORS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedId === c.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-semibold'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-300">
          
          {/* Top metadata grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-neutral-800 bg-neutral-900/50 p-4 rounded-xl">
            <div>
              <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono">Platform Name</div>
              <div className="text-base font-bold text-white flex items-center gap-1.5 mt-0.5">
                {current.name}
                <a
                  href={current.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 inline-flex items-center"
                  title="Visit official website"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">{current.category}</div>
            </div>

            <div>
              <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono">Market Pricing</div>
              <div className="text-sm font-semibold font-mono text-amber-400 mt-0.5">
                {current.pricing}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Annual Enterprise Lock-in</div>
            </div>

            <div>
              <div className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono">Target Customers</div>
              <div className="text-xs font-medium text-neutral-200 mt-0.5">
                {current.primaryTarget}
              </div>
            </div>
          </div>

          {/* Visual UI Wireframe / Mockup representation */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-neutral-400" />
                Simulated Interface Wireframe: How {current.name} Looks
              </span>
              <a
                href={current.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1"
              >
                Open {current.name} Official Website <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className={`p-4 rounded-xl border font-mono text-xs ${current.visualMockup.theme} space-y-3 shadow-lg`}>
              <div className="p-2 border-b border-neutral-800 flex items-center justify-between text-[11px]">
                <span>{current.visualMockup.header}</span>
                <span className="text-[10px] opacity-60">LIVE TERMINAL VIEW</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
                <div className="p-3 bg-black/40 rounded border border-neutral-800">
                  <div className="font-bold opacity-80 mb-1">NAVIGATION / FILTERS</div>
                  <div className="leading-relaxed opacity-90">{current.visualMockup.leftPane}</div>
                </div>
                <div className="md:col-span-2 p-3 bg-black/40 rounded border border-neutral-800">
                  <div className="font-bold opacity-80 mb-1">DOCUMENT & EVIDENCE INSPECTOR</div>
                  <div className="leading-relaxed opacity-90">{current.visualMockup.rightPane}</div>
                </div>
              </div>
            </div>
          </div>

          {/* UI Design Traits */}
          <div className="p-4 border border-neutral-800 bg-neutral-900/40 rounded-xl space-y-2">
            <div className="font-semibold text-white text-xs">How their UI is designed:</div>
            <p className="text-neutral-400 text-xs">{current.uiStyleDescription}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
              {current.uiHighlights.map((h, i) => (
                <div key={i} className="p-2.5 bg-neutral-950 border border-neutral-800 rounded text-[11px] text-neutral-300">
                  ✓ {h}
                </div>
              ))}
            </div>
          </div>

          {/* The Fatal Flaw vs Veritas Moat */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-rose-950/60 bg-rose-950/20 rounded-xl space-y-2">
              <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-400" />
                Their Fatal Flaw (Where they fail)
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {current.fatalFlaw}
              </p>
            </div>

            <div className="p-4 border border-emerald-950/60 bg-emerald-950/20 rounded-xl space-y-2">
              <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Veritas Moat (How you win)
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {current.veritasMoat}
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between">
          <div className="text-[11px] text-neutral-500 font-mono">
            Competitive Benchmarking Data · Updated 2026
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-neutral-950 bg-neutral-200 hover:bg-white rounded transition-colors"
          >
            Close Teardown
          </button>
        </div>

      </div>
    </div>
  );
};
