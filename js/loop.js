function loop(){
let tempvariable = 0;
let word = [1,3,2,5,8,11,4,9]
for(let F=0;F<word.length;F++){
    for(let I=0;I<word.length;I++){
        if(word[I]>word[F]){
            tempvariable=word[I]
            word[I] = word[F];
            word[F] = tempvariable;
        }
}
}

for(let n in word){ // Enhanced for loop
    console.log(n);
}
}

let ans = loop();