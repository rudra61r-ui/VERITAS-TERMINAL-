export type Language = 'en' | 'hi' | 'gu' | 'hinglish';

export interface Translations {
  brandTitle: string;
  vaultStatus: string;
  videoGuideBtn: string;
  playbookBtn: string;
  competitorsBtn: string;
  exportMemoBtn: string;
  runAuditBtn: string;
  upgradeBtn: string;
  freeTrialLabel: string;
  totalExposureLabel: string;
  contradictionsFoundLabel: string;
  crossExaminedCorpusLabel: string;
  exportCsvLabel: string;
  allSignalsLabel: string;
  criticalLabel: string;
  highRiskLabel: string;
  advisoriesLabel: string;
  searchPlaceholder: string;
  doc1Label: string;
  doc2Label: string;
  pageLabel: string;
  statedClaimLabel: string;
  actualRealityLabel: string;
  forensicAnalysisLabel: string;
  remedialProtocolLabel: string;
  box1Title: string;
  box1Subtitle: string;
  box2Title: string;
  box2Subtitle: string;
  runAuditAction: string;
  analyzingTokens: string;
  zeroRetentionNotice: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    brandTitle: 'Veritas Terminal',
    vaultStatus: 'Zero-Storage Vault Active',
    videoGuideBtn: 'Video Guide',
    playbookBtn: 'Founder Playbook',
    competitorsBtn: 'Competitor Intel',
    exportMemoBtn: 'Export Memo',
    runAuditBtn: 'Run Audit',
    upgradeBtn: 'Upgrade Plan',
    freeTrialLabel: 'Free Trial: 1 of 2 Audits Used',
    totalExposureLabel: 'Total Discrepancy Exposure',
    contradictionsFoundLabel: 'Verified Contradictions Flagged',
    crossExaminedCorpusLabel: 'Cross-Examined Corpus:',
    exportCsvLabel: 'Export CSV Ledger',
    allSignalsLabel: 'All Signals',
    criticalLabel: 'Critical',
    highRiskLabel: 'High Risk',
    advisoriesLabel: 'Advisories',
    searchPlaceholder: 'Search clauses, keywords, quotes...',
    doc1Label: 'Document 1 (Claim / Pitch)',
    doc2Label: 'Document 2 (Opposing Ground Truth)',
    pageLabel: 'Page',
    statedClaimLabel: 'Stated Claim in Doc 1:',
    actualRealityLabel: 'Actual Reality in Doc 2:',
    forensicAnalysisLabel: 'Forensic Cross-Examination:',
    remedialProtocolLabel: 'Remedial Action Protocol:',
    box1Title: 'Box 1: Document A (Master Agreement / Claim)',
    box1Subtitle: '(e.g., Master Contract, Quotation, Pitch Deck, Offer Letter)',
    box2Title: 'Box 2: Document B (Actual Bill / Opposing Reality)',
    box2Subtitle: '(e.g., Monthly Invoices, Tax Filing, Bank Statement, Salary Slip)',
    runAuditAction: 'Run Cross-Examination',
    analyzingTokens: 'Cross-Examining Tokens...',
    zeroRetentionNotice: 'Zero-Data Retention: Files are processed in memory. No data is stored externally.',
  },
  hinglish: {
    brandTitle: 'Veritas Terminal',
    vaultStatus: 'Zero-Storage Vault Active',
    videoGuideBtn: 'Video Guide',
    playbookBtn: 'Founder Playbook',
    competitorsBtn: 'Competitor Intel',
    exportMemoBtn: 'Export Memo',
    runAuditBtn: 'Audit Run Karein',
    upgradeBtn: 'Plan Upgrade',
    freeTrialLabel: 'Free Trial: 2 me se 1 Audit Used',
    totalExposureLabel: 'Total Discrepancy / Nuksaan Exposure',
    contradictionsFoundLabel: 'Verified Jhol / Contradictions Pakde Gaye',
    crossExaminedCorpusLabel: 'Scan Ki Gayi Files:',
    exportCsvLabel: 'CSV Report Download',
    allSignalsLabel: 'Sabhi Signals',
    criticalLabel: 'Critical Risk',
    highRiskLabel: 'High Risk',
    advisoriesLabel: 'Advisories',
    searchPlaceholder: 'Clauses, keywords, quotes search karein...',
    doc1Label: 'Document 1 (Pehla Daawa / Pitch)',
    doc2Label: 'Document 2 (Asli Ground Truth / Bill)',
    pageLabel: 'Page',
    statedClaimLabel: 'Doc 1 me kiya gaya Daawa:',
    actualRealityLabel: 'Doc 2 me nikli Asliyat:',
    forensicAnalysisLabel: 'Forensic Jaanch Parinaam:',
    remedialProtocolLabel: 'Agla Kadam (Action):',
    box1Title: 'Box 1: Document A (Master Contract ya Daawa)',
    box1Subtitle: '(jaise: Master Agreement, Quotation, Pitch Deck, Offer Letter)',
    box2Title: 'Box 2: Document B (Actual Bill ya Proof)',
    box2Subtitle: '(jaise: Monthly GST Invoices, Tax Return, Bank Slip, Salary Slip)',
    runAuditAction: 'Cross-Audit Run Karein',
    analyzingTokens: 'Documents ko Cross-Examine kiya ja raha hai...',
    zeroRetentionNotice: 'Zero-Storage Guarantee: Data RAM me process hota hai aur session ke baad delete ho jata hai.',
  },
  hi: {
    brandTitle: 'वेरिटास टर्मिनल',
    vaultStatus: 'शून्य-डेटा भंडारण सक्रिय',
    videoGuideBtn: 'वीडियो गाइड',
    playbookBtn: 'संस्थापक प्लेबुक',
    competitorsBtn: 'प्रतियोगी विश्लेषण',
    exportMemoBtn: 'मेमो निर्यात',
    runAuditBtn: 'ऑडिट चलाएं',
    upgradeBtn: 'प्लान अपग्रेड',
    freeTrialLabel: 'निःशुल्क परीक्षण: 2 में से 1 उपयोग',
    totalExposureLabel: 'कुल विसंगति / वित्तीय जोखिम',
    contradictionsFoundLabel: 'सत्यापित विरोधाभास चिन्हित',
    crossExaminedCorpusLabel: 'जांचे गए दस्तावेज़:',
    exportCsvLabel: 'CSV लेजर डाउनलोड',
    allSignalsLabel: 'सभी संकेत',
    criticalLabel: 'गंभीर जोखिम',
    highRiskLabel: 'उच्च जोखिम',
    advisoriesLabel: 'सलाहकार',
    searchPlaceholder: 'शर्तें, कीवर्ड या उद्धरण खोजें...',
    doc1Label: 'दस्तावेज़ 1 (मूल अनुबंध / दावा)',
    doc2Label: 'दस्तावेज़ 2 (वास्तविक बिल / जमीनी सच्चाई)',
    pageLabel: 'पृष्ठ',
    statedClaimLabel: 'दस्तावेज़ 1 में किया गया दावा:',
    actualRealityLabel: 'दस्तावेज़ 2 में वास्तविक स्थिति:',
    forensicAnalysisLabel: 'फोरेंसिक जांच परिणाम:',
    remedialProtocolLabel: 'सुधारात्मक कार्रवाई:',
    box1Title: 'बॉक्स 1: दस्तावेज़ क (मूल अनुबंध / दावा)',
    box1Subtitle: '(उदा. मुख्य अनुबंध, कोटेशन, पिच डेक, ऑफर लेटर)',
    box2Title: 'बॉक्स 2: दस्तावेज़ ख (वास्तविक बिल / साक्ष्य)',
    box2Subtitle: '(उदा. मासिक जीएसटी बिल, टैक्स रिटर्न, बैंक स्लिप)',
    runAuditAction: 'विरोधाभास जांच चलाएं',
    analyzingTokens: 'दस्तावेजों का विश्लेषण जारी है...',
    zeroRetentionNotice: 'शून्य भंडारण नीति: डेटा मेमोरी में प्रोसेस होता है और तुरंत हटा दिया जाता है।',
  },
  gu: {
    brandTitle: 'વેરિટાસ ટર્મિનલ',
    vaultStatus: 'ઝીરો-સ્ટોરેજ વૉલ્ટ સક્રિય',
    videoGuideBtn: 'વિડિયો ગાઇડ',
    playbookBtn: 'ફાઉન્ડર પ્લેબુક',
    competitorsBtn: 'સ્પર્ધક એનાલિસિસ',
    exportMemoBtn: 'મેમો એક્સપોર્ટ',
    runAuditBtn: 'ઓડિટ ચલાવો',
    upgradeBtn: 'પ્લાન અપગ્રેડ',
    freeTrialLabel: 'ફ્રી ટ્રાયલ: ૨ માંથી ૧ વપરાયેલ',
    totalExposureLabel: 'કુલ નાણાકીય વિસંગતતા / જોખમ',
    contradictionsFoundLabel: 'ચકાસાયેલ વિસંગતતાઓ મળી',
    crossExaminedCorpusLabel: 'તપાસવામાં આવેલ દસ્તાવેજો:',
    exportCsvLabel: 'CSV લેજર ડાઉનલોડ',
    allSignalsLabel: 'બધા સંકેતો',
    criticalLabel: 'ગંભીર જોખમ',
    highRiskLabel: 'ઉચ્ચ જોખમ',
    advisoriesLabel: 'સલાહકારો',
    searchPlaceholder: 'શરતો, કીવર્ડ્સ અથવા વાક્યો શોધો...',
    doc1Label: 'દસ્તાવેજ ૧ (મુખ્ય એગ્રીમેન્ટ / દાવો)',
    doc2Label: 'દસ્તાવેજ ૨ (વાસ્તવિક બિલ / સાચો પુરાવો)',
    pageLabel: 'પેજ',
    statedClaimLabel: 'દસ્તાવેજ ૧ માં દર્શાવેલ દાવો:',
    actualRealityLabel: 'દસ્તાવેજ ૨ ની અસલિયત:',
    forensicAnalysisLabel: 'ફોરેન્સિક તપાસ પરિણામ:',
    remedialProtocolLabel: 'આગળનું પગલું (એક્શન):',
    box1Title: 'બોક્સ ૧: દસ્તાવેજ A (મુખ્ય કોન્ટ્રાક્ટ / દાવો)',
    box1Subtitle: '(જેમ કે: માસ્ટર કરાર, ક્વોટેશન, પિચ ડેક, ઑફર લેટર)',
    box2Title: 'બોક્સ ૨: દસ્તાવેજ B (વાસ્તવિક બિલ / પુરાવો)',
    box2Subtitle: '(જેમ કે: માસિક જીએસટી ઇન્વૉઇસ, ટેક્સ રિટર્ન, બેંક સ્લિપ)',
    runAuditAction: 'ક્રોસ-ઓડિટ તપાસ શરૂ કરો',
    analyzingTokens: 'દસ્તાવેજોનું વિશ્લેષણ થઈ રહ્યું છે...',
    zeroRetentionNotice: 'ઝીરો-ડેટા સ્ટોરેજ: ફાઇલો સુરક્ષિત મેમરીમાં પ્રોસેસ થાય છે અને સેવ થતી નથી.',
  },
};
