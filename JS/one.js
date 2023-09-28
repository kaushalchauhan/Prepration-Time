// truthy & falsy values

console.log(false == 0); // true
console.log(false == ''); // true
console.log('' == 0); // true

// Nullish Coalesing Operator (??): null , undefined

let val1 = null ?? 10; // safty check 
val1 = undefined ?? 10; // safty check 

console.log(val1);


// Terniary Opr : condition ? true : false

// let name = 'Kaushal'
let name = 'xyz'

name == 'Kaushal' ? console.log('kaushal') : console.log('unknown');
