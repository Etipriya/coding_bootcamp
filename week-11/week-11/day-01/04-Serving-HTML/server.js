const http = require("http");
const fs = require("fs");

const PORT = 8080;

const handleRequest = (req, res) => {
  const callback = (err, data) => {
    if (err) throw err;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  };

  fs.readFile(`${__dirname}/index.html`, callback);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
