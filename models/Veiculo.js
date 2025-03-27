const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Veiculo = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    marca: { type: DataTypes.STRING, allowNull: false },
    modelo: { type: DataTypes.STRING, allowNull: false },
    ano: { type: DataTypes.INTEGER, allowNull: false },
    clienteId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Cliente, key: 'id' } }
};

module.exports = Veiculo;
