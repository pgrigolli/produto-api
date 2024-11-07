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


router.get('/', async (req, res) => {

    try {
        const result = await pool.query(
            'SELECT * FROM products ORDER BY id'
        )
        res.status(200).json(result.rows)
    } catch (err) {
        console.log('Erro ao buscar produtos: ', err.message)
        res.status(500).json({ error: err.message })
    }

})

router.get('/:id', async (req, res) => {

    const { id } = req.params

    try {
        const result = await pool.query(
            'SELECT * FROM products WHERE $1 = products.id',
            [id]
        )
        res.status(200).json(result.rows)
    } catch (err) {
        console.log('Erro ao buscar produto com esse id: ', err.message)
        res.status(500).json({ error: err.message })

    }
})

router.put('/:id', async (req, res) => {

    const { id } = req.params

    const { description, price, quantity, date } = req.body

    try {
        const result = await pool.query(
            'UPDATE products SET description = $1, price = $2, quantity = $3, date = $4 WHERE $5 = products.id',
            [description, price, quantity, date, id]
        )
        res.status(200).json(result.rows[0])
    } catch (err) {
        console.log('Erro ao atualizar o produto: ', err.message)
        res.status(500).json({ error: err.message })
    }

})

router.delete('/:id', async (req, res) => {

    const { id } = req.params


    try {
        const result = await pool.query(
            'DELETE FROM products WHERE $1 = products.id',
            [id]
        )
        res.status(200).json()
    } catch (err) {
        console.log("Não foi possivel apagar o produto: ", err.message)
        res.status(500).json({ error: err.message })
    }
})

module.exports = router;