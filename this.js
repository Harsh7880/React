"use strict"

// this is global space
console.log(this); // globalObject - window(browser), global(node) --> {} object in case of node
// this inside a function 
function x(){
    // the value depends on strict / non stric mode 
    console.log(this); // globalObject in nonstrict mode and undefined in case of strict mode
}

// this in strict mode - (this subsitution)
  
// if the value of this keyword is undefined or null 
// this keyword will be replaced by globalObject
// only in non strict mode

// this value depends on how this is called
x(); // in strict mode it will be undefined if it is called without any reference
window.x() // in this case this is callled with window Object output will be calling object itself

// this insid a object's methid

const student1 = {
    name: "Harsh Kumar",
    printMName: function(){
        console.log(this.name); // in this case output will be calling object which is student 1
    }
}
const printMName = function(){
    console.log(this.name); // in this case output will be calling object which is student 1
}
student1.printMName();

// call apply bind method (sharing method)
const stu = {
    name: "vashu"
}
printMName.call(stu) // the value of this can we modified / overrite by stu object.


// this inside arrow function's

// the value of this keyword inside a arrow function is enclosing lexical enviornment
const student2 = {
    name: "Harsh Kumar",
    printMName: () => {
        console.log(this.name); 
        // in this case output will be undefined beacuse in this case "this Keyword"
        // is inside in arrow function and arrow function is enclosed inside a global object 
        // and in strict mode this in global sapce is undefined
    }
}
student2.printMName();


// this inside nested arrow function 
const student3 = {
    name: "Harsh Kumar",
    printMName: function()  {
    const y = () => {
        console.log(this); 
     }
     y()
        // in this case output will be undefined beacuse in this case "this Keyword"
        // is inside in arrow function and arrow function is enclosed inside a global object 
        // and in strict mode this in global sapce is undefined
    }
}
student3.printMName();



// this inside DOM

// this keyword in dom will be HTMLElement