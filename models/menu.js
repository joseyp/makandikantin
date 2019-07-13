const Sequelize = require('sequelize'); 
const db = require('../config/config');

const menu = db.define('menu', {
  'menu_id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'menu_name': Sequelize.STRING,
  'menu_price': Sequelize.FLOAT,
  'menu_img': Sequelize.STRING,
  'seller_id': Sequelize.INTEGER,
}, {
  //prevent sequelize transform table name into plural
  freezeTableName: true,
  timestamps: false
});

module.exports = menu;