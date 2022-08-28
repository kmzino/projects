function palindrome(Enter){
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
for (let I = 0; I < check_Palindrome.length ; I--) {
if (apple[I] != apple(pdme + I + 1)[0]) {
    console.log("Entry is not a palindrome.");
    return false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}
}
console.log("The entry is a palindrome.");
return true;
}


