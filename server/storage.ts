import { type Product, type InsertProduct, type QuoteRequest, type InsertQuoteRequest, type Resource, type InsertResource, type CustomQuote, type InsertCustomQuote, products, quoteRequests, resources, customQuotes } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

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
  
  // Custom Quotes
  getCustomQuotes(): Promise<CustomQuote[]>;
  getCustomQuote(id: string): Promise<CustomQuote | undefined>;
  createCustomQuote(quote: InsertCustomQuote): Promise<CustomQuote>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.isActive, true));
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.category, category));
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product || undefined;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db
      .insert(products)
      .values(insertProduct)
      .returning();
    return product;
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return await db.select().from(quoteRequests);
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    const [request] = await db.select().from(quoteRequests).where(eq(quoteRequests.id, id));
    return request || undefined;
  }

  async createQuoteRequest(insertRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const [request] = await db
      .insert(quoteRequests)
      .values(insertRequest)
      .returning();
    return request;
  }

  async getResources(): Promise<Resource[]> {
    return await db.select().from(resources).where(eq(resources.isActive, true));
  }

  async getResourcesByType(type: string): Promise<Resource[]> {
    return await db.select().from(resources).where(eq(resources.type, type));
  }

  async getResource(id: string): Promise<Resource | undefined> {
    const [resource] = await db.select().from(resources).where(eq(resources.id, id));
    return resource || undefined;
  }

  async createResource(insertResource: InsertResource): Promise<Resource> {
    const [resource] = await db
      .insert(resources)
      .values(insertResource)
      .returning();
    return resource;
  }

  async getCustomQuotes(): Promise<CustomQuote[]> {
    return await db.select().from(customQuotes);
  }

  async getCustomQuote(id: string): Promise<CustomQuote | undefined> {
    const [quote] = await db.select().from(customQuotes).where(eq(customQuotes.id, id));
    return quote || undefined;
  }

  async createCustomQuote(insertCustomQuote: InsertCustomQuote): Promise<CustomQuote> {
    const [quote] = await db
      .insert(customQuotes)
      .values(insertCustomQuote)
      .returning();
    return quote;
  }
}

export const storage = new DatabaseStorage();
