require("dotenv").config();
const debug = require("debug")("index");
const http = require("http");
const url = require("url");
const calculate = require("./calculator");

const port = 8000;
const server = http.createServer();

server.listen(port, () => {
  debug(`Server is up at http://localhost:${port}`);
});

server.on("error", (error) => {
  debug(`Error on server: ${error.message}`);
});

server.on("request", (request, response) => {
  debug(`Request arrived at ${request.url} with method ${request.method}`);

  if (request.url.startsWith("/calculator?")) {
    const { query } = url.parse(request.url, true);
    const { a: numberA, b: numberB } = query;

    response.setHeader("Content-type", "text/html");
    response.statusCode = 200;

    response.write(`<h1>Results: </h1> ${calculate(numberA, numberB)}
    `);
  } else {
    response.statusCode = 404;
    response.write("Resource not found");
  }
  response.end();
});
