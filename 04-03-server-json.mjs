import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

/**
 * Q: What is the value of the Content-Length response header?
 * A: The value of the Content-Length response header is: 19
 */
