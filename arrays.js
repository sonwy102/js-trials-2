"use strict";

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const result = [];

  for (let i = 0; i < items.length; i += 2) {
    result.push(items[i]);
  }

  console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  const itemsSorted = items.sort((a, b) => a - b);
  const sliced = items.slice(0, n);

  return sliced.reverse();
}
