//1 to num
num1="20"
for(i=1;num1>=i;i++){
    // console.log(i)
}
// num to 1
num1="1"
for(i=20;i>=num1;i--){
    // console.log(i)
}
// -1 to -20
num1="-20"
for(i=-1;i>=num1;i--){
    // console.log(i)
}
// -20 to -1
num1="-1"
for(i=-20;i<=num1;i++){
    // console.log(i)
}

// largest prime number from the  input
num2="1352468"
max=Number(num2[0])
for(n of num2){
    if(n>1){
        c=true
        for(i=2;i<n;i++){
            if(n%i==0){
                c=false
            }
        }
        if(c){
    
          if(n>max)
          max=n
        }
    }
}
console.log(max)

//largest non prime number
num2="1352468"
max=Number(num2[0])
for(n of num2){
    if(n>1){
        for(i=2;i<n;i++){
            if(n%i==0){
                
                if(n>max)
                max=n 
            }
        }
    }
}
console.log(max)

num3="5497351"
// sum1=0,sum2=0
max=Number(num3[0])
min=Number(num3[0])
for(n of num3){
    if(n>1){
        c=true
        for(i=2;i<n;i++){
            if(n%i==0){
                c=false
            //    console.log(n)
            }
        }
        if(c)
        if(n>max)
        max=n
    }
}
console.log(max)

for(n of num3){
    if(n>1){
        for(i=2;i<n;i++){
            if(n%2!==0){
               if(n<min)
               min=n
            }
        }
    }
}
console.log(min)
let res=Number(max)+Number(min)
console.log((res))