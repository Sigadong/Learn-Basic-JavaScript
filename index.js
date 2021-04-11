// # Object-Oriented Programming (OOP)

/* #Property & Method Property.
  - Static Method.
Static method adalah function atau method yang sama seperti class method, akan tetapi untuk mengaksesnya tidak perlu meng-instantiate class, kita cukup menuliskan nama kelas dan nama method-nya secara langsung (NamaClass.namaMehod()).

Sebagai contoh, kita menambahkan sebuah method untuk memeriksa apakah sebuah input adalah nomor handphone:
 */
class Mail {
  static isValidPhone(phone) {
    return typeof phone === 'number';
  }
}

/**Dari contoh di atas, kita dapat memanggil fungsi tersebut tanpa membuat instance kelas Mail terlebih dahulu.*/
Mail.isValidPhone(089000000000) //true