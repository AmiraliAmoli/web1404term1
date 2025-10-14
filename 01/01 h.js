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
else if(commend=="print"){
    let obj={
        name:inputs[0],
        lastname:inputs[1],
        age:inputs[2],
    };
    console.log(obj);
}
else{
    console.log("command not found");
}