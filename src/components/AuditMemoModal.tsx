import React from 'react';
import { X, Printer, Copy, Check, FileCheck } from 'lucide-react';
import { Scenario } from '../types';

interface AuditMemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  scenario: Scenario;
}

export const AuditMemoModal: React.FC<AuditMemoModalProps> = ({
  isOpen,
  onClose,
  scenario,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const memoText = `FORENSIC CROSS-DOCUMENT RECONCILIATION REPORT
CONFIDENTIAL // INSTITUTIONAL AUDIT TERMINAL WORK PRODUCT
TARGET ENTITY: ${scenario.companyName}
AUDIT DOMAIN: ${scenario.roleTitle}
DATE: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}

CORPUS ANALYZED:
${scenario.docsAnalyzed.map((d, idx) => `* Document ${idx + 1}: ${d.name} (${d.type}, ${d.pages} pages, ${d.date})`).join('\n')}

FLAGGED CONTRADICTIONS:
${scenario.contradictions
  .map(
    (c, i) =>
`\n[#0${i + 1}] ${c.title.toUpperCase()} (${c.severity.toUpperCase()})
* Signal Category: ${c.category}
* Confidence Score: ${c.confidenceScore}%
* Citation (Doc 1): ${c.sourceA.docName}, Page ${c.sourceA.page}, ${c.sourceA.section}
* Quote (Doc 1): "${c.sourceA.quote}"
* Citation (Doc 2): ${c.sourceB.docName}, Page ${c.sourceB.page}, ${c.sourceB.section}
* Quote (Doc 2): "${c.sourceB.quote}"
* Exposure Delta: ${c.financialImpact || 'Not Quantifiable'}
* Forensic Cross-Examination: ${c.forensicAnalysis}
* Remedial Action Protocol: ${c.recommendedAction}`
  )
  .join('\n')}

================================================================================
AUDIT SUMMARY:
Total Discrepancies Flagged: ${scenario.contradictions.length} | Total Exposure Value: ${scenario.totalExposure} | Corpus Confidence Calibration: 98.4% deterministic match across verified schedules.
`;
    navigator.clipboard.writeText(memoText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl">
        
        {/* Modal Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60 rounded-t-xl">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-400" />
            <h2 className="text-base font-semibold text-white">
              Executive Forensic Audit Memorandum
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded hover:bg-neutral-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded hover:bg-neutral-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document View */}
        <div className="p-8 overflow-y-auto space-y-6 font-serif text-neutral-800 bg-white dark:bg-neutral-950 dark:text-neutral-200">
          
          {/* Memo Header */}
          <div className="border-b-2 border-neutral-300 dark:border-neutral-800 pb-4 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs uppercase font-sans tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                  VERITAS FORENSIC INTELLIGENCE LABS
                </span>
                <h1 className="text-2xl font-bold font-sans tracking-tight text-neutral-900 dark:text-white mt-1">
                  Cross-Document Reconciliation Memorandum
                </h1>
              </div>
              <div className="text-right text-xs font-mono text-neutral-500">
                DATE: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-sans text-neutral-600 dark:text-neutral-400 pt-3">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">Subject Entity: </span>
                {scenario.companyName}
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">Audit Scope: </span>
                {scenario.roleTitle}
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">Identified Exposure: </span>
                <span className="font-mono font-bold text-rose-600 dark:text-rose-400">
                  {scenario.totalExposure}
                </span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-neutral-200">Confidence Calibration: </span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">98.8% Verified</span>
              </div>
            </div>
          </div>

          {/* Documents Examined */}
          <div className="space-y-2 font-sans text-xs">
            <h3 className="font-bold uppercase tracking-wider text-neutral-500">
              Corpus Evidence Analyzed
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {scenario.docsAnalyzed.map((doc, idx) => (
                <div key={idx} className="p-3 border border-neutral-200 dark:border-neutral-800 rounded bg-neutral-50 dark:bg-neutral-900/50">
                  <div className="font-semibold text-neutral-900 dark:text-white font-mono">{doc.name}</div>
                  <div className="text-neutral-500 mt-0.5">
                    {doc.type} · {doc.date} · {doc.pages} Pages
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contradictions List */}
          <div className="space-y-6 pt-2">
            <h3 className="font-sans font-bold uppercase tracking-wider text-xs text-neutral-500">
              Verified Contradictions & Discrepancies ({scenario.contradictions.length})
            </h3>

            {scenario.contradictions.map((c, i) => (
              <div
                key={c.id}
                className="p-5 border border-neutral-300 dark:border-neutral-800 rounded-lg space-y-3 bg-neutral-50/50 dark:bg-neutral-900/40"
              >
                <div className="flex items-center justify-between font-sans">
                  <h4 className="font-bold text-sm text-neutral-900 dark:text-white">
                    #{i + 1}. {c.title}
                  </h4>
                  <span className="font-mono text-xs font-semibold text-rose-600 dark:text-rose-400">
                    {c.severity.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
                  <div className="p-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded">
                    <div className="font-bold text-neutral-600 dark:text-neutral-400 mb-1">
                      {c.sourceA.docName} (p. {c.sourceA.page})
                    </div>
                    <div className="italic text-neutral-700 dark:text-neutral-300">"{c.sourceA.quote}"</div>
                    <div className="mt-2 font-mono font-semibold text-neutral-900 dark:text-white">
                      Asserted: {c.sourceA.claimValue}
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded">
                    <div className="font-bold text-rose-600 dark:text-rose-400 mb-1">
                      {c.sourceB.docName} (p. {c.sourceB.page})
                    </div>
                    <div className="italic text-neutral-700 dark:text-neutral-300">"{c.sourceB.quote}"</div>
                    <div className="mt-2 font-mono font-semibold text-rose-600 dark:text-rose-400">
                      Discrepancy: {c.sourceB.claimValue}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-neutral-700 dark:text-neutral-300 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                  <span className="font-sans font-bold text-neutral-900 dark:text-neutral-100">Findings: </span>
                  {c.forensicAnalysis}
                </div>

                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-sans">
                  <span className="font-bold">Protocol: </span>
                  {c.recommendedAction}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
