// //even sum
// num=prompt()
// sum=0
// for(i=0;i<num.length;i++){
//     if(num[i]%2==0){
//     sum=sum+Number(num[i])
//     }
// }
// console.log(sum)

// //odd sum
num=prompt()
sum=0
for(i=0;i<num.length;i++){
    if(num[i]%2!==0){
        sum=sum+Number(num[i])
    }
}
console.log(sum)

// //difference between even and odd
num='246813579'
even=0
odd=0
for(i=0;i<num.length;i++){
    if(num[i]%2==0){
        even=even+Number(num[i])
    }
    if(num[i]%2!==0){
        odd=odd+Number(num[i])
    }
}
if(even>odd){
    res1=even-odd
    console.log(res1)
}
if(odd>even){
   res2=odd-even
   console.log(res2)
}

// //largest sum
num=prompt()
even=0
odd=0
for(i=0;i<num.length;i++){
    if(num[i]%2==0){
        even=even+Number(num[i])
    }
    if(num[i]%2!==0){
        odd=odd+Number(num[i])
    }
}
if(even>odd){
    console.log("even sum is bigger")
}
else{
    console.log("odd sum is bigger")
}

