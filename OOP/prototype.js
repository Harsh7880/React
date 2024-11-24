/**
 * Prototype: In JavaScript, every object has a prototype. The prototype is like
 *  a template or a blueprint from which the object inherits properties and methods. 
 * When you access a property or method of an object, and it doesn't exist on the object itself, 
 * JavaScript looks for it in the object's prototype, and if not found there, it continues up 
 * the prototype chain until it finds it or reaches the end of the chain.
 * 
 */

/**
 * Prototype chaining: Prototype chaining is the mechanism through which objects in JavaScript inherit 
 * properties and methods from their prototypes. Each object has a reference to its prototype, 
 * and this forms a chain of objects linked through their prototypes. When you access a property or
 * method on an object, JavaScript looks for it in the object itself, and if not found, it follows 
 * the prototype chain to find it in the object's prototype, and so on until it reaches the end of the chain.
 * 
 */


/**
 * Prototypical Inheritance: Prototypical inheritance is a way of implementing inheritance in JavaScript. 
 * Unlike classical inheritance found in languages like Java or C++, where classes inherit from other classes,
 *  JavaScript uses prototypical inheritance. In prototypical inheritance, objects inherit directly from other objects. 
 * Every object in JavaScript has a prototype, and when you create a new object, you can specify its prototype explicitly 
 * using the Object.create() method or implicitly by using constructor functions and the new keyword. The new object inherits 
 * properties and methods from its prototype.
 */

let arr = ['harsh','akshat','Nikhil'];
let object = {
    name: "harsh",
    city: "lucknow",
    getIntro: function(){
        console.log(this.name, + "from" + this.city);
    }
}

let object2 = {
    name: "harsh"
}

object2.__proto__ = object; 
object2.getIntro();