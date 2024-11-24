// Creating three promises with different resolve/reject times and statuses
const p1 = new Promise((resolve, reject) => {
   setTimeout(() => resolve("P1 Success"), 3000); // Resolves after 3 seconds
});
const p2 = new Promise((resolve, reject) => {
   setTimeout(() => reject("P2 failed"), 1000);   // Rejects after 1 second
});
const p3 = new Promise((resolve, reject) => {
   setTimeout(() => resolve("P3 Success"), 2000); // Resolves after 2 seconds
});

// ---------------------------
// Promise.all
// ---------------------------
// The `Promise.all` method takes an array of promises and returns a single promise that:
// - Resolves when all promises resolve, with an array of their results in the same order.
// - Rejects as soon as any promise rejects, with the error of the first promise to reject.
// - Useful for cases where you want all tasks to succeed or the entire operation fails if any task fails.

Promise.all([p1, p2, p3])
   .then((res) => {
       console.log("Promise.all", res); // Not reached in this example because p2 rejects
   })
   .catch((err) => {
       console.error("Promise.all", err); // Output: "Promise.all P2 failed"
   });


// ---------------------------
// Promise.allSettled
// ---------------------------
// The `Promise.allSettled` method returns a single promise that resolves after all input promises have settled (either resolved or rejected).
// - It provides an array of objects for each promise, each containing `status` ("fulfilled" or "rejected") and `value` (or `reason` if rejected).
// - Useful when you want to know the result of each promise without short-circuiting on failure.

Promise.allSettled([p1, p2, p3])
   .then((res) => {
       console.log("Promise.allSettled", res);
       /*
       Output:
       Promise.allSettled [
           { status: 'fulfilled', value: 'P1 Success' },
           { status: 'rejected', reason: 'P2 failed' },
           { status: 'fulfilled', value: 'P3 Success' }
       ]
       */
   })
   .catch((err) => {
       console.error(err); // Will not be reached since `allSettled` doesn't reject
   });


// ---------------------------
// Promise.race
// ---------------------------
// The `Promise.race` method returns a single promise that resolves or rejects as soon as any of the input promises settles (first one to complete).
// - Useful for timeout scenarios where you want the result of the fastest promise.

Promise.race([p1, p2, p3])
   .then((res) => {
       console.log("Promise.race", res); // Output: "Promise.race P2 failed" (as p2 rejects first)
   })
   .catch((err) => {
       console.error("Promise.race", err); // Output: "Promise.race P2 failed" (as p2 rejects first)
   });


// ---------------------------
// Promise.any
// ---------------------------
// The `Promise.any` method returns a single promise that:
// - Resolves with the first fulfilled promise, ignoring rejections.
// - If all promises reject, `any` itself rejects with an AggregateError (an error with an array of all rejection reasons).
// - Useful when you need only the first successful result from multiple promises.

Promise.any([p1, p2, p3])
   .then((res) => {
       console.log("Promise.any", res); // Output: "Promise.any P3 Success" (first successful promise)
   })
   .catch((err) => {
       console.error(err); // Only reached if all promises reject (not in this example)
   });
