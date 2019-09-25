function returnsAPromise() {
  var myPromise = Promise.resolve(42);

  var promiseResult = myPromise
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

  return promiseResult; // notice how we are returning the whole promise chain itself!
}

var functionResult = returnsAPromise();
console.log("functionResult", functionResult);

/* 
  What is the return value of the function (a hint is in the name of the function itself)?
  Modify the code after line 21 to console.log() the return value of the third 'then' block
  The solution is in step 08
*/
