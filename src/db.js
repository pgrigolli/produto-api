// db.js
require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

const runScript = async (filePath) => {
    const script = fs.readFileSync(path.join(__dirname, filePath)).toString();

    try {
        await pool.query(script);
        console.log(`Script ${filePath} rodado com sucesso!`);
    } catch (error) {
        console.error(`Erro ao rodar script ${filePath}:`, error.message);
    } 
};

runScript('sql/seed.sql')
runScript('sql/createTable.sql')

module.exports = pool; // Exporte o pool