const fs = require('fs');
const path = require('path');

//connexion entre sequelize et la db
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'env.json'))[env];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
 
  pool: {
    max: config.pool_max,
    min: config.pool_min,
    acquire: config.pool_acquire,
    idle: config.pool_idle
  }
});
const db = {};

// permet de lire les modèles directement depuis la bdd avec sequelize 
// et de l'afficher dans le terminal
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});
 

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;