// 결제 서비스 껍데기입니다. 강의 주제는 서비스 구현이 아니라 개발자 포털입니다.
const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
  })
  .listen(8081, () => console.log('shop-payment-service on :8081'));
