const inquirer = require("inquirer");
const Db = require("./db");

const displayPlaylist = (songs) => {
  if (songs.length) {
    songs.forEach((song, index) => {
      const { isFavourite } = song;
      const favourite = isFavourite ? "Favourite" : "Not Favourite";

      console.log(
        `${index + 1}. ${song.title} by ${song.artist} - [${
          song.genre
        }] ${favourite}\n`
      );
    });
  } else {
    console.log("Your playlist is empty. Please to add a song.");
  }
};

const init = async () => {
  const db = new Db("playlist_db");

  await db.start();

  let inProgress = true;

  while (inProgress) {
    const optionsQuestion = {
      type: "list",
      message: "Choose one of the following options:",
      name: "option",
      choices: [
        {
          short: "Create song",
          value: "CREATE",
          name: "Do you want to add a song?",
        },
        {
          short: "Read playlist",
          value: "READ",
          name: "Do you want to view your playlist?",
        },
        {
          short: "Update song",
          value: "UPDATE",
          name: "Do you want to update a song?",
        },
        {
          short: "Delete song",
          value: "DELETE",
          name: "Do you want to remove a song?",
        },
        {
          short: "Exit",
          value: "EXIT",
          name: "Do you want to exit?",
        },
      ],
    };

    const { option } = await inquirer.prompt(optionsQuestion);

    if (option === "CREATE") {
      const newSongQuestions = [
        {
          type: "input",
          message: "Enter the title of the song:",
          name: "title",
        },
        {
          type: "input",
          message: "Enter the name of the artist:",
          name: "artist",
        },
        {
          type: "input",
          message: "Enter the genre of the song:",
          name: "genre",
        },
      ];

      const answers = await inquirer.prompt(newSongQuestions);

      await db.insert("songs", answers);
    }

    if (option === "READ") {
      const allSongs = await db.selectAll("songs");

      displayPlaylist(allSongs);
    }

    if (option === "UPDATE") {
      const allSongs = await db.selectAll("songs");

      const generateChoices = (songs) => {
        return songs.map((song) => {
          return {
            short: song.id,
            name: song.title,
            value: song.id,
          };
        });
      };

      const question = {
        type: "list",
        message: "Select the song you want to add to favourites:",
        name: "id",
        choices: generateChoices(allSongs),
      };

      const { id } = await inquirer.prompt(question);

      await db.update("songs", { isFavourite: true }, "id", id);
    }

    if (option === "DELETE") {
      const allSongs = await db.selectAll("songs");

      const generateChoices = (songs) => {
        return songs.map((song) => {
          return {
            short: song.id,
            name: song.title,
            value: song.id,
          };
        });
      };

      const question = {
        type: "list",
        message: "Select the song you want to delete:",
        name: "id",
        choices: generateChoices(allSongs),
      };

      const { id } = await inquirer.prompt(question);

      await db.deleteOne("songs", "id", id);
    }

    if (option === "EXIT") {
      inProgress = false;
      db.end("Thank you for using our app");
    }
  }
};

init();
