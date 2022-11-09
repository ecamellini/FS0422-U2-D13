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
