Closures in JavaScript
======================

This repository contains **JavaScript Closure** demo.

Before we start talking about the **closures**, it is important that we understand the following terms, because these will form the baseline of our entire understanding on **closures**:

** 1. Lexical Scope **

**Lexical** means language or text. **Scope** means property related to text. **Lexical Scope** is basically defined by function's physical placement in the written source code.

In **JavaScript**, let's understand the **scope** of variables:

```javascript
var a = 1;
function f() {
    var b = 2;
    return a + b;
}
```

Now, let's try to represent this code in the form of a diagram:

![output.png](https://raw.githubusercontent.com/namita1990/Closures/master/LexicalScope.png)