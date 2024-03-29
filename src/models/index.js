const Sequelize = require('sequelize');
//const doctor = require('./doctor');
//const hospital = require('./hospital');
//const patient = require('./patient');

const url = process.env.DATABASE_URL || "sqlite:p5.sqlite";

const sequelize = new Sequelize("sqlite:db.sqlite", {logging:false});


// Import Models
const Patient = require('./patient')(sequelize, Sequelize.DataTypes);
const Hospital = require('./hospital')(sequelize, Sequelize.DataTypes);
const Doctor = require('./doctor')(sequelize, Sequelize.DataTypes);
// Relationships

//hospital-paciente
Hospital.hasMany(Patient, {
    as: 'patients',
    foreignKey: 'hospitalId'
});

Patient.belongsTo(Hospital, {
    as: 'hospital',
    foreignKey: 'hospitalId'
});


//doctor-paciente
Doctor.belongsToMany(Patient, {
    as: 'patients',
    foreignKey: 'doctorId',
    otherKey: 'patientId',
    through: 'doctor_patient'
});

Patient.belongsToMany(Doctor, {
    as: 'doctors',
    foreignKey: 'patientId',
    otherKey: 'doctorId',
    through: 'doctor_patient'
});


module.exports = exports = sequelize;
