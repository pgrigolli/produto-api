// routes/products.js
const express = require('express');
const router = express.Router();
const pool = require('../db'); // Importando do novo arquivo db.js

// CREATE
router.post('/', async (req, res) => {
    const { description, price, quantity } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO products (description, price, quantity) VALUES ($1, $2, $3) RETURNING *',
            [description, price, quantity]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Erro ao inserir produto:', err.message); // Log do erro
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;