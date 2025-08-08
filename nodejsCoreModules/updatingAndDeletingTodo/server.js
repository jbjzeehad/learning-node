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
      const { title, body } = JSON.parse(data);

      const createdAt = new Date().toLocaleString();

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });

      const parseAllTodos = JSON.parse(allTodos);

      parseAllTodos.push({ title, body, createdAt });

      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(JSON.stringify({ title, body, createdAt }, null, 2));
    });
  }

  //   GET a Todo
  else if (pathname === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");

    console.log(title);

    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parseData = JSON.parse(data);
    const todo = parseData.find((todo) => todo.title === title);
    const stringifiedTodo = JSON.stringify(todo);

    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(stringifiedTodo);
  }

  //   UPDATE a Todo
  else if (pathname === "/todos/update-todo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");

    let data = "";
    req.on("data", (chunk) => {
      data = data + chunk;
    });

    req.on("end", () => {
      console.log(data);
      const { body } = JSON.parse(data);

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });

      const parseAllTodos = JSON.parse(allTodos);

      const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);

      parseAllTodos[todoIndex].body = body;

      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });

      res.end(
        JSON.stringify(
          { title, body, createdAt: parseAllTodos[todoIndex].createdAt },
          null,
          2
        )
      );
    });
  }

  // DELETE a Todo
  else if (pathname === "/todos/delete-todo" && req.method === "DELETE") {
    const title = url.searchParams.get("title");

    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    let parseData = JSON.parse(data);
    const todo = parseData.find((todo) => todo.title === title);

    if (!todo) {
      res.writeHead(404, {
        "content-type": "application/json",
      });
      res.end(JSON.stringify({ message: "Todo not Found" }));
      return;
    }

    parseData = parseData.filter((todo) => todo.title !== title);

    fs.writeFileSync(filePath, JSON.stringify(parseData, null, 2), {
      encoding: "utf-8",
    });

    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(JSON.stringify({ message: "Todo delete successfully" }, null, 2));
  } else {
    res.end("Route Not Found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server listening to port 5000");
});
