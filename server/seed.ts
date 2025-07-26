import { db } from "./db";
import { products, resources } from "@shared/schema";

async function seedDatabase() {
  console.log("Seeding database...");

  // Seed products
  const sampleProducts = [
    {
      name: "Manila Marine Rope",
      description: "Premium natural fiber rope ideal for marine applications with excellent grip and durability.",
      category: "marine",
      diameterMin: 12,
      diameterMax: 50,
      material: "Natural Manila Fiber",
      features: ["Marine Grade", "UV Resistant", "Excellent Grip"],
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      name: "Polypropylene Industrial Rope",
      description: "High-strength synthetic rope engineered for heavy-duty industrial applications and lifting operations.",
      category: "industrial",
      diameterMin: 8,
      diameterMax: 32,
      material: "Polypropylene",
      features: ["Heavy Duty", "Chemical Resistant", "High Strength"],
      imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      name: "Safety Construction Rope",
      description: "OSHA-compliant safety rope designed for construction, climbing, and fall protection applications.",
      category: "construction",
      diameterMin: 10,
      diameterMax: 16,
      material: "Nylon Core with Polyester Sheath",
      features: ["Safety Rated", "OSHA Compliant", "Fall Protection"],
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      name: "Yacht Rigging Rope",
      description: "Premium marine rope specifically designed for yacht rigging with superior UV and saltwater resistance.",
      category: "marine",
      diameterMin: 6,
      diameterMax: 20,
      material: "Polyester Core with Dyneema",
      features: ["UV Resistant", "Saltwater Resistant", "Low Stretch"],
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      name: "Steel Wire Rope",
      description: "High-tensile steel wire rope for crane operations, lifting equipment, and heavy machinery applications.",
      category: "industrial",
      diameterMin: 3,
      diameterMax: 40,
      material: "Galvanized Steel Wire",
      features: ["Steel Core", "High Tensile", "Corrosion Resistant"],
      imageUrl: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      name: "Dynamic Climbing Rope",
      description: "Professional-grade dynamic rope for rock climbing, mountaineering, and specialized rescue operations.",
      category: "construction",
      diameterMin: 9,
      diameterMax: 11,
      material: "Nylon Dynamic Core",
      features: ["Dynamic", "CE Certified", "Rescue Grade"],
      imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
  ];

  await db.insert(products).values(sampleProducts).onConflictDoNothing();

  // Seed resources
  const sampleResources = [
    {
      title: "Product Datasheets",
      description: "Detailed specifications, load ratings, and technical properties for all our rope products.",
      type: "datasheet",
      fileUrl: "/api/resources/download/datasheets.pdf",
      iconClass: "fas fa-file-pdf",
    },
    {
      title: "Installation Guides",
      description: "Step-by-step installation procedures and best practices for optimal rope performance.",
      type: "guide",
      fileUrl: "/api/resources/download/installation-guides.pdf",
      iconClass: "fas fa-tools",
    },
    {
      title: "Safety Documentation",
      description: "Safety guidelines, inspection protocols, and compliance certifications for workplace safety.",
      type: "safety",
      fileUrl: "/api/resources/download/safety-docs.pdf",
      iconClass: "fas fa-shield-alt",
    },
    {
      title: "Case Studies",
      description: "Real-world applications and success stories from various industries using our rope solutions.",
      type: "case-study",
      fileUrl: "/api/resources/download/case-studies.pdf",
      iconClass: "fas fa-chart-line",
    },
    {
      title: "Load Calculators",
      description: "Interactive tools to calculate working load limits and safety factors for your applications.",
      type: "calculator",
      fileUrl: "/tools/load-calculator",
      iconClass: "fas fa-calculator",
    },
    {
      title: "Training Videos",
      description: "Professional training videos covering proper handling, inspection, and maintenance techniques.",
      type: "video",
      fileUrl: "/training/videos",
      iconClass: "fas fa-video",
    },
  ];

  await db.insert(resources).values(sampleResources).onConflictDoNothing();

  console.log("Database seeded successfully!");
}

seedDatabase().catch(console.error);