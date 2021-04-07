// # ERROR HANDLING

/* Throwing Errors.
Pada kode di atas, fungsi JSON.parse akan melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object. Skenario seperti di atas akan banyak kita temui ketika melakukan request ke API.
*/

let json = '{ "name": "Yoda", "age": 20 }';

try {
  let user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}