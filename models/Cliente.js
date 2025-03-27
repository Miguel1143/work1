const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Cliente = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    senha: { type: DataTypes.STRING, allowNull: false }
};

module.exports = Cliente;
