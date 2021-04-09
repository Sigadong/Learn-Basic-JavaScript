// # CONCURRENCY

/* Async-await.
Namun, sejak ES8 (ECMAScript 2017) kita dapat menuliskan asynchronous process layaknya synchronous process dengan bantuan keyword async dan await.

Fitur async/await sebenarnya hanya syntactic sugar. Itu berarti secara fungsionalitas bukanlah sebuah fitur baru dalam JavaScript. Namun, hanya gaya penulisan baru yang dikembangkan dari kombinasi penggunaan Promise dan generator (pembahasan mengenai generator bisa Anda pelajari di sini). Sehingga, async/await ini tidak dapat digunakan jika tidak ada Promise.

Lantas bagaimana cara menggunakan async/await ini? Pada contoh kode sebelumnya, mari kita lihat juga fungsi getCoffee() dan bagaimana ia mengembalikan promise.
*/

const getCoffee = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Kopi didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  })
}

// Asynchronous Menggunakan .then().
// function makeCoffee() {
//   getCoffee().then(coffee => {
//     console.log(coffee);
//   });
// }

async function makeCoffee() {
  const coffee = await getCoffee();
  console.log(coffee);
}

makeCoffee();


/**
 Keyword async digunakan untuk memberitahu JavaScript supaya menjalankan fungsi makeCoffee() secara asynchronous. Lalu, keyword await digunakan untuk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan nilai promise resolve.

Walaupun await menghentikan proses pembacaan kode selanjutnya pada fungsi makeCoffee, tetapi ini tidak akan mengganggu proses runtime sesungguhnya pada JavaScript (global). Karena fungsi makeCoffee berjalan secara asynchronous, kita tidak dapat menggunakan await tanpa membuat function dalam scope-nya berjalan secara asynchronous.
 */