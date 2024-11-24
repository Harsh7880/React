// the bind method is used to create a new function that, 
// when called, has its this keyword set to a specified value,
// with a given sequence of arguments preceding any provided 
// when the new function is called.



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
let showDetailsBind = showdeatils2.bind(person4, "lucknow", "BMW");
showDetailsBind();