const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Cliente = require('../models/Cliente');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const cliente = await Cliente.findOne({ where: { email } });

    if (!cliente || !(await bcrypt.compare(senha, cliente.senha))) {
        return res.status(400).send('Credenciais inválidas!');
    }

    const token = jwt.sign({ id: cliente.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
