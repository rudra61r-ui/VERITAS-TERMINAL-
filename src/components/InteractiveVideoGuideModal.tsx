import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  Download,
  Eye,
  MousePointer
} from 'lucide-react';

interface InteractiveVideoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCustomAudit: () => void;
}

interface Chapter {
  id: number;
  time: string;
  title: string;
  subtitle: string;
  narration: string;
  box1Content?: { title: string; desc: string; sample: string };
  box2Content?: { title: string; desc: string; sample: string };
  resultHighlight?: string;
}

const CHAPTERS: Chapter[] = [
  {
    id: 1,
    time: '00:00',
    title: 'Step 1: Understand the Two Documents (Concept)',
    subtitle: 'Kyun 2 alag documents chahiye?',
    narration:
      'Audit ka golden rule: Ek file wo hoti hai jisme daawa (promise/agreement) hota hai, aur doosri file wo hoti hai jisme ground reality (actual bill/tax filing) hoti hai. Veritas in dono ko word-by-word match karta hai.',
    box1Content: {
      title: 'Document 1 (The Baseline)',
      desc: 'Master Agreement, Signed Contract, Rate Card, Offer Letter',
      sample: 'Ex: "Contract says ₹3,200/ton locked rate"',
    },
    box2Content: {
      title: 'Document 2 (The Execution)',
      desc: 'Monthly Invoices, Bank Statement, Tax Return, Salary Slips',
      sample: 'Ex: "Invoice bills ₹4,100/ton (+₹900 surcharge)"',
    },
  },
  {
    id: 2,
    time: '00:20',
    title: 'Step 2: Box 1 (Left Box) me kya daalna hai?',
    subtitle: 'Putting Document A into Box 1',
    narration:
      'Screen par "Run Audit" button dabayein. Left side me Box 1 (Green) dikhega. Yahan apne dost ki company ka Master Agreement ya Client Quotation upload karein ya text paste karein.',
    box1Content: {
      title: 'Box 1: Master Contract (Baseline)',
      desc: 'Uploaded: Vendor_Agreement_2025.pdf',
      sample: 'Clause 6.2: "Standard freight tariff capped strictly at ₹3,200 per MT with no unannounced seasonal surcharges."',
    },
    box2Content: {
      title: 'Box 2: Awaiting Counterpart',
      desc: 'Abhi khali hai...',
      sample: 'Next step me actual bill aayega...',
    },
  },
  {
    id: 3,
    time: '00:40',
    title: 'Step 3: Box 2 (Right Box) me kya daalna hai?',
    subtitle: 'Putting Document B into Box 2',
    narration:
      'Right side me Box 2 (Red) dikhega. Yahan counterpart document daalna hai—jaise vendor ne jo actual monthly GST bills ya invoices bheje hain.',
    box1Content: {
      title: 'Box 1: Active',
      desc: 'Agreement: Locked rate @ ₹3,200/MT',
      sample: 'Clause 6.2 Verified',
    },
    box2Content: {
      title: 'Box 2: Monthly Invoices (Reality)',
      desc: 'Uploaded: October_Invoice_AP902.pdf',
      sample: 'Billed Line Item: "Freight @ ₹4,100/MT with seasonal fuel surcharge of ₹900/MT across 32 consignments."',
    },
  },
  {
    id: 4,
    time: '01:00',
    title: 'Step 4: The Cross-Audit Magic (Token Diff)',
    subtitle: 'Run Cross-Examination Execution',
    narration:
      'Ab "Run Cross-Examination" button dabayein. Veritas ka engine dono files ke entities, rates, dates aur clauses ko aapas me cross-examine karega aur hidden discrepancy nikalega.',
    resultHighlight:
      'CRITICAL CONFLICT DETECTED: Master Contract specifies ₹3,200/MT but Invoice charged ₹4,100/MT. Overbilling Leakage: ₹7,48,000 across 32 consignments.',
  },
  {
    id: 5,
    time: '01:20',
    title: 'Step 5: Exporting the Executive Audit Memorandum',
    subtitle: 'Show the Proof to your Client/Friend',
    narration:
      'Audit report ready hone ke baad "Export Memo" dabayein. 1 second me boardroom-ready legal memorandum ban jata hai jisme dono files ke exact page numbers aur quotes proof ke saath print ho jaate hain!',
    resultHighlight:
      'Ready to Print or PDF: Client ko proof dikhayein aur unka lakhon rupaye ka billing fraud ya mistake recover karwayein!',
  },
];

