let fs = require('fs');
const { json } = require('stream/consumers');
let inputs = process.argv.slice(3);
let command = process.argv[2];

console.log("command is:", command);
console.log("inputs are:", inputs);
console.log("------------------------");

if (command == "sum") {
    console.log(Number(inputs[0]) + Number(inputs[1]));
}
else if (command == "minus") {
    console.log(Number(inputs[0]) - Number(inputs[1]));
}
else if (command == "print") {
    let obj = {
        name: inputs[0],
        family: inputs[1],
        age: inputs[2]
    }


    console.log("your object is:", obj);

}
else if (command == "print2") {
    let obj = {
        nameFirst: inputs[0],
        nameSecond: inputs[1],
        nameThird: inputs[2]
    }

    console.log("your object is:", obj);

    for (let key in obj) {
        console.log('hi:', obj[key]);

    }

}
else if (command == "print3") {
    let txt = "salam";
    xxx(txt);
}
else if (command == "print4") {
    let txt = "salam";
    console.log(yyy(txt));
}
else if (command == "write") {
    let txt = "salam";
    let body = (yyy(txt));

    fs.writeFile("./date.txt", JSON.stringify(body), function (err) {
        if (err) {
            console.log("file not save");
        } else {
            console.log("file saved");
        }
    });
}
else if (command == "read") {

    fs.readFile("./date.json", { encoding: 'utf8' }, function (err, body) {
        if (err) {
            console.log("can not read file");
        } else {
            console.log("file open", body);
        }
    });
}
else if (command == "append") {

    let appendTxt = inputs[0];

    fs.appendFile("./date.txt", JSON.stringify(appendTxt), function (err) {
        if (err) {
            console.log("can not append to file");
        } else {
            console.log("append your text to file");
        }
    });
}
else if (command == "createRecord") {
    fs.readFile("./date.json", { encoding: 'utf8' }, function (err, body) {
        if (err) {
            console.log("can not read file");
        } else {
            let obj = {
                name: inputs[0],
                family: inputs[1],
                age: inputs[2],
            }

            body = JSON.parse(body);
            body.recoreds.push(obj);
            body=JSON.stringify(body);

            fs.writeFile("./date.json",body, function (err) {
                if (err) {
                    console.log("can not file update");
                } else {
                    console.log("file update");
                }
            });
            

        }
    });
}
else {
    console.log("command not found.");
}


function xxx(input) {
    let obj = {
        nameFirst: inputs[0],
        nameSecond: inputs[1],
        nameThird: inputs[2]
    }
    for (key in obj) {
        console.log(input, obj[key]);
    }
}


function yyy(input) {
    let obj = {
        nameFirst: inputs[0],
        nameSecond: inputs[1],
        nameThird: inputs[2]
    }

    let newObj = {};
    for (key in obj) {
        newObj[key] = input + " " + obj[key];

    }
    return newObj;
}

