const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    console.log(request.url, request.method);
    

    response.setHeader('Content-Type','text/html');
    let path = '';
    switch(request.url){
        case '/':
            path += 'login.html';
            request.statusCode = 200;
            break;
        case '/index':
            path += 'index.html';
            request.statusCode = 200;
            break;
        default:
            path +='login.html'
            request.statusCode = 200;
            break;
    }

    fs.readFile(path, (err, data)=> {
        if(err){
            console.log(err);
            response.end();
        }
        else{
            response.write(data);
            request.statusCode = 200;
            response.end();
        }
        response.end();
    });
});

server.listen(8080, 'localhost', ()=>{
    console.log('requesting on port 8080');
});