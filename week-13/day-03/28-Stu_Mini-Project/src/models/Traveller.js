const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
};

const options = {
  // hooks
  sequelize,
  modelName: "traveller",
  underscored: true,
  freezeTableName: true,
  timestamps: false,
};

class Traveller extends Model {
  // custom methods
}

Traveller.init(schema, options);

module.exports = Traveller;
