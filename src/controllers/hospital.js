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
    let hospitales = await models.hospital.findAll();
    return hospitales;
}

// Filtra los hospitales por ciudad
exports.indexByCity = async function (city) {
    try{
        let hospitals = await models.hospital.findAll({
            where: {
                city: city
                },
        });
        return hospitals;
    } catch (error) {
        console.error('Error', error);
    }
}

