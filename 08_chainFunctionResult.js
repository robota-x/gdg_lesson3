function returnsAPromise() {
  /* 
    this is the same function as 07_returnPromiseFromFunction, 
    but simplified, by not using any unnecessary variable
  */
  return Promise.resolve(42)
    .then(function(value) {
      console.log("first then:", value);
      return value + 50;
    })
    .then(function(value) {
      console.log("second then:", value);
      return value;
    })
    .then(function(value) {
      console.log("third then:", value);
      return "return value of the third promise";
    });
}

var functionResult = returnsAPromise(); // functionResult is still a promise, which will resolve with the return value of the last 'then' (the third one)/

var x = functionResult
  .then(function(result) {
    // we can access the value by simply chaining another 'then' to the return value of 'returnsAPromise'
    console.log(result);
    return result; // to reuse the same result in 2 different then block, we can return it again.
  })
  .then(function(result) {
    console.log(result + " used a second time");
    return result;
  });

console.log("functionResult", x);

/*
  review the code and try to trace the results before running the examples.
  what will 'x' be?

  remember: a promise chain once started can not be made syncronous again, the correct
  way to process things in order after the resolution is by chaining more 'then' statements
*/
