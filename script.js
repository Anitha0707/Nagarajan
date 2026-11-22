/* =====================================================================
   D. Nagarajan – LIC Advisor website
   Everything you may want to edit is in the "YOUR DETAILS" part below.
   ===================================================================== */

/* ============ YOUR DETAILS ============ */
const WHATSAPP = '919841104023'; // country code + number, no spaces
const EMAIL = 'dnagarajan.lic@gmail.com';

/* Add each client's genuine feedback in `review`. Leave '' until authorised. */
/* ---------------------------------------------------------------------
   TESTIMONIALS  –  WRITE EACH CLIENT'S MESSAGE HERE
   Put the client's words between the quotes after  review:
   Example:  review: 'Mr. Nagarajan explained everything clearly and helped with my claim.',
   rating: 5 shows 5 gold stars (use 1–5, or leave null for no stars).
   If review is left '' a neutral line is shown until you add the real message.
   --------------------------------------------------------------------- */
const TESTIMONIALS = [
  { name: 'Dr. R. B. Jayashree',  place: 'Anna Nagar, Chennai',     review: ' Excellent service! Mr. Nagarajan explained the LIC policies very clearly. Thank you, sir!', rating: null },
  { name: 'Mr. Mohamed Ashraf',   place: 'Perungalathur',           review: 'Very helpful and friendly advisor. He guided me in choosing the right LIC policy.', rating: null },
  { name: 'Mr. U. Arugadoss',     place: 'Nolambur, Chennai',       review: 'I am happy with his service. He explained all the benefits patiently.', rating: null },
  { name: 'Mr. K. S. Rajasekar',  place: 'Perambur, Chennai',       review: 'Mr. Nagarajan is trustworthy and provides excellent customer support.', rating: null },
  { name: 'Mr. T. Govindaraju',   place: 'Trichy',                  review: 'Thank you for helping my family choose a suitable LIC insurance plan.', rating: null },
  { name: 'K. B. Kavitha',        place: 'Mylapore, Chennai',       review: 'His guidance and quick response made the insurance process very easy.', rating: null },
  { name: 'Mr. Utkarsh Aggarwal', place: 'UAE',                     review: 'A very professional and knowledgeable LIC advisor. Highly recommended!', rating: null },
  { name: 'S. Yamini',            place: 'Mylapore, Chennai',       review: 'Excellent customer service and timely assistance. Thank you, Nagarajan sir!', rating: null },
  { name: 'S. Meena',             place: 'Arumbakkam, Chennai',     review: 'I really appreciate his dedication and support. A reliable insurance advisor!', rating: null },
  { name: 'A. Gopinath',          place: 'Mylapore, Chennai',       review: ' Mr. Nagarajan provided excellent guidance and helped me understand the LIC benefits. Very good service!', rating: null },
  { name: 'Mrs. Suganya',         place: 'Mannargudi',              review: 'I am fully satisfied with his support. He responds quickly and clears all our doubts.', rating: null },
  { name: 'Mr. P. Purushothaman', place: 'West Saidapet, Chennai',  review: ' A genuine and caring insurance advisor. Thank you for your wonderful service, sir!', rating: null },
  { name: 'Mr. U. Lalithkhiran',  place: 'Kodambakkam, Chennai',    review: ' Excellent experience with Mr. Nagarajan. I strongly recommend him for LIC insurance services!', rating: null },
  { name: 'Mr. Sanjeev Aggarwal', place: 'Delhi',                   review: ' He guided me through every step of my LIC policy. I truly appreciate his support.', rating: null },
  
];


