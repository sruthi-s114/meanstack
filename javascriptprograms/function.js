function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}
function cube(num){
    return num**3;
}
var res1=add(20,30)
var res2=sub(20,30)
var res3=mul(20,30)
var res4=div(20,30)
var res5=cube(20,30)

console.log(`sum = ${res1} difference = ${res2} product = ${res3} div = ${res4} cube = ${res5}`);