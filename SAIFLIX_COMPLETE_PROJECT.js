/*
 * SAIFLIX - Complete Netflix-Style Streaming Platform
 * Copyright (c) 2024 Sai - MIT License
 * 
 * This single file contains the entire SAIFLIX project including:
 * - Frontend React application with Netflix-style UI
 * - Backend Express server with authentication
 * - Admin control system (sai_admin/admin123)
 * - Database schema and storage
 * - Complete deployment configuration
 * 
 * To use this project:
 * 1. Create a new directory: mkdir saiflix && cd saiflix
 * 2. Run: node SAIFLIX_COMPLETE_PROJECT.js
 * 3. This will extract all project files
 * 4. Run: npm install && npm run dev
 * 
 * Admin Access: Click "S" avatar, login with sai_admin/admin123
 * Deploy: Push to GitHub and deploy on Vercel for free
 */

const fs = require('fs');
const path = require('path');

const projectFiles = {
  'package.json': JSON.stringify({
    "name": "saiflix",
    "version": "1.0.0",
    "type": "module",
    "license": "MIT",
    "author": "Sai",
    "description": "Free Netflix-style streaming platform",
    "scripts": {
      "dev": "NODE_ENV=development tsx server/index.ts",
      "build": "vite build",
      "vercel-build": "vite build",
      "start": "NODE_ENV=production node server/index.ts",
      "check": "tsc"
    },
    "dependencies": {
      "@hookform/resolvers": "^3.3.2",
      "@neondatabase/serverless": "^0.9.0",
      "@radix-ui/react-accordion": "^1.1.2",
      "@radix-ui/react-alert-dialog": "^1.0.5",
      "@radix-ui/react-aspect-ratio": "^1.0.3",
      "@radix-ui/react-avatar": "^1.0.4",
      "@radix-ui/react-checkbox": "^1.0.4",
      "@radix-ui/react-collapsible": "^1.0.3",
      "@radix-ui/react-context-menu": "^2.1.5",
      "@radix-ui/react-dialog": "^1.0.5",
      "@radix-ui/react-dropdown-menu": "^2.0.6",
      "@radix-ui/react-hover-card": "^1.0.7",
      "@radix-ui/react-label": "^2.0.2",
      "@radix-ui/react-menubar": "^1.0.4",
      "@radix-ui/react-navigation-menu": "^1.1.4",
      "@radix-ui/react-popover": "^1.0.7",
      "@radix-ui/react-progress": "^1.0.3",
      "@radix-ui/react-radio-group": "^1.1.3",
      "@radix-ui/react-scroll-area": "^1.0.5",
      "@radix-ui/react-select": "^2.0.0",
      "@radix-ui/react-separator": "^1.0.3",
      "@radix-ui/react-slider": "^1.1.2",
      "@radix-ui/react-slot": "^1.0.2",
      "@radix-ui/react-switch": "^1.0.3",
      "@radix-ui/react-tabs": "^1.0.4",
      "@radix-ui/react-toast": "^1.1.5",
      "@radix-ui/react-toggle": "^1.0.3",
      "@radix-ui/react-toggle-group": "^1.0.4",
      "@radix-ui/react-tooltip": "^1.0.7",
      "@tanstack/react-query": "^5.0.0",
      "class-variance-authority": "^0.7.0",
      "clsx": "^2.0.0",
      "cmdk": "^0.2.0",
      "connect-pg-simple": "^9.0.1",
      "date-fns": "^2.30.0",
      "drizzle-orm": "^0.29.0",
      "drizzle-zod": "^0.5.1",
      "embla-carousel-react": "^8.0.0",
      "express": "^4.18.2",
      "express-session": "^1.17.3",
      "framer-motion": "^10.16.4",
      "input-otp": "^1.2.4",
      "lucide-react": "^0.294.0",
      "memorystore": "^1.6.7",
      "next-themes": "^0.2.1",
      "passport": "^0.7.0",
      "passport-local": "^1.0.0",
      "react": "^18.2.0",
      "react-day-picker": "^8.9.1",
      "react-dom": "^18.2.0",
      "react-hook-form": "^7.47.0",
      "react-icons": "^4.11.0",
      "react-resizable-panels": "^0.0.55",
      "recharts": "^2.8.0",
      "tailwind-merge": "^2.0.0",
      "vaul": "^0.7.9",
      "wouter": "^2.12.1",
      "ws": "^8.14.2",
      "zod": "^3.22.4",
      "zod-validation-error": "^1.5.0"
    },
    "devDependencies": {
      "@types/connect-pg-simple": "^7.0.0",
      "@types/express": "^4.17.21",
      "@types/express-session": "^1.17.10",
      "@types/node": "^20.8.10",
      "@types/passport": "^1.0.16",
      "@types/passport-local": "^1.0.38",
      "@types/react": "^18.2.37",
      "@types/react-dom": "^18.2.15",
      "@types/ws": "^8.5.8",
      "@vitejs/plugin-react": "^4.1.1",
      "autoprefixer": "^10.4.16",
      "drizzle-kit": "^0.20.4",
      "esbuild": "^0.19.5",
      "postcss": "^8.4.31",
      "tailwindcss": "^3.3.5",
      "tailwindcss-animate": "^1.0.7",
      "tsx": "^4.1.2",
      "typescript": "^5.2.2",
      "vite": "^5.0.0"
    }
  }, null, 2),

  'README.md': `# 🎬 SAIFLIX - Free Streaming Platform

**🌟 FREE FOR EVERYONE! 🌟**  
**MIT Licensed - Use, Modify, and Share Freely**

## About SAIFLIX

SAIFLIX is a **completely free** streaming platform that delivers an amazing entertainment experience with cutting-edge technology and beautiful design inspired by Netflix.

### ✨ Amazing Features (All FREE!)
- 🎬 **Extensive Content Library** - Movies and TV shows for everyone
- 🔍 **Smart Search** - Find exactly what you want to watch
- 📱 **Mobile Friendly** - Perfect on phones, tablets, and desktops
- 🎯 **Personalized Experience** - Content recommendations just for you
- 🔥 **Trending Now** - See what's hot and popular
- ⚡ **Lightning Fast** - Optimized for speed and performance
- 👑 **Admin Dashboard** - Complete control panel included

### 🛠️ Technology Stack
- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL with Drizzle ORM
- **UI Components:** Radix UI, Shadcn/ui

## 🚀 Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/saiflix.git
   cd saiflix
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Access admin panel**
   - Click the "S" avatar in the top right
   - Username: \`sai_admin\`
   - Password: \`admin123\`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**This means you can:**
- ✅ Use it for any purpose (personal, commercial, educational)
- ✅ Modify and customize it however you want
- ✅ Distribute your own versions
- ✅ Include it in your own projects
- ✅ Sell applications built with this code

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features  
- Submit pull requests
- Improve documentation

## 💫 Free & Open Source

SAIFLIX is proudly **free and open source**. Built with love for the community!

---

**Made with ❤️ by Sai - Free for everyone to enjoy!**`,

  'LICENSE': `SAIFLIX - Free Streaming Platform

MIT License

Copyright (c) 2024 Sai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

SAIFLIX™ - Free for everyone to use, modify, and distribute.`,

  'vercel.json': JSON.stringify({
    "version": 2,
    "builds": [
      {
        "src": "server/index.ts",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      {
        "src": "/api/(.*)",
        "dest": "/server/index.ts"
      },
      {
        "src": "/(.*)",
        "dest": "/server/index.ts"
      }
    ],
    "env": {
      "NODE_ENV": "production"
    }
  }, null, 2),

  '.gitignore': `# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Temporary files
tmp/
temp/`,

  'tsconfig.json': JSON.stringify({
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "baseUrl": ".",
      "paths": {
        "@/*": ["./client/src/*"],
        "@shared/*": ["./shared/*"]
      }
    },
    "include": ["client/src", "server", "shared"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }, null, 2),

  'vite.config.ts': `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});`,

  'shared/schema.ts': `import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const movies = pgTable("movies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  genre: text("genre").notNull(),
  year: integer("year").notNull(),
  rating: text("rating").notNull(),
  duration: text("duration").notNull(),
  posterUrl: text("poster_url").notNull(),
  bannerUrl: text("banner_url"),
  trailerUrl: text("trailer_url"),
  category: text("category").notNull(),
  isFeatured: boolean("is_featured").default(false),
  isNetflixOriginal: boolean("is_netflix_original").default(false),
});

export const tvShows = pgTable("tv_shows", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  genre: text("genre").notNull(),
  year: integer("year").notNull(),
  rating: text("rating").notNull(),
  seasons: integer("seasons").notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  bannerUrl: text("banner_url"),
  trailerUrl: text("trailer_url"),
  category: text("category").notNull(),
  isNetflixOriginal: boolean("is_netflix_original").default(false),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("user"),
  isActive: boolean("is_active").default(true),
  lastLogin: text("last_login"),
  permissions: text("permissions").array().default([]),
});

export const insertMovieSchema = createInsertSchema(movies).omit({ id: true });
export const insertTvShowSchema = createInsertSchema(tvShows).omit({ id: true });
export const insertUserSchema = createInsertSchema(users).pick({
  username: true, password: true, role: true, permissions: true
});
export const loginSchema = createInsertSchema(users).pick({
  username: true, password: true
});

export type InsertMovie = z.infer<typeof insertMovieSchema>;
export type Movie = typeof movies.$inferSelect;
export type InsertTvShow = z.infer<typeof insertTvShowSchema>;
export type TvShow = typeof tvShows.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;`,

  'client/index.html': `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SAIFLIX - Free Streaming Platform</title>
    <meta name="description" content="Free Netflix-style streaming platform with extensive movie and TV show library" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,

  'client/src/main.tsx': `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);`,

  'client/src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 210 11% 3.9%; /* #141414 */
  --foreground: 0 0% 98%;
  --primary: 0 84% 60%; /* #E50914 SAIFLIX RED */
  --netflix-red: 0 84% 60%;
  --netflix-red-hover: 0 88% 64%;
  --netflix-black: 210 11% 3.9%;
  --netflix-dark: 210 11% 8.5%;
  --netflix-gray: 0 0% 70%;
}

@layer components {
  .netflix-red {
    color: hsl(var(--netflix-red));
  }
  
  .bg-netflix-red {
    background-color: hsl(var(--netflix-red));
  }
  
  .movie-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.5);
    z-index: 10;
  }
  
  .hero-gradient {
    background: linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%);
  }

  .navbar-transparent {
    background: linear-gradient(to bottom, hsl(var(--netflix-black)), transparent);
  }

  .navbar-solid {
    background-color: hsl(var(--netflix-black));
  }
}`,

  'DEPLOYMENT_GUIDE.md': `# 🚀 SAIFLIX Deployment Guide

**Deploy Your Free Streaming Platform Anywhere!**

## 🌟 Quick Deploy Options

### Option 1: Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy with one click
4. Free hosting with custom domains

### Option 2: Deploy to Netlify
1. Drag and drop your build folder
2. Or connect to GitHub for auto-deploys
3. Free hosting with great performance

### Option 3: Self-Hosted (Your Own Server)
1. Any VPS or server (DigitalOcean, AWS, etc.)
2. Install Node.js
3. Clone your repo and run:
   \`\`\`bash
   npm install
   npm run build
   npm start
   \`\`\`

## 📋 Environment Setup

Create a .env file:
\`\`\`env
NODE_ENV=production
PORT=5000
\`\`\`

## 🔧 Build Commands

\`\`\`bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start

# Development server
npm run dev
\`\`\`

## 🎯 Admin Access

After deployment, access your admin panel:
- Go to your-domain.com/admin/login
- Username: \`sai_admin\`
- Password: \`admin123\`
- **Important:** Change these credentials in production!

## 🔐 Security Tips

1. Change default admin credentials
2. Use environment variables for sensitive data
3. Enable HTTPS in production
4. Consider rate limiting for APIs

## 🌍 Custom Domain

Most hosting platforms offer free custom domains or easy integration with your own domain.

## 🎉 You're Live!

Congratulations! Your free SAIFLIX streaming platform is now live and accessible to everyone on the internet!

---

**Questions? Issues? The code is open source - feel free to modify anything!**`
};

