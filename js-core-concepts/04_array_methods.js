/**
 * Array Methodsin JavaScript:
 *
 *   Array Method   | Mutate Original Array | Description
 *   ---------------|-----|-------------------------------
 * - array.length   |     | It is a Array Property (not an Array method)
 *
 * - toString()     |     | return a string representing the elements of the array.
 * - join()         |     | return a string with all array elements joined. If arr.length is 0, the empty string is returned.
 * - concat()       |     | return a new Array instance.
 * - splice()       | Yes | return an array containing the deleted elements. If no elements are removed, an empty array is returned.
 * - slice()        | No  | return a new array containing the extracted elements.
 * - indexOf()      |     | return the first index of the element in the array; -1 if not found.
 * - lastIndexOf()  |     | return the last index of the element in the array; -1 if not found. The array is searched backwards, starting at fromIndex.
 * 
 * Higher-order array methods in JavaScript -----
 * - sort()         | Yes | Sorts the elements of an array in place and returns the array. The default sort order is according to string Unicode code points.
 * - forEach()      |     | undefined
 * - map()          |     | return a new array with each element being the result of the callback function.
 * - filter()       |     | Returns a new array with all elements that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.
 * - reduce()       |     | Reduce the array to a single value. The value returned by the function is stored in an accumulator (result/total).
 * - reduceRight()  |     | Executes a reducer function (that you provide) on each element of the array resulting in a single output value(from right to left).
 * - flat()         |     | return a new array with the sub-array elements concatenated into it.
 * - flatMap()      |     | Returns a new array formed by applying a given callback function to each element of the array,
 * - some()         |     | return true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
 * - every()        |     | return true if callbackFn returns a truthy value for every array element. Otherwise, false.
 * - find()         |     | return the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
 * - findIndex()    |     | return the index of the first element in the array that passes the test. Otherwise, -1.

 *
 * - pop()          |     | Removes the last element from an array and returns that element.
 * - push()         |     | Appends new elements to the end of an array, and returns the new length.
 * - shift()        |     | Removes the first element from an array and returns that element.
 * - unshift()      |     | Adds new elements to the beginning of an array, and returns the new length.

 *
 * - include()      |     | Returns true if the given element is present in the array.
 * - reverse()      | Yes | Reverses the order of the elements in an array.
 * - fill()         | Yes | Fill the elements in an array with a static value.
 * - isArray()      |     | Returns true if the given value is an array.
 * - at()           |     | Returns a value at the specified index.
 * - of()           |     | Creates a new array with a variable number of arguments, regardless of number or type of the arguments.
 * 
 * - from()         |     | Creates a new array from an array-like or iterable object.
 * - copyWithin()   |     | Copies array elements within the array. Returns the modified array.
 *
 * Reference:
 * - https://www.doabledanny.com/javascript-array-cheat-sheet
 * - https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769
 * - https://htmlcheatsheet.com/js/
 */

/**
 * Array methods are shared
 * - In JavaScript, all arrays are constructed from the global Array class.
 * - All array methods are stored in the Array.prototype object.
 *
 * - This means that array methods are shared between array instances via prototypal inheritance.
 *  */
const num = [11, 22, 33, 44, 5.5, 6.66, 77]
const fruits = ["Banana", "Orange", "Apple", "Mango"]
const arr = ["Apple", 11, 25.22222, true, false, NaN, null, undefined]

/**
 *  Array.length
 *
 * - It is a Array Property.
 * - The length data property of an Array instance represents the number of elements in that array.
 * - The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.
 * */
console.log(num.length) // 7
console.log(fruits.length) // 4
console.log(arr.length) // 8

/**
 *  Array.prototype.toString()
 *
 *  - Converts an array into a string of comma-separated array values.
 *
 *  Syntax: toString()
 *
 * */
console.log(num.toString()) // 11,22,33,44,5.5,6.66,77
console.log(fruits.toString()) // Banana,Orange,Apple,Mango
console.log(arr.toString()) // Apple,11,25.22222,true,false,NaN,,

/**
 *  Array.prototype.join(separator)
 *
 *  - Joins all elements of an array into a string.
 *  - Similar to toString, but you can specify the separator.
 *  - The join() method creates and returns a new string by concatenating all of the elements in
 *    an array, separated by commas or a specified separator string.
 *  - If the array has only one item, then that item will be returned without using the separator.
 *
 *  Syntax: join()
 *          join(separator)
 *
 * */
