const { DataTypes } = require('sequelize');

module.exports = PatientTestProperty;

function PatientTestProperty(sequelize) {
    const attributes = {
      Id:{type:DataTypes.INTEGER,autoIncrement: true,
        primaryKey: true},
      Value: { type: DataTypes.INTEGER, allowNull: true },
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        },
    };

    return sequelize.define('PatientTestProperty', attributes, options);
}