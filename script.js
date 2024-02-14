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
vatResult = [];
for (i = 0; i < productsArray.length; i++) {
  vatResult[i] = productsArray[i];
  vatResult[i].price *= 1.2;
}
console.log(vatResult);
