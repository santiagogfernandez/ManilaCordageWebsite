# Manila Cordage Website - Replit Configuration

## Overview

This is a modern, mobile-responsive website for Manila Cordage Company, a rope manufacturing business. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a product catalog, quote request system, resource center, and multi-language support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and build processes
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Storage**: PostgreSQL database with Drizzle ORM for persistent data storage
- **File Uploads**: Multer middleware for handling file attachments
- **API Design**: RESTful API structure

### Database Schema
The application uses Drizzle ORM with PostgreSQL dialect and includes three main entities:
- **Products**: Rope products with categories, specifications, and features
- **Quote Requests**: Customer inquiries for pricing and bulk orders
- **Resources**: Technical documents, guides, and educational materials

## Key Components

### Core Features
1. **Homepage**: Modern landing page with hero section, company stats, and navigation
2. **Product Catalog**: Searchable and filterable product listings with detailed specifications
3. **Quote Request System**: Form-based quote requests with file upload capabilities
4. **Resource Center**: Downloadable technical documents and guides
5. **Multi-language Support**: English + additional language with i18n implementation
6. **Live Chat Widget**: Customer support integration
7. **SEO Optimization**: Meta tags, structured URLs, and search engine friendly content

### UI/UX Components
- Responsive navigation with mobile menu
- Hero section with call-to-action buttons
- Product filtering and search functionality
- Interactive quote request forms
- Chat widget for customer support
- Footer with company information and social links

### Technical Components
- **API Routes**: RESTful endpoints for products, quotes, and resources
- **File Upload**: Secure file handling for quote attachments
- **Form Validation**: Zod schemas for type-safe form validation
- **Query Client**: Centralized data fetching and caching
- **Language Context**: React context for internationalization

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles requests and validates data
3. **Database Operations**: PostgreSQL database operations via Drizzle ORM
4. **File Handling**: Multer processes file uploads for quote requests
5. **Response Formatting**: Structured JSON responses with error handling

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router alternative)
- UI libraries (Radix UI primitives, Lucide icons)
- Form handling (React Hook Form, Hookform Resolvers)
- Styling (Tailwind CSS, Class Variance Authority)
- State management (TanStack React Query)
- Utilities (date-fns, clsx, embla-carousel)

### Backend Dependencies
- Express.js framework
- Database ORM (Drizzle with PostgreSQL support)
- File upload handling (Multer)
- Development tools (tsx, esbuild)

### Development Tools
- TypeScript for type safety
- Vite for fast development and building
- PostCSS for CSS processing
- ESLint and Prettier (implied by setup)

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static assets served from build directory

### Environment Configuration
- Development mode with hot reloading via Vite
- Production mode with optimized builds
- Environment variables for database connection
- Replit-specific configurations for cloud deployment

### Database Setup
- Drizzle migrations in `./migrations` directory
- PostgreSQL connection via environment variables
- Schema definitions in shared directory for type consistency

### Production Considerations
- Express.js serves both API and static frontend files
- File uploads stored in `uploads/` directory
- Session management ready for PostgreSQL integration
- SEO meta tags dynamically set on page load
- Error handling and logging middleware implemented

The application follows modern web development practices with a clear separation of concerns, type safety throughout the stack, and a scalable architecture that can handle the business requirements of a rope manufacturing company's web presence.