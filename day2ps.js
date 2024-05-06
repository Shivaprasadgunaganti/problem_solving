// // switch case 
// n=3
// switch(n){
//     case 1: console.log("one");break;
//     case 2: console.log("two")
//     break
//     // case 3: console.log("three");break
// //    default :console.log('>3')
// }
// // 
// n=-4
// if(n>0){
// switch(n%2){
//     case 0: console.log("even")
//     break
//     case 1: console.log("odd")
//     break
//     // default: console.log("enter a positive number ")
// }
// }
// else {
//     // console.log("enter a positive number")
// }
// num =10
// for(i=1; !(i==num+1);i++){
//     // console.log(i)
// }
// num =10
// for(i=1; num>=i;i++){
//     // console.log(i)
// }

//prime number   
num1="24681357"
sum1 =0, sum2=0
for(k of num1)
{
    if(k>1){
        c=true
        for(i=2;i<k;i++){
            if(k%i==0){
           sum2=sum2+Number(k)
           c=false
           break
            }
        }
        if(c)
        sum1=sum1+Number(k)
    }
}
// console.log(sum1)
// console.log(sum2)

