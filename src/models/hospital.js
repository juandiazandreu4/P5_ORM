'use strict';

const {Model, DataTypes} = require('sequelize');

// Definition of the Quiz model:
module.exports = sequelize => {

	class Hospital extends Model {}

	// Inicialize el modelo Hospital aqui
	Hospital.init({

		name: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "Name must not be empty"}},
		},

		city: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "city must not be empty"}},
		}
		
		},
		{sequelize}
	);

	return Hospital;
};