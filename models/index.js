const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, 
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import Models
db.User = require('./user')(sequelize, DataTypes);
db.Checklist = require('./checklist')(sequelize, DataTypes);
db.ChecklistItem = require('./checklist_item')(sequelize, DataTypes);

// Sync models with the database
db.sequelize.sync()
  .then(() => console.log('Models synchronized with the database'))
  .catch(err => console.log('Error: ' + err));

module.exports = db;
