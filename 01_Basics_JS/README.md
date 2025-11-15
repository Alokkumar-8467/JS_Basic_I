Chapter 1: Variables & Declarations

(JavaScript – Learn Everything Series by Sheryians Coding School)

🧠 What are Variables?
Variables are containers that hold data.
They help us store, reuse, and update information in JavaScript — from simple values like
numbers to complex data like arrays and objects.
Think of a variable as a box with a name on it. You can put something inside it (a value), and later
check or change what's inside.
In JavaScript, you create these boxes using keywords: var , let , or const .

🧪 var, let, and const – Line-by-Line Comparison
🧓 var – Old and risky
Scoped to functions, not blocks
Can be redeclared and reassigned
Hoisted to the top with undefined value

let – Modern and safe
Scoped to blocks ( {} )
js
var score = 10;
var score = 20; // OK
28/06/2025, 15:10 Complete JS Course Syllabus

2/36
Can be reassigned but not redeclared
Hoisted, but stays in the Temporal Dead Zone (TDZ)

🔐 const – Constant values
Scoped to blocks
Cannot be reassigned or redeclared
Value must be assigned at declaration
TDZ applies here too

👉 But: If const holds an object/array, you can still change its contents:

🔥 Scope in Real Life
Block Scope → Code inside {} like in loops, if , etc.
Function Scope → Code inside a function
let and const follow block scope.
var ignores block scope — which leads to bugs.
js
let age = 25;
age = 30; // ✅
let age = 40; // ❌ Error (same block)

js
const PI = 3.14;
PI = 3.14159; // ❌ Error

js
const student = { name: "Riya" };
student.name = "Priya"; // ✅ OK
student = {}; // ❌ Error

js
28/06/2025, 15:10 Complete JS Course Syllabus

3/36

🧨 Hoisting
JavaScript prepares memory before running code.
It moves all declarations to the top — this is called hoisting.
But:
var is hoisted and set to undefined
let and const are hoisted but not initialized — so accessing them early gives
ReferenceError

⚠️ Common Confusions (JS Reality Checks)
const doesn't make things fully constant. It protects the variable, not the value.
var is outdated — it's better to use let and const .
{
var x = 5;
let y = 10;
const z = 15;
}
console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError

js
console.log(a); // undefined
var a = 10;

js
console.log(b); // ❌ ReferenceError
let b = 20;
28/06/2025, 15:10 Complete JS Course Syllabus

4/36

let and const behave similarly, but const gives more safety — use it when you're not
planning to reassign.

🧠 Mindset Rule

🧪 Practice Zone
. Declare your name and city using const , and your age using let .
. Try this and observe the result:

. Guess the output:

. Create a const object and add a new key to it — does it work?
. Try accessing a let variable before declaring it — what error do you see?
. Change a const array by pushing a value. Will it throw an error?
Use const by default. Use let only when you plan to change the value.
Avoid var — it belongs to the past.

js
let x = 5;
let x = 10;

js
console.log(count);
var count = 42;
