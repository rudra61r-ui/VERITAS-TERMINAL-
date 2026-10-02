import React from 'react';
import { AlertCircle, AlertTriangle, Info, ArrowRight, ExternalLink } from 'lucide-react';
import { ContradictionItem } from '../types';

interface ContradictionCardProps {
  item: ContradictionItem;
  index: number;
}

export const ContradictionCard: React.FC<ContradictionCardProps> = ({ item, index }) => {
  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return (
          <div className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>CRITICAL CONFLICT</span>
          </div>
        );
      case 'high':
        return (
          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>HIGH RISK MISMATCH</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
            <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>MATERIAL ADVISORY</span>
          </div>
        );
    }
  };

  return (
    <div className="border border-neutral-800 bg-neutral-900/60 rounded-xl overflow-hidden hover:border-neutral-700 transition-colors">
      {/* Card Header: Editorial Numbering & Unboxed Metadata */}
      <div className="p-5 border-b border-neutral-800/80 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-neutral-900/90">
        <div>
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
            <span>#{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
            <span aria-hidden="true">·</span>
            <span>{item.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums text-neutral-300">{item.confidenceScore}% Confidence</span>
          </div>
          <h3 className="text-base font-semibold text-white tracking-tight">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {item.financialImpact && (
            <div className="text-right">
              <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Exposure Delta</div>
              <div className="text-sm font-semibold font-mono tabular-nums text-emerald-400">
                {item.financialImpact}
              </div>
            </div>
          )}
          <div className="pl-3 border-l border-neutral-800">
            {getSeverityBadge(item.severity)}
          </div>
        </div>
      </div>

      {/* Side-by-Side Proof Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
        {/* Source A */}
        <div className="p-5 space-y-3 bg-neutral-950/40">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-300 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
              Document 1 (Claim / Pitch): <span className="font-mono text-emerald-400 font-normal">{item.sourceA.docName}</span>
            </span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">Page {item.sourceA.page}</span>
          </div>

          <div className="text-xs text-neutral-400 font-medium">
            Section: <span className="text-neutral-300">{item.sourceA.section}</span>
          </div>

          <blockquote className="p-3 bg-neutral-900 border-l-2 border-neutral-600 rounded text-xs text-neutral-300 italic font-serif leading-relaxed">
            "{item.sourceA.quote}"
          </blockquote>

          <div className="pt-1 flex items-center gap-2 text-xs">
            <span className="text-neutral-400">Stated Claim in Doc 1:</span>
            <span className="font-mono font-semibold text-white bg-neutral-800/80 px-2 py-0.5 rounded">
              {item.sourceA.claimValue}
            </span>
          </div>
        </div>

        {/* Source B */}
        <div className="p-5 space-y-3 bg-rose-950/10">
          <div className="flex items-center justify-between text-xs">
            <span className="text-rose-200 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              Document 2 (Opposing Ground Truth): <span className="font-mono text-rose-300 font-normal">{item.sourceB.docName}</span>
            </span>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-rose-950 border border-rose-900 text-rose-300">Page {item.sourceB.page}</span>
          </div>

          <div className="text-xs text-neutral-400 font-medium">
            Section: <span className="text-neutral-300">{item.sourceB.section}</span>
          </div>

          <blockquote className="p-3 bg-neutral-900/90 border-l-2 border-rose-500 rounded text-xs text-neutral-200 italic font-serif leading-relaxed">
            "{item.sourceB.quote}"
          </blockquote>

          <div className="pt-1 flex items-center gap-2 text-xs">
            <span className="text-neutral-400">Actual Reality in Doc 2:</span>
            <span className="font-mono font-semibold text-rose-300 bg-rose-950/40 border border-rose-900/50 px-2 py-0.5 rounded">
              {item.sourceB.claimValue}
            </span>
          </div>
        </div>
      </div>

      {/* Forensic Breakdown & Recommended Action */}
      <div className="p-5 border-t border-neutral-800 bg-neutral-900/40 space-y-3">
        <div className="text-xs leading-relaxed text-neutral-300">
          <span className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px] block mb-1">
            Forensic Cross-Examination:
          </span>
          {item.forensicAnalysis}
        </div>

        <div className="pt-3 border-t border-neutral-800/60 flex items-start gap-2 text-xs text-emerald-300">
          <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-emerald-400 shrink-0" />
          <div>
            <span className="font-semibold text-emerald-400">Remedial Action Protocol: </span>
            {item.recommendedAction}
          </div>
        </div>
      </div>
    </div>
  );
};
