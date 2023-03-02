let num1 = parseInt(prompt("Enter first number: "))
let num2 = parseInt(prompt("Enter Second number: "))

// console.log(`Before Swapping:\nNum1= ${num1} & Num2= ${num2}`)
document.write(`<br>Before Swapping: <br>Num1= ${num1} & Num2= ${num2}`)

num1 = num1 + num2
num2 = num1 - num2
num1 = num1 - num2

// console.log(`After Swapping:\nNum1= ${num1} & Num2= ${num2}`)
document.write(`<br><br>After Swapping:<br>Num1= ${num1} & Num2= ${num2}`)
