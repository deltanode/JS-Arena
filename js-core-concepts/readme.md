## JavaScript Core Concepts

<!-- *******************************-->
<details>
<summary>What is Scope?</summary>
<br>
<blockquote> Scope determines the accessibility of variables, objects, and functions from different parts of the code.</blockquote> <br>
</details>


<!-- *******************************-->
<details>
<summary>Map() vs forEach()</summary><br>
<blockquote>

Some of the difference between map() and forEach() methods are listed below :−
- The map() method returns a new array, whereas the forEach() method does not return a new array.
- The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.
- The map() method can be used with other array methods, such as the filter() method, whereas the forEach() method cannot be used with other array methods.
    
_Final Thoughts_:
    
- As always, the choice between map() and forEach() will depend on your use case. If you plan to change, alternate, or use the data, you should pick map(), because it returns a new array with the transformed data.
- But, if you won't need the returned array, don't use map() - instead use forEach() or even a for loop.
    
#### Syntax:
```
 forEach((currentElement, indexOfElement, array) => { ... } )

 map((currentElement, indexOfElement, array) => { ... } )

Parameters:
  - currentElement: This is the current element that is being processed in the callback.
  - indexOfElement: The index of that current element inside the array.
  - array: The array on which the whole operation is being performed.
```
- | map()  | forEach() |
  | --- | --- |
  | - The map() method returns an entirely new array. | - The forEach() method does not returns a  new array based on the given array. |
  | - The map() method returns the newly created array according to the provided callback function. | - The forEach() method returns “undefined“. |
  | - With the map() method, we can chain other methods like, reduce(),sort() etc. | - The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here. |
  | - It does not change the original array. | - It is not executed for empty elements. |
    
</blockquote><br>
</details>


<!-- *******************************-->
<details>
<summary>Optional Chaning (?.)</summary><br>
<blockquote>

- The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.
- The `optional chaining (?.)` operator accesses an object's property or calls a function.
- If the **object accessed** or **function called** using this operator is `undefined` or `null`, the expression short circuits and evaluates to `undefined` instead of throwing an `error`.


- Reference: https://javascript.info/optional-chaining
</blockquote><br>
</details>
<!-- *******************************-->
