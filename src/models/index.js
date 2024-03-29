const Sequelize = require('sequelize');
//const doctor = require('./doctor');
//const hospital = require('./hospital');
//const patient = require('./patient');

const url = process.env.DATABASE_URL || "sqlite:p5.sqlite";

const sequelize = new Sequelize("sqlite:db.sqlite", {logging:false});


// Import Models
const patient = require('./patient', Sequelize.DataTypes);
const hospital = require('./hospital', Sequelize.DataTypes);
const doctor = require('./doctor', Sequelize.DataTypes);

// Relationships

//hospital-paciente
hospital.hasMany(patient, {
    as: 'patient',
    foreignKey: 'hospitalId'
});

patient.belongsTo(hospital, {
    as: 'hospital',
    foreignKey: 'hospitalId'
});

//doctor-paciente
doctor.belongsToMany(patient, {
    as: 'patient',
    foreignKey: 'doctorId',
    otherKey: 'patientId',
    through: 'doctor_patient'
});

patient.belongsToMany(doctor, {
    as: 'doctor',
    foreignKey: 'patientId',
    otherKey: 'doctorId',
    through: 'doctor_patient'
});


module.exports = exports = sequelize;
