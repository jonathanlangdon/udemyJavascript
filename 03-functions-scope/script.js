function sum(...numbers) {
 return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1,5,2,3, 100));

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6];
const combined = [arr1, arr2];

console.log(combined);

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user1 = {
  id: 1,
  name: 'John',
};

console.log(loginUser(user1));

function randomPick(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

console.log(randomPick([1,5,2,7,4]));