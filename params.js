// // Function that will sum N numbers...
// // I don't know how many
// function sumN(n1, n2) {
//   return n1 + n2;
// }

// console.log(sumN(2, 2)); // 4

// console.log(sumN(2, 2, 3)); // This, right now, prints only 4 again

// console.log(sumN(2)); // NaN

// EXAMPLE OF DEFAULT PARAMETER:

// We want to make it work even with just the first parameter specified
// function sumN(n1, n2 = 0) {
//   if (n1 === undefined) {
//     throw new Error("You need to pass a parameter....");
//   }
//   return n1 + n2;
// }

// In this case, it will work also with zero parameters, and print 0
function sumN(n1 = 0, n2 = 0) {
  return n1 + n2;
}

console.log(sumN(4)); // This will work, and print 4 + 0 --> 4
console.log(sumN()); // This will log an error...

// ______________________________________________
// REST OPERATOR
console.log("________________________");
console.log("SumN with rest operators");

// What if we want to really sum N number, any n...
function sumN(...rest) {
  console.log(`Called this function with rest = ${rest}`); // It is an array
  let sum = 0;
  for (number of rest) {
    sum += number;
  }
  return sum;
}

console.log(sumN()); // 0
console.log(sumN(3)); // 3
console.log(sumN(4, 5, 6)); // 15
console.log(sumN(2, 3, 7, 8, 9)); // 29
