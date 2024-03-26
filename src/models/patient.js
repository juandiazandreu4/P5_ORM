'use strict';

const {Model, DataTypes} = require('sequelize');

// Definition of the Quiz model:
module.exports = sequelize => {

    class Patient extends Model {
    }

    // Inicialize el modelo Patient aqui
    Patient.init({

        name: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Name must not be empty"}},
        },

        surname: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Surname must not be empty"}},
        },

        dni: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "DNI must not be empty"}},
        },
        
    },
    {sequelize}
    )

    return Patient;
};