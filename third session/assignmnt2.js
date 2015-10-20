function add(a,b){
    this.a = a;
    this.b = b;
    var c = a + b;
    return c
}
function subtract(a,b){
    this.a = a;
    this.b = b;
    var c = a - b;
    return c
}
function multiply(a,b){
    this.a = a;
    this.b = b;
    var c = a * b;
    return c
}
function divide(a,b){
    this.a = a;
    this.b = b;
    var c = a / b;
    return c
}
console.log("Addition is:",add(4,5))
console.log("Subtraction is:",subtract(20,5))
console.log("Multiplication is:",multiply(4,5))
console.log("Division is:",divide(20,5))