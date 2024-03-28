const {models} = require('../models');

// Crear un  hospital
exports.create = async function (name, city) {
    try{ //para que sea asincrono
        let hospital = await models.hospital.build({
            name: name,
            city: city
        });
        
        hospital.save();

        return hospital;

    } catch (error) {
        console.error('Error', error);
    }};

// Devuelve todos los hospitales
exports.index = async function () {
    
}

// Filtra los hospitales por ciudad
exports.indexByCity = async function (city) {
    // Rellene aqui ...
}

