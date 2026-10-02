export const REGULATORY_CONFIG = {
  asOf: 'September 2026',
  civilPenaltyEffective: 'January 28, 2026',
  civilPenaltySource: 'https://www.govinfo.gov/content/pkg/FR-2026-01-28/pdf/2026-01688.pdf',
  civilTiers: [
    { level:'Tier 1', label:'Did not know—and with reasonable diligence would not have known', min:'$145', max:'$73,011' },
    { level:'Tier 2', label:'Reasonable cause; not willful neglect', min:'$1,461', max:'$73,011' },
    { level:'Tier 3', label:'Willful neglect; corrected within the required period', min:'$14,602', max:'$73,011' },
    { level:'Tier 4', label:'Willful neglect; not timely corrected', min:'$73,011', max:'$2,190,294' },
  ],
  identicalProvisionCap:'$2,190,294',
  criminalTiers: [
    {label:'Knowingly obtains or discloses', value:'Up to $50,000 + 1 year'},
    {label:'Under false pretenses', value:'Up to $100,000 + 5 years'},
    {label:'For commercial advantage, personal gain, or malicious harm', value:'Up to $250,000 + 10 years'},
  ],
  cases: [
    {year:'2026',name:'OSF Healthcare System',amount:'$552,250',lesson:'Ransomware exposed PHI of 53,907 people. OCR cited risk-analysis failures and untimely individual and HHS notification.',url:'https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/ra-cap-with-osf-healthcare-system/index.html'},
    {year:'2026',name:'SG Health Plan',amount:'$245,000',lesson:'A ransomware event affected about 9,316 people. OCR cited an impermissible disclosure and failure to conduct an accurate, thorough risk analysis.',url:'https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/ra-cap-with-sg-health-plan/index.html'},
    {year:'2026',name:'Azul Vision',amount:'$50,000',lesson:'A patient waited nearly two years for access to her records—showing that HIPAA enforcement is also about patient rights, not only cyberattacks.',url:'https://www.hhs.gov/hipaa/for-professionals/compliance-enforcement/agreements/ra-cap-with-azul-vision/index.html'},
    {year:'2026',name:'MMG Fusion',amount:'$10,000',lesson:'A business associate intrusion exposed patient contact and appointment information on the dark web; OCR cited risk analysis and breach-notification failures.',url:'https://www.hhs.gov/sites/default/files/ocr-mmg-fusion-hipaa-agreement.pdf'},
  ],
};

export const MODULES = [
  {number:'00',label:'Prologue',title:'Your First Login',duration:'5 min',summary:'Meet Elena and separate the Privacy, Security, and Breach Notification Rules.'},
  {number:'01',label:'Chapter 1',title:'PHI and De-identification',duration:'9 min',summary:'Identify PHI and ePHI, and review HIPAA Safe Harbor de-identification.'},
  {number:'02',label:'Chapter 2',title:'Access and Minimum Necessary',duration:'8 min',summary:'Review role-based access, authorization, and the Minimum Necessary standard.'},
  {number:'03',label:'Chapter 3',title:'Secure Communication',duration:'10 min',summary:'Verify urgent requests and use approved secure communication channels.'},
  {number:'04',label:'Chapter 4',title:'Remote Work Safeguards',duration:'8 min',summary:'Identify physical, technical, and network risks in a remote workspace.'},
  {number:'05',label:'Chapter 5',title:'Incident Response',duration:'11 min',summary:'Report incidents, preserve evidence, and understand breach assessment and financial impact.'},
  {number:'06',label:'Chapter 6',title:'Patient Trust and Enforcement',duration:'7 min',summary:'Connect HIPAA compliance to patient trust and OCR enforcement.'},
  {number:'07',label:'Final Assessment',title:'HIPAA Knowledge Check',duration:'12 min',summary:'Complete 10 HIPAA knowledge-check questions and the Guardian’s Pledge.'},
];

