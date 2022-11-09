let arrayOfProductsUS = [
  { name: "iPhone", category: "tech", priceUSD: 999 },
  { name: "Laptop", category: "tech", priceUSD: 1000 },
  { name: "Charger", category: "tech", priceUSD: 20 },
  { name: "Battery pack", category: "tech", priceUSD: 50 },
];

// We want to convert it into a new array, that look the same...
// same kind of objects.
// BUT -- no property priceUSD, instead we want priceEUR
let arrayOfProductsEU = arrayOfProductsUS.map(({ priceUSD, ...rest }) => {
  // we want to return an object

  // 1st option: manually we specify all the properties
  // return {
  //   name: product.name,
  //   category: product.category,
  //   priceEUR: product.priceUSD * 0.99,
  // };

  // 2nd option: WE CAN COPY THE OBJECT with Object.assign,
  // and then delete the property priceUSD,
  // add the property priceEUR

  // 3rd option

  return {
    ...rest, // just spread here all the properties inside product
    priceEUR: priceUSD * 0.99,
  };
});

console.log(arrayOfProductsEU);
