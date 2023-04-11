const x = parseInt(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = x + y;
const numSum = `${x} + ${y} = ${sum}`;
console.log(numSum);

const difference = Math.max(x, y) - Math.min(x, y);
const numDifference = `The difference between ${x} and ${y} is ${difference}`;
console.log(numDifference);

const product = x * y;
const numProduct = `${x} * ${y} = ${product}`
console.log(numProduct);

const quotient = (Math.max(x, y) / Math.min(x, y)).toFixed(2);
const numQuotient = `The quotient of ${x} and ${y} is ${quotient}`
console.log(numQuotient);

const remainder = Math.max(x, y) % Math.min(x,y);
const numRemainder = `After the quotient of ${x} and ${y}, there is ${remainder} left over`;
console.log(numRemainder);