export const translations = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      resources: "Resources",
      contact: "Contact",
      language: "English"
    },
    hero: {
      title: "Strength In Every Strand",
      subtitle: "Trusted by industries worldwide for superior quality, durability, and performance",
      cta1: "Explore Products",
      cta2: "Request Quote"
    },
    stats: {
      years: "Years of Quality Rope Making",
      countries: "Countries Served",
      products: "Product Variants",
      certified: "Certified Quality"
    },
    products: {
      title: "Our Product Range",
      subtitle: "From marine applications to industrial solutions, discover our comprehensive range of premium rope products",
      viewAll: "View All Products",
      requestQuote: "Request Quote"
    },
    filters: {
      all: "All Products",
      marine: "Marine",
      industrial: "Industrial",
      construction: "Construction"
    },
    quote: {
      title: "Request a Custom Quote",
      subtitle: "Get personalized pricing for bulk orders and custom specifications",
      submit: "Submit Quote Request",
      success: "Quote request submitted successfully! We will contact you within 24 hours."
    },
    form: {
      name: "Full Name *",
      email: "Email Address *",
      company: "Company",
      phone: "Phone Number",
      productType: "Product Type *",
      diameter: "Diameter (mm)",
      length: "Length (m)",
      quantity: "Quantity",
      requirements: "Additional Requirements",
      files: "Upload Specifications (Optional)"
    },
    about: {
      title: "70 Years of Rope Manufacturing Excellence",
      description: "Since 1954, Manila Cordage has been the trusted partner for industries requiring premium rope solutions. Our commitment to quality, innovation, and customer service has made us a global leader in rope manufacturing.",
      feature1: "ISO 9001:2015 certified manufacturing processes",
      feature2: "Sustainable sourcing and environmental responsibility",
      feature3: "24/7 technical support and consultation",
      feature4: "Custom manufacturing capabilities",
      cta: "Learn More About Us"
    },
    resources: {
      title: "Technical Resources",
      subtitle: "Access comprehensive documentation, installation guides, and safety information",
      download: "Download PDFs",
      access: "Access Tool",
      watch: "Watch Videos"
    },
    footer: {
      description: "Leading manufacturer of premium rope solutions for marine, industrial, and construction applications worldwide.",
      products: "Products",
      company: "Company",
      aboutUs: "About Us",
      careers: "Careers",
      news: "News",
      contact: "Contact",
      contactInfo: "Contact Info",
      copyright: "© 2024 Manila Cordage. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      sitemap: "Sitemap"
    },
    chat: {
      title: "Live Support",
      subtitle: "We're here to help!",
      placeholder: "Type your message...",
      initialMessage: "Hello! How can we help you with your rope requirements today?"
    }
  },
  fil: {
    nav: {
      home: "Tahanan",
      products: "Mga Produkto",
      about: "Tungkol",
      resources: "Mga Mapagkukunan",
      contact: "Makipag-ugnayan",
      language: "Filipino"
    },
    hero: {
      title: "Lakas sa Bawat Hibla",
      subtitle: "Pinagkakatiwalaan ng mga industriya sa buong mundo para sa superior na kalidad, tibay, at pagganap",
      cta1: "Tuklasin ang mga Produkto",
      cta2: "Humiling ng Quote"
    },
    stats: {
      years: "Taon ng Kalidad na Paggawa ng Lubid",
      countries: "Mga Bansang Pinagsilbihan",
      products: "Mga Variant ng Produkto",
      certified: "Sertipikadong Kalidad"
    },
    products: {
      title: "Aming Hanay ng Produkto",
      subtitle: "Mula sa marine applications hanggang industrial solutions, tuklasin ang aming komprehensibong hanay ng premium rope products",
      viewAll: "Tingnan Lahat ng Produkto",
      requestQuote: "Humiling ng Quote"
    },
    filters: {
      all: "Lahat ng Produkto",
      marine: "Marine",
      industrial: "Industrial",
      construction: "Konstruksiyon"
    },
    quote: {
      title: "Humiling ng Custom Quote",
      subtitle: "Kumuha ng personalized pricing para sa bulk orders at custom specifications",
      submit: "Ipasa ang Quote Request",
      success: "Matagumpay na naipadala ang quote request! Makikipag-ugnayan kami sa inyo sa loob ng 24 oras."
    },
    form: {
      name: "Buong Pangalan *",
      email: "Email Address *",
      company: "Kumpanya",
      phone: "Numero ng Telepono",
      productType: "Uri ng Produkto *",
      diameter: "Diameter (mm)",
      length: "Haba (m)",
      quantity: "Dami",
      requirements: "Karagdagang Pangangailangan",
      files: "I-upload ang Specifications (Opsyonal)"
    },
    about: {
      title: "70 Taon ng Kahusayan sa Paggawa ng Lubid",
      description: "Simula 1954, ang Manila Cordage ay naging pinagkakatiwalaang kasosyo para sa mga industriyang nangangailangan ng premium rope solutions. Ang aming pangako sa kalidad, innovation, at customer service ay ginawa kaming pandaigdigang lider sa rope manufacturing.",
      feature1: "ISO 9001:2015 certified manufacturing processes",
      feature2: "Sustainable sourcing at environmental responsibility",
      feature3: "24/7 technical support at consultation",
      feature4: "Custom manufacturing capabilities",
      cta: "Matuto Pa Tungkol sa Amin"
    },
    resources: {
      title: "Mga Technical Resources",
      subtitle: "I-access ang komprehensibong dokumentasyon, installation guides, at safety information",
      download: "I-download ang mga PDF",
      access: "I-access ang Tool",
      watch: "Manood ng mga Video"
    },
    footer: {
      description: "Nangungunang manufacturer ng premium rope solutions para sa marine, industrial, at construction applications sa buong mundo.",
      products: "Mga Produkto",
      company: "Kumpanya",
      aboutUs: "Tungkol sa Amin",
      careers: "Mga Career",
      news: "Balita",
      contact: "Makipag-ugnayan",
      contactInfo: "Contact Info",
      copyright: "© 2024 Manila Cordage. Lahat ng karapatan ay nakalaan.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      sitemap: "Sitemap"
    },
    chat: {
      title: "Live Support",
      subtitle: "Nandito kami para tumulong!",
      placeholder: "I-type ang inyong mensahe...",
      initialMessage: "Kumusta! Paano namin kayo matutulungan sa inyong rope requirements ngayon?"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
