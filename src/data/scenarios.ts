import { Scenario } from '../types';

export const SCENARIOS: Record<string, Scenario> = {
  pe_vc: {
    id: 'pe_vc',
    roleTitle: 'Private Equity & VC (M&A Diligence)',
    badgeLabel: 'Pre-Series B Diligence',
    targetAudience: 'Institutional Investors, Angle Syndicates, PE Associates',
    companyName: 'NexaSolar Grid Technologies Pvt Ltd',
    headlineSummary: 'Audit flagged 3 severe valuation mismatches between Series B pitch deck and audited MCA tax filings.',
    totalExposure: '₹4,80,00,000 (~$580K) Valuation Overstatement',
    docsAnalyzed: [
      {
        name: 'NexaSolar_SeriesB_PitchDeck_v4.pdf',
        type: 'Confidential Pitch Deck',
        date: 'Oct 2025',
        pages: 34,
      },
      {
        name: 'MCA_Audited_Financial_Statement_FY24-25.pdf',
        type: 'Statutory Audit & Tax Filing',
        date: 'Aug 2025',
        pages: 68,
      },
    ],
    contradictions: [
      {
        id: 'pe-1',
        category: 'Revenue & EBITDA Margin',
        title: 'Reported EBITDA Margin Differs by 1,900 Basis Points',
        severity: 'critical',
        financialImpact: '₹3,40,00,000 Unearned EBITDA Claim',
        confidenceScore: 99.4,
        sourceA: {
          docName: 'Series B Pitch Deck',
          section: 'Slide 14: Unit Economics & Financial Trajectory',
          page: 14,
          quote: 'FY24-25 Operating EBITDA reached ₹14.8 Cr (31.2% adjusted EBITDA margin) driven by proprietary inverter software.',
          claimValue: '31.2% EBITDA (₹14.8 Cr)',
          date: 'Oct 2025',
        },
        sourceB: {
          docName: 'Audited Financial Statement (MCA)',
          section: 'Schedule 22: Statement of Profit & Loss, Note 4',
          page: 42,
          quote: 'Operating EBITDA for the year ended March 31, 2025 stood at ₹5.72 Cr (12.1% margin) prior to capitalization of R&D personnel cost.',
          claimValue: '12.1% EBITDA (₹5.72 Cr)',
          date: 'Aug 2025',
        },
        forensicAnalysis:
          'Founder capitalized ₹9.08 Cr of regular operational customer support and developer salaries as intangible asset R&D to artificially inflate pitch deck EBITDA.',
        recommendedAction:
          'Recalculate enterprise valuation from ₹120 Cr down to ₹55 Cr. Demand restated QoQ management accounts certified by independent auditor.',
      },
      {
        id: 'pe-2',
        category: 'Customer Concentration Risk',
        title: 'Top Customer Retention vs Formal Contract Termination Notice',
        severity: 'high',
        financialImpact: '38% of Total Projected ARR at Risk',
        confidenceScore: 98.1,
        sourceA: {
          docName: 'Series B Pitch Deck',
          section: 'Slide 19: Enterprise Customer Cohorts',
          page: 19,
          quote: 'Anchor enterprise client (Adani Green Infra) locked into 3-year non-cancellable contract expiring Q4 2027 with 115% NDR.',
          claimValue: '3-Year Non-cancellable Contract',
          date: 'Oct 2025',
        },
        sourceB: {
          docName: 'Statutory Auditor Footnotes',
          section: 'Note 28: Contingent Liabilities & Material Commitments',
          page: 61,
          quote: 'The company received formal dispute notice on Jan 14, 2025 regarding breach of service level agreements from Customer Ref #AG-09 requesting full indemnification.',
          claimValue: 'Active SLA Dispute & Potential Rescission',
          date: 'Aug 2025',
        },
        forensicAnalysis:
          'The customer cited as the multi-year anchor has initiated breach proceedings that pitch deck investors were not notified about.',
        recommendedAction:
          'Demand immediate disclosure of Dispute Notice AG-09 and require escrow indemnity clause before issuing term sheet.',
      },
      {
        id: 'pe-3',
        category: 'Intellectual Property Ownership',
        title: 'Patent Assignment Pending vs Marketed as Exclusive Asset',
        severity: 'caution',
        financialImpact: 'Critical Defensibility Barrier',
        confidenceScore: 94.6,
        sourceA: {
          docName: 'Series B Pitch Deck',
          section: 'Slide 8: Defensible DeepTech Moat',
          page: 8,
          quote: 'Core Micro-Inverter topology patented in US & India (Granted), 100% assigned to NexaSolar Pvt Ltd entity.',
          claimValue: 'Granted Patent Assigned to Company',
          date: 'Oct 2025',
        },
        sourceB: {
          docName: 'Statutory Audit Report',
          section: 'Annexure B: Auditor Qualifications on Assets',
          page: 54,
          quote: 'Patent application #202311099 is registered in the personal name of the Founder and has not yet completed legal transfer to the corporate entity as of balance sheet date.',
          claimValue: 'Personally Owned by Founder',
          date: 'Aug 2025',
        },
        forensicAnalysis:
          'Key defensibility IP still sits in founder personal name. If founder departs or faces personal liability, company loses core tech rights.',
        recommendedAction:
          'Make deed of absolute assignment a Condition Precedent (CP) before releasing any wire funds.',
      },
    ],
  },

  trader: {
    id: 'trader',
    roleTitle: 'Trader & Equity Analyst (10-K Footnote Recon)',
    badgeLabel: 'Public Markets / Earnings Recon',
    targetAudience: 'Hedge Funds, Prop Traders, Long/Short Equity Analysts',
    companyName: 'Vertex BioPharma Corp (NASDAQ: VBP)',
    headlineSummary: 'Q3 Press Release reported 18% record revenue beat, while 10-Q Footnote 12 quietly doubled bad debt reserves and extended credit terms to 120 days.',
    totalExposure: '$14.2M Channel Stuffing / Footnote Reversal',
    docsAnalyzed: [
      {
        name: 'VBP_Q3_Earnings_PressRelease.pdf',
        type: 'Management Press Release & Transcript',
        date: 'Nov 12, 2025',
        pages: 14,
      },
      {
        name: 'VBP_SEC_Form_10Q_QuarterlyReport.pdf',
        type: 'SEC Form 10-Q Statutory Filing',
        date: 'Nov 14, 2025',
        pages: 82,
      },
    ],
    contradictions: [
      {
        id: 'tr-1',
        category: 'Revenue Recognition & Channel Stuffing',
        title: 'Record Organic Sales vs Undisclosed Distributor Credit Extension',
        severity: 'critical',
        financialImpact: '$11.8M Pull-Forward Revenue',
        confidenceScore: 99.2,
        sourceA: {
          docName: 'Earnings Press Release',
          section: 'CEO Commentary & Operational Highlights',
          page: 2,
          quote: 'Unprecedented commercial demand for Neuro-7 with zero distributor incentives required and standard 30-day payment cycles.',
          claimValue: 'Standard 30-day payment / Organic Pull',
          date: 'Nov 12, 2025',
        },
        sourceB: {
          docName: 'SEC Form 10-Q',
          section: 'Footnote 4: Accounts Receivable & Allowance for Credit Losses',
          page: 38,
          quote: 'During the three months ended Sept 30, the Company entered into modified payment agreements with primary wholesale distributors extending settlement windows up to 120 days.',
          claimValue: '120-Day Extended Concessions',
          date: 'Nov 14, 2025',
        },
        forensicAnalysis:
          'Classic end-of-quarter channel stuffing. Sales were recorded on paper by giving distributors 4 months to pay, which management denied on the earnings conference call.',
        recommendedAction:
          'Short position thesis confirmed. Q4 revenue will face severe inventory digestion headwinds.',
      },
      {
        id: 'tr-2',
        category: 'Warranty & Product Liability Reserves',
        title: 'Clinical Safety Confirmation vs 240% Surge in Litigation Accruals',
        severity: 'high',
        financialImpact: '$2.4M Legal Reserve Jump',
        confidenceScore: 97.5,
        sourceA: {
          docName: 'Earnings Call Transcript',
          section: 'CFO Prepared Remarks',
          page: 6,
          quote: 'Product safety profile remains industry benchmark with post-marketing adverse events trending below historical averages.',
          claimValue: 'Adverse Events Below Historical Avg',
          date: 'Nov 12, 2025',
        },
        sourceB: {
          docName: 'SEC Form 10-Q',
          section: 'Footnote 14: Commitments and Contingencies',
          page: 67,
          quote: 'Accrued reserves for product recall and patient compensation inquiries increased by $2.4 million to $5.9 million reflecting 34 newly filed administrative notices.',
          claimValue: '$5.9M Accrued (Surge of 34 claims)',
          date: 'Nov 14, 2025',
        },
        forensicAnalysis:
          'Footnotes confirm active regulatory inquiries that will likely lead to FDA black-box warning or packaging recall.',
        recommendedAction:
          'Hedge long positions or buy out-of-the-money put spreads ahead of FDA advisory panel review.',
      },
    ],
  },

  cfo_ops: {
    id: 'cfo_ops',
    roleTitle: 'CFO & Operations (Vendor Overbilling & Leakage)',
    badgeLabel: 'Contract vs Invoices',
    targetAudience: 'Chief Financial Officers, Head of Procurement, Internal Auditors',
    companyName: 'Paramount Global Logistics Ltd',
    headlineSummary: 'Master Service Agreement specifies fixed rate of ₹3,400/metric ton, but monthly batch invoices applied ₹4,150 citing unauthorized seasonal fuel surcharge.',
    totalExposure: '₹18,45,000 Recoverable Overbilling (Past 90 Days)',
    docsAnalyzed: [
      {
        name: 'MSA_Carrier_Contract_ApexLogistics_2025.pdf',
        type: 'Master Service Agreement (Signed)',
        date: 'Jan 2025',
        pages: 22,
      },
      {
        name: 'Invoices_Batch_Aug_Sep_Oct_2025.csv',
        type: 'Accounts Payable Ledger & Slips',
        date: 'Nov 2025',
        pages: 140,
      },
    ],
    contradictions: [
      {
        id: 'cfo-1',
        category: 'Freight Rate & Fuel Surcharge Siphon',
        title: 'Master Rate Locked at ₹3,400 vs Billed at ₹4,150/MT',
        severity: 'critical',
        financialImpact: '₹14,20,000 Direct Cash Leakage',
        confidenceScore: 99.8,
        sourceA: {
          docName: 'Master Service Agreement (MSA)',
          section: 'Clause 6.2: Freight Tariffs & Surcharges',
          page: 7,
          quote: 'Rates set forth in Exhibit B (₹3,400/MT) shall remain fixed and inclusive of all highway toll and diesel adjustments through Dec 31, 2025 without right of unilateral surcharge.',
          claimValue: 'Fixed ₹3,400/MT All-Inclusive',
          date: 'Jan 2025',
        },
        sourceB: {
          docName: 'Accounts Payable Batch Invoices',
          section: 'Invoices #AP-8841 through #AP-9102',
          page: 12,
          quote: 'Line Item 4: Monsoon & Highland Route Fuel Variance Surcharge @ ₹750/MT applied across 1,893 metric tons.',
          claimValue: 'Billed @ ₹4,150/MT (+₹750 surcharge)',
          date: 'Nov 2025',
        },
        forensicAnalysis:
          'Accounts department was processing recurring invoices without cross-verifying against Clause 6.2 of the master contract. Total overpayment verified across 48 consignments.',
        recommendedAction:
          'Issue formal recovery notice and deduct ₹14,20,000 from current outstanding payables to Vendor.',
      },
      {
        id: 'cfo-2',
        category: 'Payment Terms & Early Settlement Discount',
        title: 'Unclaimed 2.5% 10-Day Cash Discount',
        severity: 'high',
        financialImpact: '₹4,25,000 Unclaimed Discount',
        confidenceScore: 98.7,
        sourceA: {
          docName: 'Master Service Agreement (MSA)',
          section: 'Clause 8.1: Payment Settlement Terms',
          page: 11,
          quote: 'Client shall be entitled to an immediate 2.5% discount on total gross billing for invoices settled within 10 business days of electronic presentation.',
          claimValue: '2.5% Discount within 10 Days',
          date: 'Jan 2025',
        },
        sourceB: {
          docName: 'ERP Bank Ledger',
          section: 'SAP Payment Batches (Treasury Log)',
          page: 44,
          quote: 'Payment executed on Day 7 of receipt at full invoice face value with no deduction applied.',
          claimValue: 'Paid 100% face value on Day 7',
          date: 'Nov 2025',
        },
        forensicAnalysis:
          'Treasury paid invoices early (Day 7) but AP forgot to key in the 2.5% deduction credit note.',
        recommendedAction:
          'Apply ₹4,25,000 credit memo against upcoming month payroll clearing.',
      },
    ],
  },

  researcher: {
    id: 'researcher',
    roleTitle: 'Data Analyst & Market Researcher (Dataset Sanitization)',
    badgeLabel: 'Research & Survey Conflict',
    targetAudience: 'Consultants, Policy Thinktanks, Market Research Directors',
    companyName: 'Global AI Semiconductor Advisory Group',
    headlineSummary: 'Industry Report claims 42% CAGR for Edge Inference, while source survey raw dataset confirms 78% of enterprise respondents paused chip purchases.',
    totalExposure: 'Methodological Fallacy / Inverted Market Forecast',
    docsAnalyzed: [
      {
        name: 'EdgeAI_Market_Forecast_2026_Report.pdf',
        type: 'Published Industry Whitepaper',
        date: 'Dec 2025',
        pages: 58,
      },
      {
        name: 'Raw_Enterprise_CIO_Survey_Responses_N500.csv',
        type: 'Underlying Survey Dataset',
        date: 'Nov 2025',
        pages: 500,
      },
    ],
    contradictions: [
      {
        id: 'res-1',
        category: 'Sample Exclusion & Survivorship Bias',
        title: 'Reported 84% Deployment Rate vs 320 Omitted Negative Responses',
        severity: 'critical',
        financialImpact: 'Invalid Advisory Foundation for $10M Capex',
        confidenceScore: 99.5,
        sourceA: {
          docName: 'Published Industry Whitepaper',
          section: 'Executive Summary, Key Finding 1',
          page: 4,
          quote: '84.2% of surveyed Global 2000 CIOs report active edge AI silicon production rollouts in FY25-26.',
          claimValue: '84.2% Active Rollouts',
          date: 'Dec 2025',
        },
        sourceB: {
          docName: 'Raw Survey Responses (CSV)',
          section: 'Column AA: Deployment_Status_Cleaned',
          page: 'Row 1-500',
          quote: 'Out of 500 validated respondents: Only 68 indicated active production (13.6%). 320 respondents who answered "Cancelled/On-Hold" were categorized as "Out of Scope" in final report.',
          claimValue: '13.6% True Rate (320 Negative responses purged)',
          date: 'Nov 2025',
        },
        forensicAnalysis:
          'Authors filtered out 320 negative enterprise replies to create a false high-growth narrative for sponsoring chipmakers.',
        recommendedAction:
          'Halt strategic semiconductor fab investment recommendations based on this study; issue revised baseline using unfiltered N=500 cohort.',
      },
    ],
  },
};
