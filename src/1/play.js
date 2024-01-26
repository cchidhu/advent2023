const input = "zeightwozfsgcsbcjf6nine4five5sthreenine";
const regex = /(?:eight|two|five)/g;
const matches = sanitize(input).match(regex);

console.log(matches); // Output: [ 'eight', 'two', 'five' ]


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
