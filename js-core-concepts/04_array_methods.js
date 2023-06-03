/**
 * Array Methodsin JavaScript:
 *
 *   Array Method   | Mutate Original Array | Return Value
 *   ---------------|-----|------
 * - array.length   |     | It is a Array Property (not a Array method)
 *
 * - toString()     |     | A string representing the elements of the array.
 * - join()         |     | A string with all array elements joined. If arr.length is 0, the empty string is returned.
 * - concat()       |     | A new Array instance.
 * - splice()       | Yes | An array containing the deleted elements. If no elements are removed, an empty array is returned.
 * - slice()        |     | A new array containing the extracted elements.
 * - indexOf()      |     | The first index of the element in the array; -1 if not found.
 * - lastIndexOf()  |     | The last index of the element in the array; -1 if not found.
 *
 * - forEach()      |     | undefined
 * - map()          |     |
 * - filter()       |     |
 * - reduce()       |     |
 * - some()         |     |
 * - every()        |     |
 * - flat()         |     |
 * - find()         |     |
 * - findIndex()    |     |
 * - sort()         |     |
 *
 * - array.pop()    |     |
 * - array.push()   |     |
 * - array.shift()  |     |
 * - array.unshift()|     |
 *
 * - array delete() |     |
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
 * */
console.log(fruits) // (4) ['Banana', 'Orange', 'Apple', 'Mango']
fruits.forEach(element => console.log(element))
// Banana
// Orange
// Apple
// Mango

/**
 *  Array.prototype.
 *
 *  -
 *  -
 *
 *  Syntax:
 *
 * */
// console.log(num.) //
// console.log(fruits.) //
// console.log(arr.) //
