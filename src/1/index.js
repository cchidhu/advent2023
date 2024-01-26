import fs from 'fs'

const twoDigitNumberList = []

function sanitize(input) {
  return input
    .replaceAll('eightwo', 'eighttwo')
    .replaceAll('twone', 'twoone')
    .replaceAll('nineight', 'nineeight')
    .replaceAll('threeight', 'threeeight')
    .replaceAll('sevenine', 'sevennine')
    .replaceAll('oneight', 'oneeight')
    .replaceAll('fiveight', 'fiveeight')
}

const wordToDigitMap = new Map([
  ['zero', 0],
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
  ['0', 0],
  ['1', 1],
  ['2', 2],
  ['3', 3],
  ['4', 4],
  ['5', 5],
  ['6', 6],
  ['7', 7],
  ['8', 8],
  ['9', 9]
]);
// Regex pattern to match numbers or string representations like "one", "two", "three"
//let pattern = /(?:1|2|3|4|5|6|7|8|9|0)/g;
let pattern = /(?:1|2|3|4|5|6|7|8|9|0|one|two|three|four|five|six|seven|eight|nine)/g;

const input = fs.readFileSync("input.txt", "utf-8")
const inputList = input.split("\n")
inputList.pop()
inputList.forEach(input => {
  // Extract matches
  let matches = sanitize(input).match(pattern);
  const digitsList = matches.map(match => wordToDigitMap.get(match))
  console.log(digitsList, digitsList[0].toString() + digitsList[digitsList.length - 1].toString())
  twoDigitNumberList.push(digitsList[0].toString() + digitsList[digitsList.length - 1].toString())
})

const sumOfCalibrationValues = twoDigitNumberList.reduce((accum, currentValue) => accum + Number(currentValue), 0)
console.log(sumOfCalibrationValues)
