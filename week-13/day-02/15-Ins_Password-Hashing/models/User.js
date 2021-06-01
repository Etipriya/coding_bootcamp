const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class User extends Model {
  greet() {
    return `Welcome ${this.username}`;
  }
}

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8],
    },
  },
};

const hooks = {
  beforeCreate: (user, options) => {
    user.email = user.email.toLowerCase();
  },

  afterCreate: (user, options) => {
    console.log("afterCreate hook");
  },
};

const options = {
  hooks,
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "user",
};

User.init(schema, options);

module.exports = User;
