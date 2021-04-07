// # ERROR HANDLING

/* Throwing Errors.
throw.
Sekarang anggaplah json sudah sesuai, tetapi ternyata ada eror lain yang terjadi, misalnya karena variabel yang belum terdefinisi.
*/

let json = '{ "name": "Yoda", "age": 20 }';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode;

  console.log(user.name); // Yoda
  console.log(user.age);  // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

/*
Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?

Jawabannya adalah dengan if statement.
*/