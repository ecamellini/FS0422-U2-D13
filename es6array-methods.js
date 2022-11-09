// --------------
// FOR EACH

let arrayOfAnimals = ["cat", "dog", "duck"];

arrayOfAnimals.forEach((animal) => console.log(animal));

// --------------
// FILTER
console.log("FILTER --------------------------");

let arrayOfProducts = [
  { name: "iPhone", price: 999 },
  { name: "Laptop", price: 1000 },
  { name: "Charger", price: 20 },
  { name: "Battery pack", price: 50 },
];

console.log("All products:");
console.log(arrayOfProducts);

// arrayOfProducts.filter((product) => {
//   return product.price <= 50; // The callback function you pass to filter, needs to return a boolean
// });

// This also works because arrow functions by default, if you don't open the {}
// they return what you write.
// This really is a totally new array not related anymore to the reference of the original array.
let filteredArrayOfProducts = arrayOfProducts.filter(
  (product) => product.price <= 50 && product.name.startsWith("B")
);

console.log("Filtered products:");
console.log(filteredArrayOfProducts);

// --------------
// MAP

console.log("MAP --------------------------");

let arrayOfProductsUS = [
  { name: "iPhone", priceUSD: 999 },
  { name: "Laptop", priceUSD: 1000 },
  { name: "Charger", priceUSD: 20 },
  { name: "Battery pack", priceUSD: 50 },
];

// let euPrices = arrayOfProductsUS.map((product) => {
//   // This is the function that will be called on each element to transform it
//   // into something else.
//   return product.priceUSD * 0.99;
// });

// Another way to do the same: arrow function without curly braces AUTOMATICALLY RETURNS
let euPrices = arrayOfProductsUS.map((product) => product.priceUSD * 0.99);

console.log("EU converted prices:");
console.log(euPrices);

// ____________________________________

console.log("REDUCE to sum an array of numbers...");
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 100;
const sumWithInitial = array1.reduce((sum, currentValue) => {
  console.log(`Sum: ${sum}`);
  console.log(`Current: ${currentValue}`);
  return sum + currentValue;
}, initialValue);

console.log(sumWithInitial);
// expected output: 10

// -----------------------------------
// REDUCE
console.log("Reduce Cart Price -------------------------");

let cartOfBooks = [
  { title: "Book 1", price: 10 },
  { title: "Book 2", price: 12 },
  { title: "Book 3", price: 23 },
  { title: "Book 4", price: 5 },
];

// We need to display the total price of the items in the cart
// We need to find a way to:
// start from an array of products...
// ...and obtain a single number

// We want to reduce our array of products to a single number

let initCartValue = 0;
let totalPrice = cartOfBooks.reduce(
  (sum, book) => (sum += book.price), // This is the 1st param of reduce, the callback
  initCartValue // Initial value of the sum is 0
);

console.log(cartOfBooks);

console.log("Total price of the cart:");
console.log(totalPrice);

console.log(
  "All the names of the product in the cart, concatenated into a single string."
);

let initialString = "";
let concatenation = cartOfBooks.reduce(
  (concatOfNames, book) => concatOfNames.concat(book.title),
  initialString
);

console.log(concatenation);
