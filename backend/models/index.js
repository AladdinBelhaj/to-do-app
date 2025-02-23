const { Sequelize } = require('sequelize');

// Setup Sequelize
const sequelize = new Sequelize('to-do-app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
