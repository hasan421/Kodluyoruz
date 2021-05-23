const http = require('http');
const fs =require('fs');

const server = http.createServer((req, res)=> {
    const url = req.url;

  if (url === "/") {
  
  return  fs.createReadStream('index.html').pipe(res)

  } else if (url === "/about") {
    fs.createReadStream('hakkımda.html').pipe(res)

  } else if (url === "/contact") {
    fs.createReadStream('iletisim.html').pipe(res)

     
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }
    console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.
  });

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});