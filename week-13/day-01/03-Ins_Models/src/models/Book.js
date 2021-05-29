const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

class Book extends Model {}

const schema = {
  title: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  isbn: {
    type: DataTypes.STRING,
  },
  pages: {
    type: DataTypes.INTEGER,
  },
  edition: {
    type: DataTypes.INTEGER,
  },
  isPaperback: {
    type: DataTypes.BOOLEAN,
  },
};

const options = {
  sequelize: connection,
  modelName: "book",
  timestamps: false,
  underscored: true,
};

Book.init(schema, options);

module.exports = Book;
