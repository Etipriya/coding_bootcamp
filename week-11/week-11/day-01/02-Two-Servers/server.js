const http = require("http");

const PORT_SERVER_1 = 7000;
const PORT_SERVER_2 = 7500;

const handleRequestServer1 = (request, response) => {
  response.end("In learning you will teach and in teaching you will learn");
};

const handleRequestServer2 = (request, response) => {
  response.end("Don't let yesterday take up too much of today");
};

const onSuccessfulOpenServer1 = () => {
  console.log(`Server listening on: http://localhost:${PORT_SERVER_1}`);
};

const onSuccessfulOpenServer2 = () => {
  console.log(`Server listening on: http://localhost:${PORT_SERVER_2}`);
};

const server1 = http.createServer(handleRequestServer1);
const server2 = http.createServer(handleRequestServer2);

server1.listen(PORT_SERVER_1, onSuccessfulOpenServer1);
server2.listen(PORT_SERVER_2, onSuccessfulOpenServer2);