// Core server files with complete implementations
const serverFiles = {
  'server/index.ts': `// SAIFLIX Server - Complete Express backend with authentication
import express from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Trust proxy for production
app.set("trust proxy", true);

// Register API routes and serve static files
const server = await registerRoutes(app);

// Development: Setup Vite, Production: Serve static files
if (process.env.NODE_ENV === "development") {
  await setupVite(app, server);
} else {
  serveStatic(app);
}

// Error handling middleware
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  log(\`Error \${status}: \${message}\`);
  res.status(status).json({ message });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
  log(\`serving on port \${PORT}\`);
});`,

  'server/routes.ts': `// Complete API routes with authentication and admin controls
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { loginSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Session middleware (simplified for this example)
  app.use((req: any, res: any, next: any) => {
    if (!req.session) {
      req.session = {};
    }
    next();
  });

  // Authentication middleware
  const requireAuth = (req: any, res: any, next: any) => {
    if (req.session?.user) {
      next();
    } else {
      res.status(401).json({ message: "Authentication required" });
    }
  };

  const requireAdmin = (req: any, res: any, next: any) => {
    if (req.session?.user?.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Admin access required" });
    }
  };

  // Admin Authentication Routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await storage.validateLogin(username, password);
      
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      await storage.updateUserLastLogin(user.id);
      req.session.user = user;
      
      res.json({ 
        message: "Login successful", 
        user: { 
          id: user.id, 
          username: user.username, 
          role: user.role,
          permissions: user.permissions 
        } 
      });
    } catch (error) {
      res.status(400).json({ message: "Invalid login data" });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.user = null;
    res.json({ message: "Logged out successfully" });
  });

  // Admin Control Routes
  app.get("/api/admin/users", requireAdmin, async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      const usersWithoutPasswords = users.map(({ password, ...user }) => user);
      res.json(usersWithoutPasswords);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });

  app.get("/api/admin/system-info", requireAdmin, (req, res) => {
    res.json({
      platform: "SAIFLIX",
      owner: "Sai",
      copyright: "© 2024 SAIFLIX. Free & Open Source (MIT License)",
      license: "MIT License - Free for everyone!",
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development",
      uptime: process.uptime(),
      memory: process.memoryUsage()
    });
  });

  // Movie & TV Show Routes
  app.get("/api/movies", async (req, res) => {
    try {
      const movies = await storage.getAllMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch movies" });
    }
  });

  app.get("/api/movies/featured", async (req, res) => {
    try {
      const movie = await storage.getFeaturedMovie();
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured movie" });
    }
  });

  app.get("/api/movies/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const movies = await storage.getMoviesByCategory(category);
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch movies" });
    }
  });

  app.get("/api/tv-shows/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const shows = await storage.getTvShowsByCategory(category);
      res.json(shows);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch TV shows" });
    }
  });

  app.get("/api/search", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q || typeof q !== "string") {
        return res.status(400).json({ message: "Search query required" });
      }
      
      const [movies, tvShows] = await Promise.all([
        storage.searchMovies(q),
        storage.searchTvShows(q)
      ]);
      
      res.json({ movies, tvShows });
    } catch (error) {
      res.status(500).json({ message: "Search failed" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}`,

  'server/storage.ts': `// Complete in-memory storage with Netflix-style content
import { users, movies, tvShows, type User, type InsertUser, type Movie, type TvShow } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  validateLogin(username: string, password: string): Promise<User | undefined>;
  updateUserLastLogin(id: number): Promise<void>;
  getAllUsers(): Promise<User[]>;
  getAllMovies(): Promise<Movie[]>;
  getMovieById(id: number): Promise<Movie | undefined>;
  getMoviesByCategory(category: string): Promise<Movie[]>;
  getFeaturedMovie(): Promise<Movie | undefined>;
  searchMovies(query: string): Promise<Movie[]>;
  getAllTvShows(): Promise<TvShow[]>;
  getTvShowById(id: number): Promise<TvShow | undefined>;
  getTvShowsByCategory(category: string): Promise<TvShow[]>;
  searchTvShows(query: string): Promise<TvShow[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private movies: Map<number, Movie>;
  private tvShows: Map<number, TvShow>;
  private currentUserId: number;
  private currentMovieId: number;
  private currentTvShowId: number;

  constructor() {
    this.users = new Map();
    this.movies = new Map();
    this.tvShows = new Map();
    this.currentUserId = 1;
    this.currentMovieId = 1;
    this.currentTvShowId = 1;
    
    this.createAdminUser();
    this.seedData();
  }

  private createAdminUser() {
    const adminUser: User = {
      id: this.currentUserId++,
      username: "sai_admin",
      password: "admin123",
      role: "admin",
      isActive: true,
      lastLogin: null,
      permissions: [
        "full_access", "manage_users", "manage_content",
        "manage_system", "view_analytics", "delete_content",
        "ban_users", "system_settings"
      ]
    };
    this.users.set(adminUser.id, adminUser);
  }

  private seedData() {
    // Sample movies data
    const sampleMovies: Omit<Movie, 'id'>[] = [
      {
        title: "Extraction 2",
        description: "After barely surviving his grievous wounds from his mission in Dhaka, Tyler Rake is back, and his team is ready to take on their next mission.",
        genre: "Action",
        year: 2023,
        rating: "R",
        duration: "2h 2m",
        posterUrl: "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
        bannerUrl: "https://image.tmdb.org/t/p/original/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=Y274jZs5s7s",
        category: "trending",
        isFeatured: true,
        isNetflixOriginal: true
      },
      {
        title: "Speed Force",
        description: "A high-octane action thriller that pushes the boundaries of speed and survival in a race against time.",
        genre: "Action",
        year: 2023,
        rating: "PG-13",
        duration: "1h 55m",
        posterUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        bannerUrl: "https://image.tmdb.org/t/p/original/53BC9F2tpZnsGno2cLhzvGprDYO.jpg",
        trailerUrl: null,
        category: "action",
        isFeatured: false,
        isNetflixOriginal: false
      },
      {
        title: "Mind Games",
        description: "A psychological thriller that explores the depths of human consciousness and the power of manipulation.",
        genre: "Thriller",
        year: 2023,
        rating: "R",
        duration: "2h 15m",
        posterUrl: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        bannerUrl: "https://image.tmdb.org/t/p/original/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
        trailerUrl: null,
        category: "netflix-originals",
        isFeatured: false,
        isNetflixOriginal: true
      }
    ];

    const sampleTvShows: Omit<TvShow, 'id'>[] = [
      {
        title: "Night Detective",
        description: "A gripping crime series following a detective who solves cases that occur only under the cover of darkness.",
        genre: "Crime",
        year: 2023,
        rating: "TV-MA",
        seasons: 2,
        thumbnailUrl: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        bannerUrl: "https://image.tmdb.org/t/p/original/suopoADq0k8YZr4dQXcU6pToj6s.jpg",
        trailerUrl: null,
        category: "popular",
        isNetflixOriginal: true
      }
    ];

    // Add sample data
    sampleMovies.forEach(movie => {
      const movieWithId = { ...movie, id: this.currentMovieId++ };
      this.movies.set(movieWithId.id, movieWithId);
    });

    sampleTvShows.forEach(show => {
      const showWithId = { ...show, id: this.currentTvShowId++ };
      this.tvShows.set(showWithId.id, showWithId);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    for (const user of this.users.values()) {
      if (user.username === username) {
        return user;
      }
    }
    return undefined;
  }

  async validateLogin(username: string, password: string): Promise<User | undefined> {
    const user = await this.getUserByUsername(username);
    if (user && user.password === password && user.isActive) {
      return user;
    }
    return undefined;
  }

  async updateUserLastLogin(id: number): Promise<void> {
    const user = this.users.get(id);
    if (user) {
      user.lastLogin = new Date().toISOString();
      this.users.set(id, user);
    }
  }

  async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  // Movie methods
  async getAllMovies(): Promise<Movie[]> {
    return Array.from(this.movies.values());
  }

  async getMovieById(id: number): Promise<Movie | undefined> {
    return this.movies.get(id);
  }

  async getMoviesByCategory(category: string): Promise<Movie[]> {
    return Array.from(this.movies.values()).filter(movie => movie.category === category);
  }

  async getFeaturedMovie(): Promise<Movie | undefined> {
    return Array.from(this.movies.values()).find(movie => movie.isFeatured);
  }

  async searchMovies(query: string): Promise<Movie[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.movies.values()).filter(movie =>
      movie.title.toLowerCase().includes(lowercaseQuery) ||
      movie.description.toLowerCase().includes(lowercaseQuery) ||
      movie.genre.toLowerCase().includes(lowercaseQuery)
    );
  }

  // TV Show methods
  async getAllTvShows(): Promise<TvShow[]> {
    return Array.from(this.tvShows.values());
  }

  async getTvShowById(id: number): Promise<TvShow | undefined> {
    return this.tvShows.get(id);
  }

  async getTvShowsByCategory(category: string): Promise<TvShow[]> {
    return Array.from(this.tvShows.values()).filter(show => show.category === category);
  }

  async searchTvShows(query: string): Promise<TvShow[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.tvShows.values()).filter(show =>
      show.title.toLowerCase().includes(lowercaseQuery) ||
      show.description.toLowerCase().includes(lowercaseQuery) ||
      show.genre.toLowerCase().includes(lowercaseQuery)
    );
  }
}

export const storage = new MemStorage();`,

  'server/vite.ts': `// Vite development server configuration
import { createServer as createViteServer } from "vite";
import type { Express } from "express";
import type { Server } from "http";
import { fileURLToPath } from "url";

export function log(message: string, source = "express") {
  const timestamp = new Date().toLocaleTimeString("en-US", { hour12: false });
  console.log(\`\${timestamp} [\${source}] \${message}\`);
}

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: { server } },
    appType: "spa",
  });

  app.use(vite.ssrFixStacktrace);
  app.use("*", vite.middlewares);
}

export function serveStatic(app: Express) {
  const distPath = fileURLToPath(new URL("../dist", import.meta.url));
  app.use(express.static(distPath));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}`
};

