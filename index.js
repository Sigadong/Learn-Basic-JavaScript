// # JAVASCRIPT FUNDAMENTALS

/* - Object-Oriented Programming (OOP)
Class adalah hal yang sangat penting dalam pemrograman berorientasi objek. Hal itu karena class menyediakan informasi tentang suatu object. Jadi dapat dikatakan object adalah instance dari sebuah class. Class sendiri dalam paradigma OOP secara teknis merupakan sebuah blueprint dalam mendefinisikan karakteristik dari sebuah objek. Sebagai contoh, misalkan terdapat blueprint untuk mendefinisikan objek Mail. Yang mana sms dan postman adalah object dari class Mail.

  Nama Class:	               Mail:
  Karakteristik	            pengirim, penerima, isi pesan
  Kapabilitas/aksi	        kirim pesan, terima pesan

Penulisan kelas di JavaScript sendiri bisa menggunakan sintaks class ataupun fungsi.
 */

// Cara 1
class YourClassName { }
class YourAnotherClassName {
  constructor(property1, property2) { }
}


// Cara 2
function YourClassName() { }
function YourAnotherClassName(property1, property2) { }


// pemanggilannya
const nameOfObject = YourClassName();
const nameOfObject2 = new YourAnotherClassName('value of property', 123);


/*
Sebagai contoh, kita akan membuat blueprint untuk Mail, yang mana memiliki attribute from dan method sendMessage.
*/
// Function.
function Mail() {
  this.from = 'pengirim@dicoding.com';
  this.sendMessage = function (msg, to) {
    console.log('you send:', msg, 'to', to, 'from', this.from);
  };
};

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');

/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

// Class
class Mail {
  from = 'pengirim@dicoding.com';
  sendMessage = function (msg, to) {
    console.log('you send:', msg, 'to', to, 'from', this.from);
  };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');

/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

// Kedua cara di atas adalah contoh penulisan dan instansiasi object dari sebuah Class.