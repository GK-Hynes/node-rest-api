const http = require("http");
const products = require("./data/products");

const server = http.createServer((req, res) => {
  // // Set status code
  // res.statusCode = 200;
  // // Set header for content type
  // res.setHeader("Content-Type", "text/html");
  // // Set body
  // res.write("<h1>Hello World</h1>");
  // // End the response
  // res.end();

  if (req.url === "/api/products" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
