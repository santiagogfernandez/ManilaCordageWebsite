import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import multer from 'multer';
import path from 'path';

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx|jpg|jpeg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, DOCX, JPG, JPEG, PNG files are allowed.'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Products endpoints
  app.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      const products = category && typeof category === 'string' 
        ? await storage.getProductsByCategory(category)
        : await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  // Quote requests endpoints
  app.post("/api/quote-requests", upload.array('files', 5), async (req, res) => {
    try {
      const files = req.files as Express.Multer.File[];
      const fileNames = files ? files.map(f => f.originalname) : [];
      
      const requestData = {
        ...req.body,
        diameter: req.body.diameter ? parseInt(req.body.diameter) : null,
        length: req.body.length ? parseInt(req.body.length) : null,
        quantity: req.body.quantity ? parseInt(req.body.quantity) : null,
        fileNames,
      };

      const validatedData = insertQuoteRequestSchema.parse(requestData);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      res.status(201).json(quoteRequest);
    } catch (error) {
      console.error("Quote request error:", error);
      res.status(400).json({ message: "Failed to create quote request" });
    }
  });

  app.get("/api/quote-requests", async (req, res) => {
    try {
      const requests = await storage.getQuoteRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch quote requests" });
    }
  });

  // Resources endpoints
  app.get("/api/resources", async (req, res) => {
    try {
      const { type } = req.query;
      const resources = type && typeof type === 'string'
        ? await storage.getResourcesByType(type)
        : await storage.getResources();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch resources" });
    }
  });

  // Mock resource download endpoint
  app.get("/api/resources/download/:filename", async (req, res) => {
    const { filename } = req.params;
    
    // In a real application, this would serve actual files
    // For now, we'll return a mock PDF response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.status(200).send(Buffer.from(`Mock PDF content for ${filename}`));
  });

  const httpServer = createServer(app);
  return httpServer;
}
