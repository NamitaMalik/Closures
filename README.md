Closures in JavaScript
======================

This repository contains **JavaScript Closure** demo.

Before we start talking about the **closures**, it is important that we understand the following terms, because these will form the baseline of our entire understanding on **closures**:

**1. Lexical Scope**

**Lexical** means language or text. **Scope** means property related to text. **Lexical Scope** is basically defined by function's physical placement in the written source code.

In **JavaScript**, let's understand the **scope** of variables:

```javascript
var g = 1;
function sum() {
    var l = 2;
    return g + l;
}
```

Now, let's try to represent this code in the form of a diagram:

![output.png](https://raw.githubusercontent.com/NamitaMalik/Closures/master/lexical.png)

In **JavaScript** there is **function scope**. This means that a variable defined inside a function is not visible outside the function. But, the variable defined in a code block say if/else or for loop then its get visible in whole **function** because that variable is also defined in **function scope**( **Javascript** does not have **block scope**).

This means that we can access local variable 'l' inside the function sum only, outside the sum function we can access only global variable 'g'.

Let's see through the following table what would be the output out side the sum function in the given cases:

Snippet | Output     | Explanation
--------|------------|------------
g;      | 1          | 'g' is global variable so we can be access 'g' variable everywhere.
l;      | undefined  | 'l' is local variable of function sum, so can't be access outside the function sum.
sum();  | 3          | Since 'g' is accessible into the function sum, therefore we get the correct result

**2. Scope Chain**

The second most important thing that we need to understand while working with concept of **closures** is **'chaining'** or **'scope chain'**. Suppose a **function** is defined inside a **function**, then, it will have access to variable in its own **scope** as well as the in the **scope** of its parents. This is known as **scope chain**.

Let's see the following snippet and you would be able to understand:

```javascript
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

**father** is the outer **function** that contains variable **fatherName**. **child** is a function inside the **function** **father** which has a variable **childName** and **description**. In the variable **description** we are accessing variable **fatherName** and **grandFatherName**. **grandFatherName** is a **global** variable, hence it would be accessible everywhere while **fatherName** is a **local** variable in **function** father but it is still accessible to **function child** as child has access not only to the variables in its own **lexical scope** but also in its parents!

Now, let’s take the things further and put some light on **closures**, have a look at the following code:

```javascript
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

![output.jpg](https://raw.githubusercontent.com/NamitaMalik/Closures/master/closure.png)

Does this mean that inner **function** 'n' still has access to the outer **function** 'f'. Yes you are right! When any **inner function** get out from **outer function** then it takes the snapshot of the outer **function** with it, hence it is able to access the value of variable 'b' outside its own **lexical scope**. Hence we correctly get the result!

So to sum up, **closure** is nothing but a **function** defined inside another **function**. Inner **function** is **closure**. It is important to remember that when an **outer function** returns an **inner function** or assign **inner function** to some **global** or non local variable of **outer function**, then it captures a snapshot of the **outer function** with it.

Now, let's test our understanding a little bit more:

See the following piece of code:

```javascript
var name;
function person(a, n) {
    var age = a;
    name = n;
    return function () {
        console.log(age, name)
    };
}
var amit = person(25, 'Amit');
var namita = person(23, 'Namita');
console.log(amit()); // 25 Namita
console.log(namita()); // 23 Namita
```

Here 'Namita' got printed as the result of the second last line instead of where we were expecting 'Amit'. This is because **closures** take the snapshot of the **outer function** and keep the reference of the global variables because global variables are accessible out side the outer function as well. **Inner function/closure** takes snapshot for those variable only which are not accessible out side the that **function** or which are private variable of **outer function**. Therefore when a reference variable modifies the value of global variable, the other reference variable pointing out to that global variable gets that modified/updated value.

**Note**: You can checkout full working source code from this [link](https://github.com/NamitaMalik/Closures).

In the upcoming blog "More on closures" we will discuss more examples of closures and their implementations. Till then Happy Learning!