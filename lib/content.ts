// ---------------------------------------------------------------------------
// Single source of truth for all copy + links. No em dashes anywhere.
// News / Awards individual links point to the live kanikaguptashori.com pages
// (they resolve today). Swap to relative paths if you migrate those pages.
// ---------------------------------------------------------------------------

const SITE = "https://www.kanikaguptashori.com";

export const identity = {
  name: `Kanika Gupta Shori`,
  firstName: `Kanika Gupta`,
  lastName: `Shori`,
  title: `Co-Founder and Chief Operating Officer, Square Yards`,
  kicker: `CO-FOUNDER AND COO, SQUARE YARDS`,
  positioning: `Building India's largest real estate marketplace, from search to settlement.`,
  metaDescription: `Kanika Gupta Shori, COO and Co-Founder of Square Yards, honored as Woman Entrepreneur of the Year. Her visionary leadership is reshaping real estate with innovation and empowerment.`,
};

export const heroImage = `/kanika-hero.jpg`;

export const bioShort = [
  `Kanika Gupta Shori is the Founder and COO of Square Yards, India's largest real estate marketplace. She scaled an Online to Offline platform into the country's largest distributor of new homes, today operating across 9 countries and 100+ cities.`,
  `A Wharton Business School alumna and CFA Level 2 candidate, she spent over eleven years across asset management and entertainment before Square Yards, and invested family wealth as an angel investor while raising two boys.`,
];

export const bioFull = [
  `Kanika Gupta Shori is the Founder and COO of Square Yards, India's largest real estate marketplace. Square Yards is an Online to Offline (O2O) transaction platform that helps simplify the home buying process by providing end to end solutions for homebuyers. Square Yards has become India's largest distributor of new homes, operating across 9 countries and 100+ cities with a network of 150,000 agent partners. The platform delivered more than USD $223 million in revenue in FY26, growing 48 percent year on year, and has been EBITDA positive for three consecutive years.`,
  `Kanika is a Wharton Business School alumna, a CFA Level 2 candidate, and holds a Bachelor in Economics from Delhi University. She is a highly qualified professional with over 11 years of experience, having worked across asset management and entertainment before starting Square Yards. She is a mother of two boys, and while bringing up her kids she invested family wealth in other startups as an angel investor.`,
  `A multi-talented and versatile personality, she has been associated with social causes across women empowerment and children welfare, and has won several accolades including Young Achiever and Woman Icon. An avid traveller across 6 continents and 40+ countries, she is also a PADI certified scuba diver who has cage dived with sharks in the Pacific Ocean, explored ship wrecks in the Java Sea, dived caves in the Indian Ocean, and seen the corals of the Great Barrier Reef and the Red Sea.`,
];

export const quote = {
  text: `As a woman, faith in yourself is the most important thing.`,
  attribution: `Kanika Gupta Shori`,
};

export const highlights = [
  `Wharton Alumna`,
  `CFA Level 2 Candidate`,
  `11+ Years Experience`,
  `Angel Investor`,
  `40+ Countries`,
  `PADI Certified Diver`,
];

export const stats = [
  { prefix: "$", value: 223, suffix: "M", caption: "Revenue, FY26" },
  { prefix: "", value: 53, suffix: "%", caption: "Five year revenue CAGR" },
  { prefix: "", value: 9, suffix: "", caption: "Countries" },
  { prefix: "", value: 100, suffix: "+", caption: "Cities" },
  { prefix: "", value: 150, suffix: "K", caption: "Agent partners" },
];

export const pressNames = [
  `Inc42`,
  `Forbes India`,
  `Livemint`,
  `Josh Talks`,
  `GIWL Summit 2019`,
  `YourStory`,
];

