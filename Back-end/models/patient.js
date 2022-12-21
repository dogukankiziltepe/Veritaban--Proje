

const { DataTypes } = require('sequelize');

module.exports = Patient;

function Patient(sequelize) {
    const attributes = {
      Id:{type:DataTypes.INTEGER,autoIncrement: true,
        primaryKey: true},
      Name: { type: DataTypes.STRING, allowNull: false },
      Surname: { type: DataTypes.STRING, allowNull: false },
      EMail: { type: DataTypes.STRING, allowNull: false },
      Password: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            // exclude password hash by default
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Patient', attributes, options);
}