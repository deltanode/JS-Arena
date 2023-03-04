// Checking any number’s nature if it is positive, negative, or zero

let num = parseInt(prompt("Enter Number to check +ve, -ve or zero: "))

function check(num) {
  let res = Math.sign(num)
  if (res === -1) {
    return "-ve"
  } else if (res === 1) {
    return "+ve"
  } else {
    return "zero"
  }
}

console.log(`Number is: ${check(num)}`)
