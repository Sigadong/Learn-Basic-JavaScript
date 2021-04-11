// # Object-Oriented Programming (OOP)

/* # 4 Pilar OOP
  - Overriding Method.
Overriding adalah teknik untuk kita melakukan perombakan (baik total ataupun tidak) pada sebuah method ataupun constructor yang dimiliki oleh parent class sehingga dapat disesuaikan dengan behavior di child class.
 */

/*
Overriding Constructor
Sebelumnya kita telah mempelajari tentang constructor dan juga pewarisan. Pada contoh kasus di inheritance atau pewarisan, kita menemukan kasus seperti di bawah ini.
*/
class WhatsApp extends Mail {
  username = 'dicoding';
  isBussinessAccount = true;
    ....
}
//pemanggilan
const wa1 = new WhatsApp(080111000222);

/*
Sekarang bagaimana jika kita menambahkan username dan isBussinessAccount ke dalam constructor? Jika kita membuat constructor baru kodenya akan seperti ini:
*/
class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, phone) {
    this.from = phone;
    this.username = username;
    this.isBussinessAccount = true;
  }
}
const wa1 = new WhatsApp('dicoding', true, 089989090898);
/** 
 Error:
 Must call super constructor in derived class before accessing 'this' or returning from derived constructor
 **/


/** 
 Akan terjadi error tersebut dikarenakan constructor pada kelas parent gagal dieksekusi, meskipun kita telah menggunakan operator this.nameOfProperty. Solusinya kita menggunakan operator super() untuk mengeksekusi method parent-nya. Sehingga constructor pada kelas WhatsApp menjadi seperti ini.
 **/

constructor(username, isBussinessAccount, phone) {
  super(phone);
  this.username = username;
  this.isBussinessAccount = true;
}