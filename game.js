const prompt =require("prompt-sync")({sigint:true});
//guess random number
let a=Math.random()
 let c=(a*100)
  //console.log(c)
c=Number.parseInt(c)
//console.log(c)

let chance=0;

let i;
while(i!=c){
 // chance++;
i=prompt("enter the value between 1 to 100 ........     ")
i=Number.parseInt(i)
if(i>c){
  console.log("your number is bigger");
}
else if(i<c){
  console.log("your number is samaller");
}
else {
  console.log("congrats you find correct number");
}
chance++;
}
console.log( "your attempt is ...",chance);
let score=100-chance+1;

console.log( " you got score",score);
console.log("number was",c)
