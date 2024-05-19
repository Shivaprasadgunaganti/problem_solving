// prompt=require(`prompt-sync`)();
// duplicate count of sub arrays   o/p=4
arr=[[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]]
count=0
for(i of arr){
    emp=[]
    for(j of i){
        if(!emp.includes(j))
            emp.push(j)
    }
    // console.log(emp)
    for(k of emp){
        dup=0
        for(n of i){
            if(n==k){
                dup++
            }
        }
        if(dup>=2)   //if(dup!=1)
          count++  
    }
}
// console.log(count)

// print unique values count  o/p=4
arr=[[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]]
count=0
for(i of arr){
    emp=[]
    for(j of i){
        if(!emp.includes(j)){
            emp.push(j)
        }
    }
    // console.log(emp)
for(k of emp){
    dup=0
    for(n of i){
        if(n==k){
            dup++
        }
    }
    if(dup==1)
        count++
}
}
// console.log(count)