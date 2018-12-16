function finished(result) {
  console.log("Finished! The result is: " + result);
}

function startWork(stuff, callback) {
  console.log("Starting! The stuff is: ", stuff);
  setTimeout(function() {
    callback(stuff + 50);
  }, 1000);
}

startWork(50, finished);

/* 
  try to trace mentally or on a piece of paper the execution line by line. 
  What is the program output? Once done, run this script and check if correct.
*/
