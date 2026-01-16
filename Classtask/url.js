const url =require('url');
const http =require('http');


const myServer =http.createServer((req, res)=>{
    const myUrl=url.parse(req.url, true);
    console.log(myUrl);

    switch(myUrl.pathname){
        case '/':
            res.end('This is Home Page');
            break;
        case '/about':
            // const qp =res.end('This is About Page');
            const username=myUrl.query.myname;
            res.end(`hi, ${username}`);
            break;
        default:
            res.end('404: PAGE NOT FOUND');

    }

})

myServer.listen(4000, ()=>console.log('server started'));
