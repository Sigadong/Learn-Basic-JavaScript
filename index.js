// # CONCURRENCY

/* Chaining Promise using async-await
Pertanyaan selanjutnya adalah bagaimana melakukan promise berantai bila menggunakan async/await? Jawabannya adalah sama seperti ketika kita mendapatkan nilai dari function yang berjalan secara synchronous.

Dengan pendekatan async-await, maka kode mesin kopi kita akan menjadi seperti ini:
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

// Dua Fungsi Tambahan (boilWater & grindCoffeeBeans).
const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air...");
    setTimeout(() => {
      resolve("Air panas sudah siap!");
    }, 2000);
  })
}

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("Menggiling biji kopi...");
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 1000);
  })
}

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap!")
    }, 2000);
  });
};

async function makeEspresso() {
  try {
    await checkAvailability();
    await checkStock();

    await Promise.all([boilWater(), grindCoffeeBeans()]);

    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeEspresso();

/*
NB:
Async/await ini menjadi fitur baru yang sangat berguna. Terlebih untuk kita yang lebih nyaman menangani proses asynchronous dengan menggunakan gaya synchronous.
*/

