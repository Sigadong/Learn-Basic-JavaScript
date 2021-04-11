// # JAVASCRIPT FUNDAMENTALS

/* Data Structure.
  - Spread Operator.
  Masih terkait dengan array, ES6 memiliki fitur menarik untuk membantu pengelolaan array menjadi lebih mudah, yaitu spread operator.

Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...). Mari kita lihat contoh kode berikut:
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);
//Sama Seperti dibawah Ini.
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

/* output
Seafood Salad Nugget Soup
*/


/* 
Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. 
*/
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];
console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/