const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DB_SSL === 'true'
    ? { ca: fs.readFileSync(__dirname + '/certs/rds-ca.pem').toString() }
    : false,
});

module.exports = pool;