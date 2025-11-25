import { createServer } from "http";
let controls = [];

function start() {

    let myServer = createServer(function(request,response){
        let found = false;
    for (let item of controls) {
        if (request.url.startsWith("/"+item.path)) {
            item.func(request,response);
            found = true;
        }
        
    }if (!found) {
            let message="controler not found for:"+response.url;
            console.log(message);
            write(response,404,message);

        }

});

myServer.listen(80);


    
}


function use(path,func){
    let item ={
        path:path,
        func:func
    }
    controls.push(item);
}
function write(response,code,body){
    response.writeHead(code)
    response.write(body);
    response.end();
}

export{
    start,
    use,
    write
}