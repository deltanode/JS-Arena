/**
 * 1. When Execution Context is created:
 *    - Variable Object [Global Object & Activation Object]
 *    - Scope
 *    - thisValue
 * 
 *  Reference:  [2nd Edition ES5]  http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/
 *              [1st Edition ES3]  http://dmitrysoshnikov.com/ecmascript/javascript-the-core/
 *              
 */



 let obj = {a:10}
 Function.prototype.a = 100
 Object.prototype.a = 200
 
 
 // Function 1
 function ab1(objArg){
     let a=1000
     this.a = 2000
     console.log("Function-1 Invoked: \n")
     console.log(a)                       // 1000 (from Local Variable)
     console.log(objArg.a)                // 10
     console.log(window.a)                // 2000
     console.log(Function.prototype.a)    // 100
     console.log(Object.prototype.a)      // 200
 }
 ab1(obj)
 
 // Function 2 (without LOCAL varible "a")
 function ab2(objArg){
     this.a = 2000
     console.log("Function-2 Invoked: \n")
     console.log(a)                       // 2000 (From Global Variable)
     console.log(objArg.a)                // 10
     console.log(window.a)                // 2000 (From Global Variable)
     console.log(Function.prototype.a)    // 100
     console.log(Object.prototype.a)      // 200
 }
 ab2(obj)
 
 // Function 3 (without  LOCAL & GLOBAL varible "a")
 delete window.a
 
 function ab3(objArg){
     console.log("Function-3 Invoked: \n")
     console.log(a)                       // 200 (from Object.prototype.a)
     console.log(objArg.a)                // 10
     console.log(window.a)                // 200 (from Object.prototype.a)
     console.log(Function.prototype.a)    // 100
     console.log(Object.prototype.a)      // 200 (from Object.prototype.a)
 }
 ab3(obj)
 
 
 // Function 4 (without  OBJECT.PROTOTYPE.a property, LOCAL, GLOBAL varible "a")
 delete Object.prototype.a
 
 function ab4(objArg){
     console.log("Function-4 Invoked: \n")
     console.log(objArg.a)                // 10
     console.log(window.a)                // undefined
     console.log(Function.prototype.a)    // 100
     console.log(Object.prototype.a)      // undefined 
     console.log(a)                       // Reference Error: a is not defined
 }
 ab4(obj)