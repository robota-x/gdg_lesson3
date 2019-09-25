function notifySuccess(result) {
  console.log("Finished! The result is: " + result);
}

function startWork(value, callbackFunction) {
  console.log("Starting! The value is: ", value);
  setTimeout(function() {
    callbackFunction(value + 50);
  }, 1000);
}

startWork(50, notifySuccess);

/* 
  Try to trace (mentally or on a piece of paper) the execution flow, line by line. 
  What is the program output? Once done, run this script and check if correct.
  Use the Vs Code debugger to add a breakpoint at live 11 and then follow the execution steps.
*/
