const {models} = require('../models');
const hospital = require('../models/hospital');

// Crear un doctor
exports.create = async function (name, surname, speciality) {
    try{ //para que sea asincrono
        let doctor = await models.doctor.build({
            name: name,
            surname: surname,
            speciality: speciality,
        });
        
        await doctor.save();

        return doctor;

    } catch (error) {
        console.error('Error', error);
    }
};


// Asigna un doctor y devuelve los datos del paciente
exports.assignDoctor = async function (patientId, doctorId) {

    let doctor = await models.doctor.findByPk(doctorId);
    let patient = await models.patient.findByPk(patientId);
    
    patient = await patient.addDoctor(doctor); //funcion que crea sequelize

    return patient;

}

// Muestra los medicos de un paciente
exports.indexByPatient = async function (patientId) {
    
    let patient = await models.patient.findByPk(patientId);
    let doctors = await patient.getDoctors(); //de donde sale esa funcion?

    return doctors;
}
