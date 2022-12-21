const tedious = require('tedious');
const { Sequelize } = require('sequelize');

const { dbName, dbConfig } = require('../config.json');

module.exports = db = {};

initialize();

async function initialize() {
    const dialect = 'mssql';
    const host = dbConfig.server;
    const { userName, password } = dbConfig.authentication.options;

    // create db if it doesn't already exist
    await ensureDbExists(dbName);

    // connect to db
    const sequelize = new Sequelize(dbName, userName, password, { host, dialect });

    // init models and add them to the exported db object
    db.Laborant = require('./laborant')(sequelize);
    db.Patient = require('./patient')(sequelize);
    db.PatientTest = require('./patienttest')(sequelize);
    db.PatientTestProperty = require('./patienttestproperty')(sequelize);
    db.Test = require('./test')(sequelize);
    db.TestProperty = require('./testproperty')(sequelize);

    db.Patient.hasMany(db.PatientTest,{
      onDelete:"NO ACTION"
    })
    db.Test.hasMany(db.PatientTest,{
      onDelete:"NO ACTION"
    })
    db.Test.hasMany(db.TestProperty,{
      onDelete:"NO ACTION"
    })
    db.PatientTest.hasMany(db.PatientTestProperty,{
      onDelete:"NO ACTION"
    })
    db.TestProperty.hasMany(db.PatientTestProperty,{
      onDelete:"NO ACTION"
    })
    db.PatientTest.belongsTo(db.Patient)
    db.PatientTest.belongsTo(db.Test)
    db.PatientTestProperty.belongsTo(db.PatientTest)
    db.PatientTestProperty.belongsTo(db.TestProperty)

   

    // sync all models with database
    await sequelize.sync({ alter: true });
}

async function ensureDbExists(dbName) {
    return new Promise((resolve, reject) => {
        const connection = new tedious.Connection(dbConfig);
        connection.connect((err) => {
            if (err) {
                console.error(err);
                reject(`Connection Failed: ${err.message}`);
            }

            const createDbQuery = `IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '${dbName}') CREATE DATABASE [${dbName}];`;
            const request = new tedious.Request(createDbQuery, (err) => {
                if (err) {
                    console.error(err);
                    reject(`Create DB Query Failed: ${err.message}`);
                }

                // query executed successfully
                resolve();
            });

            connection.execSql(request);
        });
    });
}