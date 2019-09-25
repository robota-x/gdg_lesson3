var myPromise = Promise.resolve(10);

myPromise
  .then(function(value) {
    console.log("first then:", value);
    return value + 50;
  })
  .then(function(value) {
    console.log("second then:", value);
    // return value;
  })
  .then(function(value) {
    console.log("third then:", value);
  });

/*
  mentally trace the execution of this code again, then run to verify your assumption.
  uncomment the return value inside the second then statement, and then run again.
*/