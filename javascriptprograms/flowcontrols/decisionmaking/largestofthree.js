var num1=12;
var num2=10;
var num3=15;
 
if((num1>num2) & (num1>num3)){
    console.log(num1+" is greater"); 
}
else if((num2>num1) & (num2>num3)){
    console.log(num2+" is greater"); 
}
else if((num1==num2) & (num2==num3)){
    console.log("three numbers are same");
}
else{
    console.log(num3+" is greater"); 
}