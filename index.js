// # MODULE

// Export & Import
// Multiple value in Node.js


// const coffeeStock = require('./state');
const { coffeeStock, isCoffeeMachineReady } = require('./state');

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
}

makeCoffee("robusta", 80);

console.log(coffeeStock);
console.log(isCoffeeMachineReady);