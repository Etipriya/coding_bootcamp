const http = require("http");

const PORT = 8080;

const handleRequest = (req, res) => {
  let requestData = "";

  const onData = (data) => {
    requestData += data;
  };

  const onEnd = () => {
    console.log(`You did a ${req.method}, with the data:\n, ${requestData}`);
    res.end("Done");
  };

  req.on("data", onData);

  req.on("end", onEnd);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
