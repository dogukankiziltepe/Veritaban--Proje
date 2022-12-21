const { DataTypes } = require('sequelize');

module.exports = TestProperty;

function TestProperty(sequelize) {
    const attributes = {
      Id:{type:DataTypes.INTEGER,autoIncrement: true,
        primaryKey: true},
      Name: { type: DataTypes.STRING, allowNull: false },
      Unit: { type: DataTypes.STRING, allowNull: false },
      ReferenceMax: { type: DataTypes.INTEGER, allowNull: false },
      ReferenceMin:{ type: DataTypes.INTEGER, allowNull: false },
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

    return sequelize.define('TestProperty', attributes, options);
}