/* Services shown as cards (click opens a popup) */
const SERVICES = [
  { icon: 'shield-check', title: 'Life Insurance Guidance', short: 'Find the right cover for your family’s needs.', long: 'We review your income, responsibilities and goals, then explain which LIC plan types fit — in plain language and without pressure.' },
  { icon: 'graduation-cap', title: 'Child Future Planning', short: 'Plan for education and milestones.', long: 'Understand child-focused LIC plans and how to align premiums with the years your child’s education or marriage expenses are likely to arise.' },
  { icon: 'sunset', title: 'Retirement Planning', short: 'Build a steady income for later years.', long: 'Compare pension and annuity options so you can plan a regular income after you stop working.' },
  { icon: 'piggy-bank', title: 'Savings & Investment Guidance', short: 'Disciplined, goal-based saving.', long: 'Discover savings-oriented plans, understand lock-in, premium terms and how benefits work before you commit.' },
  { icon: 'refresh-cw', title: 'Policy Renewal Assistance', short: 'Never miss a premium due date.', long: 'Reminders and help paying renewal premiums on time, and guidance on revival of lapsed policies.' },
  { icon: 'file-check-2', title: 'Claim Assistance', short: 'Support for you and your nominee.', long: 'Help with required documents and the claim process for maturity, survival and death claims.' },
  { icon: 'settings-2', title: 'Policy Servicing', short: 'Updates without the running around.', long: 'Help with nominee changes, address or contact updates, loan requests and other policy servicing requests.' },
  { icon: 'umbrella', title: 'Financial Protection Planning', short: 'A safety net for the unexpected.', long: 'Build a protection plan so that your loved ones’ lifestyle, loans and goals stay secure.' },
]



/* LIC plans: add or remove a line. Always confirm details on licindia.in */
/* ---------------------------------------------------------------------
   LIC PLANS  –  add, edit or delete a line. Each line is one plan:
   P( category, planNo, name, icon, type, [features], entryAge, policyTerm, example, premiumPayment, benefits, isNew )
   Last value `true` shows a gold "NEW" badge.
   Entry age / term are indicative – always confirm in the latest LIC brochure.
   --------------------------------------------------------------------- */
const CATEGORIES = ['All', 'Protection', 'Savings', 'Child', 'Retirement', 'Pension', 'Investment-linked', 'Health'];
const P = (cat, no, name, icon, type, features, age, term, eg, pay, benefits, isNew = false) =>
  ({ cat, no, name, icon, type, features, age, term, eg, pay, benefits, isNew });

