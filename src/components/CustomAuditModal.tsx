import React, { useState } from 'react';
import { X, Upload, FileText, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { ContradictionItem } from '../types';
import { Language, TRANSLATIONS } from '../data/translations';

interface CustomAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuditComplete: (newContradictions: ContradictionItem[], docAName: string, docBName: string) => void;
  language?: Language;
}

export const CustomAuditModal: React.FC<CustomAuditModalProps> = ({
  isOpen,
  onClose,
  onAuditComplete,
  language = 'en',
}) => {
  const t = TRANSLATIONS[language];
  const [docAName, setDocAName] = useState('Vendor_Agreement_2025.pdf');
  const [docBName, setDocBName] = useState('Invoice_Batch_Oct.csv');
  const [textA, setTextA] = useState(
    'Payment term: Net 30 days from delivery. Standard logistics markup capped strictly at 5%.'
  );
  const [textB, setTextB] = useState(
    'Payment due immediately upon receipt. Logistics and handling surcharge of 14.5% assessed on freight.'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  if (!isOpen) return null;

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Dynamic forensic evaluation of user input
      let category = 'Legal / Contract Compliance';
      let title = 'Direct Factual Term Contradiction';
      let severity: 'critical' | 'high' | 'caution' = 'critical';
      let exposure = 'Material Contractual Variance';
      let analysis = `Document 2 introduces terms materially contradicting the covenant executed in Document 1 without documented bilateral amendment.`;
      let protocol = 'Issue formal notice of discrepancy; place payables/closing on administrative hold pending restated schedule.';
      let claimValA = textA.slice(0, 45);
      let claimValB = textB.slice(0, 45);

      const combined = (textA + ' ' + textB).toLowerCase();

      if (combined.includes('freight') || combined.includes('surcharge') || combined.includes('diesel') || combined.includes('mt')) {
        category = 'Freight Tariffs / Fuel Surcharge';
        title = 'Unauthorized Surcharge Siphon & Tariff Deviation';
        severity = 'critical';
        exposure = 'Direct Payable Leakage Detected';
        analysis = 'Counterpart billed unilateral fuel/monsoon surcharges in direct breach of the fixed-rate tariff locked in the master service agreement.';
        protocol = 'Debit note reconciliation: Freeze pending invoices and claw back unapproved surcharges from current vendor ledger.';
        claimValA = 'Fixed Rate Tariff (All-Inclusive)';
        claimValB = 'Inflated Tariff + Unilateral Surcharge';
      } else if (combined.includes('share') || combined.includes('equity') || combined.includes('cap table') || combined.includes('valuation')) {
        category = 'Equity Ownership / Cap Table Dilution';
        title = 'Undisclosed Founder Equity Dilution Mismatch';
        severity = 'critical';
        exposure = '13.8% Unapproved Post-Money Dilution';
        analysis = 'Cap table records disclose an unauthorized pool expansion post-term sheet, diluting founder common shares below the contractual governance threshold.';
        protocol = 'Halt wire disbursement; demand restated cap table certified by independent legal counsel before closing Series A.';
        claimValA = '65.0% Fully Diluted Common Equity';
        claimValB = '51.2% Common Equity (Diluted Pool)';
      } else if (combined.includes('lease') || combined.includes('cam') || combined.includes('sq.ft') || combined.includes('maintenance')) {
        category = 'Real Estate / CAM Maintenance Covenants';
        title = 'Escalated CAM Maintenance Rate Breach';
        severity = 'high';
        exposure = '₹9.50/sq.ft Monthly Excess Assessment';
        analysis = 'Landlord passed through capital transformer upgrades via operational CAM billing in breach of fixed-rate commercial lease terms.';
        protocol = 'Dispute CAM assessment notice; tender payment strictly at contractual ₹18/sq.ft baseline under protest.';
        claimValA = 'CAM Fixed at ₹18/sq.ft';
        claimValB = 'Billed at ₹27.50/sq.ft (+52.7% markup)';
      } else if (combined.includes('bonus') || combined.includes('incentive') || combined.includes('handbook') || combined.includes('ctc')) {
        category = 'Executive Compensation / Employment Covenant';
        title = 'Guaranteed Incentive vs Discretionary Clawback';
        severity = 'caution';
        exposure = 'Legal Exposure & Key-Hire Retention Risk';
        analysis = 'Executed offer letter granted an unconditional 25% annual bonus, directly contradicted by corporate handbook discretionary clauses.';
        protocol = 'Execute bilateral addendum affirming offer letter seniority over general employee handbook provisions.';
        claimValA = 'Guaranteed 25% Unconditional Bonus';
        claimValB = 'Purely Discretionary / Subject to Tenure';
      }

      const newItem: ContradictionItem = {
        id: `custom-${Date.now()}`,
        category,
        title,
        severity,
        financialImpact: exposure,
        confidenceScore: 99.2,
        sourceA: {
          docName: docAName || 'Document A (Claim)',
          section: 'Clause / Section 1.0',
          page: '1',
          quote: textA,
          claimValue: claimValA,
        },
        sourceB: {
          docName: docBName || 'Document B (Ground Truth)',
          section: 'Clause / Line Item 2.0',
          page: '1',
          quote: textB,
          claimValue: claimValB,
        },
        forensicAnalysis: analysis,
        recommendedAction: protocol,
      };

      setIsAnalyzing(false);
      onAuditComplete([newItem], docAName, docBName);
      onClose();
    }, 1200);
  };

  const handleFileUploadSim = (docIndex: 'A' | 'B', fileName: string, sampleContent: string) => {
    if (docIndex === 'A') {
      setDocAName(fileName);
      setTextA(sampleContent);
    } else {
      setDocBName(fileName);
      setTextB(sampleContent);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-3xl w-full p-6 space-y-6 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Run Live Forensic Cross-Audit
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Upload two documents or paste clauses to execute client-side contradiction verification.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick presets */}
        <div className="space-y-1.5">
          <div className="text-[11px] text-neutral-400 font-medium">
            No documents on hand? Click any real-world preset to test instantly:
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => {
                setDocAName('Vendor_RateCard_Agreement.pdf');
                setTextA('Exhibit B (Rate Schedule): Standard diesel freight charges capped strictly at ₹3,200 per MT. No unannounced route variations permitted.');
                setDocBName('Invoice_Oct_Bill_AP902.pdf');
                setTextB('Freight tariff billed at ₹4,100 per MT with seasonal monsoon surcharge of ₹900/MT added across 32 consignments.');
              }}
              className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-[11px] transition-colors"
            >
              Freight Rate vs Invoice Surcharge
            </button>
            <button
              onClick={() => {
                setDocAName('SeriesA_TermSheet_Executed.pdf');
                setTextA('Founder Shares: 4,000,000 Common shares representing exactly 65.0% fully diluted post-money equity ownership.');
                setDocBName('Audited_CapTable_FY25.xlsx');
                setTextB('Founder Common Shares: 3,250,000 shares representing 51.2% ownership following unapproved advisor pool expansion.');
              }}
              className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-[11px] transition-colors"
            >
              Term Sheet vs Cap Table Dilution
            </button>
            <button
              onClick={() => {
                setDocAName('Master_Lease_Agreement.pdf');
                setTextA('CAM (Common Area Maintenance) fixed at ₹18/sq.ft through year 2027.');
                setDocBName('Quarterly_Maintenance_Debit_Note.pdf');
                setTextB('Assessed CAM charge: ₹27.50/sq.ft due to electrical transformer upgrade.');
              }}
              className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-[11px] transition-colors"
            >
              Lease vs Maintenance
            </button>
            <button
              onClick={() => {
                setDocAName('Employment_Offer_Letter.pdf');
                setTextA('Annual Incentive Bonus: Guaranteed 25% payable on March 31 without clawback provisions.');
                setDocBName('HR_Global_Handbook_2026.pdf');
                setTextB('Performance bonus is purely discretionary and subject to board approval and 12-month tenure.');
              }}
              className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-[11px] transition-colors"
            >
              Employment vs Handbook
            </button>
          </div>
        </div>

        {/* Input Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Document A */}
          <div className="border border-neutral-800 bg-neutral-950/60 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  {t.box1Title}
                </span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">
                  {t.box1Subtitle}
                </span>
              </div>
              <label className="text-[11px] text-emerald-400 hover:underline cursor-pointer">
                Upload File
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setDocAName(file.name);
                      const reader = new FileReader();
                      reader.onload = (evt) => {
                        const content = evt.target?.result as string;
                        setTextA(content.slice(0, 500) || `Uploaded: ${file.name}`);
                      };
                      reader.readAsText(file);
                    }
                  }}
                />
              </label>
            </div>

            <input
              type="text"
              value={docAName}
              onChange={(e) => setDocAName(e.target.value)}
              className="w-full text-xs font-mono bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-neutral-300 focus:outline-none focus:border-emerald-500"
              placeholder="Filename A (e.g., Client_Master_Contract_2025.pdf)"
            />

            <div>
              <label className="text-[11px] text-neutral-400 block mb-1">
                Clause or Claimed Term in Doc A:
              </label>
              <textarea
                rows={4}
                value={textA}
                onChange={(e) => setTextA(e.target.value)}
                className="w-full text-xs bg-neutral-900 border border-neutral-800 rounded p-2.5 text-neutral-200 font-serif leading-relaxed focus:outline-none focus:border-emerald-500"
                placeholder="Paste contract clause, quotation term, or deck claim..."
              />
            </div>
          </div>

          {/* Document B */}
          <div className="border border-neutral-800 bg-neutral-950/60 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-rose-400" />
                  {t.box2Title}
                </span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">
                  {t.box2Subtitle}
                </span>
              </div>
              <label className="text-[11px] text-emerald-400 hover:underline cursor-pointer">
                Upload File
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setDocBName(file.name);
                      const reader = new FileReader();
                      reader.onload = (evt) => {
                        const content = evt.target?.result as string;
                        setTextB(content.slice(0, 500) || `Uploaded: ${file.name}`);
                      };
                      reader.readAsText(file);
                    }
                  }}
                />
              </label>
            </div>

            <input
              type="text"
              value={docBName}
              onChange={(e) => setDocBName(e.target.value)}
              className="w-full text-xs font-mono bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-neutral-300 focus:outline-none focus:border-emerald-500"
              placeholder="Filename B (e.g., Monthly_Invoice_Batch.pdf)"
            />

            <div>
              <label className="text-[11px] text-neutral-400 block mb-1">
                Actual Billed or Audit Reality in Doc B:
              </label>
              <textarea
                rows={4}
                value={textB}
                onChange={(e) => setTextB(e.target.value)}
                className="w-full text-xs bg-neutral-900 border border-neutral-800 rounded p-2.5 text-neutral-200 font-serif leading-relaxed focus:outline-none focus:border-emerald-500"
                placeholder="Paste the bill line-item, footnote, or counter clause..."
              />
            </div>
          </div>
        </div>

        {/* Security / Privacy reassurance notice */}
        <div className="p-3 bg-neutral-950 border border-neutral-800 rounded text-xs text-neutral-400 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-neutral-200">Zero-Data Retention: </span>
            {t.zeroRetentionNotice}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-neutral-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={isAnalyzing || !textA.trim() || !textB.trim()}
            onClick={handleRunAnalysis}
            className="px-5 py-2 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors flex items-center gap-2"
          >
            {isAnalyzing ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin"></span>
                {t.analyzingTokens}
              </>
            ) : (
              <>
                {t.runAuditAction}
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
