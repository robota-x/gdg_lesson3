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
