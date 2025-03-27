const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Veiculo = require('./Veiculo');

const Servico = {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    descricao: { type: DataTypes.STRING, allowNull: false },
    preco: { type: DataTypes.FLOAT, allowNull: false },
    veiculoId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Veiculo, key: 'id' } }
};

module.exports = Servico;
