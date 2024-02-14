function greet(name) {
  console.log(`Hello ${name}`);
}

function techWizzardry(callback, ...rest) {
  rest.map(callback);
}

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
