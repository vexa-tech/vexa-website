export const siteContent = {
  nav: {
    homeHref: "/#home",
    homeLabel: "vexa tech home",
    logoAlt: "vexa tech logo",
    links: [
      { label: "Services", href: "/#services" },
      // { label: "Work", href: "/work" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
    separator: "---",
    cta: { label: "Lets Talk", href: "/#contact" },
  },
  services: {
    headingLines: ["What We", "Do"],
    intro:
      "With over 3+ years of experience, we're committed to delivering top-notch software solutions tailored to your business needs.",
    ariaLabel: "Service offerings",
    items: [
      {
        title: "Mobile Applications Development",
        description: "Empowering your business mobility. We build apps that engage and convert.",
        icon: "mobile",
      },
      {
        title: "Custom Software Development",
        description: "Your ideas, our expertise. Building robust software solutions together.",
        icon: "software",
      },
      {
        title: "Testing & Quality Assurance",
        description: "Delivering excellence, one test at a time.",
        icon: "testing",
      },
      {
        title: "Maintenance",
        description: "Sustaining your success with ongoing support.",
        icon: "maintenance",
      },
      {
        title: "Support",
        description: "Reliable maintenance, consistent performance.",
        icon: "support",
      },
      {
        title: "Consultation",
        description: "Experience our uncompromising commitment to quality.",
        icon: "consultation",
      },
    ],
  },
  trust: {
    heading: "We make your spending stress-free for you to have the perfect control.",
    body:
      "vexa tech specializes in tailored custom software development, delivering responsive applications, unique 3D modeling, graphic designs, efficient document workflows, and impactful e-commerce platforms. Our full-stack team ensures seamless integration into your existing business processes.",
    badges: ["94% Customer Satisfaction", "4K+ New Projects", "10K+ New Customers"],
    ctaLabel: "Learn More",
  },
  testimonials: {
    headingLines: ["Our Clients", "Feedbacks"],
    accent: "*",
    subcopy: "Don't take our word for it. See what customers are saying about us.",
    ratingSymbol: "★",
    sheetUrl: process.env.REACT_APP_TESTIMONIALS_SHEET_URL || "",
    items: [],
  },
  contact: {
    headingLines: ["Lets Discuss", "Your Project"],
    conversation: {
      label: "Or Start Conversation",
      email: "vexatech.it@gmail.com",
    },
    copyLines: [
      "Have an idea or need a website for your business?",
      "Tell us about your project and get a free quotation.",
      "We design web and mobile solutions tailored to your budget.",
      "Message us today and let's build something great together.",
    ],
    form: {
      fields: [
        { name: "firstName", type: "text", placeholder: "First Name*", label: "First Name" },
        { name: "lastName", type: "text", placeholder: "Last Name*", label: "Last Name" },
        { name: "email", type: "email", placeholder: "Email*", label: "Email" },
        { name: "phone", type: "tel", placeholder: "Phone*", label: "Phone" },
        { name: "subject", type: "text", placeholder: "Subject*", label: "Subject" },
        { name: "category", type: "text", placeholder: "Category*", label: "Category" },
      ],
      messagePlaceholder: "Type Message Here*",
      messageLabel: "Message",
      termsText: "I agree to the Terms & Conditions",
      termsTitle: "Terms & Conditions",
      termsItems: [
        "You confirm the information you submit is accurate and belongs to you.",
        "You consent to vexa tech contacting you by email or phone about your request.",
        "Your details are used only for project communication and quotation purposes.",
        "Submitting this form does not create a legal contract until both parties agree in writing.",
      ],
      submitLabel: "Submit",
    },
  },
  footer: {
    brandName: "VEXA TECH",
    logoAlt: "vexa tech logo",
    tagsAriaLabel: "Service tags",
    tags: [
      "#CUSTOM APP DEVELOPMENT",
      "#MOBILE APP DEVELOPMENT",
      "#MAINTENANCE",
      "#TESTING & QUALITY ASSURANCE",
      "#SUPPORT",
      "#CONSULTANCE",
    ],
    columns: [
      [
        { label: "LINKEDIN", href: "#" },
        { label: "FACEBOOK", href: "https://www.facebook.com/search/top?q=vexa%20tech" },
        { label: "INSTAGRAM", href: "#" },
      ],
      [
        { label: "TERMS & CONDITIONS", href: "#" },
        { label: "PRIVACY POLICY", href: "#" },
        { label: "SERVICES", href: "/#services" },
      ],
      [
        { label: "LOCATION", href: "#" },
        { label: "+94 710 313031", href: "tel:+94710313031" },
      ],
      [
        { label: "SERVICES", href: "/#services" },
        { label: "WORK", href: "/work" },
        { label: "TESTIMONIALS", href: "/#testimonials" },
      ],
    ],
    newsletter: {
      label: "SUBSCRIBE TO OUR NEWSLETTER",
      placeholder: "Enter Email",
      buttonLabel: "→",
      ariaLabel: "Subscribe",
    },
    backToTopHref: "/#home",
    backToTopLabel: "Back to top",
    backToTopSymbol: "↑",
  },
  work: {
    hero: {
      title: "Our Work",
      subtitle:
        "Real products, measurable results. Explore a selection of engagements across mobile, web, and enterprise platforms.",
    },
    cardLabel: "Case Study",
    cardCtaLabel: "View Details",
    items: [
      {
        title: "Fintech Mobile Suite",
        summary: "Cross-platform banking app with biometric login and real-time insights.",
      },
      {
        title: "Logistics Control Hub",
        summary: "Operations dashboard that cut delivery exceptions by 32%.",
      },
      {
        title: "Healthcare Portal",
        summary: "Patient onboarding and secure messaging built for compliance.",
      },
      {
        title: "Commerce Revamp",
        summary: "Headless storefront optimized for speed and conversion growth.",
      },
      {
        title: "AI Support Desk",
        summary: "Self-serve workflows and insights that deflected 45% of tickets.",
      },
      {
        title: "Creative Studio Platform",
        summary: "End-to-end asset workflow with approvals and version tracking.",
      },
    ],
    partners: {
      title: "Our Partners",
      subtitle:
        "Trusted by teams who value craftsmanship, velocity, and long-term product impact.",
      sectionLabel: "Our partners",
      logosLabel: "Partner logos",
      names: [
        "Orbit Labs",
        "BluePeak Health",
        "Nova Logistics",
        "Brightline Retail",
        "Atlas Finance",
        "CloudNine Media",
      ],
    },
  },
};
