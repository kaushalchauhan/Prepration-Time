// // Brute-forece 1. Area, 2. Circ, 3. Diameter
// // Optimise 
// // map
// // make our code same as map

// const radius = [1,3,5,2];

// // // Calculate Area
// // const calculateArea = function(radius){
// //     const output = [];
// //     for(let i = 0; i<radius.length; i++){
// //         const area = Math.PI * radius[i] * radius[i];
// //         output.push(area.toFixed());
// //     }
// //     return output;
// // }
// // console.log(`calculateArea:` ,calculateArea(radius));


// // // Calculate Circurfrence
// // const calculateCirc = function(radius){
// //     const output = [];
// //     for(let i = 0; i<radius.length; i++){
// //         const circm = 2 * Math.PI * radius[i] ;
// //         output.push(circm.toFixed());
// //     }
// //     return output;
// // }

// // console.log(`calculateCircm:` ,calculateCirc(radius));

// // // Calculate Diameter
// // const calculateDiameter = function(radius){
// //     const output = [];
// //     for(let i = 0; i<radius.length; i++){
// //         const diameter = 2 * radius[i] ;
// //         output.push(diameter.toFixed());
// //     }
// //     return output;
// // }

// // console.log(`calculateDiameter:` ,calculateDiameter(radius));

// // Optimise it

// const area = function(radius){
//     return (Math.PI * radius * radius);
// }
// const diameter = function(radius){
//     return (2*radius);
// }
// const circmference = function(radius){
//     return (2 * Math.PI * radius)
// }
// // const calculate = function(radius, logic){
// //     const output = [];
// //     const arrEmn = radius.length;
// //     for(let i=0; i<arrEmn; i++){
// //         output.push(logic(radius[i]))
// //     }
// //     return output;
// // }
// // console.log("opti",calculate(radius,area));
// // console.log("opti",calculate(radius, diameter));
// // console.log("opti",calculate(radius,circmference));

// //Make our function working same as map

// const mapOutput = radius.map(area)
// console.log(mapOutput)


//  Array.prototype.calculate = function(logic){
//     const output = [];
//     const arrEmn = this.length;
//     for(let i=0; i<arrEmn; i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(radius.calculate(area))



const radius = [1,2,3,5,9];

const diameter = function (radius){
    return (2 * radius)
}
const circm = function (radius){
    return (2 * Math.PI * radius);
}
const area = function (radius){
    return (Math.PI * radius * radius);
}
Array.prototype.calculate = function (logic){
    const output = [];
    const radiusElmn = this.length;
    for(let i = 0; i<radiusElmn; i++){
        output.push(logic(this[i]))
    }
    return output;
}
console.log("area:",radius.calculate(area));
console.log("diameter:",radius.calculate(diameter));