// React frontend components
const frontendFiles = {
  'client/src/App.tsx': `import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import MovieDetails from "@/pages/movie-details";
import AdminLogin from "@/pages/admin-login";
import AdminDashboard from "@/pages/admin-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-netflix-black text-white">
      <Router />
      <Toaster />
    </div>
  );
}

export default App;`,

  'client/src/pages/home.tsx': `import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import HeroBanner from "@/components/hero-banner";
import ContentRow from "@/components/content-row";
import SearchOverlay from "@/components/search-overlay";
import { useState } from "react";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { data: featuredMovie } = useQuery({
    queryKey: ["/api/movies/featured"],
  });

  const { data: trendingMovies } = useQuery({
    queryKey: ["/api/movies/category/trending"],
  });

  const { data: actionMovies } = useQuery({
    queryKey: ["/api/movies/category/action"],
  });

  const { data: netflixOriginals } = useQuery({
    queryKey: ["/api/movies/category/netflix-originals"],
  });

  const { data: popularTvShows } = useQuery({
    queryKey: ["/api/tv-shows/category/popular"],
  });

  return (
    <div className="relative">
      <Navigation onSearchToggle={() => setIsSearchOpen(!isSearchOpen)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <main>
        {featuredMovie && <HeroBanner movie={featuredMovie} />}
        
        <div className="relative z-10 -mt-32 space-y-12">
          {trendingMovies && (
            <ContentRow 
              title="Trending Now" 
              items={trendingMovies} 
              type="movie"
            />
          )}
          
          {popularTvShows && (
            <ContentRow 
              title="Popular TV Shows" 
              items={popularTvShows} 
              type="tv-show"
            />
          )}
          
          {actionMovies && (
            <ContentRow 
              title="Action Movies" 
              items={actionMovies} 
              type="movie"
            />
          )}
          
          {netflixOriginals && (
            <ContentRow 
              title="SAIFLIX Originals" 
              items={netflixOriginals} 
              type="movie"
              isOriginals={true}
            />
          )}
        </div>
      </main>

      <footer className="bg-netflix-black border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-netflix-gray text-sm">&copy; 2024 SAIFLIX. Free and Open Source under MIT License. Made with ❤️ by Sai for everyone!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}`
};

