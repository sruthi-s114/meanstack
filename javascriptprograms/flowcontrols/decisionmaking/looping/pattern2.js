var num=420;
var sum=0;
var remain=0;
while(num!=0){
    remain=num%10;
    sum=sum+remain**3;
    num=Math.floor(num/10)
}
console.log(sum);