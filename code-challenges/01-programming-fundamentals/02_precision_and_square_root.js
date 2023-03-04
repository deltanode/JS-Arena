// Basic mathematical operations: like precision of a number, square root of numbers

let num = parseInt(prompt("You are finding Square Root of: "))
let pre = parseInt(prompt("Enter Precision: "))

function precision(x, pre) {
  return x.toPrecision(pre)
}

let res = precision(Math.sqrt(num), pre)
console.log(`Square Root of ${num} upto ${pre} Precision: ${res}`)
