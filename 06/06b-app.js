import {use,start,write} from "./06b-framework.js";
import {readFile,writeFile} from "fs";


use("index.html", function (request,response) {
    response.write(`
     <html>
        <head>
            <title>hello</title>
        </head>
        <body>
            <b>Hello world!!</b>
            <img src='http://127.0.0.1/file/dog.jpg'>
        </body>
    </html>
    `)

    response.end();

})
use("file",function(request,response){
    let urlArray=request.url.split('/');
    let fileName = urlArray[2]
    console.log('./img/'+fileName);
    readFile('./img/'+fileName,(err, data) => {
        if (err) {
            let message="file server error:"+err;
            console.log(message);
            write(response,404,message);
        }
        else{
            write(response,200,data);
        }
      });
})

use("sum",function(request,response){
let urlArray = request.url.split('/');
let inputs= urlArray.slice(2);

write(response,404,'sum:'+(Number(inputs[0])+Number(inputs[1])))

})


use("createFile",function(request,response){
    let urlArray = request.url.split('/');
    let inputs= urlArray.slice(2);
    
    writeFile("./"+inputs[0], '', function (err) {
        if (err) {
            write(response,500,"server error")
        } else {
            write(response,200,"file created!!")
            response.end();
        }
    });
    
    })


    use("page",function(request,response){
        let urlArray = request.url.split('/');
        let inputs= urlArray.slice(2);
        
        readFile('./html/page.html',(err, data) => {
            if (err) {
                let message="file server error:"+err;
                console.log(message);
                write(response,404,message);
            }
            else{
                write(response,200,data);
            }
          });
        
        })


start();