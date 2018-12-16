Promise.resolve("first promise success!")
  .then(function(value) {
    console.log("first success: " + value);
  })
  .catch(function(value) {
    console.log("first fail:" + value);
  });

// Promise.reject("second promise fail!")
//   .then(function(value) {
//     console.log("second success: " + value);
//   })
//   .catch(function(value) {
//     console.log("second fail:" + value);
//   });

// Promise.reject("third promise fail!")
//   .then(function(value) {
//     console.log("third success: " + value);
//   })
//   .catch(function(value) {
//     console.log("third fail:" + value);
//   })
//   .finally(function() {
//     console.log("third all done!");
//   });
