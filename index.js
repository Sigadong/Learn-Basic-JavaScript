// # JAVASCRIPT FUNDAMENTALS

/* - Object-Oriented Programming (OOP)
Introduction to OOP
Object Oriented Programming (OOP) adalah salah satu paradigma dalam dunia pemrograman komputer. Ia adalah pendekatan berbasiskan objek, di mana suatu objek terdiri dari kumpulan atribut dan method di dalamnya. Di dalam JavaScript, atribut adalah variable, yang digunakan untuk menyimpan nilai. Sementara method adalah fungsi, yang digunakan untuk menjalankan suatu proses

Sebelumnya kita sudah mengenal dan mempelajari object. Di mana object dapat merepresentasikan sebuah layer data. Jika string dianalogikan sebagai kata (kumpulan karakter), number sebagai angka, dan boolean sebagai pernyataan benar atau salah; object dianalogikan sebagai sebuah benda yang lebih kompleks. OOP-pun sama, namun lebih kompleks lagi karena di dalam paradigma OOP terdapat 4 pilar utama, yaitu :
  - encapsulation, 
  - abstraction,
  - inheritance, dan
  - polymorphism.

Sebagai contoh, kita memiliki sebuah data object bernama mail seperti contoh di bawah ini.
 */


const mail = {
  from: "pengirim@dicoding.com",
  sendMessage: function (msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  }
};

console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@dicoding.com');

/**
output:
you send: apakabar to penerima@dicoding.com from pengirim@dicoding.com
**/