// # MODULE

// ES6 Module

import coffeeStock from './state.js';

const displayStock = stock => {
  for (const type in stock) {
    console.log(type);
  }
}

displayStock(coffeeStock);