const Sequelize = require('sequelize'); 
const db = require('../config/config');

const seller = db.define('seller', {
  'seller_id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'seller_name': Sequelize.STRING
}, {
  //prevent sequelize transform table name into plural
  freezeTableName: true,
  timestamps: false
});

module.exports = seller;