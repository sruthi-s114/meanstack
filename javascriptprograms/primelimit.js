var lowlimit=2;
var uplimit=10;
// if (lowlimit=2){
//     console.log(lowlimit);
// }
for(let i=lowlimit;i<=uplimit;i++){
    var flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(i);
    } 
}