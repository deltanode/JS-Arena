/**
 * Correct environment of a binding: should it be an environment of the creation time, or 
 *                                    environment of the call time?
 * Static Scope: In static we choose scope/environment of the "creation"
 * Dynamic Scope: In dynamic we choose context/environment of the "caller"
 * 
 * Variable values are [Static Scope or Laxical Scope or Laxical Environment]
 * This value is [Dynamically Scoped]
 * Reference:  https://codeburst.io/js-scope-static-dynamic-and-runtime-augmented-5abfee6223fe
 * 
 * Closures:
 * - Downward funArg Problem
 * - Upward funArg Problem
 * Reference:  http://dmitrysoshnikov.com/ecmascript/chapter-6-closures/
 */


// Downward funArg Problem
let x = 10;

function foo() {
    console.log(x);
}
 
function bar(funArg) {
    let x = 20;
    funArg(); // 10, not 20!
}

// Pass `foo` as an argument to `bar`.
bar(foo);


 // Upward funArg Problem

 function foo() {
    let x = 10;
     
    // Closure, capturing environment of `foo`.
    function bar() {
      return x;
    }
   
    // Upward funarg.
    return bar;
  }
   
  let x = 20;
   
  // Call to `foo` returns `bar` closure.
  let bar = foo();
   
  bar(); // 10, not 20!


  // environment can be shared across several closures

  function createCounter() {
    let count = 0;
   
    return {
      increment() { count++; return count; },
      decrement() { count--; return count; },
    };
  }
   
  let counter = createCounter();
   
  console.log(
    counter.increment(), // 1
    counter.decrement(), // 0
    counter.increment(), // 1
  );