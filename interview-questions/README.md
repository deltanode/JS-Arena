## JavaScript Interview Questions

<!-- *******************************-->
<details>
<summary>Reverse a string using promises [Company:Harman]</summary><br>
<blockquote>
  
Solution:  
```
async function reverseStr(str){
    try {
        let arr = str.split('');
         arr.reverse()
        return await arr.join('');  
    } catch (error) {
        return error.message
    }
    
}
console.log(reverseStr("ABCDEFGHIJKLMNOPQRSTUVWXYZ").then((result)=>{
    console.log(result)
}));  
```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Design an algorithm to pick a random integer in the range [0, n - 1] that is not in the blacklist</summary><br>
<blockquote>

Problem:-
```
You are given an integer n and an array of unique integers blacklist. Design an algorithm to pick a random integer in the range [0, n - 1] that is not in the blacklist. Any integer that is in the mentioned range and not in blacklist should be equally likely to be returned.
Example:-

Explanation
Solution solution = new Solution(7, [2, 3, 5]);
solution.pick(); // return 0, any integer from [0,1,4,6] should be ok. Note that for every call of pick,
                 // 0, 1, 4, and 6 must be equally likely to be returned (i.e., with probability 1/4).
solution.pick(); // return 4
solution.pick(); // return 1
solution.pick(); // return 6
solution.pick(); // return 1
solution.pick(); // return 0
solution.pick(); // return 4

Input
["Solution", "pick", "pick", "pick", "pick", "pick", "pick", "pick"]
[[7, [2, 3, 5]], [], [], [], [], [], [], []]
Output
[null, 0, 4, 1, 6, 1, 0, 4]


Constraints:
1 <= n <= 10^9
0 <= blacklist.length <= min(10^5, n - 1)
0 <= blacklist[i] < n
```
  
Solution:
```

```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Question</summary><br>
<blockquote>

Solution:
```

```
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Question</summary><br>
<blockquote>

Solution:
```

```
</blockquote><br>
</details>
