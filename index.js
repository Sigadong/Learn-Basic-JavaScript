// # Object-Oriented Programming (OOP)

/* #Property & Method Property.
  - Class Method
Class Method adalah function atau method yang ada di dalam sebuah object. Untuk menggunakannya, sebuah class harus di-instantiate terlebih dahulu menjadi object baru bisa dijalankan. Contoh class mail di atas, kita akan menggunakan method sendMessage maka kita harus meng-instantiate Mail terlebih dahulu.
 */

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
/**
output-nya berhasil:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/


/** Kita tidak dapat langsung mengakses sendMessage tanpa melakukan instansiasi terlebih dahulu, misalkan: **/
Mail.sendMessage('hallo', 'penerima@dicoding.com');

/**
output-nya error:
TypeError: Mail.sendMessage is not a function
**/
