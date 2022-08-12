/**  
 * "This" Keyword
 * 
 * Reference: http://dmitrysoshnikov.com/ecmascript/chapter-3-this/ 
*/

var foo = {x: 10};
 
var bar = {
  x: 20,
  test: function () {
 
    console.log(this === bar); // true
    console.log(this.x); // 20
    console.log(this === foo)
     
    // this = foo; // error, can't change this value
  
    // console.log(this.x); // if there wasn't an error, then would be 10, not 20
 
  }
 
};
 
// on entering the context this value is
// determined as "bar" object; why so - will
// be discussed below in detail
 
bar.test(); // true, 20
 
foo.test = bar.test;
 
// however here this value will now refer
// to "foo" – even though we're calling the same function
 
foo.test(); // false, 10