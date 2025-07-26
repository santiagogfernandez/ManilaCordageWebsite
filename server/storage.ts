import { type Product, type InsertProduct, type QuoteRequest, type InsertQuoteRequest, type Resource, type InsertResource } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Quote Requests
  getQuoteRequests(): Promise<QuoteRequest[]>;
  getQuoteRequest(id: string): Promise<QuoteRequest | undefined>;
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
  
  // Resources
  getResources(): Promise<Resource[]>;
  getResourcesByType(type: string): Promise<Resource[]>;
  getResource(id: string): Promise<Resource | undefined>;
  createResource(resource: InsertResource): Promise<Resource>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product>;
  private quoteRequests: Map<string, QuoteRequest>;
  private resources: Map<string, Resource>;

  constructor() {
    this.products = new Map();
    this.quoteRequests = new Map();
    this.resources = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed products
    const sampleProducts: Product[] = [
      {
        id: "1",
        name: "Manila Marine Rope",
        description: "Premium natural fiber rope ideal for marine applications with excellent grip and durability.",
        category: "marine",
        diameterMin: 12,
        diameterMax: 50,
        material: "Natural Manila Fiber",
        features: ["Marine Grade", "UV Resistant", "Excellent Grip"],
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isActive: true,
      },
      {
        id: "2",
        name: "Polypropylene Industrial Rope",
        description: "High-strength synthetic rope engineered for heavy-duty industrial applications and lifting operations.",
        category: "industrial",
        diameterMin: 8,
        diameterMax: 32,
        material: "Polypropylene",
        features: ["Heavy Duty", "Chemical Resistant", "High Strength"],
        imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isActive: true,
      },
      {
        id: "3",
        name: "Safety Construction Rope",
        description: "OSHA-compliant safety rope designed for construction, climbing, and fall protection applications.",
        category: "construction",
        diameterMin: 10,
        diameterMax: 16,
        material: "Nylon Core with Polyester Sheath",
        features: ["Safety Rated", "OSHA Compliant", "Fall Protection"],
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isActive: true,
      },
      {
        id: "4",
        name: "Yacht Rigging Rope",
        description: "Premium marine rope specifically designed for yacht rigging with superior UV and saltwater resistance.",
        category: "marine",
        diameterMin: 6,
        diameterMax: 20,
        material: "Polyester Core with Dyneema",
        features: ["UV Resistant", "Saltwater Resistant", "Low Stretch"],
        imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isActive: true,
      },
      {
        id: "5",
        name: "Steel Wire Rope",
        description: "High-tensile steel wire rope for crane operations, lifting equipment, and heavy machinery applications.",
        category: "industrial",
        diameterMin: 3,
        diameterMax: 40,
        material: "Galvanized Steel Wire",
        features: ["Steel Core", "High Tensile", "Corrosion Resistant"],
        imageUrl: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isActive: true,
      },
      {
        id: "6",
        name: "Dynamic Climbing Rope",
        description: "Professional-grade dynamic rope for rock climbing, mountaineering, and specialized rescue operations.",
        category: "construction",
        diameterMin: 9,
        diameterMax: 11,
        material: "Nylon Dynamic Core",
        features: ["Dynamic", "CE Certified", "Rescue Grade"],
        imageUrl: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        isActive: true,
      },
    ];

    sampleProducts.forEach(product => {
      this.products.set(product.id, product);
    });

    // Seed resources
    const sampleResources: Resource[] = [
      {
        id: "1",
        title: "Product Datasheets",
        description: "Detailed specifications, load ratings, and technical properties for all our rope products.",
        type: "datasheet",
        fileUrl: "/api/resources/download/datasheets.pdf",
        iconClass: "fas fa-file-pdf",
        isActive: true,
      },
      {
        id: "2",
        title: "Installation Guides",
        description: "Step-by-step installation procedures and best practices for optimal rope performance.",
        type: "guide",
        fileUrl: "/api/resources/download/installation-guides.pdf",
        iconClass: "fas fa-tools",
        isActive: true,
      },
      {
        id: "3",
        title: "Safety Documentation",
        description: "Safety guidelines, inspection protocols, and compliance certifications for workplace safety.",
        type: "safety",
        fileUrl: "/api/resources/download/safety-docs.pdf",
        iconClass: "fas fa-shield-alt",
        isActive: true,
      },
      {
        id: "4",
        title: "Case Studies",
        description: "Real-world applications and success stories from various industries using our rope solutions.",
        type: "case-study",
        fileUrl: "/api/resources/download/case-studies.pdf",
        iconClass: "fas fa-chart-line",
        isActive: true,
      },
      {
        id: "5",
        title: "Load Calculators",
        description: "Interactive tools to calculate working load limits and safety factors for your applications.",
        type: "calculator",
        fileUrl: "/tools/load-calculator",
        iconClass: "fas fa-calculator",
        isActive: true,
      },
      {
        id: "6",
        title: "Training Videos",
        description: "Professional training videos covering proper handling, inspection, and maintenance techniques.",
        type: "video",
        fileUrl: "/training/videos",
        iconClass: "fas fa-video",
        isActive: true,
      },
    ];

    sampleResources.forEach(resource => {
      this.resources.set(resource.id, resource);
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.isActive);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.isActive && p.category === category);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id, 
      isActive: true,
      features: insertProduct.features ?? null,
      imageUrl: insertProduct.imageUrl ?? null
    };
    this.products.set(id, product);
    return product;
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values());
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    return this.quoteRequests.get(id);
  }

  async createQuoteRequest(insertRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const request: QuoteRequest = { 
      ...insertRequest, 
      id, 
      status: "pending",
      createdAt: new Date(),
      company: insertRequest.company ?? null,
      phone: insertRequest.phone ?? null,
      diameter: insertRequest.diameter ?? null,
      length: insertRequest.length ?? null,
      quantity: insertRequest.quantity ?? null,
      requirements: insertRequest.requirements ?? null,
      fileNames: insertRequest.fileNames ?? null
    };
    this.quoteRequests.set(id, request);
    return request;
  }

  async getResources(): Promise<Resource[]> {
    return Array.from(this.resources.values()).filter(r => r.isActive);
  }

  async getResourcesByType(type: string): Promise<Resource[]> {
    return Array.from(this.resources.values()).filter(r => r.isActive && r.type === type);
  }

  async getResource(id: string): Promise<Resource | undefined> {
    return this.resources.get(id);
  }

  async createResource(insertResource: InsertResource): Promise<Resource> {
    const id = randomUUID();
    const resource: Resource = { 
      ...insertResource, 
      id, 
      isActive: true,
      description: insertResource.description ?? null,
      fileUrl: insertResource.fileUrl ?? null,
      iconClass: insertResource.iconClass ?? null
    };
    this.resources.set(id, resource);
    return resource;
  }
}

export const storage = new MemStorage();
