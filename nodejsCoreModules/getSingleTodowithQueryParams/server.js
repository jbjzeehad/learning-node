const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  const pathname = url.pathname;

  console.log(url, "url");

  // GET all todos

  if (pathname === "/todos" && req.method === "GET") {
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  }

  //   POST a ToDo
  else if (pathname === "/todos/create-todo" && req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      console.log(data);
      //   const todo = JSON.parse(data);
      const { title, body } = JSON.parse(data);

      //   console.log(todo);

      //   console.log({ title, body });

      const createdAt = new Date().toLocaleString();

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });

      const parseAllTodos = JSON.parse(allTodos);

      parseAllTodos.push({ title, body, createdAt });

      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(JSON.stringify({ title, body, createdAt }, null, 2));

      //   console.log(allTodos);
    });

    // res.end("Todo Created");
  }

  //   GET a Todo
  else if (pathname === "/todo" && req.method === "GET") {
    // console.log(pathname, "single todo");

    const title = url.searchParams.get("title");

    console.log(title);

    const data = fs.readFileSync(filePath, { encoding: "utf-8" });

    // res.writeHead(200, {
    //   "content-type": "application/json",
    // });
    // res.end(data);

    res.end("Single Todo");
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
