"use strict";

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  const words = phrase.split(" ");
  const wordCount = {};
  for (const word of words) {
    if (!wordCount[word]) {
      wordCount[word] = 1;
    } else {
      wordCount[word] += 1;
    }
  }
  return wordCount;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.5: ["Cantaloupe", "Honeydew"],
    2.95: ["Watermelon"],
    3.25: ["Musk", "Crenshaw"],
    14.25: ["Christmas"],
  };

  if (!melonPrices[price]) {
    return "No melons with that price.";
  }

  return melonPrices[price].sort();
}

