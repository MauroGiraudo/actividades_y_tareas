'use strict';

let normal = [];
let loga = [];

for (let i = 0; i < 10; i++) {
  const distNormal = normalDistribution(100, 10);
  const distLoga = logarithmicDistribution(100, 10);

  normal.push(distBasedRandom(distNormal));
  loga.push(distBasedRandom(distLoga));
}

console.log(`normal: ${normal}`);
console.log();
console.log(`loga: ${loga}`);

function distBasedRandom(dist) {
  const u = Math.random();
  return Math.round(1000 * dist(u)) / 1000; //round in 3 decimals
}

function logarithmicDistribution(a, b) {
  return function (u) {
    return a * Math.exp(u * Math.log(b / a));
  };
}

function normalDistribution(mean, stddev) {
  return function (u) {
    const z0 =
      Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
    return z0 * stddev + mean;
  };
}
console.log();
console.log();

//-----------------------------------------------

('use strict');

const words = ['Hi all', 'this are', 'high-order functions'];

const highOrderFunction = (value, index) =>
  console.log(
    `The value of the ${
      index + 1
    }° position is '${value}' and the whitespace is the ${
      value.indexOf(' ') + 1
    }° character of the sentence`
  );

words.forEach(highOrderFunction);
console.log();
words.forEach((value, index) =>
  console.log(
    `The ${index + 1}° item has a whitespace at the ${
      value.indexOf(' ') + 1
    }° position`
  )
);
