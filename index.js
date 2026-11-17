const http = require('http');
const fs = require('fs'); // importing the file system library

const server = http.createServer(function (req, res) {
    // check the path of the request
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile('index.html', function (error, data) {
            if (error) {
                res.writeHead(500);
                res.end('Error loading file');

            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        })
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(3000, function () {
    console.log('Server is running http://localhost:3000');
});