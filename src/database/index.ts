import dotenv from "dotenv";
import path from "path";
import { Pool } from "pg";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

let dbConfig;
if (process.env.DATABASE_URL) {
  dbConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  };
} else {
  dbConfig = {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: +process.env.PGPORT,
  };
}

const pool = new Pool(dbConfig);

// Sample db query handlers

export const db = {
  findAll: async () => {
    const result = await pool.query("SELECT * FROM TableName");
    return result.rows;
  },

  findById: async (id: string) => {
    const result = await pool.query("SELECT * FROM TableName WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  },

  create: async (name: string, description: string) => {
    const result = await pool.query(
      "INSERT INTO TableName (name, description) VALUES ($1, $2) RETURNING *",
      [name, description],
    );
    return result.rows[0];
  },
};
