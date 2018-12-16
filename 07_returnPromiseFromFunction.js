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
      return 10;
    });

  return promiseResult;
}

var functionResult = returnsAPromise();
// console.log("functionResult", functionResult);

var x = functionResult
  .then(function(result) {
    console.log(result + 1);
    return result;
  })
  .then(function(result) {
    console.log(result + 10);
    return result;
  });

x.then(function(res) {
  console.log("in x", res);
});
