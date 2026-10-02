import React, { useState } from 'react';
import { X, BookOpen, Target, ShieldAlert, Users, TrendingUp, DollarSign, Send, CheckCircle2, ChevronRight } from 'lucide-react';

interface PlaybookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaybookModal: React.FC<PlaybookModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'why_failed' | 'competitors' | 'trust_paradox' | 'zero_dollar_outreach' | 'pros_cons'>('why_failed');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/70">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <h2 className="text-base font-bold text-white tracking-tight">
                Founder's Tactical Blueprint (Zero-Capital Playbook)
              </h2>
            </div>
            <p className="text-xs text-neutral-400 mt-1">
              Brutal truth, competitor weaknesses, the trust paradox solution, and zero-ad client acquisition.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-neutral-800 bg-neutral-950/40 px-4 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('why_failed')}
            className={`py-3 px-3.5 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'why_failed'
                ? 'border-amber-400 text-amber-300 font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            1. Why Past Startups Failed
          </button>
          <button
            onClick={() => setActiveTab('competitors')}
            className={`py-3 px-3.5 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'competitors'
                ? 'border-amber-400 text-amber-300 font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            2. Competitors & Their Fatal Flaws
          </button>
          <button
            onClick={() => setActiveTab('trust_paradox')}
            className={`py-3 px-3.5 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'trust_paradox'
                ? 'border-amber-400 text-amber-300 font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            3. Solving the Document Trust Paradox
          </button>
          <button
            onClick={() => setActiveTab('zero_dollar_outreach')}
            className={`py-3 px-3.5 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'zero_dollar_outreach'
                ? 'border-amber-400 text-amber-300 font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            4. ₹0 Outreach Scripts (First 3 Clients)
          </button>
          <button
            onClick={() => setActiveTab('pros_cons')}
            className={`py-3 px-3.5 border-b-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === 'pros_cons'
                ? 'border-emerald-400 text-emerald-300 font-semibold'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            5. Honest Pros & Cons
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-300 leading-relaxed">
          
          {/* TAB 1: WHY PAST STARTUPS FAILED */}
          {activeTab === 'why_failed' && (
            <div className="space-y-5">
              <div className="p-4 bg-amber-950/20 border border-amber-800/40 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-300 mb-1">
                  Dhandhadose aur Problembridge me Reach kyu nahi aayi? (Brutal Diagnosis)
                </h3>
                <p className="text-neutral-300">
                  Aapke purane startups ki intentions achhi thi, lekin unme 2 fatal structural problems the jo 90% first-time founders karte hain:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-neutral-800 bg-neutral-950/50 rounded-lg space-y-2">
                  <div className="font-semibold text-rose-400 text-xs">Problem 1: "Vitamin" vs "Painkiller"</div>
                  <p className="text-neutral-400">
                    "Dhandhadose" aur "Problembridge" generic concepts the (networking, generic problem sharing, ya general business tips). Log aise platform ko scroll karke bhool jaate hain, kisi ki pocket se paise nikalwane ki <span className="text-white font-medium">urgent majboori</span> nahi hoti.
                  </p>
                </div>

                <div className="p-4 border border-neutral-800 bg-neutral-950/50 rounded-lg space-y-2">
                  <div className="font-semibold text-rose-400 text-xs">Problem 2: No Clear Financial Link</div>
                  <p className="text-neutral-400">
                    B2B me customer tabhi payment karta hai jab usko dikhe: <span className="text-white font-medium">"Maine ₹50,000 diye aur is tool ne mera ₹5,00,000 ka overbilling ya galat investment bacha liya."</span> Veritas direct paise se linked hai.
                  </p>
                </div>
              </div>

              <div className="p-4 border border-neutral-800 bg-neutral-900/60 rounded-lg space-y-3">
                <div className="font-semibold text-white">Akela person bina paiso ke kaise karega?</div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Don't sell software, sell the Audit first:</strong> Shuru me koi SaaS subscription mat becho. Unhe bolo: "Main aapka 1 reconciliation audit free karunga, aur agar contract leakage mila toh recovered amount ka 15% mera."</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Zero hosting expenses:</strong> Ye terminal browser/client-side aur serverless API par chalta hai. Monthly operating cost under ₹1,500 ($20) rehti hai.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COMPETITORS & THEIR FATAL FLAWS */}
          {activeTab === 'competitors' && (
            <div className="space-y-5">
              <p className="text-neutral-400">
                Aapne pucha tha ki competition me kaun hai aur wo kya ghalatiyan kar rahe hain. Yahan unka breakdown hai:
              </p>

              <div className="space-y-4">
                {/* Competitor 1 */}
                <div className="p-4 border border-neutral-800 bg-neutral-950/60 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-xs">1. AlphaSense & Bloomberg Terminal</h4>
                    <span className="font-mono text-neutral-400">Price: $12,000 – $25,000 / seat / year</span>
                  </div>
                  <div className="text-neutral-400">
                    <strong className="text-neutral-300">Unka Model:</strong> Wall Street hedge funds aur equity research teams ko company filings aur conference transcripts search karne dete hain.
                  </div>
                  <div className="p-2.5 bg-rose-950/20 border border-rose-900/40 rounded text-rose-300">
                    <strong>Unki Fatal Mistake:</strong> Wo sirf <em>Search Engine</em> hain! Wo ye nahi batate ki "Deck ke Page 14 ka number aur Audit File ke Page 42 ke number me ₹3.4 Cr ka jhol hai." Analyst ko dono open karke ghanto manual math karna padta hai.
                  </div>
                </div>

                {/* Competitor 2 */}
                <div className="p-4 border border-neutral-800 bg-neutral-950/60 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-xs">2. Hebbia (Matrix)</h4>
                    <span className="font-mono text-neutral-400">Price: $30,000+ Enterprise Only</span>
                  </div>
                  <div className="text-neutral-400">
                    <strong className="text-neutral-300">Unka Model:</strong> Tier-1 Private Equity funds ke liye AI document extraction.
                  </div>
                  <div className="p-2.5 bg-rose-950/20 border border-rose-900/40 rounded text-rose-300">
                    <strong>Unki Fatal Mistake:</strong> Wo aam mid-market companies, boutique investment banking firms, Indian CAs, aur independent traders ko touch bhi nahi karte. 98% market unke liye price-out ho chuki hai.
                  </div>
                </div>

                {/* Competitor 3 */}
                <div className="p-4 border border-neutral-800 bg-neutral-950/60 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-xs">3. DocuSign Analyzer / Black Ore</h4>
                    <span className="font-mono text-neutral-400">Price: $500 – $2,000 / month</span>
                  </div>
                  <div className="text-neutral-400">
                    <strong className="text-neutral-300">Unka Model:</strong> Contracts me se signature dates, party names, aur expiration clauses extract karna.
                  </div>
                  <div className="p-2.5 bg-rose-950/20 border border-rose-900/40 rounded text-rose-300">
                    <strong>Unki Fatal Mistake:</strong> Single-document scope. Wo ek agreement ko pichle 6 mahine ke 50 alag invoices ya accounts payable records se cross-match karke actual cash leakage nahi pakad sakte.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: THE TRUST PARADOX */}
          {activeTab === 'trust_paradox' && (
            <div className="space-y-5">
              <div className="p-4 bg-emerald-950/20 border border-emerald-800/40 rounded-lg">
                <h3 className="text-sm font-semibold text-emerald-300 mb-1">
                  The Trust Dilemma: "Anjaan website pe koi company confidential document kyu daalegi?"
                </h3>
                <p className="text-neutral-300">
                  Yeh aapka sabse important question tha! Agar aap kisi business owner se bolenge "Mujhe apni balance sheet aur contracts do", toh wo 100% mana kar dega. Iska solution 3-step strategy hai:
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 border border-neutral-800 bg-neutral-950/50 rounded-lg space-y-1.5">
                  <div className="font-semibold text-white text-xs flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center font-mono text-[11px]">1</span>
                    Step 1: Start with 100% PUBLIC Filings (Zero Trust Needed)
                  </div>
                  <p className="text-neutral-400 pl-7">
                    BSE/NSE listed companies, SEC 10-K, ya MCA filings sab public hoti hain. Aap un public reports ko download karo, apne Veritas tool me daalo, aur 1 jhol (contradiction) nikal kar LinkedIn par post karo: <em>"How Company XYZ hid a 15% revenue drop in Footnote 12 vs their Press Release"</em>. Log khud aapko DM karenge ki "Bhai humare liye bhi audit kar do!"
                  </p>
                </div>

                <div className="p-4 border border-neutral-800 bg-neutral-950/50 rounded-lg space-y-1.5">
                  <div className="font-semibold text-white text-xs flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center font-mono text-[11px]">2</span>
                    Step 2: "Zero-Storage Ephemeral Vault" Architecture
                  </div>
                  <p className="text-neutral-400 pl-7">
                    Website par clearly banner hota hai: <em>"Zero-Retention Sandbox: Files are processed in temporary RAM and destroyed upon session exit. No database storage."</em> Financial firms ko ye technical guarantee sabse zyada pasand aati hai.
                  </p>
                </div>

                <div className="p-4 border border-neutral-800 bg-neutral-950/50 rounded-lg space-y-1.5">
                  <div className="font-semibold text-white text-xs flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-900 text-emerald-300 flex items-center justify-center font-mono text-[11px]">3</span>
                    Step 3: Mutual 1-Page NDA + Free Audit
                  </div>
                  <p className="text-neutral-400 pl-7">
                    Jab aap kisi direct mid-market client ke paas jaate ho, unhe standard 1-page mutual NDA sign karke do. Enterprise sales me NDA standard practice hai, koi issue nahi hota.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ZERO DOLLAR OUTREACH */}
          {activeTab === 'zero_dollar_outreach' && (
            <div className="space-y-5">
              <p className="text-neutral-400">
                Aapko paid ads (Facebook/Google Ads) par ek rupya bhi kharch karne ki zaroorat nahi hai. B2B me paid ads fail hote hain. Ye 2 direct methods use karo:
              </p>

              {/* Method A */}
              <div className="p-4 border border-neutral-800 bg-neutral-950/70 rounded-lg space-y-3">
                <div className="font-bold text-white text-xs flex items-center gap-2">
                  <Send className="w-4 h-4 text-emerald-400" />
                  Script 1: Cold LinkedIn DM to CFOs / Head of Procurement
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded font-mono text-[11px] text-neutral-300 leading-relaxed">
                  "Hi [First Name], noticed [Company Name] manages heavy logistics/vendor volume across India. <br/><br/>
                  We recently built Veritas—a forensic reconciliation engine that spots silent rate-card deviations between master contracts and monthly invoices (fuel surcharge drift, uncredited early-pay discounts).<br/><br/>
                  Would you be open to a 100% free audit on 5 vendor contracts under NDA? If we find zero cash leakage, you lose nothing. If we catch overbilling, you recover your cash.<br/><br/>
                  Let me know if I can send a 1-page sample audit."
                </div>
              </div>

              {/* Method B */}
              <div className="p-4 border border-neutral-800 bg-neutral-950/70 rounded-lg space-y-3">
                <div className="font-bold text-white text-xs flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  Script 2: Public "Footnote Discrepancy" Post (LinkedIn / X)
                </div>
                <div className="p-3 bg-neutral-900 border border-neutral-800 rounded font-mono text-[11px] text-neutral-300 leading-relaxed">
                  [Attach side-by-side screenshot from Veritas Terminal]<br/><br/>
                  "Most investors read the Press Release headlines. Forensic analysts read Footnote 14.<br/><br/>
                  Ran a cross-document audit on [Company XYZ]'s Q3 results vs 10-Q filing. Found a $14M revenue pull-forward where 120-day credit terms were granted to wholesalers, despite management stating 'zero distributor concessions'.<br/><br/>
                  Full forensic discrepancy report attached below. Running 3 free audits this week for PE analysts—DM me your target company."
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: HONEST PROS & CONS */}
          {activeTab === 'pros_cons' && (
            <div className="space-y-5">
              <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg">
                <h3 className="text-sm font-semibold text-white mb-1">
                  Brutal Business Reality: Pros & Cons of Building Veritas
                </h3>
                <p className="text-neutral-400 text-xs">
                  Ek researcher aur data specialist ke roop me yahan is business model ke asli faayde aur kathinaiyan hain:
                </p>
              </div>

              {/* The Pros */}
              <div className="space-y-3">
                <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  THE PROS (Strong Advantages)
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 border border-neutral-800 bg-neutral-950/50 rounded space-y-1">
                    <div className="font-semibold text-neutral-200">1. Extreme Pricing Power</div>
                    <div className="text-neutral-400 text-[11px]">
                      Aap ₹500 ka consumer app nahi bech rahe. Corporate clients ke liye ek audit ka ₹40,000 – ₹1,50,000 dena standard hai kyunki unka lakhon ka loss bach raha hai.
                    </div>
                  </div>

                  <div className="p-3 border border-neutral-800 bg-neutral-950/50 rounded space-y-1">
                    <div className="font-semibold text-neutral-200">2. Insane Stickiness (Moat)</div>
                    <div className="text-neutral-400 text-[11px]">
                      Jab ek PE firm ya CFO ek baar aapke audit se 1 galat contract ya deal pakad leta hai, wo aage koi bhi deal bina aapke verify kiye sign nahi karega.
                    </div>
                  </div>

                  <div className="p-3 border border-neutral-800 bg-neutral-950/50 rounded space-y-1">
                    <div className="font-semibold text-neutral-200">3. Zero Inventory / 90%+ Margins</div>
                    <div className="text-neutral-400 text-[11px]">
                      Single founder ke liye na warehouse chahiye na team. Monthly tech bill ₹1,500 se kam rehta hai, baaki sab 100% net profit.
                    </div>
                  </div>

                  <div className="p-3 border border-neutral-800 bg-neutral-950/50 rounded space-y-1">
                    <div className="font-semibold text-neutral-200">4. Public Data Lead Magnet</div>
                    <div className="text-neutral-400 text-[11px]">
                      Listed companies ke documents public hote hain. Bina kisi ki permission ke aap public data par tool run karke viral breakdowns bana sakte hain.
                    </div>
                  </div>
                </div>
              </div>

              {/* The Cons */}
              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-rose-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  THE CONS & RISKS (Real Challenges)
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 border border-rose-950/40 bg-rose-950/10 rounded space-y-1">
                    <div className="font-semibold text-rose-300">1. Zero Tolerance for AI Errors</div>
                    <div className="text-neutral-400 text-[11px]">
                      Chatbot galat poetry likhe toh chal jata hai, par agar contract audit me galat number nikla toh client ka bharosa khatam. Isliye Veritas strict side-by-side citations dikhata hai.
                    </div>
                  </div>

                  <div className="p-3 border border-rose-950/40 bg-rose-950/10 rounded space-y-1">
                    <div className="font-semibold text-rose-300">2. Longer Enterprise Trust Cycle</div>
                    <div className="text-neutral-400 text-[11px]">
                      B2B clients turant credit card nahi swipe karte. Unhe 1-page sample audit dikhana padta hai aur NDA sign karna hota hai.
                    </div>
                  </div>

                  <div className="p-3 border border-rose-950/40 bg-rose-950/10 rounded space-y-1">
                    <div className="font-semibold text-rose-300">3. Messy Physical Scans</div>
                    <div className="text-neutral-400 text-[11px]">
                      Kuch offline businesses ke paas blur scanned bilti receipts hoti hain jinki quality poor hoti hai, jisme high-accuracy OCR lagana padta hai.
                    </div>
                  </div>

                  <div className="p-3 border border-rose-950/40 bg-rose-950/10 rounded space-y-1">
                    <div className="font-semibold text-rose-300">4. Solo Founder Focus Fatigue</div>
                    <div className="text-neutral-400 text-[11px]">
                      Agar aap ek saath 10 alag industries (hospitals, schools, lawyers, builders) ko target karoge toh thak jaoge. Shuru me sirf 1 niche (e.g. Logistics contracts ya PE deal diligence) par tika rehna hoga.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/60 flex items-center justify-between">
          <div className="text-[11px] text-neutral-500 font-mono">
            Zero Capital Strategy · Designed for Solo Engineers
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-neutral-950 bg-neutral-200 hover:bg-white rounded transition-colors"
          >
            Close Playbook
          </button>
        </div>

      </div>
    </div>
  );
};