const PLANS = [
  /* ===== PROTECTION ===== */
  P('Protection', '954', 'LIC’s New Tech Term', 'shield-check', 'Online pure term plan',
    ['Non-linked, non-participating', 'Pure risk cover at low premium'],
    '18 – 65 yrs', '10 – 40 yrs', 'Age 30 · 30-year term (cover till age 60)',
    'Regular, limited or single premium', 'Death benefit paid to the nominee.'),
  P('Protection', '955', 'LIC’s New Jeevan Amar', 'shield', 'Term assurance plan',
    ['Non-linked, non-participating', 'Choice of benefit options'],
    '18 – 65 yrs', '10 – 40 yrs', 'Age 35 · 25-year term (cover till age 60)',
    'Regular, limited or single premium', 'Death benefit paid to the nominee.'),
  P('Protection', '875', 'LIC’s Yuva Term', 'rocket', 'Term plan for young adults',
    ['Non-linked, non-participating', 'Lower premiums for the young'],
    '18 – 45 yrs', '10 – 40 yrs', 'Age 25 · 30-year term (cover till age 55)',
    'Regular or limited premium', 'Death benefit paid to the nominee.'),
  P('Protection', '859', 'LIC’s Saral Jeevan Bima', 'umbrella', 'Standard individual term plan',
    ['Simple, standard terms', 'Pure risk cover'],
    '18 – 65 yrs', '5 – 40 yrs', 'Age 30 · 20-year term (cover till age 50)',
    'Regular or limited premium', 'Death benefit paid to the nominee.'),
  P('Protection', '887', 'LIC’s Bima Kavach', 'shield-check', 'High-cover pure risk plan',
    ['Level or Increasing Sum Assured', 'Special rates for women and non-smokers', 'Minimum sum assured ₹2 crore'],
    '18 – 65 yrs', '10 yrs up to age 100 (max 82 yrs)', 'Age 35 · 30-year term (cover till age 65)',
    'Single, limited (5/10/15 yrs) or regular premium', 'Fixed, guaranteed death benefit, payable in instalments if chosen.', true),
  P('Protection', '894', 'LIC’s Jeevan Raksha', 'shield', 'Pure risk plan for young families',
    ['Non-linked, non-participating', 'Sum assured ₹5 lakh – ₹24 lakh', 'Special rates for women'],
    '18 – 45 yrs', 'Cover till age 33 – 60', 'Age 30 · cover till age 55 (25-year term)',
    'Single, limited or regular premium', 'Guaranteed fixed death benefit to the nominee.', true),

  /* ===== SAVINGS ===== */
  P('Savings', '714', 'LIC’s New Endowment Plan', 'landmark', 'Endowment plan',
    ['Non-linked, participating', 'Protection with savings'],
    '8 – 50 yrs', '12 – 35 yrs', 'Age 30 · 25-year term (maturity at age 55)',
    'Regular premium', 'Maturity and death benefits as per policy terms.'),
  P('Savings', '736', 'LIC’s Jeevan Labh', 'trending-up', 'Limited premium endowment',
    ['Non-linked, participating', 'Pay for a shorter period, stay covered longer'],
    '8 – 59 yrs', '16, 21 or 25 yrs', 'Age 35 · 21-year term, pay for 15 yrs',
    'Limited premium (10 / 15 / 16 yrs)', 'Maturity and death benefits as per policy terms.'),
  P('Savings', '715', 'LIC’s New Jeevan Anand', 'gem', 'Endowment with whole-life cover',
    ['Non-linked, participating', 'Cover continues after maturity'],
    '18 – 50 yrs', '15 – 35 yrs', 'Age 30 · 25-year term, cover continues after',
    'Regular premium', 'Maturity benefit plus continued life cover.'),
  P('Savings', '733', 'LIC’s Jeevan Lakshya', 'target', 'Endowment plan for family goals',
    ['Non-linked, participating', 'Annual income to the family on death'],
    '18 – 50 yrs', '13 – 25 yrs', 'Age 35 · 20-year term (maturity at age 55)',
    'Limited premium', 'Annual income benefit plus maturity benefit as per policy terms.'),
  P('Savings', '871', 'LIC’s Jeevan Utsav', 'sparkles', 'Whole life plan',
    ['Non-linked, non-participating', 'Regular income option'],
    '30 days – 65 yrs', 'Whole life · pay for 5 – 16 yrs', 'Age 40 · pay for 12 yrs, then regular income',
    'Limited premium', 'Regular income and death benefits as per policy terms.'),
  P('Savings', '745', 'LIC’s Jeevan Umang', 'heart', 'Whole life with survival benefits',
    ['Non-linked, participating', 'Annual survival benefits'],
    '30 days – 55 yrs', 'Whole life · pay for 15, 20, 25 or 30 yrs', 'Age 30 · pay for 20 yrs, yearly survival benefit',
    'Limited premium', 'Survival, maturity and death benefits as per policy terms.'),
  P('Savings', '948', 'LIC’s Bima Shree', 'award', 'Money-back plan for high sum assured',
    ['Non-linked, participating', 'Guaranteed additions', 'Minimum sum assured ₹10 lakh'],
    '8 – 55 yrs', '14, 16, 18 or 20 yrs', 'Age 35 · 20-year term, pay for 16 yrs',
    'Limited premium', 'Money-back payouts, maturity and death benefits as per policy terms.'),
  P('Savings', '868', 'LIC’s Jeevan Azad', 'feather', 'Limited premium endowment',
    ['Non-linked, participating', 'Fixed benefit on maturity'],
    '90 days – 50 yrs', '15 – 20 yrs', 'Age 30 · 18-year term, pay for 10 yrs',
    'Limited premium', 'Maturity and death benefits as per policy terms.'),
  P('Savings', '770', 'LIC’s Bima Platinum', 'crown', 'Savings and protection with guaranteed income',
    ['Non-linked, non-participating', 'Guaranteed additions + Booster Income + Regular Income', 'Minimum sum assured ₹3 lakh'],
    '30 days – 55 yrs', 'Pay for 7, 10, 12, 15 or 18 yrs · maturity age 28 – 75', 'Age 30 · pay for 10 yrs, income after',
    'Limited premium', 'Guaranteed additions, booster benefit and regular income as per policy terms.', true),

  /* ===== CHILD ===== */
  P('Child', '774', 'LIC’s Amritbaal', 'baby', 'Child savings plan',
    ['Non-linked, non-participating', 'Built for a child’s future needs'],
    '30 days – 13 yrs', '10 – 25 yrs', 'Child age 5 · 20-year term (maturity at age 25)',
    'Limited or single premium', 'Guaranteed benefits as per policy terms.'),
  P('Child', '932', 'LIC’s New Children’s Money Back Plan', 'graduation-cap', 'Money-back child plan',
    ['Non-linked, participating', 'Periodic payouts at milestones'],
    '0 – 12 yrs', '25 yrs minus entry age', 'Child age 5 · 20-year term, payouts at 18, 20 and 22',
    'Limited premium', 'Survival and maturity benefits as per policy terms.'),
  P('Child', '934', 'LIC’s Jeevan Tarun', 'blocks', 'Child endowment plan',
    ['Non-linked, participating', 'Flexible payout options'],
    '90 days – 12 yrs', 'Pay till age 20 · maturity at age 25', 'Child age 6 · pay till 20, maturity at 25',
    'Limited premium', 'Survival, maturity and death benefits as per policy terms.'),

  /* ===== RETIREMENT ===== */
  P('Retirement', '858', 'LIC’s New Jeevan Shanti', 'sunset', 'Deferred annuity plan',
    ['Single premium', 'Choose annuity option and deferment'],
    '30 – 79 yrs', 'Deferment period you choose, then lifelong income', 'Age 45 · defer 15 yrs, pension from age 60',
    'Single premium', 'Regular annuity income after the deferment period.'),
  P('Retirement', '867', 'LIC’s New Pension Plus', 'piggy-bank', 'Unit-linked pension plan',
    ['Market-linked fund value', 'Builds a retirement corpus'],
    '25 – 75 yrs', '10 – 42 yrs', 'Age 35 · 25-year term (corpus at age 60)',
    'Regular or single premium', 'Fund value at vesting; annuity or lump sum as per policy terms. Market risk applies.'),

  /* ===== PENSION ===== */
  P('Pension', '857', 'LIC’s Jeevan Akshay-VII', 'wallet', 'Immediate annuity plan',
    ['Single premium', 'Income starts immediately'],
    '30 – 85 yrs', 'Lifelong income (no waiting period)', 'Age 60 · pension starts straight away',
    'Single premium', 'Regular annuity as per the option chosen.'),
  P('Pension', '862', 'LIC’s Saral Pension', 'coins', 'Immediate annuity plan',
    ['Single premium', 'Simple pension options'],
    '40 – 80 yrs', 'Lifelong income (no waiting period)', 'Age 60 · pension starts straight away',
    'Single premium', 'Regular pension as per the option chosen.'),
  P('Pension', '892', 'LIC’s New Jeevan Dhara-II', 'sunset', 'Deferred annuity plan',
    ['Guaranteed annuity rates fixed at start', 'Single or joint-life annuity', 'Top-up option during deferment'],
    '18 – 65 yrs (up to 70 for some options)', 'Deferment period you choose, then lifelong income', 'Age 40 · defer 20 yrs, pension from age 60',
    'Single or regular premium', 'Lifelong income after the deferment period.', true),

  /* ===== INVESTMENT-LINKED ===== */
  P('Investment-linked', '849', 'LIC’s Nivesh Plus', 'chart-line', 'Unit-linked plan (ULIP)',
    ['Returns depend on market performance', 'Fund choices available'],
    '90 days – 70 yrs', '10 – 25 yrs', 'Age 35 · 15-year term',
    'Single premium', 'Fund value and life cover as per policy terms. Market risk applies.'),
  P('Investment-linked', '852', 'LIC’s SIIP', 'chart-column-increasing', 'Systematic investment plan (ULIP)',
    ['Returns depend on market performance', 'Regular investing'],
    '90 days – 65 yrs', '10 – 25 yrs', 'Age 30 · 20-year term',
    'Regular premium', 'Fund value and life cover as per policy terms. Market risk applies.'),
  P('Investment-linked', '873', 'LIC’s Index Plus', 'activity', 'Index-linked unit-linked plan (ULIP)',
    ['Fund tracks a market index', 'Returns depend on market performance'],
    '90 days – 60 yrs', '10 – 25 yrs', 'Age 30 · 20-year term',
    'Regular or single premium', 'Fund value and life cover as per policy terms. Market risk applies.'),
  P('Investment-linked', '886', 'LIC’s Protection Plus', 'building-2', 'Unit-linked savings and protection plan',
    ['Life cover with market-linked savings', 'Choice of fund type', 'Partial withdrawal after 5 years'],
    '18 – 65 yrs', '10, 15, 20 or 25 yrs', 'Age 35 · 20-year term, pay for 10 yrs',
    'Limited premium (5 / 7 / 10 / 15 yrs)', 'Fund value at maturity, mortality charges refunded. Market risk applies.', true),

  /* ===== HEALTH ===== */
  P('Health', '907', 'LIC’s Health Shield', 'heart-pulse', 'Individual health plan',
    ['Daily hospital cash and lump sums', 'Guaranteed premiums', 'Children can be added as insured'],
    '18 – 65 yrs (children 90 days – 20 yrs)', '15 yrs', 'Age 40 · self + two children, 15-year term',
    'Regular premium (15 yrs)', 'Fixed daily hospital cash, lump sums for major surgeries and critical illness.', true),
  P('Health', '908', 'LIC’s New Cancer Cover', 'activity', 'Cancer health plan',
    ['25% payout on early-stage cancer', '100% payout on major-stage cancer', 'Premium waiver after diagnosis'],
    '18 – 65 yrs', '10 – 15 yrs', 'Age 40 · 15-year term',
    'Regular premium (equal to policy term)', 'Fixed payouts on diagnosis. No death or maturity benefit.', true),
];


