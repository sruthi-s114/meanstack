var num=456;
var remainder;
var reverse='';
while(num>0){
    remainder=num%10
    reverse= reverse+remainder;
    num=Math.floor(num/10);
}
console.log(reverse);