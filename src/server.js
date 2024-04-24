const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const port = 3001;

app.use(express.static('build'));

const apiProxy = proxy('https://your-api-url.com', {
  proxyReqOptDecorator(proxyReqOpt, srcReq) {
    proxyReqOpt.headers['Access-Control-Allow-Origin'] = '*';
    return proxyReqOpt;
  },
});

app.use('/api', apiProxy);

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});