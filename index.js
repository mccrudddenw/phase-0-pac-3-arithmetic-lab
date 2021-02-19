function add(a, b) {
    return a + b ;
  }
console.log(add(5, 8));

function subtract(a, b) {
    return a - b ;
}
console.log(subtract(6, 4));

function multiply(a, b) {
    return a * b ;
} 
console.log(multiply(40, 6));

function divide(a, b) {
    return a / b ;
}
console.log(divide(80, 6));

function increment(n) {
    return ++n ;
}
console.log(increment(7));

function decrement(n) {
    return --n ;
}
console.log(decrement(4));

function makeInt(n) {
    return parseInt(n,10);
}
console.log(makeInt("58"));

function preserveDecimal(n) {
    return parseFloat(n, 10);
}
console.log(preserveDecimal(".015096"));