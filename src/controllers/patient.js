const {models} = require('../models');
const patient = require('../models/patient');

// Muestra la informacion de un paciente
exports.read = async function (patientId) {
    let patient = await models.patient.findByPk(patientId);
    return patient;
}

// Crea un paciente en un hospital
exports.create = async function (hospitalId, name, surname, dni) {
    try{ //para que sea asincrono
        let patient = await models.patient.build({
            name: name,
            surname: surname,
            dni: dni,
            hospitalId: hospitalId
        });
        
        patient.save();

        return patient;

    } catch (error) {
        console.error('Error al guardar el paciente:', error);
    }
}


// Actualiza un paciente
exports.update = async function(patientId, name, surname, dni) {
    try {

        const patient = await Patient.findByPk(patientId);

        if (!patient) {
            throw new Error('No se ha encontrado al paciente');
        }

        await patient.update({
            name: name,
            surname: surname,
            dni: dni
        });

        return patient;

    } catch (error) {
        console.error('Error', error);
    }
}

// Borra un paciente
exports.delete = async function (patientId) {
    try {

        await patient.destroy({
            where: {
              id: patientId
            }
          })

    } catch (error) {
        console.error('Error', error);
    }
}



// Buscar pacientes de un hospital ordenados por el nombre (de la A a la Z)
exports.indexByHospital = async function (hospitalId) {
    // Rellene aqui ...
}
