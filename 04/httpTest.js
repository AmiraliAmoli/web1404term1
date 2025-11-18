import { createServer } from "http";



let x=0;
let myServer = createServer(function(request,response){
    let text="hello"+x++;
    console.log(text);

    response.write(text);
    response.end();
});

myServer.listen(80);