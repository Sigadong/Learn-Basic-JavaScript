// # CONCURRENCY

/* Handle onRejected using async-await.
Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled). Lantas bagaimana jika promise gagal dilakukan (onRejected)? Caranya cukup sederhana. Kembali lagi kepada prinsip synchronous code. Kita dapat menangani sebuah eror atau tolakan dengan menggunakan try...catch.

Ketika menggunakan async/await, biasakan ketika mendapatkan resolved value dari sebuah promise, untuk menempatkannya di dalam blok try seperti ini:
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

async function makeCoffee() {
  try {
    const coffee = await getCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeCoffee();