console.log(num.join()) // 11,22,33,44,5.5,6.66,77
console.log(num.join("-")) // 11-22-33-44-5.5-6.66-77
console.log(fruits.join(" ")) // Banana Orange Apple Mango
console.log(arr.join(" and ")) // Apple and 11 and 25.22222 and true and false and NaN and  and

/**
 *  Array.prototype.concat()
 *
 *  - The concat() method is used to merge two or more arrays.
 *  - This method does not change the existing arrays, but instead returns a new array.
 *  - Create a new array by concatenating existing arrays:
 *
 *  Syntax: concat()
 *          concat(value0)
 *          concat(value0, value1)
 *          concat(value0, value1, … , valueN)
 *
 * */
let concatArr1 = num.concat(fruits)
let concatArr2 = num.concat(fruits, arr)
console.log(concatArr1) // [11, 22, 33, 44, 5.5, 6.66, 77, 'Banana', 'Orange', 'Apple', 'Mango']
console.log(concatArr2) // [11, 22, 33, 44, 5.5, 6.66, 77, 'Banana', 'Orange', 'Apple', 'Mango', 'Apple', 11, 25.22222, true, false, NaN, null, undefined]

/**
 *  Array.prototype.splice()
 *
 * - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 * - The splice() method can be used to add new items to an array.
 * - splice() returns an array with the deleted items.
 * - Since, splice() mutates the original array, it is often best to make a copy of it before splicing.
 *
 *  Syntax: splice(start)
 *          splice(start, deleteCount)
 *          splice(start, deleteCount, item1)
 *          splice(start, deleteCount, item1, item2, itemN)
 *
 * */

let fruits1 = [...fruits] // Shallow Copy

console.log(fruits1) // ['Banana', 'Orange', 'Apple', 'Mango']
let splicedArr = fruits1.splice(1, 0, "A", "B")
console.log(fruits1) // ['Banana', 'A', 'B', 'Orange', 'Apple', 'Mango']
console.log(splicedArr) // []
/* - The first parameter (1) defines the index from where the new elements should be added (spliced in).
 * - The second parameter (0) defines how many elements should be removed.
 * - The rest of the parameters ('A', 'B') define the new elements to be added.
 * */

let fruits2 = [...fruits] // Shallow Copy  using spread operator

console.log(fruits2) // ['Banana', 'Orange', 'Apple', 'Mango']
let splicedArr2 = fruits2.splice(1, 2, "A", "B", "C")
console.log(fruits2) // (5) ['Banana', 'A', 'B', 'C', 'Mango']
console.log(splicedArr2) // ['Orange', 'Apple']
/* - The first parameter (1) defines the index from where the new elements should be added (spliced in).
 * - The second parameter (2) defines how many elements should be removed.
 * - The rest of the parameters ('A', 'B', 'C') define the new elements to be added.
 * */

let fruits3 = [...fruits, "Grapes", "Kiwi", "Guava"] // Shallow Copy using spread operator

console.log(fruits3) // ['Banana', 'Orange', 'Apple', 'Mango', 'Grapes', 'Kiwi', 'Guava']
let splicedArr3 = fruits3.splice(1, 3)
console.log(fruits3) // (5)  ['Banana', 'Grapes', 'Kiwi', 'Guava']
console.log(splicedArr3) // ['Orange', 'Apple', 'Mango']
/* - The first parameter (1) defines the index from where the new elements should be added (spliced in).
 * - The second parameter (2) defines how many elements should be removed.
 * - The rest of the parameters (optional) define the new elements to be added.
 * */

/**
 *  Array.prototype.slice()
 *
 *  - slice() slices out a piece of an array, and returns it in a new array:
 *  - The original array will not be modified.
 *  - The slice() method returns a shallow copy of a portion of an array into a new array object
 *  - selected from start to end (end not included) where start and end represent the index of items in that array.
 *
 *  Syntax: slice()
 *          slice(start)
 *          slice(start, end)  (Note: As, the "end" index value is not included in the returned array.
 *                                    So, value in retured array will included till index "end-1" )
 *
 * */
