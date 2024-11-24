// the apply method is similar to the call method in that 
// it allows you to call a function with a specified 
// this value and an array of arguments. However, while call 
// accepts arguments individually, apply takes arguments as an array.


let person3 = {
    name: "harsh",
    age: 24,

}
let person4 = {
    name: "Kumar",
    age: 25
}
let  showdeatils2 = function(city,car){
    console.log(`${this.name} is ${this.age} year's old and lives in ${city} and drives the ${car}`);
}
showdeatils2.apply(person4, ["lucknow", "BMW"]);

