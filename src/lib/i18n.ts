// Lightweight in-house i18n. Locale is read from a cookie on the server and
// applied at render; the toggle sets the cookie and refreshes. Brand names and
// acronyms (e2E Reach, ONDC, UPI, Aadhaar, DigiLocker, RBI/SEBI/IRDA/GST, DPDP,
// ASHA, Anganwadi, Reed's Law, ₹) are intentionally kept in Latin in Hindi.
//
// NOTE: Hindi copy is a careful first pass — have a native speaker review it
// before any formal government-facing use.

export type Locale = "en" | "hi";
export const LOCALES: Locale[] = ["en", "hi"];
export const LOCALE_COOKIE = "lang";

export function resolveLocale(value?: string | null): Locale {
  return value === "hi" ? "hi" : "en";
}

const en = {
  langName: "हिंदी",
  langSwitchLabel: "Switch language",
  nav: {
    how: "How it works",
    platform: "Platform",
    verticals: "Verticals",
    network: "Network",
    architecture: "Architecture",
    impact: "Impact",
    partners: "Partners",
  },
  cta: {
    partner: "Partner with us",
    explore: "Explore the platform",
    champion: "Join as a Champion",
  },
  hero: {
    kickerA: "Ecosystem commerce",
    kickerB: "the last mile, everywhere",
    titleA: "The last mile,",
    titleB: "finally within reach.",
    sub: "Technology democratised information — but not access to goods and services. e2E Reach is the trusted human layer that lets commerce, finance, healthcare, energy and government finally reach the world's underserved communities. Starting in India, built for the world — carried by trusted people the community already knows.",
    photoAlt:
      "A Well-being Champion shows a tablet to a family at their doorstep in the warm evening light.",
    signals: [
      { v: "900M", l: "underserved in India — billions worldwide" },
      { v: "800M+", l: "mobile users, yet unreached" },
      { v: "200+", l: "welfare schemes to deliver" },
      { v: "Global", l: "starting in India, built for the world" },
    ],
  },
  how: {
    kicker: "In plain terms",
    h: "How it actually",
    hEm: "works.",
    lead: "No jargon. e2E Reach connects the formal economy to communities it can't reach today — through one trusted person who carries many services to the door.",
    stepsLabel: "four simple steps",
    photoAlt:
      "A Well-being Champion guiding a family through a service on a tablet at their home.",
    steps: [
      { n: "01", title: "A trusted local person joins", body: "They become a Well-being Champion — someone already known and trusted by their neighbours." },
      { n: "02", title: "We train and equip them", body: "One simple app for many services, hands-on training, payments and ongoing support — no capital needed from them." },
      { n: "03", title: "They carry it to the doorstep", body: "Banking, health, insurance and government schemes — explained face-to-face, in the local language, where people live." },
      { n: "04", title: "Everyone gains", body: "Families get access they never had, Champions earn a real livelihood, and partners finally reach the last mile." },
    ],
  },
  gap: {
    kicker: "The opportunity",
    h: "Technology opened up information —",
    hEm: "not goods and services.",
    lead: "Tech platforms can scale to billions, then stall at the last mile — where people need a trusted human, not just a signal. The gap isn't demand or connectivity; it's trusted intermediation between the markets that have access and the ones that don't.",
    pullA: "Community trust is a ",
    pullEm: "market-based asset",
    pullB: " — freely available, and largely untapped.",
    stats: [
      { value: "Billions", label: "cut off from formal goods & services worldwide" },
      { value: "Not demand", label: "the bottleneck is trusted reach, not appetite" },
      { value: "The missing middle", label: "viable to serve, until now impossible to reach" },
    ],
  },
  platform: {
    kicker: "The platform",
    h: "Not a store. Not an app. An",
    hEm: "Ecosystem Highway.",
    lead: "Many formal services run horizontally on top of one trusted, human-led distribution layer — a living network, not a piece of software.",
    designLabel: "Designed to be",
    principles: ["Asset-light", "Community-first", "Purpose-led", "Revenue-backed", "Scalable"],
    layers: [
      { label: "Vertical ecosystems", items: "Commerce · Finance · Health · Logistics", note: "Where value, liquidity and transformed assets flow." },
      { label: "The network — Well-being Champions", items: "Gig · Knowledge · Entrepreneurial", note: "Validators and transaction catalysts, embedded in communities." },
      { label: "Community trust layer", items: "Heartfulness · ASHA · Cooperatives · Federations", note: "A market-based asset: freely available, high compound value." },
    ],
    heart: "the heart of it",
  },
  verticals: {
    kicker: "The verticals",
    h: "Six ecosystems,",
    hEm: "one trusted doorstep.",
    lead: "Each vertical runs on its own playbook — but arrives through the same trusted person. Any service that needs the last mile can run on the network: finance, health, energy, commerce, government and more.",
    items: [
      { title: "Government schemes & entitlements", body: "200+ welfare programmes, subsidies and entitlements — finally reaching the families they were written for, with assisted enrolment and documentation." },
      { title: "Financial services", body: "Mutual funds, insurance, credit and savings — with the literacy to use them." },
      { title: "Health services", body: "Telemedicine, health insurance and preventive care at the doorstep." },
      { title: "Renewable & clean energy", body: "Solar and clean-energy products — financed, sold and serviced at the doorstep." },
      { title: "Supply-side aggregation", body: "Local producers reach wider markets; bulk procurement for the network." },
      { title: "Marketplace access via ONDC", body: "Community group-buying on open networks — volume pricing and consolidated logistics, inspired by the Pinduoduo model." },
    ],
  },
  network: {
    kicker: "The network",
    h: "The engine that makes it all",
    hEm: "flow.",
    lead: "Well-being Champions are the validators and catalysts embedded in every community — deeply trusted by their neighbours, living where they serve. One trained Champion can serve 200–500 households, and grows along a clear ladder.",
    photoAlt:
      "Well-being Champions of different ages stand together in a community lane at golden hour, some holding tablets and folders.",
    personas: [
      { title: "Gig Champion", earns: "Task-based", body: "App-led execution — deliveries, surveys, referrals, data collection, document verification." },
      { title: "Knowledge Champion", earns: "₹20,000–30,000 / mo", body: "Consumer education, category fluency and community trust-building — financial-literacy and awareness programs." },
      { title: "Entrepreneurial Champion", earns: "Up to ₹1 lakh / mo", body: "Micro-distribution, mentorship and their own business operations on the platform's rails." },
    ],
    recruitedLabel: "Recruited from networks India already trusts",
    recruitedFrom: [
      "Heartfulness networks",
      "ASHA workers",
      "Anganwadi workers",
      "Cooperatives & federations",
      "Sansthas & NGOs",
      "Retired armed forces",
    ],
  },
  livelihoods: {
    kicker: "Livelihoods",
    h: "Dignified income —",
    hEm: "created at the last mile.",
    lead: "Every participant stacks multiple income streams into a meaningful livelihood — building employability, standing and economic inclusion along the way.",
    aspirationLabel: "Platform aspiration",
    aspirationValue: "₹40–50k",
    aspirationSuffix: "/ month",
    aspirationNote: "Blended, across activities — depending on mix, effort and geography.",
    disclaimer: "Illustrative potential, not a guarantee — actual earnings vary with activity mix, effort and geography.",
    streams: [
      { title: "Financial-literacy programmes", figure: "₹10–20k", note: "~2 programmes a month" },
      { title: "Commerce & micro-distribution", figure: "₹8–15k", note: "FMCG + local category" },
      { title: "Healthcare & insurance referrals", figure: "₹5–10k", note: "Referral commissions" },
      { title: "Entrepreneurial business", figure: "up to ₹1L", note: "Own distribution ops" },
    ],
  },
  architecture: {
    kicker: "The architecture",
    h: "Built on India's own",
    hEm: "digital rails.",
    lead: "A country-as-a-platform approach — engineered to plug into each market's national digital infrastructure, starting with India's, so trust becomes the currency.",
    rails: [
      { title: "India's digital public infrastructure", body: "Designed to integrate with Aadhaar, UPI and DigiLocker — the rails the country already runs on.", tags: ["Aadhaar", "UPI", "DigiLocker"] },
      { title: "Open networks", body: "ONDC for open commerce and the Account Aggregator framework for consented financial data flows.", tags: ["ONDC", "Account Aggregator"] },
      { title: "Compliance by design", body: "Regulatory rules embedded as configurable policy — with consent management built in from day one.", tags: ["RBI · SEBI · IRDA · GST", "DPDP"] },
      { title: "A trust layer", body: "A permissioned-blockchain design for tamper-evident records, end-to-end traceability and audit trails.", tags: ["Permissioned ledger", "Audit trails"] },
      { title: "Assisted & vernacular", body: "No app literacy required — assisted journeys in local languages, with micro-ticket flows for rural markets.", tags: ["Low-literacy", "₹100–500 SIPs"] },
      { title: "AI + human trust", body: "Technology handles the back end; trusted humans own the front-end relationship. Both, not either.", tags: ["AI back end", "Human front end"] },
    ],
  },
  flywheel: {
    kicker: "Network effects",
    h: "Trust that compounds —",
    hEm: "by design.",
    lead: "By Reed's Law, a group-forming network's value grows as 2ⁿ. As Champions form circles and collectives, density and community lock-in become a moat no product feature can replicate.",
    groups: ["Mutual-fund SIP circles", "Insurance buying collectives", "ONDC procurement groups"],
    loop: [
      "More Champions join",
      "Deeper community trust & coverage",
      "More services & collective buying power",
      "More partners distribute through e2E",
      "More value per household",
    ],
    loopBack: "and it loops back",
  },
  impact: {
    kicker: "Impact",
    h: "One network. A",
    hEm: "triple bottom line.",
    lead: "The same infrastructure that moves commerce also moves inclusion — measurable outcomes for people, communities and the system as a whole.",
    pillars: [
      { title: "Economic", points: ["Sustainable livelihoods at the last mile", "Higher income for micro-entrepreneurs", "Improved financial access for communities"] },
      { title: "Social", points: ["Strengthened social capital & trust networks", "Life- and employability-skill upskilling", "Inclusive economic empowerment"] },
      { title: "Systemic", points: ["Deepened financial & healthcare inclusion", "A scalable template for underserved geographies", "District-level coordination infrastructure"] },
    ],
  },
  whynow: {
    kicker: "Why now",
    h: "The infrastructure moment has",
    hEm: "arrived.",
    lead: "Public rails, capital and proof are converging at the same time — the window to build the last-mile layer is open.",
    tailwinds: [
      { k: "800M+", t: "Mobile users in India", d: "Yet deep-point-reach is still the bottleneck." },
      { k: "ONDC", t: "Open Network for Digital Commerce", d: "Infrastructure that finally enables ecosystem-based models." },
      { k: "AA", t: "Account Aggregator", d: "Consented financial data flows unlock credit & insurance." },
      { k: "ESG", t: "Impact-capital appetite", d: "Investor demand for scalable, community-led models." },
      { k: "Post-COVID", t: "Livelihood resilience", d: "Community-embedded income proved the most durable." },
      { k: "Reed's Law", t: "Network value compounds", d: "Value grows with every new member of the network." },
    ],
  },
  india: {
    kicker: "Built for scale",
    h: "From one district to the",
    hEm: "whole world.",
    lead: "We prove the model district by district in India — then replicate, market by market, across the world's underserved geographies. A repeatable template for any last mile, anywhere.",
    points: [
      "Prove the unit economics in one district",
      "Replicate across India — then the world",
      "A repeatable template for any underserved market",
    ],
    photoAlt:
      "A map of India glowing with warm nodes across states and districts, joined by faint connecting lines.",
  },
  partners: {
    kicker: "Partner with us",
    h: "We're not just raising capital. We're building an",
    hEm: "ecosystem.",
    lead: "We offer partners a market-based asset — a living, trusted network that compounds in value as it grows.",
    audiences: [
      { title: "Strategic partners", body: "Brands, fintech & financial institutions, healthcare networks, insurers, energy and logistics providers — gain trusted deep-point-reach without building the last mile yourself." },
      { title: "Impact investors", body: "Patient capital aligned with community-led growth and measurable outcomes — an asset-light model that doesn't depend on cash burn for unit economics." },
      { title: "Ecosystem enablers", body: "Technology partners, training organisations, and central & state government programmes that can accelerate onboarding and capability-building across verticals." },
    ],
    regionalLine: "Also building in your region? Become a regional or category partner.",
  },
  faq: {
    kicker: "FAQ",
    h: "Questions,",
    hEm: "answered.",
    sideNote: "Still curious? Write to us at",
    items: [
      { q: "What exactly is e2E Reach?", a: "An ecosystem platform — not a store or an app — that carries commerce, finance, healthcare and government schemes to the last mile through a trusted, human-led network. Many formal services run on top of one community-rooted distribution layer." },
      { q: "How is this different from a gig or delivery platform?", a: "Gig platforms optimise for transactions; we build for trust and depth. A single Champion holds a long-term relationship with 200–500 households across many services — relationship capital, not one-off deliveries." },
      { q: "How do you maintain trust, privacy and regulatory compliance?", a: "By design. The platform is engineered to integrate with India's digital public infrastructure, embeds RBI/SEBI/IRDA/GST rules as configurable policy, is built to be DPDP-compliant with consent management, and uses a permissioned-blockchain trust layer with audit trails and vKYC checks." },
      { q: "How do you scale without owning inventory or employees?", a: "An asset-light, hub-and-spoke model: a lean central hub, regional partners who activate existing community networks, and Champions who invest time and relationships — not capital. Unit economics are proven at district level before expanding." },
      { q: "Who becomes a Well-being Champion — and is there a joining fee?", a: "Trusted local people, embedded in their communities, recruited from existing networks such as ASHA and Anganwadi workers, cooperatives, Heartfulness volunteers and ex-armed-forces. No degree or prior experience is required. [PLACEHOLDER: state the intended joining-fee policy. TODO: confirm before launch.]" },
      { q: "How can our organisation partner with e2E Reach?", a: "As a strategic partner (brands, fintech, financial, healthcare, energy, logistics), an impact investor, or an ecosystem enabler (technology, training, government programmes). Write to information@e2ereach.com to start a conversation." },
    ],
  },
  finalCta: {
    kickerA: "Ecosystem commerce",
    kickerB: "the last mile, everywhere",
    line1: "Community trust is a",
    line2: "market-based asset.",
    line3: "Activate it. Scale it. Compound it.",
    sub: "Whether you're a sector partner, an investor, an enabler — or a community leader ready to build in your region — let's talk about activating the last mile together.",
  },
  footer: {
    explainer:
      "Building the world's trusted last-mile ecosystem for commerce, finance, health and livelihoods — starting in India.",
    tagline: "Ecosystem commerce for the last mile.",
    explore: "Explore",
    getInTouch: "Get in touch",
    getInTouchNote: "For partnership, investment and ecosystem enablement.",
    rights: "All rights reserved.",
    bottomTag: "Community connect is a market-based asset.",
  },
};

