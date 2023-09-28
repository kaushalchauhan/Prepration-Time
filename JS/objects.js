// Creating a JavaScript Object
// With JavaScript, we can define and create own objects.

// There are different ways to create new objects:

// Create a single object, using an object literal.
let obj1 = {}; 

// Create a single object, with the keyword new.
let obj2 = new Object;
obj2.name = 'Kaushal';
obj2.age = 20;

// JavaScript Objects are Mutable
let kk = obj2; // kk has the refrence of the obj2 object


// ######## Accessing JavaScript Properties #########

const person = {
    firstName: "Kaushal",
    lastName: "Chauhan",
    age: 20,
    eyeColor: "brown"
};

// 1. objectName.property      
person.firstName 

// 2. objectName["property"]
person['age']

// 3. objectName[expression]
let ageVar = "age";
console.log(person[ageVar]) // will print 20


// Define an object constructor, and then create objects of the constructed type.
// Create an object using Object.create().