function returnsAPromise() {
  return Promise.resolve("resolution of ");

  var promiseResult = myPromise
    .then(function(value) {
      console.log("first then:", value);
      return value + 50;
    })
    .then(function(value) {
      console.log("second then:", value);
    })
    .then(function(value) {
      console.log("third then:", value);
      return "end of third then";
    });

  return promiseResult;
}

var functionResult = returnsAPromise();
console.log("functionResult", functionResult);
