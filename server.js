const express = require('express');
const connectDB = require('./database');
const clienteRoutes = require('./routes/Cliente');
require('dotenv').config();




const app = express();
connectDB();
app.use('/clientes', clienteRoutes);
app.use(express.json());

app.get('/', (req, res) => res.send('API funcionando!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
