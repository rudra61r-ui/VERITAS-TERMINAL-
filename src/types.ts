export type PersonaType = 'pe_vc' | 'trader' | 'cfo_ops' | 'researcher';

export type SeverityType = 'critical' | 'high' | 'caution';

export interface ContradictionItem {
  id: string;
  category: string;
  title: string;
  severity: SeverityType;
  financialImpact?: string;
  confidenceScore: number;
  sourceA: {
    docName: string;
    section: string;
    page: number | string;
    quote: string;
    claimValue: string;
    date?: string;
  };
  sourceB: {
    docName: string;
    section: string;
    page: number | string;
    quote: string;
    claimValue: string;
    date?: string;
  };
  forensicAnalysis: string;
  recommendedAction: string;
}

export interface Scenario {
  id: PersonaType;
  roleTitle: string;
  badgeLabel: string;
  targetAudience: string;
  companyName: string;
  headlineSummary: string;
  totalExposure: string;
  docsAnalyzed: {
    name: string;
    type: string;
    date: string;
    pages: number;
  }[];
  contradictions: ContradictionItem[];
}
