// # JAVASCRIPT FUNDAMENTALS

/* Data Structure.
  - Object
  Sebuah tipe data yang sangat berguna dalam pengembangan aplikasi dengan JavaScript. Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.

  Object berisi pasangan key dan value yang juga dikenal dengan property. Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai. Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain
*/

const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
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