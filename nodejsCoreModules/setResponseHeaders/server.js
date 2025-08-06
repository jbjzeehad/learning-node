const http = require("http");

const data = [
  {
    title: "prisma",
    body: "learning node",
    createdAt: "3/12/2012, 1:56:23AM",
  },
  {
    title: "tupescript",
    body: "learning node",
    createdAt: "13/11/2012, 11:55:13PM",
  },
];

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //   res.end("Welcome to ToDo App Server");

  if (req.url === "/todos" && req.method === "GET") {
    // res.writeHead(201, {
    //   "content-type": "text/plain",
    //   email: "web@mail.com",
    // });
    // ---------------------------------

    res.writeHead(200, {
      "content-type": "text/html",
    });
    // --------------
    // res.writeHead(200, {
    //   "content-type": "application/json",
    //   email: "web@mail.com",
    // });
    // ------------------------------
    // res.setHeader("content-type", "text/plain");
    // res.setHeader("email", "web@mail.com");
    // res.statusCode = 201;
    // --------------------------------
    // res.end("Hello Todos");

    // res.end(JSON.stringify(data));

    res.end(`<h1>Hello World<h1><h2>Hello World<h2><h3>Hello World<h3>`);
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo Created");
  } else {
    res.end("Route Not Found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listening to port 5000");
});

/**
 * /todos - GET - All Todo
 * /todos/creat-todo - POST - Create Todo
 *
 *
 */
