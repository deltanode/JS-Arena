// Basic mathematical operations like swapping two numbers

function swap(a, b) {
  a = a + b
  b = a - b
  a = a - b
  return [a,b]
}

let num1 = parseInt(prompt("Enter first number: "))
let num2 = parseInt(prompt("Enter Second number: "))

console.log(`Before Swapping:\nNum1= ${num1} & Num2= ${num2}`)
// document.write(`<br>Before Swapping: <br>Num1= ${num1} & Num2= ${num2}`)

let [n1,n2] = swap(num1,num2)


console.log(`After Swapping:\nNum1= ${n1} & Num2= ${n2}`);
// document.write(`<br><br>After Swapping:<br>Num1= ${num1} & Num2= ${num2}`)
