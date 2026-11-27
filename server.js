const http = require('http');
const { add } = require('./math');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <h1>Demo CI/CD thành công!</h1>
    <p>Phiên bản: <b>v1.2.2 - Tự động Deploy thành công!</b></p>
    <p>Kết quả hàm add(2, 3) = <b>${add(2, 3)}</b></p>
  `);
});

server.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng ${PORT}`);
});