export const news = [
  { title: `Kanika Gupta Shori on Women Leadership and Technology Transforming Indian Real Estate`, tag: `Leadership`, href: `${SITE}/news/kanika-gupta-shori-on-women-leadership-and-technology-transforming-indian-real-estate` },
  { title: `The Rise of Real Estate Investments Among Bollywood Elites in 2024`, tag: `Celebrity`, href: `${SITE}/news/the-rise-of-real-estate-investments-among-bollywood-elites-in-2024` },
  { title: `The Ultimate Strength of Bulk Buying in Real Estate`, tag: `Market`, href: `${SITE}/news/the-ultimate-strength-of-bulk-buying-in-real-estate` },
  { title: `Celebrity Property Purchases Are Transforming Indian Real Estate`, tag: `Celebrity`, href: `${SITE}/news/celebrity-property-purchases-are-transforming-indian-real-estate` },
  { title: `Bachchans Acing the Race in Bollywood's Real Estate Love Affair in Mumbai`, tag: `Celebrity`, href: `${SITE}/news/bachchans-acing-the-race-in-bollywoods-real-estate-love-affair-in-mumbai` },
  { title: `Why Real Estate Developers Are Not Taking to Affordable Housing`, tag: `Housing`, href: `${SITE}/news/why-real-estate-developers-are-not-taking-to-affordable-housing` },
  { title: `Kanika Gupta Shori Talks About Difficulties Faced by Women-Driven Startups`, tag: `Leadership`, href: `${SITE}/news/kanika-gupta-shori-talks-about-difficulties-faced-by-women-driven-startups` },
  { title: `Women are Steadily Reshaping Indian Real Estate Narratives`, tag: `Leadership`, href: `${SITE}/news/women-are-steadily-reshaping-indian-real-estate-narratives` },
  { title: `Indian Real Estate Market to Become More Robust in Times of Constant Price Rises`, tag: `Market`, href: `${SITE}/news/indian-real-estate-market-to-become-more-robust-in-times-of-constant-price-rises` },
];

export const awards = [
  { title: `Women Icon of the Year`, meta: `2023`, blurb: `Recognising India's most influential women leaders.`, href: `${SITE}/awards/kanika-gupta-shori-wins-the-women-icon-of-the-year-award-2023` },
  { title: `Entrepreneur of the Year, GIWL`, meta: `2019`, blurb: `Great Indian Women Leadership Award for enterprise.`, href: `${SITE}/awards/kanika-gupta-shori-awarded-with-entrepreneur-of-the-year-2019-by-great-indian-women-leadership` },
  { title: `Times 40 Under 40`, meta: `The Times`, blurb: `Young leaders redefining Indian business.`, href: `${SITE}/awards/kanika-gupta-shori-makes-it-to-list-times-40-under-40-recognizes-true-leaders-in-various-segments` },
  { title: `Businessworld 40 Under 40`, meta: `2019`, blurb: `Achievers under forty across sectors.`, href: `${SITE}/awards/ms-kanika-gupta-shori-presented-with-businessworld-40-under-40-award` },
  { title: `BW Disrupt 40 Under 40`, meta: `BW Disrupt`, blurb: `Change-makers shaping new markets.`, href: `${SITE}/awards/changer-makers-innovators-celebrated-at-4th-edition-of-bw-disrupt-under-40` },
  { title: `Realty+ 40 Under 40`, meta: `Realty+`, blurb: `Young industry leaders in real estate.`, href: `${SITE}/awards/young-industry-leaders-feted-at-realty-40-under-40-conclave-awards-grand-finale` },
  { title: `Red Herring Top 100 Asia`, meta: `2019`, blurb: `Asia's most promising technology companies.`, href: `${SITE}/awards/square-yards-recognized-as-red-herring-top-100-asia-award-winner-2019` },
  { title: `Golden Brick Awards`, meta: `2019`, blurb: `Excellence in real estate and property.`, href: `${SITE}/awards/square-yards-bagged-golden-brick-awards-2019` },
  { title: `Real Estate Website of the Year`, meta: `2019`, blurb: `Best digital experience in property.`, href: `${SITE}/awards/square-yards-has-won-real-estate-website-of-the-year-2019` },
];

