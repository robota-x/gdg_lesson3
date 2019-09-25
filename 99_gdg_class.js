/* 
    This is a series of example that I wrote while helping some of you during the class. They are called at the bottom of the file, uncomment them 1 by 1.
    I added a few annotations to go along with it. The code is not 'optimised' or 'beautiful', I aimed for easy to understand.
    It's closely related to the exercises, but not the solution for them.
*/

// fs is the built-in Node package for interacting with the File System. It uses the 'callback' style  for async workload rather than Promises
// see: https://nodejs.org/api/fs.html
const fs = require("fs");

// import _only_ the promisify function from the built-in 'util' package, that lets us turn callback-style functions to promises
// see: https://nodejs.org/docs/latest-v10.x/api/util.html#util_util_promisify_original
const { promisify } = require("util");

const promisifiedReadFile = promisify(fs.readFile);

/* Example 1: read 2 files in succession and print out their value. This use the 'legacy' callback style */
const example1 = () => {
  fs.readFile("files/sample1.txt", "utf-8", (error, dataReadFromFirstFile) => {
    console.log(`the content of sample1.txt is '${dataReadFromFirstFile}'`); // note how in each case we are not checking the 'error' value. if there is an error, we would not know

    fs.readFile("files/sample2.txt", "utf-8", (error, dataReadFromSecondFile) => {
      console.log(`the content of sample2.txt is '${dataReadFromFirstFile}'`);
    });
  });
  // This work and is straightforward, but several subsequent calls increase the indentation more and more -> callback hell (google it)
};

/* Example 2: same as example 1, but uses a 'promisified' version of fs and Promises (Promises are native in JS as of es6) */
const example2 = () => {
  promisifiedReadFile("files/sample1.txt", "utf-8")
    .then(function(firstFile) {
      console.log(`the content of sample1.txt is '${firstFile}'`);
    })
    .then(function() {
      return promisifiedReadFile("files/sample2.txt", "utf-8");
    })
    .then(function(secondFile) {
      console.log(`the content of sample2.txt is '${secondFile}'`);
    });
};

/* Example 2bis: same as example 2, but uses a less 'verbose' syntax. Easier to read, if you know what's going on */
const example2bis = () => {
  promisifiedReadFile("files/sample1.txt", "utf-8")
    .then(firstFile => console.log(`the content of sample1.txt is '${firstFile}'`))
    .then(() => promisifiedReadFile("files/sample2.txt", "utf-8"))
    .then(secondFile => console.log(`the content of sample2.txt is '${secondFile}'`));
};

/* Example 3: same as example 1 and 2, uses the Async/Await syntax introduced recently. It still uses promises under the hood, just a 'cleaner' way to type */
const example3 = async () => {
  const firstFile = await promisifiedReadFile("files/sample1.txt", "utf-8");
  console.log(`the content of sample1.txt is '${firstFile}'`);
  const secondFile = await promisifiedReadFile("files/sample2.txt", "utf-8");
  console.log(`the content of sample2.txt is '${secondFile}'`);
};


// example1();
// example2();
// example2bis();
// example3();
