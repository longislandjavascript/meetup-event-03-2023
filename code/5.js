function badFunction() {
  throw new Error("Something went wrong");
}

badFunction();

// Does not get executed
console.log("After");

// Console
// try {
//   badFunction();
// } catch (error) {
//   console.error(error);
//   // throw error;
// }

// Breakpoints
// badFunction();

// The debugger keyword;
// debugger;
// badFunction();
