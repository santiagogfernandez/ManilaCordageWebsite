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
      years: "Years of Excellence",
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
  es: {
    nav: {
      home: "Inicio",
      products: "Productos",
      about: "Acerca de",
      resources: "Recursos",
      contact: "Contacto",
      language: "Español"
    },
    hero: {
      title: "Fuerza En Cada Hebra",
      subtitle: "Confiado por industrias mundiales por calidad superior, durabilidad y rendimiento",
      cta1: "Explorar Productos",
      cta2: "Solicitar Cotización"
    },
    stats: {
      years: "Años de Excelencia",
      countries: "Países Servidos",
      products: "Variantes de Productos",
      certified: "Calidad Certificada"
    },
    products: {
      title: "Nuestra Gama de Productos",
      subtitle: "Desde aplicaciones marinas hasta soluciones industriales, descubre nuestra gama completa de productos de cuerda premium",
      viewAll: "Ver Todos los Productos",
      requestQuote: "Solicitar Cotización"
    },
    filters: {
      all: "Todos los Productos",
      marine: "Marino",
      industrial: "Industrial",
      construction: "Construcción"
    },
    quote: {
      title: "Solicitar Cotización Personalizada",
      subtitle: "Obtén precios personalizados para pedidos al por mayor y especificaciones personalizadas",
      submit: "Enviar Solicitud de Cotización",
      success: "¡Solicitud de cotización enviada exitosamente! Te contactaremos dentro de 24 horas."
    },
    form: {
      name: "Nombre Completo *",
      email: "Correo Electrónico *",
      company: "Empresa",
      phone: "Número de Teléfono",
      productType: "Tipo de Producto *",
      diameter: "Diámetro (mm)",
      length: "Longitud (m)",
      quantity: "Cantidad",
      requirements: "Requisitos Adicionales",
      files: "Subir Especificaciones (Opcional)"
    },
    about: {
      title: "70 Años de Excelencia en Fabricación de Cuerdas",
      description: "Desde 1954, Manila Cordage ha sido el socio de confianza para industrias que requieren soluciones premium de cuerdas. Nuestro compromiso con la calidad, innovación y servicio al cliente nos ha convertido en líder global en fabricación de cuerdas.",
      feature1: "Procesos de fabricación certificados ISO 9001:2015",
      feature2: "Abastecimiento sostenible y responsabilidad ambiental",
      feature3: "Soporte técnico y consultoría 24/7",
      feature4: "Capacidades de fabricación personalizada",
      cta: "Conoce Más Sobre Nosotros"
    },
    resources: {
      title: "Recursos Técnicos",
      subtitle: "Accede a documentación completa, guías de instalación e información de seguridad",
      download: "Descargar PDFs",
      access: "Acceder a Herramienta",
      watch: "Ver Videos"
    },
    footer: {
      description: "Fabricante líder de soluciones premium de cuerdas para aplicaciones marinas, industriales y de construcción en todo el mundo.",
      products: "Productos",
      company: "Empresa",
      aboutUs: "Acerca de Nosotros",
      careers: "Carreras",
      news: "Noticias",
      contact: "Contacto",
      contactInfo: "Información de Contacto",
      copyright: "© 2024 Manila Cordage. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      sitemap: "Mapa del Sitio"
    },
    chat: {
      title: "Soporte en Vivo",
      subtitle: "¡Estamos aquí para ayudar!",
      placeholder: "Escribe tu mensaje...",
      initialMessage: "¡Hola! ¿Cómo podemos ayudarte con tus requisitos de cuerda hoy?"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
