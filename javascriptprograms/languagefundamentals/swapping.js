var num1=10;
var num2=20;
//with third variable
var num3=num1;
num1=num2;
num2=num3;

console.log(num1,num2);

//without third variable
//now num1=20 and num2=10
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;

console.log(num1,num2);