// # JAVASCRIPT FUNDAMENTALS

/* - Comparison Operator
Terdapat serangkaian karakter khusus yang disebut dengan operator pembanding/komparasi yang dapat mengevaluasi dan membandingkan dua nilai. Berikut daftar operator dan fungsinya:
Operator:      Fungsi:
  ==         Membandingkan kedua nilai apakah sama. (tidak identik).
  !=         Membandingkan kedua nilai apakah tidak sama. (tidak identik).
  ===        Membandingkan kedua nilai apakah identik.
  !==        Membandingkan kedua nilai apakah tidak identik.
  >          Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
  >=         Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
  <          Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
  <=         Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
*/

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

/* output
true
false
*/

/*Perbedaan antara “Sama” dan “Identik”.
Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).

Kita sudah mengetahui bahwa setiap nilai pasti memiliki tipe data baik itu number, string atau boolean. Contohnya sebuah string “10” dan number 10 merupakan hal yang serupa, tetapi keduanya tidak benar-benar sama.
*/

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

/* output
true
false
*/