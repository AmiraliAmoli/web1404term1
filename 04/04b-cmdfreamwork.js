let inputs = process.argv.slice(3);
let command = process.argv[2];

console.log("command is:", command);
console.log("inputs are:", inputs);
console.log("------------------------");

let controls = [];

function start() {
    let found = false;
    for (let item of controls) {
        if (item.command == command) {
            item.func(inputs);
            found = true;
        }
        
    }if (!found) {
            console.log("commend not found");
        }
}


function use(command,func){
    let item ={
        command:command,
        func:func
    }
    controls.push(item);
}

export{
    start,
    use
}