/**v
 * What is async ?
 * What is await ?
 * How async await works behind the scenes ?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promises.then/.catch
 * 
 */

// Async

const newPromise1 = new Promise((resolve,reject) =>{
  setTimeout(()=>{
    resolve("Promised Resolved Value 1");
  },5000);
});

const newPromise2 = new Promise((resolve,reject) =>{
  setTimeout(()=>{
    resolve("Promised Resolved Value 2");
  },2000);
});
// always returns a promise
function getData(){
    newPromise1.then((res) =>{
        console.log(res);
    });    
    console.log("Hellow World");
}
getData();





// await can only be used inside a async function
async function handlePromise(){
  // JS Engine was waiting for promise to resolved
  const value2 = await newPromise2;
  console.log("Hello World 2");
  console.log(value2);

    const value = await newPromise1;
    console.log("Hello World 1");
    console.log("value----", value);   
}
handlePromise();

