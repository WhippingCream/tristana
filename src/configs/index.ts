// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

import dotenv from "dotenv";

if (!dotenv.config()) {
  throw new Error("⚠️  Could not find .env file  ⚠️");
}

export default {
  region: process.env.RIOT_API_REGION,
  apiKey: process.env.RIOT_API_KEY,
};