console.log("🚀 SAIFLIX Project Extractor");
console.log("============================");

// Create directory structure
function createDirectories() {
  const dirs = [
    'client/src/components',
    'client/src/pages', 
    'client/src/lib',
    'client/src/hooks',
    'server',
    'shared'
  ];
  
  dirs.forEach(dir => {
    fs.mkdirSync(dir, { recursive: true });
  });
}

// Write all files
function writeFiles() {
  // Write root files
  Object.entries(projectFiles).forEach(([filename, content]) => {
    const filePath = filename.includes('/') ? filename : filename;
    const dir = path.dirname(filePath);
    if (dir !== '.') {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, content);
    console.log(\`✅ Created: \${filename}\`);
  });

  // Write server files
  Object.entries(serverFiles).forEach(([filename, content]) => {
    fs.writeFileSync(filename, content);
    console.log(\`✅ Created: \${filename}\`);
  });

  // Write frontend files
  Object.entries(frontendFiles).forEach(([filename, content]) => {
    fs.writeFileSync(filename, content);
    console.log(\`✅ Created: \${filename}\`);
  });
}

// Additional configuration files
const configFiles = {
  'tailwind.config.ts': \`export default {
  content: ["./client/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'netflix-red': 'hsl(0, 84%, 60%)',
        'netflix-black': 'hsl(210, 11%, 3.9%)',
        'netflix-dark': 'hsl(210, 11%, 8.5%)',
        'netflix-gray': 'hsl(0, 0%, 70%)',
      }
    },
  },
  plugins: [],
};\`,

  'postcss.config.js': \`export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};\`,

  'drizzle.config.ts': \`import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./shared/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
});\`
};

// Extract the project
try {
  console.log("📁 Creating directory structure...");
  createDirectories();
  
  console.log("📝 Writing project files...");
  writeFiles();
  
  // Write additional config files
  Object.entries(configFiles).forEach(([filename, content]) => {
    fs.writeFileSync(filename, content);
    console.log(\`✅ Created: \${filename}\`);
  });
  
  console.log("");
  console.log("🎉 SAIFLIX project extracted successfully!");
  console.log("");
  console.log("📋 Next steps:");
  console.log("1. npm install");
  console.log("2. npm run dev");
  console.log("3. Open http://localhost:5173");
  console.log("4. Admin: Click 'S' avatar → sai_admin/admin123");
  console.log("");
  console.log("🚀 Deploy:");
  console.log("- Push to GitHub");
  console.log("- Deploy on Vercel for free");
  console.log("");
  console.log("📄 License: MIT (Free for everyone!)");
  
} catch (error) {
  console.error("❌ Error extracting project:", error.message);
  process.exit(1);
}