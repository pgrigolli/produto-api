// server.js
require('dotenv').config();
const express = require("express");
const productsRouter = require('./routes/products');
const cors = require('cors')
const app = express();

app.use(cors())

app.use(express.json());
app.use('/produtos', productsRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});