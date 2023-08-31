const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Appointment = sequelize.define('Appointment', {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Appointment;