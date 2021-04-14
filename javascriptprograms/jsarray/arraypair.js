var arr =[1,2,3,4,6,7,9,10]
var num=10;
var pair=[]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==num){
            console.log(`{${arr[i]},${arr[j]}}`);
        }
    }
}