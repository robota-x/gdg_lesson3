// This show how a promise can either resolve (succeed) or fail (reject) and how to handle the various outcomes.
Promise.resolve("This promise will resolve (succeed)")
  .then(function(value) {
    console.log("First promise 'then' branch has been called with:" + value);
  })
  .catch(function(value) {
    console.log("First promise 'catch' branch has been called with:" + value);
  });

Promise.reject("This promise will reject (fail)")
  .then(function(value) {
    console.log("Second promise 'then' branch has been called with:" + value);
  })
  .catch(function(value) {
    console.log("Second promise 'catch' branch has been called with:" + value);
  });

/* 
  Uncomment this promise chain (line 23 onward). run the code and check the output. 
  Change the third promise chain from 'reject' to 'resolve', and run again. 
  Notice how the 'finally' statement runs in either case
*/

// Promise.reject("This promise will reject")
//   .then(function(value) {
//     console.log("Third promise 'then' branch has been called with:" + value);
//   })
//   .catch(function(value) {
//     console.log("Third promise 'catch' branch has been called with:" + value);
//   })
//   .finally(function() { // 
//     console.log("Third promise 'finally' branch has been called!");
//   });

