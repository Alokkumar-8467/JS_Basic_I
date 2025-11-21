# Chapter 1: Variables & Declarations

## 🧠 What are Variables?
1. Variables are containers that hold data.
2. They help us store, reuse, and update information in JavaScript — from simple values like numbers to complex data like arrays and objects.
3. Think of a variable as a box with a name on it. You can put something inside it (a value), and later check or change what's inside.
4. In JavaScript, you create these boxes using keywords: var , let , or const .

## 🧪 var, let, and const – Line-by-Line Comparison
### 🧓 var – Old and risky
1. Scoped to functions, not blocks
2. Can be redeclared and reassigned
3. Hoisted to the top with undefined value

```
var score = 10;
var score = 20; // OK
```

### 🧓 let – Modern and safe
1. Scoped to blocks ( {} )
2. Can be reassigned but not redeclared
3. Hoisted, but stays in the Temporal Dead Zone (TDZ)

```
let age = 25;
age = 30; // ✅
let age = 40; // ❌ Error (same block)
```

### 🔐 const – Constant values
1. Scoped to blocks
2. Cannot be reassigned or redeclared
3. Value must be assigned at declaration
4. TDZ applies here too

```
const PI = 3.14;
PI = 3.14159; // ❌ Error
```

👉 But: If const holds an object/array, you can still change its contents:
``` 
const student = { name: "Riya" };
student.name = "Priya"; // ✅ OK
student = {}; // ❌ Error
```

## 🔥 Scope in Real Life
1. Block Scope → Code inside {} like in loops, if , etc.
2. Function Scope → Code inside a function
3. let and const follow block scope.
4. var ignores block scope — which leads to bugs.

```
{
var x = 5;
let y = 10;
const z = 15;
}
console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError
```


## 🔥 Temporal Dead Zone

#### For let and const 

For let and const JS know that variable exist but not have access to handle. 

It give Uncaught ReferenceError
Cannot access 'a' before initialization

```
console.log(a)
let a = 12; 
```

Cannot access 'b' before initialization
```console.log(b)
const b = 10;
```

#### For VAR

##### But for var it give undefined
Basically it use concept of HOSTING
```
console.log(c)
var c = 6;
```

## 🔥 HOISTING
Basically in JS when we declare any varaible, it basically into two parts.

1. Declaration part goes at top, and 
2. Initialization part remains at bottom.

    
##### Supose we made a vaiable in VAR

    This Happen in VAR not with LET and CONST
    var a = 12;

    var a = undefined;  this declaration part goes up
    a = 12; this initilization part remain stay at bottom

    this done by compiler.

    so when we do this operation like 

    console.log(a)
    var a = 12;
    andit give undefined for VAR. Why??????

    It work like

    ```

    the JS compiler auto do this
    var a = undefined; 

    console.log(a)
    so we get a as "UNDEFINED"

    now here we initilized the var so,
    var a = 12;

    console.log(a);
    it give 12 not undefined.

    ```` 

