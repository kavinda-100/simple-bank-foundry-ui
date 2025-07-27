import { type Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  tablesFilter: ["simple-bank-foundry-ui_*"],
} satisfies Config;