/* ============ ICONS (inline SVG, no library needed) ============ */
const ICONS = {
 "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"m9 12 2 2 4-4\" />",
 "graduation-cap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\" /> <path d=\"M22 10v6\" /> <path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\" />",
 "sunset": "<path d=\"M12 10V2\" /> <path d=\"m4.93 10.93 1.41 1.41\" /> <path d=\"M2 18h2\" /> <path d=\"M20 18h2\" /> <path d=\"m19.07 10.93-1.41 1.41\" /> <path d=\"M22 22H2\" /> <path d=\"m16 6-4 4-4-4\" /> <path d=\"M16 18a4 4 0 0 0-8 0\" />",
 "piggy-bank": "<path d=\"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z\" /> <path d=\"M2 9v1c0 1.1.9 2 2 2h1\" /> <path d=\"M16 11h.01\" />",
 "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /> <path d=\"M21 3v5h-5\" /> <path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /> <path d=\"M8 16H3v5\" />",
 "file-check-2": "<path d=\"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"m3 15 2 2 4-4\" />",
 "settings-2": "<path d=\"M20 7h-9\" /> <path d=\"M14 17H5\" /> <circle cx=\"17\" cy=\"17\" r=\"3\" /> <circle cx=\"7\" cy=\"7\" r=\"3\" />",
 "umbrella": "<path d=\"M22 12a10.06 10.06 1 0 0-20 0Z\" /> <path d=\"M12 12v8a2 2 0 0 0 4 0\" /> <path d=\"M12 2v1\" />",
 "shield": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" />",
 "landmark": "<line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\" /> <line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\" /> <line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\" /> <line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\" /> <line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\" /> <polygon points=\"12 2 20 7 4 7\" />",
 "trending-up": "<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\" /> <polyline points=\"16 7 22 7 22 13\" />",
 "gem": "<path d=\"M6 3h12l4 6-10 13L2 9Z\" /> <path d=\"M11 3 8 9l4 13 4-13-3-6\" /> <path d=\"M2 9h20\" />",
 "sparkles": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" /> <path d=\"M20 3v4\" /> <path d=\"M22 5h-4\" /> <path d=\"M4 17v2\" /> <path d=\"M5 18H3\" />",
 "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />",
 "baby": "<path d=\"M9 12h.01\" /> <path d=\"M15 12h.01\" /> <path d=\"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\" /> <path d=\"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\" />",
 "blocks": "<rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\" /> <path d=\"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3\" />",
 "wallet": "<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\" /> <path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\" />",
 "coins": "<circle cx=\"8\" cy=\"8\" r=\"6\" /> <path d=\"M18.09 10.37A6 6 0 1 1 10.34 18\" /> <path d=\"M7 6h1v4\" /> <path d=\"m16.71 13.88.7.71-2.82 2.82\" />",
 "chart-line": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /> <path d=\"m19 9-5 5-4-4-3 3\" />",
 "chart-column-increasing": "<path d=\"M13 17V9\" /> <path d=\"M18 17V5\" /> <path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /> <path d=\"M8 17v-3\" />",
 "rocket": "<path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z\" /> <path d=\"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z\" /> <path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0\" /> <path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\" />",
 "target": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <circle cx=\"12\" cy=\"12\" r=\"6\" /> <circle cx=\"12\" cy=\"12\" r=\"2\" />",
 "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\" /> <circle cx=\"12\" cy=\"8\" r=\"6\" />",
 "feather": "<path d=\"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z\" /> <path d=\"M16 8 2 22\" /> <path d=\"M17.5 15H9\" />",
 "building-2": "<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\" /> <path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\" /> <path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\" /> <path d=\"M10 6h4\" /> <path d=\"M10 10h4\" /> <path d=\"M10 14h4\" /> <path d=\"M10 18h4\" />",
 "heart-pulse": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" /> <path d=\"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\" />",
 "activity": "<path d=\"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2\" />",
 "crown": "<path d=\"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z\" /> <path d=\"M5 21h14\" />",
 "arrow-up-right": "<path d=\"M7 7h10v10\" /> <path d=\"M7 17 17 7\" />",
 "message-circle": "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\" />",
 "info": "<circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />",
 "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /> <path d=\"M12 9v4\" /> <path d=\"M12 17h.01\" />",
 "x": "<path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />",
 "quote": "<path d=\"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z\" /> <path d=\"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z\" />",
 "star": "<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\" />"
};
const icon = (name, size = 24) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS['shield']}</svg>`;

/* ============ HELPERS ============ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ============ HEADER: mobile menu, scroll shadow, active link ============ */
const header = $('#header'), nav = $('#nav'), burger = $('#burger');
const navLinks = $$('[data-nav]');
const burgerIcon = burger.innerHTML;

function setMenu(open) {
  nav.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  burger.innerHTML = open ? icon('x') : burgerIcon;
}
burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
navLinks.forEach((a) => a.addEventListener('click', () => setMenu(false)));

/* ============ TESTIMONIALS ============ */
const track = $('#track');
track.innerHTML = TESTIMONIALS.map((t) => `
  <article class="tcard">
    ${icon('quote', 28).replace('<svg', '<svg class="q"')}
    <p class="${t.review ? '' : 'empty'}">${esc(t.review || 'A valued client of D. Nagarajan.')}</p>
    ${t.rating ? `<div class="stars">${icon('star', 14).repeat(t.rating).replaceAll('fill="none"', 'fill="currentColor"')}</div>` : ''}
    <footer>
      <span class="avatar">${esc(t.name.replace(/^(Dr|Mr|Mrs)\.?\s/, '')[0])}</span>
      <div><b>${esc(t.name)}</b><small>${esc(t.place)}</small></div>
    </footer>
  </article>`).join('');

const clientStat = $('#stat-clients');
if (clientStat) { clientStat.dataset.count = TESTIMONIALS.length; clientStat.textContent = TESTIMONIALS.length; }

const slide = (dir) => track.scrollBy({ left: dir * (track.firstElementChild.offsetWidth + 20), behavior: 'smooth' });
$('#prev').addEventListener('click', () => slide(-1));
$('#next').addEventListener('click', () => slide(1));

/* ============ POPUP (modal) ============ */
const modalBg = $('#modal-bg'), modalBody = $('#modal-body'), modal = $('#modal');
let lastFocus = null;

function openModal(html, label) {
  lastFocus = document.activeElement;
  modalBody.innerHTML = html;
  modal.setAttribute('aria-label', label);
  modalBg.hidden = false;
  document.body.style.overflow = 'hidden';
  $('#modal-x').focus();
}
function closeModal() {
  modal.classList.remove('wide');
  modalBg.hidden = true;
  document.body.style.overflow = '';
  if (lastFocus) lastFocus.focus();
}
$('#modal-x').addEventListener('click', closeModal);
modalBg.addEventListener('click', (e) => { if (e.target === modalBg) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modalBg.hidden) closeModal(); });

/* ============ SERVICES ============ */
const servicesGrid = $('#services-grid');
servicesGrid.innerHTML = SERVICES.map((s, i) => `
  <button class="card svc" data-i="${i}">
    <span class="ico">${icon(s.icon)}</span>
    <h3>${esc(s.title)}</h3><p>${esc(s.short)}</p>
    <span class="more">Explore more ${icon('arrow-up-right', 16)}</span>
  </button>`).join('');

servicesGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.svc'); if (!card) return;
  const s = SERVICES[card.dataset.i];
  openModal(`
    <span class="ico">${icon(s.icon)}</span><h3>${esc(s.title)}</h3><p>${esc(s.long)}</p>
    <a class="btn wa" href="${wa('Hello, I would like to know more about ' + s.title + '.')}" target="_blank" rel="noopener">${icon('message-circle', 18)} Ask on WhatsApp</a>`, s.title);
});

/* ============ LIC PLANS ============ */
const tabs = $('#tabs'), plansGrid = $('#plans-grid');
let currentCat = 'All';
const enquire = (p) => wa(`Hello, I would like to know more about ${p.name} (Plan No. ${p.no}).`);

function renderTabs() {
  tabs.innerHTML = CATEGORIES.map((c) =>
    `<button role="tab" aria-selected="${c === currentCat}" class="${c === currentCat ? 'on' : ''}" data-cat="${c}">${c}</button>`).join('');
}
function renderPlans() {
  const list = PLANS.filter((p) => currentCat === 'All' || p.cat === currentCat);
  plansGrid.innerHTML = list.map((p) => `
    <article class="card plan">
      <div class="plan-top"><span class="ico">${icon(p.icon)}</span><span class="tags"><span class="tag">Plan No. ${p.no}</span>${p.isNew ? '<span class="tag new">NEW</span>' : ''}</span></div>
      <h3>${esc(p.name)}</h3><small class="cat">${esc(p.cat)} · ${esc(p.type)}</small>
      <div class="facts">
        <div><small>Entry age</small><b>${esc(p.age)}</b></div>
        <div><small>Policy term</small><b>${esc(p.term)}</b></div>
      </div>
      <p class="eg"><b>Example:</b> ${esc(p.eg)}</p>
      <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
      <div class="btns">
        <button class="btn soft" data-no="${p.no}">${icon('info', 16)} Know More</button>
        <a class="btn wa" href="${enquire(p)}" target="_blank" rel="noopener">${icon('message-circle', 16)} WhatsApp</a>
      </div>
    </article>`).join('');
}
tabs.addEventListener('click', (e) => {
  const b = e.target.closest('[data-cat]'); if (!b) return;
  currentCat = b.dataset.cat; renderTabs(); renderPlans();
});
plansGrid.addEventListener('click', (e) => {
  const b = e.target.closest('[data-no]'); if (!b) return;
  const p = PLANS.find((x) => x.no === b.dataset.no);
  openModal(`
    <span class="tag">Plan No. ${p.no}</span>${p.isNew ? '<span class="tag new">NEW</span>' : ''}<h3>${esc(p.name)}</h3><p class="cat">${esc(p.cat)} · ${esc(p.type)}</p>
    <dl>
      <dt>Key features</dt><dd>${p.features.map(esc).join(' · ')}</dd>
      <dt>Entry age</dt><dd>${esc(p.age)}</dd>
      <dt>Policy term</dt><dd>${esc(p.term)}</dd>
      <dt>Example</dt><dd>${esc(p.eg)}</dd>
      <dt>Premium payment</dt><dd>${esc(p.pay)}</dd>
      <dt>Policy benefits</dt><dd>${esc(p.benefits)}</dd>
    </dl>
    <p class="note">${icon('triangle-alert', 14)} Plan availability and terms change. Please confirm current details with the advisor or on licindia.in before buying.</p>
    <a class="btn wa" href="${enquire(p)}" target="_blank" rel="noopener">${icon('message-circle', 18)} Enquire on WhatsApp</a>`, p.name);
});
renderTabs(); renderPlans();

/* ============ VISITING CARD (click to enlarge) ============ */
$('#vcard-btn').addEventListener('click', () => {
  openModal('<img src="images/visiting-card.webp" alt="D. Nagarajan visiting card" />', 'Visiting card');
  modal.classList.add('wide');
});

/* ============ CONTACT FORM (opens the visitor's email app) ============ */
$('#enquiry-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `Name: ${f.get('name')}\nPhone: ${f.get('phone')}\n\n${f.get('message')}`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Insurance enquiry from ' + f.get('name'))}&body=${encodeURIComponent(body)}`;
  $('#form-note').hidden = false;
});

/* ============ SCROLL: header shadow, active nav, back-to-top ============ */
const topFab = $('#top-fab');
const sectionIds = navLinks.map((a) => a.dataset.nav);
function onScroll() {
  header.classList.toggle('scrolled', scrollY > 10);
  topFab.hidden = scrollY <= 600;
  let cur = 'home';
  sectionIds.forEach((id) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 140) cur = id; });
  navLinks.forEach((a) => a.classList.toggle('active', a.dataset.nav === cur));
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();
topFab.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* ============ REVEAL ON SCROLL + COUNT-UP NUMBERS ============ */
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach((el) => reveal.observe(el));

  const counter = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      counter.unobserve(e.target);
      const target = +e.target.dataset.count;
      if (reduceMotion) { e.target.textContent = target; return; }
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1200, 1);
        e.target.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  $$('[data-count]').forEach((el) => counter.observe(el));
} else {
  $$('.reveal').forEach((el) => el.classList.add('in'));
}

$('#year').textContent = new Date().getFullYear();
