// # ERROR HANDLING

/* Throwing Errors.
Lalu, bagaimana jika json yang didapat adalah seperti ini?

*/

let json = '{ "age": 20 }';

try {
  let user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

/*
Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan. Namun, tidak adanya properti name pada json sebenarnya sama saja dengan eror karena akan berdampak pada jalannya program kita.

Untuk mengatasinya, kita bisa menggunakan throw
*/