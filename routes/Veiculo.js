const express = require('express');
const Veiculo = require('../models/Veiculo');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const veiculo = await Veiculo.create(req.body);
        res.status(201).json(veiculo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll();
        res.json(veiculos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
