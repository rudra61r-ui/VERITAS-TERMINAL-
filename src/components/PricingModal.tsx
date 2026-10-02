import React from 'react';
import { X, Check, Zap, Shield, Crown, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  auditsUsed: number;
  maxFreeAudits: number;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  language,
  auditsUsed,
  maxFreeAudits,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 bg-neutral-900/80 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-amber-400" />
              <h2 className="text-base font-bold text-white tracking-tight">
                Automated Free Trial & Subscription Architecture
              </h2>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Trial users get 2 free deep scans. Upgrade to unlock high-volume reconciliation.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Quota Status Banner */}
        <div className="p-4 bg-emerald-950/30 border-b border-emerald-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <div>
              <span className="font-semibold text-white">Active Plan: Free Trial Sandbox</span>
              <span className="text-neutral-400 block sm:inline sm:ml-2">
                ({auditsUsed} of {maxFreeAudits} Free Audits Used)
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-32 bg-neutral-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full"
                style={{ width: `${(auditsUsed / maxFreeAudits) * 100}%` }}
              ></div>
            </div>
            <span className="font-mono text-emerald-400 font-semibold">
              {maxFreeAudits - auditsUsed} Left
            </span>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Tier 1: Free Trial */}
          <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Starter Trial</div>
              <div className="text-2xl font-bold text-white font-mono">₹0 <span className="text-xs text-neutral-500 font-normal">/ forever</span></div>
              <p className="text-xs text-neutral-400">
                For solo founders and initial test runs to experience the forensic engine.
              </p>
              <ul className="text-xs text-neutral-300 space-y-2 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  2 Free Deep Document Scans
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Side-by-side contradiction diff
                </li>
                <li className="flex items-center gap-2 text-neutral-500">
                  <X className="w-3.5 h-3.5 text-neutral-600" />
                  Custom Watermarked Export
                </li>
              </ul>
            </div>

            <button
              disabled
              className="w-full py-2 text-xs font-semibold rounded-lg bg-neutral-800 text-neutral-400 cursor-not-allowed"
            >
              Current Active Tier
            </button>
          </div>

          {/* Tier 2: Professional (Most Popular) */}
          <div className="border-2 border-emerald-500/80 bg-neutral-900/80 rounded-xl p-5 space-y-4 flex flex-col justify-between relative shadow-xl">
            <div className="absolute -top-2.5 right-4 bg-emerald-500 text-neutral-950 font-bold font-mono text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">
              Most Popular
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">Pro Auditor</div>
              <div className="text-2xl font-bold text-white font-mono">₹14,999 <span className="text-xs text-neutral-400 font-normal">/ month ($179)</span></div>
              <p className="text-xs text-neutral-300">
                For CFOs, Procurement heads, and independent financial analysts.
              </p>
              <ul className="text-xs text-neutral-200 space-y-2 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  50 Full Cross-Document Audits / Mo
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Unlimited Boardroom Memo PDF Export
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Export CSV Reconciliation Ledger
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Priority OCR for handwritten bilti slips
                </li>
              </ul>
            </div>

            <button
              onClick={() => alert('Razorpay / Stripe automated checkout will activate upon live domain publishing!')}
              className="w-full py-2 text-xs font-bold rounded-lg bg-emerald-400 hover:bg-emerald-300 text-neutral-950 transition-colors shadow-sm"
            >
              Upgrade to Pro Plan
            </button>
          </div>

          {/* Tier 3: Enterprise & Private Equity */}
          <div className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">Enterprise & VC</div>
              <div className="text-2xl font-bold text-white font-mono">₹69,999 <span className="text-xs text-neutral-500 font-normal">/ month ($849)</span></div>
              <p className="text-xs text-neutral-400">
                For PE funds, CA audit firms, and high-volume corporate treasury.
              </p>
              <ul className="text-xs text-neutral-300 space-y-2 pt-2 border-t border-neutral-800">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Unlimited Document Volume & Scans
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Custom On-Premises or Private Cloud
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Tally / SAP / QuickBooks API Sync
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Dedicated Forensic Consultant Support
                </li>
              </ul>
            </div>

            <button
              onClick={() => alert('Custom Enterprise NDA & Agreement pipeline initiated.')}
              className="w-full py-2 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
            >
              Contact Enterprise Sales
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-[11px] text-neutral-500">
          <div>No credit card required for 2-audit free trial. Cancel anytime.</div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-neutral-950 bg-neutral-200 hover:bg-white rounded transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
