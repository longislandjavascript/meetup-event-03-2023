// TypeError
const MyTypeError = new TypeError("This is a type error");
const isTypeError = MyTypeError instanceof TypeError;

// ReferenceError
const MyReferenceError = new ReferenceError("This is a reference error");
const isReferenceError = MyReferenceError instanceof ReferenceError;

console.groupCollapsed("TypeError*************************");
console.log("ERROR CONSTRUCTOR: ", MyTypeError.constructor);
console.log("IS TYPE ERROR: ", isTypeError);
console.log("ERROR: ", MyTypeError);
console.groupEnd();

console.groupCollapsed("ReferenceError********************");
console.log("ERROR CONSTRUCTOR: ", MyReferenceError.constructor);
console.log("IS REFERENCE ERROR: ", isReferenceError);
console.log("ERROR: ", MyReferenceError);
console.groupEnd();
