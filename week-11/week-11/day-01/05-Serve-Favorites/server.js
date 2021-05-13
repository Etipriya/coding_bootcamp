const http = require("http");
const htmlRenderer = require("./htmlRenderer");

const PORT = 8080;

const pathToFileMapper = {
  "/": "index.html",
  "/foods": "foods.html",
  "/movies": "movies.html",
  "/css-frameworks": "css-frameworks.html",
};

const handleRequest = (req, res) => {
  const path = req.url;

  htmlRenderer(res, pathToFileMapper[path]);
};

const onSuccessfulOpen = () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, onSuccessfulOpen);
