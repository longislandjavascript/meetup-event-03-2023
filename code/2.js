// Error()
const MyError = Error();

// new Error();
// const MyError = new Error();

// Error(message);
// const MyError = new Error("Oops... Something went wrong");

// const AnotherError = new Error("Original Error");
// AnotherError.name = "AnotherError";
// const MyError = new Error("Oops... Something went wrong", {
//   // cause: "Cause of Error",
//   cause: AnotherError,
// });

MyError.name = "My Super Error";

console.log("ERROR: ", MyError);
console.log("ERROR CONSTRUCTOR: ", MyError.constructor);
console.log("ERROR NAME: ", MyError.name);
console.log("ERROR MESSAGE: ", MyError.message);
console.log("ERROR STACK: ", MyError.stack);
console.log("ERROR CAUSE: ", MyError.cause);
console.log("TO STRING: ", MyError.toString());
