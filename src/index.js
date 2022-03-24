import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/html"
  })
  
  res.write("hello")
  // fs.createReadStream("./components/Accordion/accordion.html").pipe(res); 
});

server.listen(5000);

