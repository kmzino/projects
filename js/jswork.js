const prompt = require("prompt-sync")({signit:true});

let expectedguess = Math.floor(Math.random()*10);
let foundguess = false;
while(!foundguess){
    let guess = prompt("Enter Number between 1 to 10:  ");

    guess = Number(guess);
    if (guess===expectedguess && typeof guess === "number"){
        console.log("Successful");
        foundguess=true;
    }else{
        console.log("Failed try again");
    } 

   
}
