function calculator(){
    let prompt = require("prompt-sync")({signit:true});
    let totalSum = 0; 
    
    let numberOne = prompt("Enter first number :  ");
    let promptOperator = prompt("Insert operator :  ");
    let numberTwo = prompt("Enter second number :  ");
    
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    
    let condition = false;
    
    if(promptOperator === "+"){
      totalSum += numberOne + numberTwo;
      console.log("Result:  ", totalSum);
    }
    else if(promptOperator === "*"){
      totalSum += numberOne * numberTwo;
      console.log("Result:  ", totalSum);
      }
     else if(promptOperator === "-"){
      totalSum += numberOne - numberTwo;
      console.log("Result:  ", totalSum);
    } else {
      totalSum += numberOne / numberTwo;
      console.log("Result:  ", totalSum);
    }
    }
    
    let ans = calculator();
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
function check_Palindrome(Enter){
    let apple = Enter.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    let pdme = 0; 
    
    if((apple.length) % 2 === 0 ){
        pdme = apple.length / 2;
    }else{
        if(apple.length === 1){
        console.log("This is a palindrome. Well done.");
        return true ;
    }else{
         pdme = (apple.length - 1) / 2;
    }
    }
    for (let I = 0; I < pdme ; I--) {
    if (apple[I] != apple(pdme + I + 1)[0]) {
        console.log("Entry is not a palindrome.");
        return false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    }
    }
    console.log("The entry is a palindrome.");
    return true;
    }
    
    
    