console.log(fruits) // ['Banana', 'Orange', 'Apple', 'Mango']
console.log(fruits.slice()) // ['Banana', 'Orange', 'Apple', 'Mango']
console.log(fruits.slice(2)) // ['Apple', 'Mango']
console.log(fruits.slice(0, 2)) // ['Banana', 'Orange']
console.log(fruits.slice(1, 2)) // ['Orange']
console.log(fruits.slice(1, 3)) // ['Orange', 'Apple']
console.log(fruits.slice(0, 3)) // ['Banana', 'Orange', 'Apple']
console.log(fruits) // ['Banana', 'Orange', 'Apple', 'Mango']

/**
 *  Array.prototype..indexOf()
 *
 *  - Find the first index that contains a certain value (searches from left to right) or -1 if it is not present.
 *
 *  Syntax: indexOf(searchElement)
 *          indexOf(searchElement, fromIndex)
 *
 * */
let fruits4 = [...fruits, "Apple", "Kiwi", "Apple"]
console.log(fruits4) //  ['Banana', 'Orange', 'Apple', 'Mango', 'Apple', 'Kiwi', 'Apple']
console.log(fruits4.indexOf("Apple")) // 2
console.log(fruits4.indexOf("Apple", 3)) // 4
console.log(fruits4.indexOf("Apple", 4)) // 4
console.log(fruits4.indexOf("Apple", 5)) // 6
console.log(fruits4.indexOf("Apple", 7)) // -1
console.log(fruits4.indexOf("ap")) // -1
console.log(fruits4.indexOf("apple")) // -1

/**
 *  Array.prototype.lastIndexOf()
 *
 *  - Find the last index that contains a certain value (searches from right to left) or -1 if it is not present.
 *  - The array is searched backwards, starting at fromIndex.
 *
 *  Syntax: lastIndexOf(searchElement)
 *          lastIndexOf(searchElement, fromIndex)
 *
 * */
console.log(fruits4) //  ['Banana', 'Orange', 'Apple', 'Mango', 'Apple', 'Kiwi', 'Apple']
console.log(fruits4.lastIndexOf("Apple")) // 6
console.log(fruits4.lastIndexOf("Apple", 3)) // 2
console.log(fruits4.lastIndexOf("Apple", 4)) // 4
console.log(fruits4.lastIndexOf("Apple", 5)) // 4
console.log(fruits4.lastIndexOf("Apple", 7)) // 6
console.log(fruits4.lastIndexOf("Apple", 1)) // -1
console.log(fruits4.lastIndexOf("ap")) // -1
console.log(fruits4.lastIndexOf("apple")) // -1

/**
 *  Array.prototype.sort()
 *
 *  - sort puts an array's elements in ascending order.
 *  - It is an "in-place" sorting algorithm - meaning that it mutates the original array and returns it.
 *
 *  - The default sort order is ascending, built upon converting the elements into strings,
 *    then comparing their sequences of UTF-16 code units values.
 *  - By default, sort works on strings:
 *
 *  Syntax: sort()
 *          sort(compareFn)
 *
 *  compareFn (Optional) :  A function that defines the sort order.
 *                          The return value should be a number whose positivity indicates the relative order of the two elements.
 *   The function is called with the following arguments:
 *    - a: The first element for comparison. Will never be undefined.
 *    - b: The second element for comparison. Will never be undefined.
 *   If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
 * */
const fruits5 = [...fruits]
console.log(fruits5) // ['Banana', 'Orange', 'Apple', 'Mango']
fruits5.sort()
console.log(fruits5) // ['Apple', 'Banana', 'Mango', 'Orange']

// For numbers, we need to pass a comparison call-back function:
const num3 = [...num]
console.log(num3) // [11, 22, 33, 44, 5.5, 6.66, 77]
num3.sort((a, b) => a - b)
console.log(num3) // [5.5, 6.66, 11, 22, 33, 44, 77]
/**
 * Initially, a is 11 and b is 22.
 * If a - b is negative, it knows that b is larger, and therefore should come after a.
 * If positive, b should come before a.
 * */

