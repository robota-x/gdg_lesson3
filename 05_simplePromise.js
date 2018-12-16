Promise.resolve("first promise success!")
  .then(function(value) {
    console.log("first success: " + value);
  })
  .catch(function(value) {
    console.log("first fail:" + value);
  });

Promise.reject("second promise fail!")
  .then(function(value) {
    console.log("second success: " + value);
  })
  .catch(function(value) {
    console.log("second fail:" + value);
  });

/* Uncomment this last promise. run the code and check the output. */
// Promise.reject("third promise fail!")
//   .then(function(value) {
//     console.log("third success: " + value);
//   })
//   .catch(function(value) {
//     console.log("third fail:" + value);
//   })
//   .finally(function() {  // in class we used another 'then()', with the same result. Check on MDN about finally()
//     console.log("third all done!");
//   });