export type AssessmentQuestion={id:number;prompt:string;options:string[];answer:number;explanation:string;remediation:string};
export const ASSESSMENT:AssessmentQuestion[]=[
  {id:1,prompt:'A hospital asks Elena for a chart to treat a transferred patient. What is the best response?',options:['Refuse because no written authorization is attached','Verify the requester and use an approved secure channel','Send only the last visit because minimum necessary always applies','Email the chart because treatment makes security optional'],answer:1,explanation:'HIPAA generally exempts provider-to-provider treatment disclosures and requests from Minimum Necessary. Identity verification, secure access, and organizational controls still apply.',remediation:'Treatment is a permission pathway—not permission to skip verification or safeguards.'},
  {id:2,prompt:'Which item is an explicit Safe Harbor identifier when linked to health information?',options:['State of residence','Age 45','IP address','Diagnosis category'],answer:2,explanation:'IP addresses are among the 18 Safe Harbor identifier categories.',remediation:'Technical identifiers count. Review URLs, IP addresses, device identifiers, and biometrics.'},
  {id:3,prompt:'Elena mistakenly sends a claim attachment to the wrong contracted clinic. What should she do first?',options:['Wait to see if the clinic opens it','Delete the sent message and say nothing','Report internally and follow approved containment steps','Notify every patient herself'],answer:2,explanation:'Fast internal reporting enables containment and a documented breach risk assessment.',remediation:'Workforce members report; the designated privacy/security team investigates and manages legal notifications.'},
  {id:4,prompt:'A company policy says suspected incidents must be reported within one hour. What does that mean?',options:['HIPAA requires every employee to notify HHS within one hour','It is an internal operational deadline, separate from HIPAA breach-notification deadlines','No action is needed after the hour passes','It replaces the organization’s breach-assessment process'],answer:1,explanation:'An internal one-hour standard is a company control. HIPAA’s external notification rules use different triggers and deadlines.',remediation:'Keep internal escalation clocks distinct from legal notice clocks.'},
  {id:5,prompt:'A caller knows a patient’s date of birth and claims to be a payer manager. They demand a screenshot now. Best action?',options:['Send it because they know two identifiers','Ask a coworker whether the voice sounds familiar','Verify independently, then use an approved channel','Text the screenshot with the name cropped'],answer:2,explanation:'Context clues and urgency are not identity proof. Use independent verification and approved channels.',remediation:'Never verify a requester using contact details supplied inside the suspicious request.'},
  {id:6,prompt:'Which statement about PHI is most accurate?',options:['Health information is PHI only when it contains a patient name','PHI is individually identifiable health information held or transmitted by a covered entity or business associate in any form','Only clinical notes are PHI','Encrypted ePHI stops being PHI'],answer:1,explanation:'PHI can be oral, paper, or electronic. Encryption is a safeguard, not de-identification.',remediation:'Think: health information + individual link + HIPAA-regulated context.'},
  {id:7,prompt:'Elena is authorized to work denial queues. She opens a neighbor’s record out of curiosity. Which principle is most directly violated?',options:['Technical availability','Role-based, job-related access','Treatment exception','Safe Harbor'],answer:1,explanation:'System capability is not job authority. Access must be tied to assigned duties.',remediation:'“I can open it” never proves “I may open it.”'},
  {id:8,prompt:'Which remote-work choice is safest?',options:['Use café Wi-Fi with the portal’s normal password','Use approved tools in a private, protected workspace','Download the queue locally to work offline','Use personal email when the secure portal is slow'],answer:1,explanation:'Layered physical and technical safeguards protect ePHI outside the office.',remediation:'Approved device, approved network protection, private workspace, locked screen.'},
  {id:9,prompt:'A breach affects 700 residents of one state. Which statement is generally correct?',options:['Individuals and HHS can always wait for the annual report','Individual, HHS, and media notice may be required without unreasonable delay','The employee must personally call HHS the same day','Encryption always proves no breach occurred'],answer:1,explanation:'For breaches affecting 500 or more, HIPAA generally requires individual and HHS notice without unreasonable delay and no later than 60 days, plus prominent media notice for the affected jurisdiction.',remediation:'External notice decisions belong to the designated team after investigation—not the individual worker.'},
  {id:10,prompt:'What best captures the course’s financial lesson?',options:['Every mistake automatically causes a multimillion-dollar fine','Only OCR penalties matter','Early reporting can reduce harm across regulatory, response, business, and client relationships','Employees are personally responsible for all breach costs'],answer:2,explanation:'The real financial exposure is a domino: regulatory action, investigation and response, interruption, and lost client trust. Early action can limit the spread.',remediation:'The purpose is prevention and mitigation—not fear.'},
];

export const SAFE_HARBOR_IDENTIFIERS=['Names','Geographic data smaller than a state','Dates directly related to a person (except year)','Telephone numbers','Fax numbers','Email addresses','Social Security numbers','Medical record numbers','Health plan beneficiary numbers','Account numbers','Certificate or license numbers','Vehicle identifiers and serial numbers','Device identifiers and serial numbers','Web URLs','IP addresses','Biometric identifiers','Full-face photos and comparable images','Any other unique identifying number, characteristic, or code'];
