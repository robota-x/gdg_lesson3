# Related homework

These are instruction for further exercise on promises. 

Read the steps **in order**, as you're not supposed to fork this repository but rather create your own.

## Step 1: create your own repo
Note: You might require to google informations if you don't remember how to do everything! Even better, do this together as a part of a group call.

1. Create a new folder in your computer called `week6_homework`.
2. Initialise a new git repository *inside* the folder. 
3. Create a new repository called `week6-homework` on Github. Keep it empty, don't add Readme or License. 
4. Add the new Github repository address as a remote called `origin` to your local git repository.
5. Create a `README.md` file and write a small description.
6. Commit and push to Github.
7. Post the link in the class channel. 

## Step 2: 

1. In your homework repository, create a new file called `01_promise.js`.
2. Write a function that returns a promise. This promise should resolve, returning the string `"success"`.
3. Commit and push.

## Step 3: 

1. In your homework repository, create a new file called `02_promiseSelector.js`.
2. Write a function that returns a promise. This promise should resolve, returning the string `"success"`, **if** the function is passed `true` as argument. Otherwise, it should reject with the string `"failure"`.
3. Commit and push.

## Step 4:

1. In your homework repository, create a new file called `03_promiseDelay.js`.
2. Write a function that returns a promise. This promise should resolve, returning the string `"success"`, **after** 1 second.
    * use `setTimeout()` to implement the delay.
3. Commit and push.

## Step 5:

1. In your homework repository, create a new file called `04_promisifiedTimeout.js`.
2. Write a function that returns a promise. This promise should resolve, returning the string `"success"`, **after** the amount of milliseconds passed as an argument to the function.
    * use `setTimeout()` to implement the delay.
    * note: you effectively 'promisified' `setTimeout()`, transforming a function that use the callback pattern to one that use promises!
3. Commit and push.
