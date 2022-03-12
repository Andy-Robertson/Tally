require("dotenv").config();
const { pool } = require("pg");

const pool = new pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
