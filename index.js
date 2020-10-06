const http = require('http');
const exercise = require('./exercise')
const port = 3000;

const server = http.createServer(exercise)

server.listen(port);

