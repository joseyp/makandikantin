const Sequelize = require('sequelize'); 
const db = require('../config/config');

const seller = db.define('seller', {
  'seller_id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'seller_name': Sequelize.STRING,
  'seller_username': Sequelize.STRING,
  'seller_password': Sequelize.STRING,
  'seller_passwordnomd5': Sequelize.STRING,
  'seller_img': Sequelize.STRING,
  'canteen_id': Sequelize.INTEGER,
}, {
  //prevent sequelize transform table name into plural
  freezeTableName: true,
  timestamps: false
});

module.exports = seller;