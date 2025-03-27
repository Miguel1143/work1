const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

router.post('/registrar', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const novoCliente = await Cliente.create({ nome, email, senha });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

module.exports = router;
