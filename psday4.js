// prime numbers reverse 

// prompt=require(`prompt-sync`)();
// num= prompt("enter a number:")
// primerev=""
// for(n=1;n<=num;n++){
//     if(n>1){
//         c=0
//         for(i=2;i<n;i++){
//             if(n%i==0){
//                 c++
//                 break
//             }
//         }
//         if(c==0){
//             primerev+=String(n).split("").reverse().join("")+" "
//         }
//     }
// }
// console.log(primerev)

//smalles unique and smallest duplicate sum

// prompt=require(`prompt-sync`)();
// num1=prompt("enter a number:")
// uni="", dup=""
// s=""
// for(n of num1){
//     if(!s.includes(n)){
//         s=s+n
//     }
// }
// for(n of s){
//     c=0
//     for(i of num1){
//         if(n==i)
//         c++
//     }
//     if(c>1)
//     dup=dup+n
//     else{
//         uni=uni+n
//     }
// }

// min1=dup[0]
// for(k of dup){
//     if(k<min1)
//     min1=k
// }
// min2=uni[0]
// for(k of uni){
//     if(k<min2)
//     min2=k
// }
// sum=Number(min1)+Number(min2)
// console.log(sum)

//largest duplicate and largest unique sum
prompt=require(`prompt-sync`)();
num1=prompt("enter a number:")
uni="", dup=""
s=""
for(n of num1){
    if(!s.includes(n)){
        s=s+n
    }
}
for(n of s){
    c=0
    for(i of num1){
        if(n==i)
        c++
    }
    if(c>1)
    dup=dup+n
    else{
        uni=uni+n
    }
}
max1=dup[0]
for(k of dup){
    if(k>max1)
    max1=k
}
max2=uni[0]
for(k of uni){
    if(k>max2)
    max2=k
}
sum=Number(max1)+Number(max2)
console.log(sum)

no=prompt("enter a number")
m=''
for(p of no){
    // if(!p.includes)
}