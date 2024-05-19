// Insert the underscores equal number of duplicates in the array.
arr=[0,0,1,1,1,2,2,3,3,4]
let length=arr.length
emp=[]
for(i of arr){
    if(emp.includes(i)==false){
        emp.push(i)
    }
}
k = length-emp.length
for(i=0;i<k;i++){
    emp.push('_')
    // emp[emp.length++]='_'
}
// console.log(emp)

// Insert under scores which are equal to occurrences of input 2 value
arr=[2,3,3,2]
value=3
count=0
emp1=[]
for(i of arr){
    if(i==value){
        count++
    }
    else{
        emp1.push(i)
    }
}
for(i=0;i<count;i++){
    // emp1.push('_')
    emp1[emp1.length++]="_"
}

// console.log(emp1)