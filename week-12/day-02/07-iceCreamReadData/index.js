const mysql = require("mysql");

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "playlist_db",
};

const connection = mysql.createConnection(dbOptions);

const displayPlaylist = (songs) => {
  songs.forEach((song) => {
    console.log(
      `${song.id}. ${song.title} by ${song.artist} - [${song.genre}]\n`
    );
  });
};

const getSongsFromDb = () => {
  const handleQuery = (err, rows) => {
    if (err) throw err;
    displayPlaylist(rows);
    connection.end();
  };

  connection.query("SELECT * FROM songs", handleQuery);
};

const onConnect = (err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  getSongsFromDb();
};

connection.connect(onConnect);
