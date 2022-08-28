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