export type Dict = typeof en;

const hi: Dict = {
  langName: "English",
  langSwitchLabel: "भाषा बदलें",
  nav: {
    how: "यह कैसे काम करता है",
    platform: "प्लेटफ़ॉर्म",
    verticals: "सेक्टर",
    network: "नेटवर्क",
    architecture: "आर्किटेक्चर",
    impact: "प्रभाव",
    partners: "साझेदार",
  },
  cta: {
    partner: "हमारे साझेदार बनें",
    explore: "प्लेटफ़ॉर्म देखें",
    champion: "चैंपियन के रूप में जुड़ें",
  },
  hero: {
    kickerA: "इकोसिस्टम कॉमर्स",
    kickerB: "अंतिम छोर, हर जगह",
    titleA: "अंतिम छोर,",
    titleB: "अब पहुँच में।",
    sub: "तकनीक ने जानकारी तक पहुँच तो दी — पर वस्तुओं और सेवाओं तक नहीं। e2E Reach वह भरोसेमंद मानवीय परत है जो वाणिज्य, वित्त, स्वास्थ्य, ऊर्जा और सरकारी सेवाओं को दुनिया के वंचित समुदायों तक पहुँचाती है। भारत से शुरुआत, दुनिया के लिए निर्मित — उन भरोसेमंद स्थानीय लोगों के ज़रिए जिन्हें समुदाय पहले से जानता है।",
    photoAlt:
      "एक कल्याण चैंपियन शाम की गर्म रोशनी में एक परिवार को घर के दरवाज़े पर टैबलेट दिखाती हुई।",
    signals: [
      { v: "900M", l: "भारत में वंचित — दुनिया भर में अरबों" },
      { v: "800M+", l: "मोबाइल उपयोगकर्ता, फिर भी अनछुए" },
      { v: "200+", l: "पहुँचाने योग्य कल्याण योजनाएँ" },
      { v: "वैश्विक", l: "भारत से शुरू, दुनिया के लिए निर्मित" },
    ],
  },
  how: {
    kicker: "सरल शब्दों में",
    h: "यह असल में कैसे",
    hEm: "काम करता है।",
    lead: "कोई जटिल भाषा नहीं। e2E Reach औपचारिक अर्थव्यवस्था को उन समुदायों से जोड़ता है जहाँ वह आज नहीं पहुँच पाती — एक भरोसेमंद व्यक्ति के ज़रिए जो कई सेवाएँ घर तक लाता है।",
    stepsLabel: "चार सरल कदम",
    photoAlt:
      "एक कल्याण चैंपियन एक परिवार को उनके घर पर टैबलेट पर सेवा समझाते हुए।",
    steps: [
      { n: "01", title: "एक भरोसेमंद स्थानीय व्यक्ति जुड़ता है", body: "वे कल्याण चैंपियन बनते हैं — कोई ऐसा व्यक्ति जिसे पड़ोसी पहले से जानते और भरोसा करते हैं।" },
      { n: "02", title: "हम उन्हें प्रशिक्षण और साधन देते हैं", body: "कई सेवाओं के लिए एक सरल ऐप, व्यावहारिक प्रशिक्षण, भुगतान और निरंतर सहयोग — उन्हें कोई पूँजी नहीं लगानी पड़ती।" },
      { n: "03", title: "वे इसे घर के दरवाज़े तक लाते हैं", body: "बैंकिंग, स्वास्थ्य, बीमा और सरकारी योजनाएँ — आमने-सामने, स्थानीय भाषा में, वहीं जहाँ लोग रहते हैं।" },
      { n: "04", title: "सबको लाभ होता है", body: "परिवारों को वह पहुँच मिलती है जो पहले कभी नहीं थी, चैंपियनों को सच्ची आजीविका मिलती है, और साझेदार अंततः अंतिम छोर तक पहुँचते हैं।" },
    ],
  },
  gap: {
    kicker: "अवसर",
    h: "तकनीक ने जानकारी तो खोली —",
    hEm: "वस्तुएँ-सेवाएँ नहीं।",
    lead: "तकनीकी प्लेटफ़ॉर्म अरबों तक बढ़ सकते हैं, पर अंतिम छोर पर ठहर जाते हैं — जहाँ लोगों को सिर्फ़ सिग्नल नहीं, एक भरोसेमंद इंसान चाहिए। कमी न माँग की है, न कनेक्टिविटी की — कमी है भरोसेमंद मध्यस्थता की, उन बाज़ारों के बीच जिनकी पहुँच है और जिनकी नहीं।",
    pullA: "समुदाय का भरोसा एक ",
    pullEm: "बाज़ार-आधारित संपत्ति",
    pullB: " है — सहज उपलब्ध, और काफ़ी हद तक अनुपयोगी।",
    stats: [
      { value: "अरबों", label: "दुनिया भर में औपचारिक वस्तुओं-सेवाओं से कटे हुए" },
      { value: "माँग नहीं", label: "रुकावट भरोसेमंद पहुँच है, इच्छा नहीं" },
      { value: "अनदेखा मध्यवर्ग", label: "सेवा-योग्य, पर अब तक अगम्य" },
    ],
  },
  platform: {
    kicker: "प्लेटफ़ॉर्म",
    h: "न दुकान। न ऐप। एक",
    hEm: "इकोसिस्टम हाईवे।",
    lead: "कई औपचारिक सेवाएँ एक भरोसेमंद, मानव-संचालित वितरण परत पर क्षैतिज रूप से चलती हैं — एक जीवंत नेटवर्क, कोई सॉफ़्टवेयर नहीं।",
    designLabel: "जिसकी रचना है",
    principles: ["कम-संपत्ति", "समुदाय-प्रथम", "उद्देश्य-प्रेरित", "राजस्व-समर्थित", "विस्तार-योग्य"],
    layers: [
      { label: "वर्टिकल इकोसिस्टम", items: "वाणिज्य · वित्त · स्वास्थ्य · लॉजिस्टिक्स", note: "जहाँ मूल्य, तरलता और रूपांतरित संपत्ति प्रवाहित होती है।" },
      { label: "नेटवर्क — कल्याण चैंपियन", items: "गिग · ज्ञान · उद्यमी", note: "समुदायों में बसे सत्यापनकर्ता और लेन-देन उत्प्रेरक।" },
      { label: "समुदाय विश्वास परत", items: "हार्टफुलनेस · आशा · सहकारी · महासंघ", note: "एक बाज़ार-आधारित संपत्ति: सहज उपलब्ध, उच्च चक्रवृद्धि मूल्य।" },
    ],
    heart: "इसका हृदय",
  },
  verticals: {
    kicker: "सेक्टर",
    h: "छह इकोसिस्टम,",
    hEm: "एक भरोसेमंद दरवाज़ा।",
    lead: "हर सेक्टर का अपना तरीका है — पर वह एक ही भरोसेमंद व्यक्ति के ज़रिए पहुँचता है। कोई भी सेवा जिसे अंतिम छोर चाहिए, इस नेटवर्क पर चल सकती है: वित्त, स्वास्थ्य, ऊर्जा, वाणिज्य, सरकार और बहुत कुछ।",
    items: [
      { title: "सरकारी योजनाएँ व अधिकार", body: "200+ कल्याण योजनाएँ, सब्सिडी और अधिकार — सहायता-युक्त नामांकन व दस्तावेज़ीकरण के साथ उन परिवारों तक जिनके लिए वे बनी थीं।" },
      { title: "वित्तीय सेवाएँ", body: "म्यूचुअल फंड, बीमा, ऋण और बचत — उन्हें उपयोग करने की समझ के साथ।" },
      { title: "स्वास्थ्य सेवाएँ", body: "टेलीमेडिसिन, स्वास्थ्य बीमा और निवारक देखभाल, घर के दरवाज़े पर।" },
      { title: "नवीकरणीय व स्वच्छ ऊर्जा", body: "सौर व स्वच्छ-ऊर्जा उत्पाद — घर के दरवाज़े पर वित्त, बिक्री और सेवा के साथ।" },
      { title: "आपूर्ति-पक्ष एकत्रीकरण", body: "स्थानीय उत्पादक बड़े बाज़ारों तक; नेटवर्क के लिए थोक खरीद।" },
      { title: "ओएनडीसी के ज़रिए मार्केटप्लेस", body: "ओपन नेटवर्क पर सामुदायिक समूह-खरीद — पिनदुओदुओ मॉडल से प्रेरित, बेहतर मूल्य और संयुक्त लॉजिस्टिक्स।" },
    ],
  },
  network: {
    kicker: "नेटवर्क",
    h: "वह इंजन जो सब कुछ",
    hEm: "चलाता है।",
    lead: "कल्याण चैंपियन हर समुदाय में बसे सत्यापनकर्ता और उत्प्रेरक हैं — जिन पर पड़ोसी पहले से गहरा भरोसा करते हैं, और जो वहीं रहते हैं जहाँ सेवा देते हैं। एक प्रशिक्षित चैंपियन 200–500 परिवारों की सेवा कर सकता है, और एक स्पष्ट सीढ़ी पर आगे बढ़ता है।",
    photoAlt:
      "अलग-अलग उम्र के कल्याण चैंपियन सुनहरी रोशनी में एक समुदाय की गली में एक साथ खड़े हैं।",
    personas: [
      { title: "गिग चैंपियन", earns: "कार्य-आधारित", body: "ऐप-आधारित कार्य — डिलीवरी, सर्वे, रेफ़रल, डेटा संग्रह, दस्तावेज़ सत्यापन।" },
      { title: "ज्ञान चैंपियन", earns: "₹20,000–30,000 / माह", body: "उपभोक्ता शिक्षा, श्रेणी-दक्षता और समुदाय में भरोसा — वित्तीय-साक्षरता व जागरूकता कार्यक्रम।" },
      { title: "उद्यमी चैंपियन", earns: "₹1 लाख / माह तक", body: "माइक्रो-डिस्ट्रिब्यूशन, मार्गदर्शन और प्लेटफ़ॉर्म पर अपना व्यवसाय।" },
    ],
    recruitedLabel: "उन नेटवर्कों से, जिन पर भारत पहले से भरोसा करता है",
    recruitedFrom: [
      "हार्टफुलनेस नेटवर्क",
      "आशा कार्यकर्ता",
      "आंगनवाड़ी कार्यकर्ता",
      "सहकारी समितियाँ व महासंघ",
      "संस्थाएँ व एनजीओ",
      "सेवानिवृत्त सशस्त्र बल",
    ],
  },
  livelihoods: {
    kicker: "आजीविका",
    h: "सम्मानजनक आय —",
    hEm: "अंतिम छोर पर बनी।",
    lead: "हर भागीदार कई आय-स्रोतों को जोड़कर एक सार्थक आजीविका बनाता है — साथ ही रोज़गार-योग्यता, सम्मान और आर्थिक समावेशन भी।",
    aspirationLabel: "प्लेटफ़ॉर्म की आकांक्षा",
    aspirationValue: "₹40–50k",
    aspirationSuffix: "/ माह",
    aspirationNote: "सभी गतिविधियों को मिलाकर — मिश्रण, प्रयास और भूगोल पर निर्भर।",
    disclaimer: "यह संभावित आँकड़ा है, गारंटी नहीं — वास्तविक आय गतिविधि-मिश्रण, प्रयास और भूगोल पर निर्भर करती है।",
    streams: [
      { title: "वित्तीय-साक्षरता कार्यक्रम", figure: "₹10–20k", note: "~2 कार्यक्रम प्रति माह" },
      { title: "वाणिज्य व माइक्रो-डिस्ट्रिब्यूशन", figure: "₹8–15k", note: "एफएमसीजी + स्थानीय श्रेणी" },
      { title: "स्वास्थ्य व बीमा रेफ़रल", figure: "₹5–10k", note: "रेफ़रल कमीशन" },
      { title: "उद्यमी व्यवसाय", figure: "₹1L तक", note: "स्वयं का वितरण" },
    ],
  },
  architecture: {
    kicker: "आर्किटेक्चर",
    h: "भारत की अपनी",
    hEm: "डिजिटल रेल पर निर्मित।",
    lead: "एक 'कंट्री-एज़-ए-प्लेटफ़ॉर्म' दृष्टिकोण — हर बाज़ार की राष्ट्रीय डिजिटल अवसंरचना से जुड़ने के लिए बनाया गया, भारत से शुरुआत, ताकि भरोसा ही मुद्रा बन जाए।",
    rails: [
      { title: "भारत की डिजिटल पब्लिक इन्फ़्रास्ट्रक्चर", body: "आधार, यूपीआई और डिजीलॉकर के साथ एकीकरण के लिए डिज़ाइन — वही रेल जिन पर देश पहले से चलता है।", tags: ["आधार", "यूपीआई", "डिजीलॉकर"] },
      { title: "ओपन नेटवर्क", body: "ओपन कॉमर्स के लिए ओएनडीसी और सहमति-आधारित वित्तीय डेटा के लिए अकाउंट एग्रीगेटर ढाँचा।", tags: ["ओएनडीसी", "अकाउंट एग्रीगेटर"] },
      { title: "डिज़ाइन से अनुपालन", body: "नियामक नियम विन्यास-योग्य नीति के रूप में अंतर्निहित — पहले दिन से सहमति-प्रबंधन के साथ।", tags: ["आरबीआई · सेबी · इरडा · जीएसटी", "डीपीडीपी"] },
      { title: "एक विश्वास परत", body: "छेड़-स्पष्ट रिकॉर्ड, अंत-से-अंत ट्रेसबिलिटी और ऑडिट ट्रेल के लिए परमिशन्ड-ब्लॉकचेन डिज़ाइन।", tags: ["परमिशन्ड लेजर", "ऑडिट ट्रेल"] },
      { title: "सहायता-युक्त व स्थानीय भाषा", body: "ऐप-साक्षरता की ज़रूरत नहीं — स्थानीय भाषाओं में सहायता-युक्त प्रक्रिया, ग्रामीण बाज़ारों के लिए छोटे-टिकट प्रवाह।", tags: ["कम-साक्षरता", "₹100–500 एसआईपी"] },
      { title: "एआई + मानवीय भरोसा", body: "तकनीक पीछे का काम संभालती है; भरोसेमंद इंसान सामने का रिश्ता। दोनों, कोई एक नहीं।", tags: ["एआई बैक-एंड", "मानव फ्रंट-एंड"] },
    ],
  },
  flywheel: {
    kicker: "नेटवर्क प्रभाव",
    h: "भरोसा जो बढ़ता जाता है —",
    hEm: "रचना से।",
    lead: "रीड्स लॉ के अनुसार, समूह-निर्माण नेटवर्क का मूल्य 2ⁿ की दर से बढ़ता है। जैसे-जैसे चैंपियन मंडल और सामूहिक समूह बनाती हैं, घनत्व और समुदाय-बंधन एक ऐसी खाई बन जाते हैं जिसे कोई उत्पाद-फ़ीचर दोहरा नहीं सकता।",
    groups: ["म्यूचुअल-फंड एसआईपी मंडल", "बीमा खरीद समूह", "ओएनडीसी खरीद समूह"],
    loop: [
      "अधिक चैंपियन जुड़ती हैं",
      "गहरा समुदाय-भरोसा व पहुँच",
      "अधिक सेवाएँ व सामूहिक खरीद-शक्ति",
      "अधिक साझेदार e2E के ज़रिए वितरण करते हैं",
      "हर परिवार के लिए अधिक मूल्य",
    ],
    loopBack: "और यह फिर से दोहराता है",
  },
  impact: {
    kicker: "प्रभाव",
    h: "एक नेटवर्क। एक",
    hEm: "त्रिस्तरीय परिणाम।",
    lead: "वही अवसंरचना जो वाणिज्य को गति देती है, समावेशन को भी आगे बढ़ाती है — लोगों, समुदायों और पूरी व्यवस्था के लिए मापनीय परिणाम।",
    pillars: [
      { title: "आर्थिक", points: ["अंतिम छोर पर टिकाऊ आजीविका", "सूक्ष्म-उद्यमियों के लिए अधिक आय", "समुदायों के लिए बेहतर वित्तीय पहुँच"] },
      { title: "सामाजिक", points: ["मज़बूत सामाजिक पूँजी व विश्वास-नेटवर्क", "जीवन व रोज़गार-कौशल में वृद्धि", "समावेशी आर्थिक सशक्तिकरण"] },
      { title: "व्यवस्थागत", points: ["गहरा वित्तीय व स्वास्थ्य समावेशन", "वंचित क्षेत्रों के लिए विस्तार-योग्य ढाँचा", "ज़िला-स्तरीय समन्वय अवसंरचना"] },
    ],
  },
  whynow: {
    kicker: "अभी क्यों",
    h: "अवसंरचना का यह क्षण आ",
    hEm: "गया है।",
    lead: "सार्वजनिक रेल, पूँजी और प्रमाण एक साथ अभिसरित हो रहे हैं — अंतिम-छोर परत बनाने की खिड़की खुली है।",
    tailwinds: [
      { k: "800M+", t: "भारत में मोबाइल उपयोगकर्ता", d: "फिर भी गहरी पहुँच ही असली रुकावट है।" },
      { k: "ओएनडीसी", t: "डिजिटल कॉमर्स का ओपन नेटवर्क", d: "अवसंरचना जो अंततः इकोसिस्टम-मॉडल को संभव बनाती है।" },
      { k: "एए", t: "अकाउंट एग्रीगेटर", d: "सहमति-आधारित वित्तीय डेटा से ऋण व बीमा संभव।" },
      { k: "ईएसजी", t: "प्रभाव-पूँजी की रुचि", d: "विस्तार-योग्य, समुदाय-आधारित मॉडलों की निवेशक माँग।" },
      { k: "कोविड-बाद", t: "आजीविका की मज़बूती", d: "समुदाय-आधारित आय सबसे टिकाऊ साबित हुई।" },
      { k: "रीड्स लॉ", t: "नेटवर्क मूल्य बढ़ता है", d: "हर नए सदस्य के साथ मूल्य बढ़ता है।" },
    ],
  },
  india: {
    kicker: "पैमाने के लिए निर्मित",
    h: "एक ज़िले से लेकर",
    hEm: "पूरी दुनिया तक।",
    lead: "हम भारत में ज़िला-दर-ज़िला मॉडल सिद्ध करते हैं — फिर बाज़ार-दर-बाज़ार, दुनिया के वंचित क्षेत्रों में दोहराते हैं। किसी भी अंतिम छोर के लिए एक दोहराने-योग्य ढाँचा।",
    points: [
      "एक ज़िले में इकाई-अर्थशास्त्र सिद्ध करें",
      "भारत भर में दोहराएँ — फिर दुनिया में",
      "किसी भी वंचित बाज़ार के लिए दोहराने-योग्य ढाँचा",
    ],
    photoAlt:
      "भारत का नक्शा, राज्यों और ज़िलों में गर्म नोड्स के साथ चमकता हुआ, हल्की रेखाओं से जुड़ा।",
  },
  partners: {
    kicker: "हमारे साझेदार बनें",
    h: "हम केवल पूँजी नहीं जुटा रहे। हम एक",
    hEm: "इकोसिस्टम बना रहे हैं।",
    lead: "हम साझेदारों को एक बाज़ार-आधारित संपत्ति देते हैं — एक जीवंत, भरोसेमंद नेटवर्क जिसका मूल्य बढ़ने के साथ चक्रवृद्धि होता है।",
    audiences: [
      { title: "रणनीतिक साझेदार", body: "ब्रांड, फिनटेक व वित्तीय संस्थान, स्वास्थ्य नेटवर्क, बीमाकर्ता, ऊर्जा व लॉजिस्टिक्स — अंतिम छोर खुद बनाए बिना भरोसेमंद गहरी पहुँच पाएँ।" },
      { title: "प्रभाव निवेशक", body: "समुदाय-आधारित विकास और मापनीय परिणामों के अनुरूप धैर्यवान पूँजी — एक कम-संपत्ति वाला मॉडल जो इकाई-अर्थशास्त्र के लिए नकदी-व्यय पर निर्भर नहीं।" },
      { title: "इकोसिस्टम सक्षमकर्ता", body: "तकनीकी साझेदार, प्रशिक्षण संगठन, और केंद्र व राज्य सरकार के कार्यक्रम जो ऑनबोर्डिंग और क्षमता-निर्माण को तेज़ कर सकें।" },
    ],
    regionalLine: "अपने क्षेत्र में भी निर्माण कर रहे हैं? क्षेत्रीय या श्रेणी साझेदार बनें।",
  },
  faq: {
    kicker: "सामान्य प्रश्न",
    h: "प्रश्न,",
    hEm: "उत्तर सहित।",
    sideNote: "और जानना चाहते हैं? हमें लिखें",
    items: [
      { q: "e2E Reach आख़िर है क्या?", a: "एक इकोसिस्टम प्लेटफ़ॉर्म — दुकान या ऐप नहीं — जो वाणिज्य, वित्त, स्वास्थ्य और सरकारी योजनाओं को एक भरोसेमंद, मानव-संचालित नेटवर्क के ज़रिए अंतिम छोर तक पहुँचाता है। कई औपचारिक सेवाएँ एक ही समुदाय-आधारित वितरण परत पर चलती हैं।" },
      { q: "यह गिग या डिलीवरी प्लेटफ़ॉर्म से कैसे अलग है?", a: "गिग प्लेटफ़ॉर्म लेन-देन के लिए बनते हैं; हम भरोसे और गहराई के लिए बनाते हैं। एक चैंपियन 200–500 परिवारों के साथ कई सेवाओं में दीर्घकालिक रिश्ता रखती है — रिश्ते की पूँजी, न कि एक-बार की डिलीवरी।" },
      { q: "आप भरोसा, निजता और नियामक अनुपालन कैसे बनाए रखते हैं?", a: "डिज़ाइन से। प्लेटफ़ॉर्म भारत की डिजिटल पब्लिक इन्फ़्रास्ट्रक्चर से जुड़ने के लिए बना है, आरबीआई/सेबी/इरडा/जीएसटी नियमों को विन्यास-योग्य नीति के रूप में समाहित करता है, सहमति-प्रबंधन के साथ डीपीडीपी-अनुरूप है, और ऑडिट ट्रेल व वीकेवाईसी जाँच वाली परमिशन्ड-ब्लॉकचेन विश्वास परत का उपयोग करता है।" },
      { q: "बिना इन्वेंट्री या कर्मचारियों के आप पैमाना कैसे बढ़ाते हैं?", a: "एक कम-संपत्ति, हब-एंड-स्पोक मॉडल: एक छोटा केंद्रीय हब, क्षेत्रीय साझेदार जो मौजूदा सामुदायिक नेटवर्क सक्रिय करते हैं, और चैंपियन जो पूँजी नहीं — समय और रिश्ते लगाती हैं। विस्तार से पहले इकाई-अर्थशास्त्र ज़िला-स्तर पर सिद्ध किया जाता है।" },
      { q: "कल्याण चैंपियन कौन बनता है — और क्या कोई शुल्क है?", a: "भरोसेमंद स्थानीय लोग, जो अपने समुदाय में बसे हैं — आशा व आंगनवाड़ी कार्यकर्ता, सहकारी समितियाँ, हार्टफुलनेस स्वयंसेवक और सेवानिवृत्त सशस्त्र बल जैसे मौजूदा नेटवर्कों से जुड़ते हैं। किसी डिग्री या पूर्व अनुभव की ज़रूरत नहीं। शामिल होने की शुल्क-नीति शीघ्र साझा की जाएगी।" },
      { q: "हमारा संगठन e2E Reach के साथ कैसे साझेदारी कर सकता है?", a: "एक रणनीतिक साझेदार (ब्रांड, फिनटेक, वित्त, स्वास्थ्य, ऊर्जा, लॉजिस्टिक्स), एक प्रभाव निवेशक, या एक इकोसिस्टम सक्षमकर्ता (तकनीक, प्रशिक्षण, सरकारी कार्यक्रम) के रूप में। बातचीत शुरू करने के लिए information@e2ereach.com पर लिखें।" },
    ],
  },
  finalCta: {
    kickerA: "इकोसिस्टम कॉमर्स",
    kickerB: "अंतिम छोर, हर जगह",
    line1: "समुदाय का भरोसा एक",
    line2: "बाज़ार-आधारित संपत्ति है।",
    line3: "इसे सक्रिय करें। बढ़ाएँ। चक्रवृद्धि करें।",
    sub: "चाहे आप एक सेक्टर साझेदार हों, निवेशक हों, सक्षमकर्ता हों — या अपने क्षेत्र में निर्माण के लिए तैयार एक सामुदायिक नेता — आइए अंतिम छोर को साथ मिलकर सक्रिय करने पर बात करें।",
  },
  footer: {
    explainer:
      "वाणिज्य, वित्त, स्वास्थ्य और आजीविका के लिए दुनिया का भरोसेमंद अंतिम-छोर इकोसिस्टम बना रहे हैं — भारत से शुरुआत।",
    tagline: "अंतिम छोर के लिए इकोसिस्टम कॉमर्स।",
    explore: "देखें",
    getInTouch: "संपर्क करें",
    getInTouchNote: "साझेदारी, निवेश और इकोसिस्टम सक्षमता के लिए।",
    rights: "सर्वाधिकार सुरक्षित।",
    bottomTag: "समुदाय का जुड़ाव एक बाज़ार-आधारित संपत्ति है।",
  },
};

export const dictionary: Record<Locale, Dict> = { en, hi };
