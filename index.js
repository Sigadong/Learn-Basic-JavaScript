// # FUNCTIONAL PROGRAMMING

/*
=> Higher-Order Function.
JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function.
*/

const hello = () => {
  console.log('Hello!')
};

const say = (someFunction) => {
  someFunction();
}

const sayHello = () => {
  return () => {
    console.log('Hello!');
  }
}

hello();
say(hello);
sayHello()();


/*
Higher-Order Function menjadi bagian konsep pada paradigma FP. Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

Teknik Higher-Order Function biasanya digunakan untuk:

Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
Membuat utilities yang dapat digunakan diberbagai tipe data.
Membuat teknik currying atau function composition.


Array map() merupakan salah satu contoh Higher-Order Function yang ada di JavaScript. Karena dalam penggunaanya, ia menerima satu buah argumen yang merupakan sebuah function.

Dengan mengetahui adanya Higher-Order Function, Anda bisa membuat fungsi map() versi Anda sendiri!
*/


const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (array, fn) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(fn(array[i]));
  }

  return newArray;
}

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
  names,
  newNames,
});