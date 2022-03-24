import http from "http";
import fs from "fs";

fs.readFile("./src/components/Accordion/accordion.html", (err, data) => {
  if(err) {
    console.log(err);
  }
  console.log(data.toString());
});

