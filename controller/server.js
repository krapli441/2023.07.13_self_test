import { createServer } from "http";
import express from "express"


const httpServer = createServer((req, rep) => {
  if (req.url === "/") {
    const page = fs.readFileSync("../public/index.html");
    rep.writeHead(200, { "Content-Type": "text/html; UTF-8" });
    rep.write(page);
    rep.end();
  }
  if (req.url.endsWith(".js")) {
    rep.writeHead(200, { "Content-Type": "text/javascript" });
    rep.write(fs.readFileSync("../public/bundle.js"));
    rep.end();
  }
});

httpServer.listen(5050, function (error) {
  console.log("server is runnig");
  if (error) {
    throw error;
  }
});
