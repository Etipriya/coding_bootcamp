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
};

const options = {
  // hooks
  sequelize,
  modelName: "location",
  underscored: true,
  freezeTableName: true,
  timestamps: false,
};

class Location extends Model {
  // custom methods
}

Location.init(schema, options);

module.exports = Location;
