var errorFunction = function() {
  throw new Error('errorFunction error!');
};

if (true || errorFunction()) {
  console.log("great job mate");
}

// if (errorFunction() || true) {
//   console.log("great job mate");
// }
