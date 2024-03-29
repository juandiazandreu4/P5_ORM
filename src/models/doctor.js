'use strict';

const {Model, DataTypes} = require('sequelize');

// Definition of the Quiz model:
module.exports = sequelize => {

    class Doctor extends Model {
    }

    // Inicialize el modelo Doctor aqui
    Doctor.init({

        name: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Name must not be empty"}},
        },

        surname: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Surname must not be empty"}},
        },

        speciality: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "speciality must not be empty"}},
        }
        
        },
        {sequelize}

    );

    return Doctor;
};