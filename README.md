# jfs-async
A lesson on Callbacks, Promises, Async Await, Fetch

# Getting Started

1. This is an individual project. Log into your GitHub and do the following:
    * FORK this repository onto your github
    * Copy the https URL from your FORKED repo
    * Navigate to Git Bash on your local machine and `cd` to a place you wish to clone this activity to work on it
    * Once where you need to be in bash, run `git clone` followed by the URL you copied from your forked copy of this github repository
    * Open VSCode, select `File` in the top left, and select `Open Folder` 
    * Find the folder you cloned named `jfs-async` and open it, then begin working in the `main.js` file while using the instructions below.

2. Work to solve each step of this activity, one by one. If you get stuck, don't forget to use your Google and problem solving skills. Your instructor will be available to help you if you get stuck.

3. When you are finished with the activity, submit a pull request from your fork!

----------------------------------------------------------------------

# Activity Instructions

## Before proceeding to step 1, please look through ALL of the code in the `main.js` file to get aquainted with the project, and have a grasp of the content before you dive in.

### 1. Access api using fetch() 
  - Navigate to the getRate() function in main.js
  - Make a fetch call within `getRate()` using the provided URL 
  - (You can use traditional promise handling with .then() and .catch() or async await)
  - When the fetch is successful, console.log 'Retrieved Bitcoin Rates from API!'
  - Handle any possible error accordingly, and console.log it
  - Hint: Remember that fetch already returns a promise.
  - If you need help with fetch you can read about it here:
  - (A basic fetch request is all you should need to use for this exercise)
  - `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch`

### 2. Get Bitcoin rates from returned JSON
  - Once you've received your JSON object from your
  - api call, you will create a variable for each
  - Bitcoin rate (One for USD, one for GBP, and one
  - for EUR) and assign the proper value to it.
  - (Remember you can access JSON values by
  - using dot notation or bracket notation)  

### 3. Assign values to you p elements
  - Now that you have your variables with the values set to
  - each Bitcoin rate, assign variables to the innerText of 
  - your p elements

### 4. Add your own functionality and features
  - Feel free to add your own functionality and 
  - features to this exercise. Try to add a 
  - history function to display the past 
  - Bitcoin rates for each currency.

*** Bonus use Async / Await to handle Promises and chaining where possible ***