/**
 *  Array.prototype.forEach()
 *
 *  - The forEach() method executes a provided function once for each array element.
 *  - forEach() is used to loop through the array.
 *
 *  - The forEach method is basically just a shorter way of writing:
 *     for(let i = 0; i < arr.length; i++) {...}.
 *  - It loops through the given array, and calls the given call-back function for each of the elements in the array.
 *
 *   Syntax: forEach(callbackFn)
 *           forEach(callbackFn, thisArg)
 *
 *  - callbackFn: The call-back passed to the forEach() function can accept any of the three arguments:
 *     -> element : The current element being processed in the array.
 *     -> index   : The index of the current element being processed in the array.
 *     -> array   : The array forEach() was called upon.
 *  - thisArg: A value to use as this when executing callbackFn.
 *
 *  NOTE: It's better to use "map" if you want to return a new array with return value of each call-back run.
 * */
console.log(fruits) // (4) ['Banana', 'Orange', 'Apple', 'Mango']
fruits.forEach(element => console.log(element))
// Banana
// Orange
// Apple
// Mango

/**
 *  Array.prototype.Map()
 *
 *  - The map function takes in a call-back function as argument, and executes that function on each element
 *    of the array it is working on.
 *  - It maps each of the return values of the call-back into a NEW array.
 *  - It does not mutate the original array.
 *  - The call-back passed to the map() function can accept any of the three arguments:
 *    - the item value
 *
 *   Syntax: map(callbackFn)
 *           map(callbackFn, thisArg)
 *
 *  - callbackFn: A function to execute for each element in the array.
 *                Its return value is added as a single element in the new array.
 *     The function is called with the following arguments:
 *     -> element : The current element being processed in the array.
 *     -> index   : The index of the current element being processed in the array.
 *     -> array   : The array map() was called upon.
 *  - thisArg: A value to use as this when executing callbackFn.
 *
 * */
console.log(num) // [11, 22, 33, 44, 5.5, 6.66, 77]
const doubleNum = num.map(element => element * 2)
console.log(doubleNum) //[22, 44, 66, 88, 11, 13.32, 154]

/**
 *  Array.prototype.filter()
 *
 *  - The filter method is used to filter out array elements that fail a boolean test.
 *  - Only elements that pass the test are allowed through into the new return array.
 *
 *   Syntax: filter(callbackFn)
 *           filter(callbackFn, thisArg)
 *
 * */
let articles = [
  { title: "Javascript Basics", author: "Danny Adams" },
  { title: "Python arrays", author: "Amy Sanders" },
  { title: "Arrays in Javascripts", author: "Danny Adams" }
]
// Lets say the user searches for all articles with PHP in the title
let JavascriptArticles = articles.filter(a => a.title.includes("Javascript"))
console.log(JavascriptArticles)
// [
//   { title: 'Javascript Basics', author: 'Danny Adams' },
//   { title: 'Arrays in Javascripts', author: 'Danny Adams' },
// ];

// Another use case is filtering via size:
let cities = [
  { name: "Stokington", rivers: 3 },
  { name: "Phillydelfia", rivers: 6 },
  { name: "New Ports", rivers: 2 }
]
let moreThanTwoRivers = cities.filter(c => c.rivers > 2)
console.log(moreThanTwoRivers)
// [
//   { name: 'Stokington', rivers: 3 },
//   { name: 'Phillydelfia', rivers: 6 },
// ];

/**
 *  Array.prototype.reduce()
 *
 *  - The reduce method runs the call-back function on each array element, and reduces the array down into a single value.
 *
 *  Syntax: reduce(callbackFn)
 *          reduce(callbackFn, initialValue)
 *
 *  - The reduce function itself takes two arguments:
 *     1. A call-back function
 *     2. An initial value
 *
 *  - callbackFn: It executes for each element in the array.
 *                Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn.
 *                For the last invocation, the return value becomes the return value of reduce().
 *    The function is called with the following arguments:
 *      - total or "accumulator"
 *      - currentValue: current item value
 *      - currentIndex: current item index
 *      - array: The array reduce() was called upon.
 *  - initialValue (Optional): A value to which accumulator is initialized the first time the callback is called.
 *
 * */
let numbers = [1, 2, 3, 4]
let totalNum = numbers.reduce((total, currentNum) => total + currentNum)
console.log(totalNum) // 10
/**
 * In the above example,
 * - total is initially the first value in the array (1), and
 * - currentNum is the second (2).
 *
 * Now, If we wanted to start from a different value, we can pass in a second initialVal argument to reduce.
 * Let's say we wanted to find the total, starting from 5:
 */
