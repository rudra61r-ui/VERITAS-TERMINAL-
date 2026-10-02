import React, { useState } from 'react';
import { 
  X, 
  ShieldAlert, 
  Users, 
  Target, 
  Swords, 
  Copy, 
  Check, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles,
  FileText,
  Clock,
  Briefcase
} from 'lucide-react';

interface ThreeLensAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ProductTarget = 'veritas' | 'dhandha_dose' | 'problem_bridge' | 'custom';
type ActiveLens = 'all' | 'partner' | 'coach' | 'adversary' | 'priority';

export const ThreeLensAuditModal: React.FC<ThreeLensAuditModalProps> = ({ isOpen, onClose }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductTarget>('veritas');
  const [activeLens, setActiveLens] = useState<ActiveLens>('all');
  const [copied, setCopied] = useState(false);
  
  // Custom input state
  const [customText, setCustomText] = useState('');
  const [isAuditingCustom, setIsAuditingCustom] = useState(false);

  if (!isOpen) return null;

  const handleCopyReport = () => {
    let reportText = '';
    if (selectedProduct === 'veritas') {
      reportText = `MASTER THREE-LENS BUSINESS AUDIT // VERITAS TERMINAL
DATE: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
FOUNDER: Rudra (Solo Founder, Ahmedabad)

## 🤝 THE PARTNER
- Genuinely Strong:
  1. Zero-Storage Vault client-side ephemeral model dissolves 80% of institutional data privacy objections.
  2. 7-Part Contradiction Schema speaks direct Big 4 forensic accounting language.
  3. 2-Box Mental Model (Claim vs Reality) makes the product instantly intuitive.
- Sleepless Co-Founder Concerns:
  * 100% of current case studies are synthetic demos. Every sales conversation starts at absolute zero trust.
  * Trying to sell multi-thousand dollar SaaS to Wall Street/PE before winning 1 local mid-market customer.
- Single Highest-Leverage Fix:
  * Publish ONE real forensic teardown on a real, controversial public BSE/NSE or SEC filing.

## 🎯 THE COACH
1. Unit Economics: SaaS subscription (₹15k/mo) fails for unproven solo software. Shift to ₹25k/audit pilot or 15% recovery fee.
2. GTM Fit: Institutional PE buyers don't convert on cold web traffic. Pivot to local Gujarat/West India Logistics & EPC CFOs.
3. Moat / Defensibility: Long-context LLMs can diff text. Moat must be automated reconciliation ledgers & boardroom memo exports.
4. Trust & Compliance: No SOC 2 Type II or signed DPA. Publish technical browser sandbox whitepaper + 1-page mutual NDA.
5. Evidence & Proof: Synthetic demo metrics displayed as live telemetry destroy trust. Watermark as "Benchmark Case Studies".
6. Founder Capacity Risk: 1 founder chasing 4 personas. Freeze PE/Trader/Academic; focus 100% on Vendor Overbilling Audit.

## ⚔️ THE ADVERSARY
- Ruthless Competitor Exploit: "Veritas is an unverified wrapper with zero cyber-liability insurance or SOC-2 backing."
- Diligence Question You Cannot Answer: "Show me benchmark accuracy on 100-page scanned bilti receipts with false positives <1%."
- Most Damaging True Statement: "Sleek prototype built by a solo web developer with zero enterprise customer contracts."
- Threat Timeline: Immediate (rejection due to lack of proof) -> 3-6 Mo (VDRs adding diff tabs) -> 12 Mo (Office Copilot commoditization).

## 🔴 CONSOLIDATED PRIORITY LIST
1. Publish 1 Real Public Forensic Teardown (Zero Trust -> Proven Utility).
2. Niche Down strictly to Vendor Invoice Overbilling Audit.
3. Replace SaaS Subscription with 100% Risk-Free Recovery Audit Pricing.
4. Publish 1-Page Mutual NDA & Technical Browser Memory Sandbox Brief.
5. Watermark Synthetic Scenarios as Benchmark References.`;
    } else if (selectedProduct === 'dhandha_dose') {
      reportText = `MASTER THREE-LENS BUSINESS AUDIT // DHANDHA DOSE (Tier 1/2 Expert-Student Marketplace)
## 🤝 THE PARTNER: Real pain point (tier 2 youth lack mentors), but marketplace cold-start chicken-and-egg problem is draining founder energy.
## 🎯 THE COACH: Unit economics fail without high AOV or corporate sponsorship. GTM via organic student acquisition is high CAC.
## ⚔️ THE ADVERSARY: Unbundled WhatsApp/Telegram groups and YouTube channels offer free alternatives; no defensible moat.
## 🔴 PRIORITY: Pause active product development. Direct 100% energy to Veritas Terminal where B2B willingness-to-pay is 50x higher.`;
    } else {
      reportText = `MASTER THREE-LENS BUSINESS AUDIT // PROBLEM BRIDGE (Peer Problem-Solving Network)
## 🤝 THE PARTNER: Community ideas feel good but have no commercial urgency.
## 🎯 THE COACH: Zero monetizable utility. Peer networks suffer from low quality without heavy moderation.
## ⚔️ THE ADVERSARY: Reddit, Twitter, and Discord already own peer problem-solving for free.
## 🔴 PRIORITY: Archive codebase. Focus exclusively on enterprise B2B compliance where money is made.`;
    }

    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 bg-neutral-900/90 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
              <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                Master Business Audit Engine (Partner · Coach · Adversary)
              </h2>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Rudra's recurring 3-lens strategic checkpoint: Zero fluff, high-stakes diagnostics, and adversarial diligence.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyReport}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
              <span>{copied ? 'Copied Report' : 'Copy Full Audit'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product / Venture Selector Tabs */}
        <div className="flex items-center border-b border-neutral-800 bg-neutral-900/40 px-4 overflow-x-auto text-xs gap-2 py-2.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mr-2 shrink-0">
            Target Venture:
          </span>
          <button
            onClick={() => setSelectedProduct('veritas')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              selectedProduct === 'veritas'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Veritas Terminal (Active Product)
          </button>
          <button
            onClick={() => setSelectedProduct('dhandha_dose')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedProduct === 'dhandha_dose'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
            }`}
          >
            Dhandha Dose (Marketplace)
          </button>
          <button
            onClick={() => setSelectedProduct('problem_bridge')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedProduct === 'problem_bridge'
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
            }`}
          >
            Problem Bridge (Peer Network)
          </button>
          <button
            onClick={() => setSelectedProduct('custom')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              selectedProduct === 'custom'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 font-semibold'
                : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Audit New Feature / Pitch
          </button>
        </div>

        {/* Lens Filter Navigation */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-4 py-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-neutral-500 uppercase">View Lens:</span>
            <button
              onClick={() => setActiveLens('all')}
              className={`px-2.5 py-1 rounded font-mono text-[11px] ${
                activeLens === 'all' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Lenses
            </button>
            <button
              onClick={() => setActiveLens('partner')}
              className={`px-2.5 py-1 rounded font-mono text-[11px] flex items-center gap-1 ${
                activeLens === 'partner' ? 'bg-blue-950 text-blue-300 border border-blue-800' : 'text-neutral-400 hover:text-blue-300'
              }`}
            >
              🤝 Partner
            </button>
            <button
              onClick={() => setActiveLens('coach')}
              className={`px-2.5 py-1 rounded font-mono text-[11px] flex items-center gap-1 ${
                activeLens === 'coach' ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'text-neutral-400 hover:text-amber-300'
              }`}
            >
              🎯 Coach
            </button>
            <button
              onClick={() => setActiveLens('adversary')}
              className={`px-2.5 py-1 rounded font-mono text-[11px] flex items-center gap-1 ${
                activeLens === 'adversary' ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'text-neutral-400 hover:text-rose-300'
              }`}
            >
              ⚔️ Adversary
            </button>
            <button
              onClick={() => setActiveLens('priority')}
              className={`px-2.5 py-1 rounded font-mono text-[11px] flex items-center gap-1 ${
                activeLens === 'priority' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'text-neutral-400 hover:text-emerald-300'
              }`}
            >
              🔴 Priority List
            </button>
          </div>

          <div className="text-[11px] font-mono text-neutral-400 hidden sm:block">
            Strict Big 4 / Institutional Rigor
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs text-neutral-300">

          {/* If Custom Venture selected */}
          {selectedProduct === 'custom' && (
            <div className="p-4 border border-purple-900/60 bg-purple-950/20 rounded-xl space-y-3">
              <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Audit New Copy, Feature, or Deck in Real-Time
              </div>
              <textarea
                rows={4}
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Paste your new feature description, pricing update, or pitch copy here to trigger the 3-lens audit..."
                className="w-full text-xs font-serif bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-neutral-200 focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={() => {
                  setIsAuditingCustom(true);
                  setTimeout(() => setIsAuditingCustom(false), 800);
                }}
                disabled={!customText.trim()}
                className="px-4 py-2 text-xs font-bold rounded-lg bg-purple-500 hover:bg-purple-400 text-neutral-950 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                {isAuditingCustom ? 'Evaluating Through 3 Lenses...' : 'Run Master Business Audit on Input'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* ============================================================== */}
          {/* LENS 1: THE PARTNER */}
          {/* ============================================================== */}
          {(activeLens === 'all' || activeLens === 'partner') && (
            <div className="border border-blue-900/50 bg-blue-950/15 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-blue-900/40 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-blue-400 flex items-center gap-2">
                    🤝 LENS 1 — THE PARTNER
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    (Co-founder with equity on the line)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-blue-300">
                  PROTECTIVE & DIRECT
                </span>
              </div>

              {selectedProduct === 'veritas' ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-1.5 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      What is Genuinely Strong Here (Evidence-Backed):
                    </h4>
                    <ul className="space-y-1.5 pl-5 list-disc text-neutral-300">
                      <li>
                        <strong>Zero-Storage Vault framing is brilliant:</strong> Ephemeral in-memory parsing eliminates 80% of corporate security objections before they start.
                      </li>
                      <li>
                        <strong>7-Part Contradiction Schema:</strong> Direct citations, verbatim quotes, and Exposure Delta speak the exact language of institutional CFOs and Big 4 auditors.
                      </li>
                      <li>
                        <strong>2-Box Mental Model (Claim vs Reality):</strong> Anyone can instantly grasp which file goes where without needing a 20-page manual.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-rose-400 uppercase tracking-wider text-[11px] mb-1.5 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                      What Would Make Me Lose Sleep (Sleepless Concerns):
                    </h4>
                    <ul className="space-y-1.5 pl-5 list-disc text-neutral-300">
                      <li>
                        <strong>All current scenarios are synthetic demos:</strong> NexaSolar and Vertex BioPharma are simulated. Every sales call starts at absolute zero trust until we have 1 real public proof.
                      </li>
                      <li>
                        <strong>Chasing Wall Street before winning locally:</strong> Trying to sell $1,000/mo software to New York VCs as a solo developer from Ahmedabad without local distribution is high-friction suicide.
                      </li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-blue-950/40 border border-blue-800/80 rounded-lg">
                    <span className="font-bold text-white text-[11px] uppercase tracking-wider block mb-1">
                      Single Highest-Leverage Fix (Impact-per-Effort):
                    </span>
                    <p className="text-neutral-200 leading-relaxed">
                      Download 1 real, public, controversial MCA/BSE annual report or SEC 10-K with an actual footnote restatement. Run Veritas, screenshot the side-by-side proof, and post the teardown publicly. This transforms the platform from an unverified prototype into proven forensic software in 2 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-neutral-300">
                  Dhandha Dose / Problem Bridge audit: Consumer and student networks suffer from high churn and zero willingness-to-pay. Focus founder equity strictly on Veritas where B2B enterprise budgets exist.
                </p>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* LENS 2: THE COACH */}
          {/* ============================================================== */}
          {(activeLens === 'all' || activeLens === 'coach') && (
            <div className="border border-amber-900/50 bg-amber-950/15 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-amber-900/40 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-amber-400 flex items-center gap-2">
                    🎯 LENS 2 — THE COACH
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    (Diagnostic, Evidence-Driven Checklist)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300">
                  SYSTEMATIC DIAGNOSIS
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="p-3.5 bg-neutral-900/70 border border-neutral-800 rounded-lg space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-white">1. Unit Economics & Monetization</span>
                    <span className="text-amber-400 font-mono">FAILS CHECK</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    <strong>Gap:</strong> SaaS subscription (₹15,000/mo) assumes self-serve checkout. Institutional buyers do not buy monthly SaaS from solo developers.
                  </p>
                  <p className="text-[11px] text-emerald-400">
                    <strong>Action:</strong> Shift pricing to ₹25,000 per project audit or 15% contingency fee on recovered vendor overbilling.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-900/70 border border-neutral-800 rounded-lg space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-white">2. Go-To-Market Fit</span>
                    <span className="text-rose-400 font-mono">FAILS CHECK</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    <strong>Gap:</strong> PE associates buy via trusted referral networks, not cold web traffic or social media posts.
                  </p>
                  <p className="text-[11px] text-emerald-400">
                    <strong>Action:</strong> Target mid-market Logistics & EPC CFOs in Gujarat/Western India via direct outbound with language advantage.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-900/70 border border-neutral-800 rounded-lg space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-white">3. Moat & Defensibility</span>
                    <span className="text-amber-400 font-mono">FAILS CHECK</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    <strong>Gap:</strong> Any user with Claude 3.5 or Gemini long-context can paste 2 files into chat. Text diffing is not defensible alone.
                  </p>
                  <p className="text-[11px] text-emerald-400">
                    <strong>Action:</strong> Build the moat on automated audit committee binder PDFs and reconciliation CSV ledgers.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-900/70 border border-neutral-800 rounded-lg space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-white">4. Trust & Compliance</span>
                    <span className="text-rose-400 font-mono">FAILS CHECK</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    <strong>Gap:</strong> No SOC 2 Type II certification, ISO 27001, or Data Processing Agreement (DPA) visible.
                  </p>
                  <p className="text-[11px] text-emerald-400">
                    <strong>Action:</strong> Publish a 1-page Security Sandbox whitepaper explaining browser-level volatile memory + downloadable Mutual NDA.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-900/70 border border-neutral-800 rounded-lg space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-white">5. Evidence & Proof</span>
                    <span className="text-rose-400 font-mono">FAILS CHECK</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    <strong>Gap:</strong> Synthetic demo stats (99.4% match, ₹9.08 Cr exposure) displayed as live telemetry destroy credibility with pros.
                  </p>
                  <p className="text-[11px] text-emerald-400">
                    <strong>Action:</strong> Explicitly watermark pre-loaded scenarios as "Demonstration Benchmarks" and separate from live uploads.
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-900/70 border border-neutral-800 rounded-lg space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-white">6. Founder Capacity Risk</span>
                    <span className="text-amber-400 font-mono">FAILS CHECK</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    <strong>Gap:</strong> Solo founder attempting to support 4 disparate customer personas simultaneously.
                  </p>
                  <p className="text-[11px] text-emerald-400">
                    <strong>Action:</strong> Freeze PE, Trader, and Researcher personas. Dedicate 100% of bandwidth to CFO Vendor Overbilling.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* LENS 3: THE ADVERSARY */}
          {/* ============================================================== */}
          {(activeLens === 'all' || activeLens === 'adversary') && (
            <div className="border border-rose-900/50 bg-rose-950/15 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-rose-900/40 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-rose-400 flex items-center gap-2">
                    ⚔️ LENS 3 — THE ADVERSARY
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    (Ruthless Competitor & Diligence Auditor)
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 border border-rose-800 text-rose-300">
                  EXPLOIT GAPS
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded-lg space-y-1">
                  <span className="text-rose-300 font-semibold text-xs block">
                    Competitor Counter-Pitch (How AlphaSense or Datasite will undercut you):
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    "Veritas is an unverified wrapper around third-party LLMs built by an individual with zero SOC-2 compliance, zero VDR integrations, and zero cyber-liability coverage. If their regex parser misses an unexecuted loan pledge or hallucinates a phantom margin gap, you carry 100% of the liability."
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded-lg space-y-1">
                  <span className="text-amber-300 font-semibold text-xs block">
                    The Diligence Question Rudra Cannot Currently Answer Convincingly:
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    "Show me your empirical confusion matrix on a messy, 120-page scanned vendor contract with handwritten delivery biltis and multi-column tabular schedules. What is your audited false-positive and false-negative rate?"
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-900/80 border border-neutral-800 rounded-lg space-y-1">
                  <span className="text-red-400 font-semibold text-xs block">
                    Most Damaging But True Statement a Skeptic Could Say Publicly:
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    "This is an impressive front-end prototype displaying synthetic demo numbers, created by a solo freelance developer who has never worked inside a Big 4 forensic accounting firm and has zero signed enterprise customers."
                  </p>
                </div>

                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-neutral-400">Threat Severity Timeline:</span>
                  <div className="flex items-center gap-3">
                    <span className="text-rose-400">0–30 Days: Zero-trust bounce</span>
                    <span className="text-amber-400">3–6 Mo: VDRs add diff tabs</span>
                    <span className="text-neutral-400">12 Mo: Office Copilot commoditization</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* CONSOLIDATED PRIORITY LIST */}
          {/* ============================================================== */}
          {(activeLens === 'all' || activeLens === 'priority') && (
            <div className="border-2 border-emerald-500/80 bg-neutral-900/90 rounded-xl p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    🔴 CONSOLIDATED PRIORITY LIST (Ranked by Risk × Solo-Feasibility)
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-2 py-0.5 rounded">
                  MAX 5 ACTIONABLE DIRECTIVES
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <span className="font-mono font-bold text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded shrink-0">
                    #01
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-xs">Publish 1 Real Public Forensic Teardown</h5>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Download 1 real, controversial public filing (e.g. Paytm, Byju's, or listed BSE engineering company footnote restatement). Run Veritas, export the memo, and publish the proof publicly on LinkedIn/X. Eliminates the "synthetic demo" critique instantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <span className="font-mono font-bold text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded shrink-0">
                    #02
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-xs">Niche Down Strictly to Vendor Overbilling (CFO & Invoices)</h5>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Freeze PE diligence, public equity trading, and research tabs. Focus 100% of founder energy on vendor freight & contractor invoice overbilling. Catching ₹10 Lakh in overbilling is 10x easier to sell and verify than multi-million dollar equity deals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <span className="font-mono font-bold text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded shrink-0">
                    #03
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-xs">Replace Monthly SaaS with Risk-Free Pilot Pricing</h5>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Pitch initial clients: "We audit your last 10 vendor contracts under NDA. If we catch overbilling, you pay 15% of recovered cash; if clean, you pay ₹0." Zero purchase friction for procurement heads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <span className="font-mono font-bold text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded shrink-0">
                    #04
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-xs">Publish Downloadable Mutual NDA & Browser Sandbox Brief</h5>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Add a direct 1-click downloadable mutual NDA and a 1-page Security Architecture PDF explaining why client-side volatile memory protects corporate confidentiality without storing files.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <span className="font-mono font-bold text-xs text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded shrink-0">
                    #05
                  </span>
                  <div>
                    <h5 className="font-bold text-white text-xs">Watermark Demo Scenarios as "Benchmark References"</h5>
                    <p className="text-[11px] text-neutral-300 mt-0.5">
                      Label NexaSolar and Vertex BioPharma explicitly as "Benchmark Demonstrations" to protect integrity, while keeping live user upload sessions completely segregated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-xs">
          <div className="text-neutral-500 font-mono text-[11px]">
            Master Business Audit Framework · Continuous Checkpoint Engine
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-neutral-950 bg-neutral-200 hover:bg-white rounded transition-colors"
          >
            Close Audit
          </button>
        </div>

      </div>
    </div>
  );
};
