function myCallbackFunction() {
  console.log("Timeout done!");
}

console.log("line 5");
setTimeout(myCallbackFunction, 1000);
console.log("line 7");
