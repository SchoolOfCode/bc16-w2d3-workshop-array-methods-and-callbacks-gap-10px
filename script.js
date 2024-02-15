function greet(name) {
  console.log(`Hello ${name}`);
}

function techWizzardry(callback, ...rest) {
  rest.map(callback);
}

let people = ["dave", "kevin", "simon", "Guillermo"];

techWizzardry(greet, ...people);

let productsArray = [
  {
    product: "Shoes",
    price: 25,
  },
  {
    product: "Hat",
    price: 5,
  },
  {
    product: "socks",
    price: 2,
  },
  {
    product: "bottoms",
    price: 15,
  },
  {
    product: "pants",
    price: 10,
  },
  {
    product: "knickers",
    price: 20,
  },
];

let vatArray = productsArray.map((x) => x.price * 1.2);

let bigVatArray = productsArray.map((x) => {
  x.price *= 1.2;
  return x;
});

// ****** Ticket 4 *******

// task 1
let numArray = [21, 24, 14, 99, 109, 47];
doubleNums = numArray.map((x) => x * 2);

// task 2
const words = ["spray", "elite", "exuberant", "destruction", "present"];
let filterResult = words.filter((word) => word.length > 6);
console.log(filterResult);

// task 3
// so p holds the value of 0 initially.
// c holds the value at index 0 then 1 then 2 etch
// then p += c and then c moves on to the next index.
// the result is the arry is summed. horrible syntax
const numbers = [3, 6, 2, 9, 1];
const sum = numbers.reduce((p, c) => {
  return p + c;
}, 0);
console.log(sum);

// task 4
const months = ["one", "two", "three", "five"];
months.splice(3, 0, "plumb");
// Inserts at index 3 and delets 0 off the end
// .splice(3, 1) would delete the five.
// inserts into the original array.
console.log(months);

// returns true or false
console.log(months.includes("one"));

// returns the first index at which a given element
// can be found in the array, or -1 if it is not present.
console.log(months.indexOf("plumb"));
console.log(months.indexOf("foo"));

// ***** Ticket 5 ********
console.log(" **** Ticket 5 ****** ");

// map method
let vatResult = productsArray;
for (i = 0; i < vatResult.length; i++) {
  vatResult[i].price *= 1.2;
}
console.log(vatResult);
console.log(productsArray);

//  testing
console.log(" *** testing *** ");

let originalList = [1, 2, 4, 8];
// let newList = originalList; Wrong way to do it

let newList = [...originalList];

for (var i = 0; i < newList.length; i++) {
  newList[i] += 1;
}

console.log("new list " + newList);
console.log("old list " + originalList);

/**
 * This function adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function addNumbers(a, b) {
  return a + b;
}
