// # JAVASCRIPT FUNDAMENTALS

/* Data Structure.
  - Array
Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel. Contoh:
*/

const myArray = ["Coklat", 42.5, 22, true, "Programming"];

myArray.push('JavaScript');
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();
myArray.unshift("Apple");
console.log(myArray);

delete myArray[1]; //menghapus data dari array berdasarkan index
console.log(myArray);
/* output
[ 'Apple', <1 empty item>, 22, true, 'Programming' ]
*/

myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);


/* output
[ 'Coklat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */


/*
Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda kurung siku.
            user[“home world”];
Untuk mengakses key yang memiliki spasi atau karakter khusus lainnya maka kita perlu menggunakan bracket seperti di atas.
*/
const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine"
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);
/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/



const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";

console.log(spaceship);

/* output
{
name: 'Millenium Falcon',
manufacturer: 'Corellian Engineering Corporation',
maxSpeed: 1300,
color: 'Glossy red',
class: 'Light freighter'
}
*/



const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;

delete spaceship.manufacturer;
console.log(spaceship);

/* output
{ name: 'Millenium Falcon', maxSpeed: 1300, color: 'Glossy red' }
*/