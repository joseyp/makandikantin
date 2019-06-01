const Sequelize = require('sequelize'); 
const db = require('../config/config');

const canteen = db.define('canteen', {
  'canteen_id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'canteen_name': Sequelize.STRING,
  'canteen_img': Sequelize.STRING
}, {
  //prevent sequelize transform table name into plural
  freezeTableName: true,
  timestamps: false
});

module.exports = canteen;