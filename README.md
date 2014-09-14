Closures in JavaScript
======================

This repository for contains **JavaScript Closure** demo.

Before we start talking about the **closures**, it is important that we understand the following terms, because these will form the baseline of our entire understanding on **closures**:

**1. Lexical Scope**

**Lexical** means language or text. **Scope** means property related to text. **Lexical Scope** is basically defined by function's physical placement in the written source code.

In **JavaScript**, let's understand the **scope** of variables:

```javascript
var global = 1;
function sum() {
    var local = 2;
    return global + local;
}
```

Now, let's try to represent this code in the form of a diagram:

![output.png](https://raw.githubusercontent.com/namita1990/Closures/master/LexicalScopeUpdated.jpg)

In **JavaScript** there is **function scope**. This means that a variable defined inside a function is not visible outside the function. But, the variable defined outside a function or in a code block say if/else or for loop is visible outside the block!

This means that function sum() can access variable 'global' but variable 'local' cannot be accessed outside the function sum.

Let's see through the following table what would be the output in the given cases:

Snippet | Output     | Explanation
--------|------------|------------
global; | 1          | 'global' is visible outside
local;  | undefined  | Outside function sum(), local is not accessible
sum();  | 3          | Since global is accessible by function sum(), therefore we get the correct result

**2. Scope Chain**

The second most important thing that we need to understand while working with concept of closures is **'chaining'** or **'scope chain'**. Suppose a function is defined inside a function, then, it will have access to variable in its own scope as well as the in the scope of its parents. This is known as scope chain.

Let's see the following snippet and you would be able to understand:

```
var grandFatherName = "John";
function father() {
    var fatherName = "Devis";

    function child() {
        var childName = "Tom";
        var description = "My name is" + childName + " ,my grandfather is " + grandfatherName + " and my father is " + fatherName;
        return description;
    }

    return child();
}

console.log(father());

```
O/P would be My name is Tom , my grandfather is John and my father is Devis

The example above is self explanatory though, but still I would like to give a brief description:

father() is the outer function that contains variable fatherName(). Child() is a function inside the function father() which has a variable childName and description. In the variable description we are accessing variable fatherName and grandFatherName. grandFatherName is a global variable, hence it would be accessible everywhere while fatherName is a local variable in function father() but it is still accessible to function child() as child() has access not only to the varaibles in its own lexical scope but also in its parents!

Now, let’s take the things further and put some light on **closures**, have a look at the following code:

```
var a = 2;
var f = function (param1) {
    var b = param1;
    var n = function () {
        var c = 10;
        var d = a + b + c;
        return d;
    }
    return n;
};

var k = f(20);
var m = f(30);

console.log(k());
console.log(m());

```
So if we try to diagrammatically explain the above snippet, it would be something like:

![output.jpg](https://raw.githubusercontent.com/namita1990/Closures/master/ClosureDetailsUpdated.jpg)

Does this mean that function 'n' still has access to the outer function 'f'. Yes you are right! Function 'n' takes the snapshot of the outer function, hence it is able to access the value of var b  outside its own lexical scope. Hence we correctly get the result!

So to sum up, **closure** is nothing but a function defined inside another function. Inner function is closure. It is important to remember that when an outer function returns an inner function, it captures a snapshot of the outer function too.

Now, let's test our understanding a little bit more:

See the following piece of code:

```
var name;
function person(x, y) {
    var age = x;
    name = y;
    return function () {
        console.log(age, name)
    };
}
var p = person(10, 'abc');
var q = person(20, 'def');
console.log(p());
console.log(q());

```
Here 'def' got printed as the result of the second last line instead of where we were expecting 'abc'. This is because closures take the snapshot of the outer function and keep the reference of the global functions. Therefore when a reference variable modifies the value of global variable, the other reference variable pointing out to that global variable gets that modified/updated value.

In the upcoming blog "More on closures" we will discuss more examples of closures and their implementations. Till then Happy Learning!