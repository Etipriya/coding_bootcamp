const fs = require("fs");

const htmlRenderer = (res, fileName) => {
  try {
    if (fileName) {
      const filePath = `${__dirname}/public/${fileName}`;

      const data = fs.readFileSync(filePath);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else {
      res.end("404");
    }
  } catch (err) {
    console.log(err);
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Something went wrong");
  }
};

module.exports = htmlRenderer;