let numbers2 = [1, 2, 3, 4]
let totalNum2 = numbers2.reduce((total, currentNum) => total + currentNum, 5) // 15
console.log(totalNum2) // 15
/**
 * Above, total will now start out as 5, and currentNum will be the first element in the array (1).
 *
 * Another good use case of reduce is to find the max or min value in an array:
 */
let arr1 = [1, 2, 3]
let max = arr1.reduce((a, b) => {
  return Math.max(a, b)
}, -Infinity)
console.log(max) // 3

/**
 *  Array.prototype.reduceRight()
 *
 *  - Executes a reducer function (that you provide) on each element of the array resulting in a single output value(from right to left).
 *
 *  Syntax: reduceRight(callbackFn)
 *          reduceRight(callbackFn, initialValue)
 *
 * */
let list = [1, 2, 3, 4, 5]
const rightReduced = list.reduceRight((total, item) => total + item, 0)
console.log(rightReduced) // 15

/**
 *  Array.prototype.flat()
 *
 *  - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 *
 *  Syntax: flat()
 *          flat(depth)
 *
 * */
let arr6 = [1, 2, 3, [1, 2], 4]
let flatArr = arr6.flat()
console.log(flatArr) // [1, 2, 3, 1, 2, 4]
/**
 * - flat() takes one optional depth parameter.
 * - depth specifies how deep a nested array structure should be flattened.
 * - It defaults to 1.
 */
let arr7 = [1, 2, 3, [1, 2], [1, [1, 2]]]
let flatArr1 = arr7.flat() // default: depth level is 1
let flatArr2 = arr7.flat(2) // depth level is 2
console.log(flatArr1) // [1, 2, 3, 1, 2, 1, [1, 2]]
console.log(flatArr2) // [1, 2, 3, 1, 2, 1, 1, 2]

let flatArr3 = arr7.flat(Infinity) // depth level is Infinty
console.log(flatArr3) // [1, 2, 3, 1, 2, 1, 1, 2]

/**
 *  Array.prototype.flatMap()
 *
 *  - Returns a new array formed by applying a given callback function to each element of the array,
 *
 *  Syntax: flatMap(callbackFn)
 *          flatMap(callbackFn, thisArg)
 *
 * */
list = [1, 2, 3]
const flatList = list.flatMap(el => [el, el * el])
console.log(flatList) // [1, 1, 2, 4, 3, 9]

/**
 *  Array.prototype.some()
 *
 *  - The some method checks if some array values pass a test. It returns either true or false.
 *
 *  Syntax: some(callbackFn)
 *          some(callbackFn, thisArg)
 *
 * */
let num7 = [4, 6, 14, 16]
let isSomeGreaterThan6 = num7.some(n => n > 6)
console.log(isSomeGreaterThan6) // true

let isSomeLessThan4 = num7.some(n => n < 4)
console.log(isSomeLessThan4) // false

/**
 *  Array.prototype.every()
 *
 *  - every is similar to the some method, but checks if every value in the array passes a certain test,
 *    rather than just some.
 *
 *  Syntax: every(callbackFn)
 *          every(callbackFn, thisArg)
 *
 * */
let num8 = [4, 6, 14, 16]

let isEverythingGreaterThan6 = num8.every(n => n > 6)
console.log(isEverythingGreaterThan6) // false

let isEverythingLessThan20 = num8.some(n => n < 20)
console.log(isEverythingLessThan20) // true

/**
 *  Array.prototype.find()
 *
 *  - The find method returns the first element in the array that passes a certain test.
 *
 *  Syntax: find(callbackFn)
 *          find(callbackFn, thisArg)
 *
 * */
let stock = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 }
]
let mayo = stock.find(s => s.item === "mayo")

console.log(mayo) //  { item: 'mayo', quantity: 9 }

/**
 *  Array.prototype.findIndex()
 *
 *  - Same as find, but returns the index instead of the value:
 *
 *  Syntax: findIndex(callbackFn)
 *          findIndex(callbackFn, thisArg)
 *
 * */
let stock1 = [
  { item: "ketchup", quantity: 32 },
  { item: "mayo", quantity: 9 },
  { item: "hot sauce", quantity: 12 }
]
let mayo1 = stock1.findIndex(s => s.item === "mayo")

