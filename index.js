// # FUNCTIONAL PROGRAMMING

/*
=> Immutability. 
Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat.
Kontras dengan mutable yang artinya objek boleh diubah setelah objek tersebut dibuat.
*/

const user = {
  firstname: 'Harry',
  lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);
