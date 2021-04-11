// # JAVASCRIPT FUNDAMENTALS

/* Kuis Coding: Map */

/** Declaring Function.

 Parameter & Argument.

Di dalam fungsi kita akan banyak bertemu istilah parameter & argument. Penggunaan istilah ini sering kali tertukar, bahkan di kalangan developer.

Perbedaan mendasar antara keduanya antara lain:
Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. Contoh:
    function multiply(a, b) {
        return a * b;
    }

Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi. Contohnya:
    multiply(3, 4);
*/

function greeting(name, language) {
  if (language === "English") {
    return `Good Morning ${name}!`
  } else if (language === "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

/* output
Bonjour Harry!
*/



/*
Expression Function
Cara lain untuk membuat sebuah fungsi pada JavaScript adalah expression function. Ingat kembali bahwa expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.

Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function. Berikut ini merupakan contoh penulisan expression function:
*/
const greeting = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
}

console.log(greeting('Ron', 'English'));
/* output
Good Morning Ron!
*/
