// # CONCURRENCY

/* Chaining Promises.
Kita sudah tahu buruknya penulisan callback hell. Namun, kita tidak dapat menghindari keadaan di mana proses asynchronous saling bergantung satu sama lain. Untuk menghindari callback hell, salah satu solusinya adalah Promise.

Dengan promise kita dapat melakukan proses asynchronous secara berantai. Contohnya, ketika kita ingin membuat satu gelas kopi, akan ada beberapa tahapan yang dikerjakan oleh mesin pembuat kopi, seperti memastikan mesin sudah siap, memastikan stok biji kopi dan air cukup, membuat kopi, lalu menuangkannya ke dalam gelas. Tahapan tersebut harus dilakukan secara berurutan.

Untuk memastikan rangkaian promise berjalan dengan sesuai, kita perlu mengembalikan (return) promise selanjutnya. Contohnya adalah seperti ini:
*/

const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) {
        resolve("Mesin kopi siap digunakan.");
      } else {
        reject("Maaf, mesin sedang sibuk.");
      }
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
        resolve("Stok cukup. Bisa membuat kopi.");
      } else {
        reject("Stok tidak cukup!");
      }
    }, 1500);
  });
};

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap!")
    }, 2000);
  });
};

function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value)
      return brewCoffee();
    })
    .then(value => {
      console.log(value);
      state.isCoffeeMachineBusy = false;
    })
    .catch(rejectedReason => {
      console.log(rejectedReason);
      state.isCoffeeMachineBusy = false;
    });
}

makeEspresso();