"use strict";

function wordsInCommon(words1, words2) {
  // Replace this with your code
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);
  const results = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      results.add(word);
    }
  }
  const resultArray = Array.from(results);
  return resultArray;
}

function kidsGame(names) {
  const output = [names.shift()];

  const firstLetterToWords = {};

  for (const name of names) {
    if (firstLetterToWords[name[0]] === undefined) {
      firstLetterToWords[name[0]] = [name];
    } else {
      firstLetterToWords[name[0]].push(name);
    }
  }

  while (true) {
    const lastWord = output[output.length - 1];
    console.log(lastWord);
    const startLetter = lastWord[lastWord.length - 1];
    console.log(startLetter);

    console.log(firstLetterToWords);
    if (firstLetterToWords[startLetter] === []) {
      break;
    }

    const word = firstLetterToWords[startLetter].shift();
    output.push(word);
  }

  return output;
}

