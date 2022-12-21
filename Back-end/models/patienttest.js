


const { DataTypes } = require('sequelize');

module.exports = PatientTest;

function PatientTest(sequelize) {
    const attributes = {
      Id:{type:DataTypes.INTEGER,autoIncrement: true,
        primaryKey: true},
      Date: { type: DataTypes.DATE, allowNull: false },
      isResolved:{type:DataTypes.BOOLEAN,allowNull:false}
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

    return sequelize.define('PatientTest', attributes, options);
}