export const InteractiveVideoGuideModal: React.FC<InteractiveVideoGuideModalProps> = ({
  isOpen,
  onClose,
  onOpenCustomAudit,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-advance simulator
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && isOpen) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentStep((step) => (step + 1) % CHAPTERS.length);
            return 0;
          }
          return prev + 2;
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [isPlaying, isOpen, currentStep]);

  if (!isOpen) return null;

  const currentChapter = CHAPTERS[currentStep];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header bar */}
        <div className="p-4 border-b border-neutral-800 bg-neutral-900/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                Veritas Guided Video Walkthrough (Step-by-Step Simulator)
              </h2>
              <p className="text-[11px] text-neutral-400">
                Dekhein kaise 2 documents upload hote hain aur kaise jhol pakda jata hai.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display Screen */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
          
          {/* Virtual TV / Video Stage */}
          <div className="border border-neutral-800 bg-neutral-950 rounded-xl overflow-hidden shadow-inner relative min-h-[320px] flex flex-col justify-between">
            
            {/* Top Video Overlay Bar */}
            <div className="p-3 bg-neutral-900/80 border-b border-neutral-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>REC // STEP {currentChapter.id} OF {CHAPTERS.length}</span>
                <span className="text-neutral-500">·</span>
                <span className="text-emerald-400 font-semibold">{currentChapter.title}</span>
              </div>
              <span className="font-mono text-neutral-400 text-[11px]">{currentChapter.time}</span>
            </div>

            {/* Video Animated Canvas */}
            <div className="p-5 sm:p-8 space-y-6">
              
              {/* Voiceover / Audio Narration Subtitle */}
              <div className="p-4 bg-emerald-950/30 border border-emerald-800/50 rounded-lg space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  Voiceover & Action Instructions (Hindi/Hinglish):
                </div>
                <p className="text-xs sm:text-sm text-neutral-200 font-serif leading-relaxed italic">
                  "{currentChapter.narration}"
                </p>
              </div>

              {/* Animated Box 1 vs Box 2 Simulator Graphic */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Box 1 Mockup */}
                <div className={`p-4 rounded-lg border transition-all duration-300 ${
                  currentStep === 1 || currentStep === 0
                    ? 'border-emerald-500 bg-emerald-950/20 shadow-md ring-1 ring-emerald-500/40'
                    : 'border-neutral-800 bg-neutral-900/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      {currentChapter.box1Content?.title || 'Box 1: Document A'}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">LEFT BOX</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mb-2">
                    {currentChapter.box1Content?.desc}
                  </div>
                  <div className="p-2.5 bg-neutral-950 border border-neutral-800 rounded font-mono text-[11px] text-neutral-300">
                    {currentChapter.box1Content?.sample}
                  </div>
                </div>

                {/* Box 2 Mockup */}
                <div className={`p-4 rounded-lg border transition-all duration-300 ${
                  currentStep === 2 || currentStep === 0
                    ? 'border-rose-500 bg-rose-950/20 shadow-md ring-1 ring-rose-500/40'
                    : 'border-neutral-800 bg-neutral-900/40 opacity-70'
                }`}>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-rose-400 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      {currentChapter.box2Content?.title || 'Box 2: Document B'}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">RIGHT BOX</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mb-2">
                    {currentChapter.box2Content?.desc}
                  </div>
                  <div className="p-2.5 bg-neutral-950 border border-neutral-800 rounded font-mono text-[11px] text-neutral-300">
                    {currentChapter.box2Content?.sample}
                  </div>
                </div>

              </div>

              {/* Step 4 & 5 Highlight Output Display */}
              {currentChapter.resultHighlight && (
                <div className="p-4 bg-neutral-900 border border-neutral-700 rounded-lg flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Live Forensic Discrepancy Found:
                    </div>
                    <div className="text-xs text-neutral-300 leading-relaxed font-mono">
                      {currentChapter.resultHighlight}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Video Player Scrub Bar */}
            <div className="p-3 bg-neutral-950/90 border-t border-neutral-800 space-y-2">
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-400 h-full transition-all duration-150 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 rounded text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => {
                      setCurrentStep(0);
                      setProgress(0);
                    }}
                    className="p-1 rounded text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
                    title="Restart from beginning"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-neutral-400 text-[11px]">
                    Step {currentStep + 1} of {CHAPTERS.length}
                  </span>
                </div>

                {/* Chapter selector pills */}
                <div className="hidden sm:flex items-center gap-1.5">
                  {CHAPTERS.map((ch, idx) => (
                    <button
                      key={ch.id}
                      onClick={() => {
                        setCurrentStep(idx);
                        setProgress(0);
                      }}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors ${
                        currentStep === idx
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'text-neutral-500 hover:text-neutral-300'
                      }`}
                    >
                      Step {ch.id}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Quick Recap Checklist for Today's 2 PM Test */}
          <div className="p-4 border border-neutral-800 bg-neutral-900/60 rounded-xl space-y-2.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Aaj Dupeher 2 Baje Ke Test Ke Liye Checklist:
            </h3>
            <ul className="text-xs text-neutral-300 space-y-1.5 list-disc pl-5">
              <li>
                <strong>Dost se 2 files maangni hain:</strong> Pehli file = Agreement/Quotation. Doosri file = Uska Bill/Invoice.
              </li>
              <li>
                <strong>Top Right "Run Audit" dabayein:</strong> Box 1 me Agreement daalein, Box 2 me Invoice daalein.
              </li>
              <li>
                <strong>"Run Cross-Examination" dabayein:</strong> Tool automatically compare karke discrepancy report dikha dega.
              </li>
              <li>
                <strong>"Export Memo" se Report nikalein:</strong> Dost ko dikhayein ki yeh tool kitna powerful proof generate karta hai!
              </li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Close Guide
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenCustomAudit();
            }}
            className="px-5 py-2 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
          >
            Try It Now: Open Audit Tool
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
