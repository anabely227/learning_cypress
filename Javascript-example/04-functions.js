function sum(a,b){
  return a+b;
}

console.log(sum(10,10));

function product(a,b){
  return a*b;
}

console.log(product(12,12));

const bigProduct = product(455,5354);
console.log(bigProduct);

setTimeout(function(){
  console.log("Hey you Rock!!")
}, 1000);

//Error functions only line code more than one need braces
setTimeout(() => console.log("Hey you Rock!!"), 1000);