export const blogs = [
  { title: `Green Home Demand Goes up Throughout India`, tag: `Sustainability`, date: `June 2023`, href: `${SITE}/article/green-home-demand-goes-up-throughout-india` },
  { title: `Time is Limited! How Do You Want to Spend It?`, tag: `Perspective`, date: `February 2020`, href: `${SITE}/article/time-is-limited-how-do-you-want-to-spend-it-doing-your-karma-or-complaining` },
  { title: `Global Citizenship: Is It Even a Real Thing?`, tag: `Perspective`, date: `February 2020`, href: `${SITE}/article/global-citizenship-is-it-even-a-real-thing` },
  { title: `My Journey to the Top of the World`, tag: `Travel`, date: `December 2019`, href: `${SITE}/article/my-journey-to-the-top-of-the-world` },
  { title: `Why Women Are Paid Less`, tag: `Women`, date: `November 2019`, href: `${SITE}/article/why-women-are-paid-less` },
  { title: `While We Teach Our Children About Life, Our Children Teach Us What Life is All About`, tag: `Family`, date: `November 2019`, href: `${SITE}/article/while-we-try-to-teach-our-children-all-about-life-our-children-teach-us-what-life-is-all-about` },
  { title: `Change is the Only Constant. So Why Fear Changing Houses?`, tag: `Living`, date: `September 2019`, href: `${SITE}/article/change-is-the-only-constant-thing-in-the-world-so-why-fear-changing-houses` },
];

export const linkedin = {
  activity: `https://www.linkedin.com/in/kanikaguptashori/recent-activity/all/`,
  profile: `https://www.linkedin.com/in/kanikaguptashori/`,
  // VISUAL PREVIEW: paste the link to her latest post below and the home page
  // renders the actual LinkedIn post card. To get it: open the post on
  // LinkedIn, click the three dots, "Copy link to post", paste here.
  postUrl: `https://www.linkedin.com/feed/update/urn:li:activity:7478382612382638080/`,
  // Fallback if no postUrl: paste a short excerpt of her latest post to show
  // it as a styled quote. Leave both empty for the standing card.
  featuredExcerpt: ``,
  featuredDate: ``,
};

export const youtubeChannel = `https://www.youtube.com/channel/UCtvscMBw983oIwtcdw62NYg`;

export const videos = [
  { id: `N8_iuqP_XM4`, title: `Josh Talks: What It Takes to Become a Successful Entrepreneur`, tag: `Josh Talks`, kind: `video` },
  { id: `K3jIPu0VSzU`, title: `Growth Hacks: Building a Real Estate Marketplace`, tag: `Podcast`, kind: `podcast` },
  { id: `5bR9qSj0Hqc`, title: `How Square Yards Helped Her Discover Herself`, tag: `Feature`, kind: `video` },
];

export const squareYardsShort = `Square Yards is a technology-enabled, global real estate aggregator and India's largest player for primary residential real estate. Its platform covers the full journey, from search and discovery to research, transactions, home loans and post-sales service, integrating buyers with a network of 500+ partner developers and 90+ banks and NBFCs.`;

export const email = `kanika.gupta@squareyards.com`;

export const socials = [
  { name: "linkedin" as const, label: "LinkedIn", href: "https://www.linkedin.com/in/kanikaguptashori/" },
  { name: "instagram" as const, label: "Instagram", href: "https://www.instagram.com/kanika_gupta_shori/" },
  { name: "facebook" as const, label: "Facebook", href: "https://www.facebook.com/kanika.shori" },
  { name: "youtube" as const, label: "YouTube", href: "https://www.youtube.com/channel/UCtvscMBw983oIwtcdw62NYg" },
];

export const squareYardsSocials = [
  { name: "linkedin" as const, label: "LinkedIn", href: "https://www.linkedin.com/company/square-yards" },
  { name: "instagram" as const, label: "Instagram", href: "https://www.instagram.com/square_yards/" },
  { name: "facebook" as const, label: "Facebook", href: "https://www.facebook.com/SquareYards" },
];

export const networkLinks = [
  { label: "Property News India", href: "https://www.globalrealtybytes.com/" },
  { label: "Book Property Online", href: "https://book.squareyards.com/" },
  { label: "Square Yards Wiki", href: "https://en.wikipedia.org/wiki/Square_Yards" },
];

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Awards", href: "/awards" },
  { label: "Videos", href: "/videos" },
  { label: "Blogs", href: "/blogs" },
];
