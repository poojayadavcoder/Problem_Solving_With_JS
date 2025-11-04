//  10 20 5

const arr=[40010,50,30,100,10,50,200,180,180,200]
let bigNum=0

for(let i=0;i<=(arr.length-1);i++){
  for(let j=0;j<=(arr.length-1);j++){
     if(arr[i]<arr[j]){
        bigNum=arr[j]
     }
  }
}
console.log(bigNum)
