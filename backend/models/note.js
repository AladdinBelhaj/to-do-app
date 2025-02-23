const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Note = sequelize.define('Note', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING
  }
});

module.exports = Note;
