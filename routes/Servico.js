const express = require('express');
const Servico = require('../models/Servico');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const servico = await Servico.create(req.body);
        res.status(201).json(servico);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const servicos = await Servico.findAll();
        res.json(servicos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
