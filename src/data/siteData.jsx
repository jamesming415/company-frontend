const NAV_LINKS = ["Home", "About", "Services", "Contact Us"];

export const SERVICES = [
  {
    id: "consulting",
    icon: "lightbulb",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&fm=jpg&q=82&w=1400",
    title: "IT Consulting",
    desc: "Expert IT guidance to optimize your business operations and technology stack. We assess, advise, and implement strategies that drive real results.",
    cta: "Contact Us",
  },
  {
    id: "outsourcing",
    icon: "globe",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&fm=jpg&q=82&w=1400",
    title: "Outsourcing Solutions",
    desc: "Provide remote IT specialists to scale your team efficiently. Tap into our vetted talent pool without the overhead of traditional hiring.",
    cta: "Contact Us",
  },
  {
    id: "cloud",
    icon: "cloud",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&fm=jpg&q=82&w=1400",
    title: "Cloud Infrastructure & Management",
    desc: "Design, deploy, and manage secure, scalable cloud systems tailored to your business. We work across AWS, Azure, and GCP ecosystems.",
    cta: "Learn More",
  },
  {
    id: "cybersecurity",
    icon: "shield",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&fm=jpg&q=82&w=1400",
    title: "Cybersecurity & Risk Assessment",
    desc: "Protect company assets and evaluate security risks before they become threats. From audits to incident response, we've got you covered.",
    cta: "Learn More",
  },
  {
    id: "software",
    icon: "code",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&fm=jpg&q=82&w=1400",
    title: "Software Development",
    desc: "Custom software solutions tailored precisely to your business needs. From MVPs to enterprise platforms, we build with quality and speed.",
    cta: "Contact Us",
  },
  {
    id: "ai",
    icon: "bot",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&fm=jpg&q=82&w=1400",
    title: "AI & Automation Solutions",
    desc: "Implement AI and automation to streamline processes, reduce costs, and unlock new capabilities across your organization.",
    cta: "Learn More",
  },
  {
    id: "network",
    icon: "network",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&fm=jpg&q=82&w=1400",
    title: "Network Setup & Maintenance",
    desc: "Reliable network installation, monitoring, and support. We ensure your infrastructure stays fast, secure, and always online.",
    cta: "Contact Us",
  },
  {
    id: "strategy",
    icon: "route",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&fm=jpg&q=82&w=1400",
    title: "IT Strategy & Digital Transformation",
    desc: "Modernize operations and create a clear digital roadmap. We help you navigate change and emerge stronger in the digital era.",
    cta: "Learn More",
  },
];

export const WHAT_WE_HAVE_DONE = [
  {
    icon: "game",
    title: "Game Services Ready for Partners",
    desc: "We have already developed game service foundations that are ready to use and ready to scale. The next step is partnership: publishing, distribution, integration, and commercial growth.",
  },
  {
    icon: "mobile",
    title: "Web and Mobile Apps for Clients",
    desc: "We have delivered many web and mobile applications for clients with real product needs, turning ideas into polished platforms, practical workflows, and customer-facing digital experiences.",
  },
  {
    icon: "trading",
    title: "Trading Strategies in Development",
    desc: "We are actively developing trading strategies for clients, combining software engineering, automation, data-driven thinking, and disciplined execution for financial technology use cases.",
  },
];

export const TEAM = [
  {
    name: "Randall Smith",
    role: "CEO",
    bio: "Randall leads DigitWise's company vision, partnerships, and startup-focused growth strategy.",
  },
  {
    name: "Jay Huang",
    role: "CTO",
    bio: "Jay is a ex-Toptal full-stack developer and published Node.js author who brings senior engineering experience to DigitWise's architecture, reliability, and delivery standards.",
    linkLabel: "Read Node.js post",
    profileUrl: "https://www.toptal.com/developers/nodejs/node-js-error-handling",
  },
  {
    name: "Alex Jun",
    role: "Co-founder",
    bio: "Alex drives the company's growth strategy and client relationships, combining business acumen with a passion for delivering technology-driven outcomes.",
  },
  {
    name: "James Ming",
    role: "CFO & HR Manager",
    bio: "James oversees financial strategy and people operations, ensuring DigitWise runs efficiently while fostering a culture of excellence and innovation.",
  },
  {
    name: "Saburo Suzuki",
    role: "Developer",
    bio: "Saburo is a ex-Toptal developer with 15 years of full-stack web experience, bringing proven delivery across modern front-end, back-end, cloud, testing, and API systems.",
    linkLabel: "Connect Profile",
    profileUrl: "https://www.toptal.com/developers/resume/saburo-suzuki",
  },
  {
    name: "Hong Zheng",
    role: "Developer",
    bio: "Hong is a ex-Toptal senior full-stack developer and architect with 15+ years of experience building enterprise-grade applications, cloud-backed platforms, and reliable business systems.",
    linkLabel: "Connect Profile",
    profileUrl: "https://www.toptal.com/developers/resume/hong-zheng",
  },
  {
    name: "Po-Chun Yu",
    role: "Developer",
    bio: "Po-Chun is a ex-Toptal software developer with strong experience in back-end systems, microservices, .NET, Java, Docker, databases, and production-level problem solving.",
    linkLabel: "Connect Profile",
    profileUrl: "https://www.toptal.com/developers/resume/po-chun-yu",
  },
  {
    name: "Sidney Otuga",
    role: "Recruiter",
    bio: "Sidney is an experienced technology recruiter skilled at identifying, attracting, and connecting top talent with the right opportunities.",
    linkLabel: "Connect Profile",
  },
];

export const SOCIAL = [
  { name: "Facebook", url: "https://www.facebook.com/digitwise", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/digitwise", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg> },
  { name: "Instagram", url: "https://www.instagram.com/digitwise", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
  { name: "X", url: "https://twitter.com/digitwise", svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
];

export { NAV_LINKS };
