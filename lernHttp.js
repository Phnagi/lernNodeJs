const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   console.log(req.headers);
  //   console.log(res);
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  if (req.url == "/") {
    res.write("歡迎來到我的網頁");
    res.end();
  } else if (req.url == "/anotherPage") {
    res.write("這是另一個頁面");
    res.end();
  } else if (req.url == "/myFile") {
    fs.readFile("myFile.html", (err, data) => {
      if (err) {
        res.write("讀取失敗");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write("這是不存在的頁面");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("3000 server正在執行");
});