console.log(mayo1) // 1

/**
 *  Array.prototype.pop()
 *
 *  - Removes the last element from an array and returns that element.
 *
 *  Syntax: pop()
 * */
list = [1, 2, 3, 4, 5]
console.log(list) // [1, 2, 3, 4, 5]
list.pop() // 5
console.log(list) // [1, 2, 3, 4]

/**
 *  Array.prototype.push()
 *
 *  - Appends new elements to the end of an array, and returns the new length.
 *
 *  Syntax: push()
 *          push(element0)
 *          push(element0, element1)
 *          push(element0, element1, …, elementN)
 *
 * */
list = [1, 2, 3, 4, 5]
console.log(list) // [1, 2, 3, 4, 5]
list.push(6) // 6
console.log(list) // [1, 2, 3, 4, 5, 6]

/**
 *  Array.prototype.shift()
 *
 *  - Removes the first element from an array and returns that element.
 *
 *  Syntax: shift()
 * */
list = [1, 2, 3, 4, 5]
console.log(list) // [1, 2, 3, 4, 5]
list.shift() // 1
console.log(list) // [2, 3, 4, 5]

/**
 *  Array.prototype.unshift()
 *
 *  - Adds new elements to the beginning of an array, and returns the new length.
 *
 *  Syntax: unshift()
 *          unshift(element0)
 *          unshift(element0, element1)
 *          unshift(element0, element1, … , elementN)
 *
 * */
list = [1, 2, 3, 4, 5]
console.log(list) // [1, 2, 3, 4, 5]
list.unshift(0) // 0
console.log(list) // [0, 1, 2, 3, 4, 5]

/**
 *  Array.prototype.include()
 *
 *  - Returns true if the given element is present in the array.
 *
 *  Syntax: includes(searchElement)
 *          includes(searchElement, fromIndex)
 *
 * */
list = [1, 2, 3, 4, 5]

let result1 = list.includes(3)
console.log(result1) // true

let result2 = list.includes(6)
console.log(result2) // false

/**
 *  Array.prototype.reverse()
 *
 *  - Reverses the order of the elements in an array.
 *
 *  Syntax: reverse()
 * */
list = [1, 2, 3, 4, 5]
console.log(list) // [1, 2, 3, 4, 5]

list.reverse()
console.log(list) // [5, 4, 3, 2, 1]

/**
 *  Array.prototype.fill()
 *
 *  - Fill the elements in an array with a static value.
 *  - It mutate the original Array
 *
 *  Syntax: fill(value)
 *          fill(value, start)
 *          fill(value, start, end)  // Note: end value is not included,
 *                                            So, the last included value in returned Array is end-1
 *
 * */
list = [1, 2, 3, 4, 5]
console.log(list) // [1, 2, 3, 4, 5]

list.fill(0)
console.log(list) // [0, 0, 0, 0, 0]

list.fill(44, 2)
console.log(list) // [0, 0, 44, 44, 44]

list.fill(555, 1, 3)
console.log(list) //  [0, 555, 555, 44, 44]

/**
 *  Array.prototype.isArray()
 *
 *  - Returns true if the given value is an array.
 *
 *  Syntax: Array.isArray(value)
 * */
Array.isArray([1, 2, 3, 4, 5]) // true
Array.isArray(5) // false

console.log(fruits) //  ['Banana', 'Orange', 'Apple', 'Mango']
result = Array.isArray(fruits)
console.log(result) // true

/**
 *  Array.prototype.at()
 *
 *  - Returns a value at the specified index.
 *
 *  Syntax: at(index)
 * */
list = [1, 2, 3, 4, 5]

result = list.at(1)
console.log(result) // 2

result = list.at(-1)
console.log(result) // 5

result = list.at(-2)
console.log(result) // 4

result = list.at(8)
console.log(result) // undefined

/**
 *  Array.prototype.of()
 *
 *  - Creates a new array with a variable number of arguments, regardless of number or type of the arguments.
 *
 *  Syntax: Array.of()
 *          Array.of(element0)
 *          Array.of(element0, element1)
 *          Array.of(element0, element1,  … , elementN)
 *
 * */
list = Array.of(11, 22, 33, 44, 55)
console.log(list) // [11, 22, 33, 44, 55]
