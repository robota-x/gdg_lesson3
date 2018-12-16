var errorFunction = function() {
  throw new Error("errorFunction error!");
};

/* run the file, does console.log fires? is the error in errorFunction thrown? */
if (true || errorFunction()) {
  console.log("great job mate");
}

/* uncomment this other function and run the file, does console.log fires? is the error in errorFunction thrown? */
// if (errorFunction() || true) {
//   console.log("great job mate");
// }

/*
  read: https://stackoverflow.com/questions/9344305/what-is-short-circuiting-and-how-is-it-used-when-programming-in-java
  it's about java but it holds true for javascript too
*/
