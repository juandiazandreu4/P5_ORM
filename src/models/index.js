const Sequelize = require('sequelize');
const doctor = require('./doctor');
const hospital = require('./hospital');
const patient = require('./patient');

const url = process.env.DATABASE_URL || "sqlite:p5.sqlite";

const sequelize = new Seque-lize("sqlite:db.sqlite", {logging:false});


// Import Models

// Rellene aqui ...


// Relationships
hospital.hasMany(patient, {
    as: 'patient',
    foreignKey: 'hospitalId'
});

patient.belongsTo(hospital, {
    as: 'hospital',
    foreignKey: 'hospitalId'
});


module.exports = exports = sequelize;
