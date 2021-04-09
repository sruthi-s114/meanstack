var num1=16;
var num2=10;
var num3=20;

if((num1>num2) & (num1>num3)){
    if(num2>num3){
        console.log(num2+" is the second largest number");
    }
    else{
        console.log(num3+" is the second largest number");
    }
}
if((num2>num1) & (num2>num3)){
    if(num1>num3){
        console.log(num1+" is the second largest number");
    }
    else{
        console.log(num3+" is the second largest number");
    }
}
if((num3>num1) & (num3>num2)){
    if(num1>num2){
        console.log(num1+" is the second largest number");
    }
    else{
        console.log(num2+" is the second largest number");
    }
}
