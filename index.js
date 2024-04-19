//Soal 1
const array = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

array.sort(function (a, b) {
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  } else if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  return typeof a === "string" ? -1 : 1;
});

console.log(array);

//Soal 2
function pattern_count(text, pattern) {
  let count = 0;

  for (let i = 0; i <= text.length - pattern.length; i++) {
    let match = true;
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      count++;
    }
  }

  return count;
}

const teks = "aaaa";
const pola = "aa";
console.log(pattern_count(teks, pola));

//SOAL 3
function countAndSortLetters(input) {
  let counts = {};
  for (let letter of input) {
    let key = letter.toLowerCase();
    counts[key] = (counts[key] || 0) + 1;
    if (letter !== key) {
      counts[letter] = (counts[letter] || 0) + 1;
    }
  }

  let result = [];
  for (let letter in counts) {
    result.push({
      letter: letter,
      count: counts[letter],
    });
  }

  result.sort(function (a, b) {
    return a.letter.localeCompare(b.letter);
  });

  return result;
}

const input = "cCaABB";
const output = countAndSortLetters(input);
console.log(output);
