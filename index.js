// # JAVASCRIPT FUNDAMENTALS

/* - Strings

Tipe data selanjutnya adalah string yang merupakan sebuah teks. Untuk menetapkan nilai sebagai string pada variabel gunakan tanda petik satu (‘) atau petik dua (“) di antara teksnya. Contohnya:
*/

let greet = "Hello";
console.log(typeof (greet))

/* output: string */


/**
 Lalu bagaimana jika teks memiliki kedua tanda petik seperti ini?
 */
const answer = '"I think it's awesome!" he answered confidently';
console.log(answer);

/*
Tentunya kode di atas akan menghasilkan eror. Solusinya, gunakan backslash(\) untuk mengurangi ambiguitas dalam tanda petik. Mekanisme ini juga dikenal dengan nama escape string. Sehingga kode di atas akan menjadi seperti berikut:
*/

const answer = '"I think it\'s awesome!" he answered confidently';

/*
Backslash sebelum tanda petik akan memberitahukan interpreter bahwa itu hanyalah tanda petik dan tidak boleh ditafsirkan sebagai pembatas string. Selain tanda petik, backslash juga berguna untuk mengabaikan simbol lain yang menimbulkan ambigu di dalam string, contohnya seperti backslash itu sendiri.
*/

/*
Selain concatenation, string pada JavaScript juga mendukung string interpolation. Sederhananya, kita bisa memasukkan variabel ke dalam sebuah string template. Contohnya adalah seperti berikut:
*/

const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);

/* output: Hello, my name is Luke. */

/*
Perhatikan bahwa untuk mendefinisikan string template, Anda perlu menggunakan backticks (`), biasanya terletak di keyboard di sebelah kiri tombol 1). Di dalam string letakkan variabel yang ingin dimasukkan ke dalam placeholder ${myName}.
*/