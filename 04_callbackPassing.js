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
