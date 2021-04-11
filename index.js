// # JAVASCRIPT FUNDAMENTALS

/* - Arrow Function.
ES6 memperkenalkan fungsi baru yang dinamakan arrow function expression atau lebih dikenal sebagai arrow function. Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.

Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function. Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.
*/

// >>> REGULAR FUNCTION <<<
// function declaration
function sayHello(greet) {
  console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
  console.log(`Nama saya ${name}`)
}



//  # >>> ARROW FUNCTION <<<
// function expression
const sayHello = (greet) => {
  console.log(`${greet}!`)
}

const sayName = (name) => {
  console.log(`Nama saya ${name}`)
}


// Satu hal yang menarik dari arrow function, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal.
const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
Nama saya Leia
12
 */