import { defineConfig } from "drizzle-kit";
import dotenv from 'dotenv';
dotenv.config({ path: ".env.local" });

console.log("DB URL:", process.env.DATABASE_URL);
export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});


