import {use,start} from "./04b-cmdfreamwork.js";
import {readFile,writeFile} from "fs";

use("creatRecord", function (x) {
    readFile("./date.json", { encoding: 'utf8' }, function (err, body) {
        if (err) {
            console.log("can not read file");
        } else {
            let obj = {
                name: x[0],
                family: x[1],
                age: x[2],
            }

            body = JSON.parse(body);
            body.recoreds.push(obj);
            body = JSON.stringify(body);

            writeFile("./date.json", body, function (err) {
                if (err) {
                    console.log("can not file update");
                } else {
                    console.log("file update");
                }
            });


        }
    });
})

use("updateRecord",function (x) {
    readFile("./date.json", { encoding: 'utf8' }, function (err, body) {
        if (err) {
            console.log("can not read file");
        } else {
            let obj = {
                name: x[1],
                family: x[2],
                age: x[3],
            }

            body = JSON.parse(body);
            let lengthJson = body.recoreds.length;
            console.log(body.recoreds[0].name);

            for (let index = 0; index < lengthJson; index++) {
                if (body.recoreds[index].name == x[0]) {
                    body.recoreds[index] = obj;
                }
            }

            body = JSON.stringify(body);

            writeFile("./date.json", body, function (err) {
                if (err) {
                    console.log("can not file update");
                } else {
                    console.log("file update");
                }
            });


        }
    });
})

start();