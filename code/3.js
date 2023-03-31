const MyError = new Error("Oops... Something went wrong", {
  cause: "Cause of Error",
});

// Name our error
MyError.name = "My Super Error";

try {
  console.log("TRY BLOCK*************************");

  // Throw error
  throw MyError;

  // Nothing after the throw will run
  // console.log("This code will never run.")
} catch (error) {
  console.groupCollapsed("CATCH BLOCK*************************");
  console.log("ERROR: ", error);
  console.log("ERROR CAUSE: ", error.cause);
  console.groupEnd();
} finally {
  console.groupCollapsed("FINALLY BLOCK*************************)");
  console.log("This code runs regardless of the outcome of the try block");
  console.log("ERROR: ", MyError);
  console.log("ERROR CONSTRUCTOR: ", MyError.constructor);
  console.log("ERROR NAME: ", MyError.name);
  console.log("ERROR STACK: ", MyError.stack);
  console.log("TO STRING: ", MyError.toString());
  console.groupEnd();
}

// THROW ANYTHING
// try {
//   // throw "A string error";
//   // throw 123456789;
//   // throw { hello: "LIJS" };
//   // throw ["an", "array", "of", "errors"];
//   // throw true;
//   // throw null;
//   // throw undefined;
//   // throw NaN;
// } catch (error) {
//   console.log(error);
// }
