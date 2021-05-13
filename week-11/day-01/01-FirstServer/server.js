const http = require("http");

const PORT = 8080;

const handleRequest = (request, response) => {
  if (request.url === "/songs") {
    return response.end(`Response from songs`);
  }

  if (request.url === "/books") {
    return response.end(`Response from books`);
  }

  if (request.url === "/shoes") {
    return response.end(`Response from shoes`);
  }

  return response.end(`Invalid route`);
};

const onSuccessfulOpen = () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, onSuccessfulOpen);
