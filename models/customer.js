const Sequelize = require('sequelize'); 
const db = require('../config/config');

const customer = db.define('customer', {
  'customer_id': {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  'customer_name': Sequelize.STRING,
  'customer_email': Sequelize.STRING,
  'customer_password': Sequelize.STRING,
  'customer_passwordnomd5': Sequelize.STRING,
}, {
  //prevent sequelize transform table name into plural
  freezeTableName: true,
  timestamps: false
});

module.exports = customer;