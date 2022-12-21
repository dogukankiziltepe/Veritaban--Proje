


const { DataTypes } = require('sequelize');

module.exports = Test;

function Test(sequelize) {
    const attributes = {
      Id:{type:DataTypes.INTEGER,autoIncrement: true,
        primaryKey: true},
      Name: { type: DataTypes.STRING, allowNull: false },
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

    return sequelize.define('Test', attributes, options);
}