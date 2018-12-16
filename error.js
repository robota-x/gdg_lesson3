function finished() {
  console.log("The task has finished");
}

function thingThatTakesALongTime(callback) {
  //... Task that takes a long time to complete

  callback(); // This is where the 'console.log' happens
}

// Pass the function to 'thingThatTakesALongTime' just like a normal variable
thingThatTakesALongTime(finished);