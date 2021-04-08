// # CONCURRENCY
/* Dalam pemrograman, salah satu topik yang menantang adalah tentang concurrency. Concurrency sendiri berarti beberapa komputasi yang terjadi pada saat yang bersamaan[4]. Sejauh ini kita telah menuliskan kode secara synchronous. Lebih lanjut, pada modul ini kita akan mempelajari beberapa materi seperti:

Bagaimana menjalankan program secara asynchronous
Bagaimana menangani kode asynchronous
*/

/* Synchronous vs Asynchronous.
Dalam synchronous program, kode dijalankan secara berurutan dari atas ke bawah. Artinya jika kita menuliskan dua baris kode, maka baris kode kedua tidak bisa dieksekusi sebelum kode baris pertama selesai. Kita bisa bayangkan ini dalam kehidupan nyata ketika mengantri membeli kopi di sebuah kedai kopi. Kita tidak akan dilayani sebelum semua antrian di depan kita selesai dilayani, begitu pula orang di belakang kita pun harus menunggu gilirannya.

Dalam asynchronous program, jika kita menuliskan dua baris kode, kita dapat membuat baris kode kedua dieksekusi tanpa harus menunggu kode pada baris pertama selesai dieksekusi. Dalam dunia nyata kita bisa membayangkan dengan memesan kopi, tetapi pemesanannya melalui pelayan. Sembari menunggu pesannya datang, kita dapat melakukan aktivitas lain seperti membuka laptop, menulis, hingga kopi itu datang dengan sendirinya.
 */