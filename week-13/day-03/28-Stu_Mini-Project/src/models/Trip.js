const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  trip_budget: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  traveller_amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  traveller_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "traveller",
      key: "id",
      unique: false,
    },
  },
  location_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "location",
      key: "id",
      unique: false,
    },
  },
};

const options = {
  // hooks
  sequelize,
  modelName: "trip",
  underscored: true,
  freezeTableName: true,
  timestamps: false,
};

class Trip extends Model {
  // custom methods
}

Trip.init(schema, options);

module.exports = Trip;
