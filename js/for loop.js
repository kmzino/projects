let numbs = [8,,7,5,1,0,2,4,3,10]
let tempvariable = 0;
for(let I=0;I<numbs.length;i++){
    for(let J=0;J<numbs.length;J++){
        if(numbs[I]>numbs[J]){
            tempvariable = numbs[I];
            numbs[I] = numbs[J];
            numbs[J] = tempvariable;
        }
    }

}
for (let K = 0;K<numbs.length;K++){
    console.log(numbs[K]);
}