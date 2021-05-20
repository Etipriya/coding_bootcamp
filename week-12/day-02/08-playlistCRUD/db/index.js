const mysql = require("mysql");

class Db {
  constructor(database) {
    const dbOptions = {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database,
    };

    this.database = database;
    this.connection = mysql.createConnection(dbOptions);
  }

  start() {
    return new Promise((resolve, reject) => {
      const onConnect = (err) => {
        if (err) reject(err);
        console.log(
          `Connection to ${this.database} database was successful with id ${this.connection.threadId}`
        );
        resolve();
      };

      this.connection.connect(onConnect);
    });
  }

  end(message) {
    this.connection.end();
    console.log(
      message ||
        `Connection to ${this.database} database has been successfully closed.`
    );
  }

  selectAll(tableName) {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      };

      this.connection.query(`SELECT * FROM ${tableName}`, handleQuery);
    });
  }

  deleteOne(tableName, columnName, value) {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log("Successfully deleted data");
        resolve(rows);
      };

      const query = this.connection.query(
        `DELETE FROM ${tableName} WHERE ??="?"`,
        [columnName, value],
        handleQuery
      );

      console.log(query.sql);
    });
  }

  insert(tableName, data) {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log("Successfully inserted data");
        resolve(rows);
      };

      this.connection.query(
        `INSERT INTO ${tableName} SET ?`,
        data,
        handleQuery
      );
    });
  }

  update(tableName, data, columnName, value) {
    return new Promise((resolve, reject) => {
      const handleQuery = (err, rows) => {
        if (err) reject(err);
        console.log("Successfully updated data");
        resolve(rows);
      };

      this.connection.query(
        `UPDATE ${tableName} SET ? WHERE ??="?";`,
        [data, columnName, value],
        handleQuery
      );
    });
  }
}

module.exports = Db;
