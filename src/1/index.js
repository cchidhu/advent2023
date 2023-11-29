import fs from 'fs'
const input = fs.readFileSync("input.txt","utf-8")
const results = input.split("\n\n").map(value => value.split("\n").reduce((accum, currentValue) => accum + Number(currentValue),0))
results.sort((a,b) => b-a)
console.log(results[0]+results[1]+results[3])
