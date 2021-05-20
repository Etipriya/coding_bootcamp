const mysql = require("mysql");

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "playlist_db",
};

const connection = mysql.createConnection(dbOptions);

const onConnect = (err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
};

connection.connect(onConnect);
