//!  this keyword

//? this in global space

// console.log(this); // globalObject - window(browser),{}(node), global

//? this inside a fuction

// this keyword works differently in strict mode & non strict mode
// this  keyword value depends on how the function is called
function x() {
  console.log(this);
}
// x();

// this in non stric mode - window
// this in stric mode - x() -> undefined, window.x() -> window

//? this inside a object's method

const student1 = {
  sName: "Kaushal Chauhan",
  printSName: function () {
    console.log(this.sName);
  },
};
// student1.printSName();

const student2 = {
  sName: "Ramesh Kumar",
};

//? call apply bind methods (sharing methods)

student1.printSName.call(student2); // value of this  = student2

//? this inside arrow function

// arrow function don't have their own this, they take their value of enclosing laxical context

const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
obj.x();

const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this); // obj2
    };
    y();
  },
};

obj2.x();

//? this inside the DOM element => reference to the HTMLelement

// <button onclick="alert(this)">click me</button> => object: HTMLButtonElement
