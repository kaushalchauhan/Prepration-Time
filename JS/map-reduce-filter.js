const arr = [2,4,5,9];
// double
function double(x){
    const output = []
   for(let i=0;i<arr.length;i++){
    output.push(x[i]*2)
   }
   return output;
}
// console.log(double(arr));

// using map
const doub = arr.map(function (x){
    return x *2;
})
// console.log(doub);

// triple
function triple(x){
    return x * 3;
}

// to Binary
function toBinary(x){
    return x.toString(2);
}

// const output = arr.map(toBinary)
// console.log(output);

/// filter
// const isOdd = function(x){
//     return x % 2;
// }
// const isEven = function(x){
//     return x % 2 === 0;
// }
// const output = arr.filter(isEven)
// console.log(output);


// reduce
// find sum of all elmns
// const findSum = function(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum;
// }
// using reduce
// const findSum = arr.reduce(function(acc, curr){
//     return acc = acc + curr;
// },0)
// const findMax = arr.reduce((acc, curr)=>{
//     if(curr > acc){
//         return acc = curr;
//     }
// },0)
// console.log(findMax);


// exercise

const users = [
    { firstname : 'Kaushal', lastname : 'Chauhan', age : 22},
    { firstname : 'donald', lastname : 'Trump', age : 52},
    { firstname : 'elon', lastname : 'musk', age : 50},
    { firstname : 'Katrina', lastname : 'Kaif', age : 29},
]
//print full name
// const output = users.map(x => x.firstname + ' ' + x.lastname);

// print people count with perticular age
// const output = users.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// },{})

// people list who's age  is grater then 50
//using filter and map
// const output = users.filter(x => x.age > 50).map(x => x.firstname + ' ' + x.lastname)

// using reduce
const output = users.reduce((acc,curr)=>{
    if(curr.age>50){
        acc.push(curr.firstname + ' ' + curr.lastname)
    }
    return acc;
},[])
console.log(output)