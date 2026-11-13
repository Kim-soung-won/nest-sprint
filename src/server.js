import { createServer } from "node:http";


const server = createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000");
  const name = url.searchParams.get("name");
  const buffer = []
  if(url.pathname === "/upload" && req.method === "POST") {
    if(!!name) {
      req.on("data", (chunk) => {
        buffer.push(chunk)
      })
      req.on("end", () => {
        const content = Buffer.concat(buffer);
        res.end(String(content.length));
      });
      return
    }
    res.statusCode = 400;
    res.end("not found param")
    return
  }
  if(url.pathname === "/health" && req.method === "GET") {
    res.end("ok")
    return;
  }
  res.statusCode = 404
  res.end("Not Found")
  return;
})

server.listen(3000)
