let inputs=process.argv.slice(3);
let commend=process.argv[2];

if(commend=="sum"){
    console.log(Number(inputs[0])+Number(inputs[1])); 
}
else{
    console.log("command not found");
}