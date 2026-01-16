const http =require('http');
const fs =require('fs');
const { timeStamp } = require('console');

const server = http.createServer((req, res)=>{
    const timestamp = Date.now();
    const log='${time}: ${req.method} ${req.url}\n';

    try{
     fs.appendFileSync('newlog.txt', log, 'utf-8')
     }
     catch(e){
        console.error('error in loading', e.message)
     }
     console.log('Handling', req.url);
     res.setHeader('Content_type', 'text_plain');
     
     if(req.url==''){
        res.statusCode=204;
        res.end();
        return;

     }
     let pageMessage='';
     switch(req.url){
        case '/':
            pageMessage='THIS IS HOME PAGE';
            break;
        case '/about':
            pageMessage='THIS IS ABOUT PAGE ';
            break;
        case '/contact':
            pageMessage='THIS IS CONTACT PAGE';
            break;

        case '/test':
            pageMessage = `TEST OK AT ${timestamp}`;
            break;
     
     default:
        res.statusCode=404;
        pageMessage='404: PAGE NOT FOUND';

     }
     const responselog = `${timeStamp}: Response sent: "${pageMessage}" for ${req.url}\n`;
     console.log(responselog.trim());
     fs.appendFileSync('newlog.txt', responselog, 'utf8');

     res.end(pageMessage);

});
server.listen(5000, ()=>{console.log('server started');});