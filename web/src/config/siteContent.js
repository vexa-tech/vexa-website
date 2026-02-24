export const siteContent = {
  nav: {
    homeHref: "/#home",
    homeLabel: "Vexa Tech home",
    logoAlt: "Vexa Tech logo",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Work", href: "/work" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
    separator: "---",
    cta: { label: "Lets Talk", href: "/#contact" },
  },
  services: {
    headingLines: ["What We", "Do"],
    intro:
      "With over a decade of experience, we're committed to delivering top-notch software solutions tailored to your business needs.",
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
      "ASD Technologies Inc specializes in tailored custom software development, delivering responsive applications, unique 3D modeling, graphic designs, efficient document workflows, and impactful e-commerce platforms. Our full-stack team ensures seamless integration into your existing business processes.",
    badges: ["94% Customer Satisfaction", "4K+ New Projects", "10K+ New Customers"],
    ctaLabel: "Learn More",
  },
  testimonials: {
    headingLines: ["Our Clients", "Feedbacks"],
    accent: "*",
    subcopy: "Don't take our word for it. See what customers are saying about us.",
    ratingSymbol: "★",
    items: [
      {
        name: "Corlis Ambady",
        role: "Business Analyst",
        rating: "5.0",
        quote:
          "I definitely recommend Vexa Tech. I felt they connected with our project and were the best experience in this platform so far. I intend to keep working with them and recommend their services.",
      },
      {
        name: "Cory Zamora",
        role: "Founder & CEO",
        rating: "5.0",
        quote:
          "Consulting with Vexa Tech was an absolute pleasure. We had a diverse idea for a web project related to the automotive industry. The team was delighted to collaborate and advise us on the project ASAP.",
      },
      {
        name: "Nikolas Brooten",
        role: "CEO & Co-Founder",
        rating: "5.0",
        quote:
          "Vexa Tech exceeded all of my expectations. Extremely professional, knowledgeable, and great people to work with.",
      },
      {
        name: "Georgia Bloom",
        role: "Founder",
        rating: "5.0",
        quote:
          "It was a pleasure working with the Vexa Tech team. They are very knowledgeable, patient, and very kind. I am a web developer myself and they helped speed up development for me.",
      },
      {
        name: "Jackie Sanders",
        role: "Investment Planner",
        rating: "5.0",
        quote:
          "Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus.",
      },
      {
        name: "Harrold J.",
        role: "Co Partner",
        rating: "5.0",
        quote:
          "Brilliant service throughout. We still have ongoing work but working with them has shown a high level of professionalism and quality. Love the work so far.",
      },
    ],
  },
  contact: {
    headingLines: ["Lets Discuss", "Your Project"],
    conversation: {
      label: "Or Start Conversation",
      email: "info@asdtechnologies.online",
    },
    copyLines: [
      "*Lorem Ipsum Dolor Sit Amet, Consectetur",
      "Adipisicing Elit. Maecenas Ac Ligula Diam. Etiam",
      "Commodo Aliquet Sapien At Tristique. Donec Ligula",
      "Lectus, Aliquam Eget",
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
      termsText: "I accept the terms & Conditions",
      submitLabel: "Submit",
    },
  },
  footer: {
    brandName: "ASDTECHNOLOGIES",
    logoAlt: "ASD Technologies logo",
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
        { label: "FACEBOOK", href: "#" },
        { label: "INSTAGRAM", href: "#" },
      ],
      [
        { label: "TERMS & CONDITIONS", href: "#" },
        { label: "PRIVACY POLICY", href: "#" },
        { label: "SERVICES", href: "/#services" },
      ],
      [
        { label: "LOCATION", href: "#" },
        { label: "+1 (000) 000-0000", href: "tel:+10000000000" },
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
