// function firstFunction (name){
//    console.log( "His name is " ,name);
// }
// let answer = firstFunction("array");
// console.log(answer);

function swapArray(numbs){
    
let tempvariable = 0;
for(let I=0;I<numbs.length;I++){
    for(let J=0;J<numbs.length;J++){
        if(numbs[I]<numbs[J]){
            tempvariable = numbs[I];
            numbs[I] = numbs[J];
            numbs[J] = tempvariable;
        }
    }

}
for (let K = 0;K<numbs.length;K++){
    console.log(numbs[K]);
}
}

let numbs = [5,8,2,0,20,2333,666,89,12,1,2,3,4,55,4,2,3,4,4,7,35365,3,5,5,55,55656,6666,3666,66,6,6666,66,6,777,9,9,995,5,]
let arr = swapArray(numbs);
