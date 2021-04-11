// # JAVASCRIPT FUNDAMENTALS

/* - Loop.
While and do-while
*/

let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

/*
Bisa dilihat pada kode di atas bahwa looping dengan while tidak memiliki ketergantungan dengan variabel iterasi seperti pada for loop. Karena itu, meskipun while dapat melakukan perulangan yang sama dengan for, while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.

Bentuk lain dari while adalah perulangan do-while.
*/

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 100);

/*
Kondisi pada while akan dievaluasi sebelum blok kode di dalamnya dijalankan, sedangkan do-while akan mengevaluasi boolean expression setelah blok kodenya berjalan. Ini artinya kode di dalam do-while akan dijalankan setidaknya satu kali.
*/