var arr=[10,11,12,13,14,15]
var arr1=[]
var arr2=[]
for(let num of arr){
    if(num%2==0){
        arr1.push(num)
    }
    else{
        arr2.push(num)
    }
}
console.log(arr1,arr2);