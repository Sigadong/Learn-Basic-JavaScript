// # ERROR HANDLING

/* Throwing Errors.
throw.
Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch.
*/

let json = '{ "age": 20 }';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  console.log(user.name); // undefined
  console.log(user.age);  // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

/*
Ketika properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError. Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.
*/