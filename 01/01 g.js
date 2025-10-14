let inputs=process.argv.slice(3);
let commend=process.argv[2];


//with if
if(commend=="sum"){
    console.log(Number(inputs[0])+Number(inputs[1]));
}
else if(commend=="minus"){
    console.log(Number(inputs[0])-Number(inputs[1]));
}
else if(commend=="multiply"){
    console.log(Number(inputs[0])*Number(inputs[1]));
}
else if(commend=="dividedby"){
    console.log(Number(inputs[0])/Number(inputs[1]));
}
else{
    console.log("command not found");
}


//with switch
switch(commend){
    case "sum":
        console.log(Number(inputs[0])+Number(inputs[1]));
        break;
    case "minus":
        console.log(Number(inputs[0])-Number(inputs[1]));
        break;
    case "multiply":
        console.log(Number(inputs[0])*Number(inputs[1]));
    break;
    case "dividedby":
        console.log(Number(inputs[0])/Number(inputs[1]));
    break;
    default:console.log("command not found");
    break;
}