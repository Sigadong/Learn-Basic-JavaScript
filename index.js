// # CONCURRENCY

/* Async-await.
Pembahasan terakhir mengenai asynchronous process kali ini adalah penggunaan syntax async-await. Apa itu?

Seperti yang kita tahu, penulisan kode asynchronous sedikit berbeda dengan proses synchronous. Contohnya, untuk mendapatkan nilai coffee dari sebuah proses asynchronous, kita tidak dapat melakukannya dengan teknik seperti ini:

  function makeCoffee() {
    const coffee = getCoffee(); // async process menggunakan promise
    console.log(coffee);
}
makeCoffee();

Melainkan harus seperti ini:
*/
// Promise.
function makeCoffee() {
  getCoffee().then(coffee => {
    console.log(coffee);
  });
}
// makeCoffee();


// Callback.
function makeCoffee() {
  getCoffee(function (coffee) {
    console.log(coffee);
  });
}

makeCoffee();



/**
 */