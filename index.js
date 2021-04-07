// # ERROR HANDLING

/* Error Handling.
Ketika mengembangkan sebuah aplikasi, sebagus apa pun kita membuatnya, akan selalu ada kemungkinan terjadi error atau crash. Entah terjadi karena kesalahan kita dalam menyusun logika kode, kesalahan input dari user, atau banyak alasan lainnya.
Ketika aplikasi mengalami eror, aplikasi akan berhenti dan program setelahnya tidak akan dieksekusi.

Sebagai developer, tentunya menjadi tugas kita untuk memastikan aplikasi tetap berjalan bagaimana pun kondisinya. Termasuk mengatasi ketika terjadi eror. Lantas bagaimana?

Pada modul ini, kita akan mempelajari beberapa hal, seperti:
 - Bagaimana menangani error yang mungkin muncul pada aplikasi supaya tidak crash.
 - Membuat custom error untuk menandai error yang tidak tersedia pada JavaScript.
*/

try {
  console.log("Awal blok try");   // (1)
  errorCode;                      // (2)
  console.log("Akhir blok try");  // (3)
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}