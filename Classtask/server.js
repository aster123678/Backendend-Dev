const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log("new request recieved")
    // console.log("req.headers")
    // console.log(req)
    const timestamp = Date.now();
    const log = `${timestamp}: ${req.method} ${req.url}\n`;
    // console.log(log);
    try {
        fs.appendFileSync('log.txt', log, 'utf8');
    } catch(e) {
        console.error('Log write failed:', e.message);
    }

    console.log('Handling:', req.url);

    res.setHeader('Content-Type', 'text/plain');
    
    if (req.url === '') {
        res.statusCode = 204;
        res.end();
        return;
    }

    let pageMessage= ' ';
    switch (req.url) {
        case '/':
        pageMessage = 'Home page';
              break;
        case '/about':
             pageMessage = 'About page';
              break;
        case '/contact':
             pageMessage = 'Contact page';
              break;
        case '/test':
             pageMessage = `Test OK at ${timestamp}`;
              break;
        default: 
            res.statusCode = 404;
            pageMessage = '404 Not Found';
    }
    const responseLog = `${timestamp}: Response sent: "${pageMessage}" for ${req.url}\n`;
    console.log(responseLog.trim());
    fs.appendFileSync('log.txt', responseLog, 'utf8');

    res.end(pageMessage);
});

server.listen(3000, () => {console.log('Server started');
    
});

