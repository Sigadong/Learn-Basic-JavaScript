// # Object-Oriented Programming (OOP)

/* # Overriding Method
  Hampir sama dengan overriding constructor, namun yang di-override di sini adalah method-method yang ada pada parent class. Pada dasarnya semua method yang ada pada kelas parent dapat diakses langsung di child kelasnya (as is).
      super.methodName();
Kadang kita tidak menggunakan sebuah method seutuhnya sama seperti parent kelasnya. namun dapat menambahkan perintah tertentu ataupun menguranginya. Berikut merupakan contoh override pada method sendMessage.
*/
class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, phone) {
    super(phone);
    this.username = username;
    this.isBussinessAccount = true;
  }

  // Overriding method => Melakukan Override Total
  sendMessage = function (msg, to) {
    console.log('Send by WA');
  }
}


// Dari contoh tersebut, ketika kita memanggil method sendMessage hanya akan mengeksekusi kode yang ada pada child class.
const wa1 = new WhatsApp('di', true, 089000999888);
wa1.sendMessage('halo', 089000999888);
/**
Output:
Send by WA
**/


// Untuk tetap melakukan eksekusi kode pada parent class maka perlu menggunakan operator super.methodName().
sendMessage = function (msg, to) {
  super.sendMessage(msg, to);
  console.log('Send by WA');
}


/*
Catatan:
super(...) digunakan untuk memanggil constructor parent, dan hanya dapat digunakan di constructor.

super.methodName(...) digunakan untuk memanggil parent method.
*/