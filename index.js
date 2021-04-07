// # ERROR HANDLING

/* Throwing Errors.
Lalu, bagaimana jika json string tidak sesuai dengan format object JavaScript?

Apabila json tidak sesuai format, maka JSON.parse akan menimbulkan eror. Eror tersebut akan ditangkap oleh blok catch dan kode di dalamnya yang akan dieksekusi.
*/

let json = '{ bad json }';

try {
  let user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}