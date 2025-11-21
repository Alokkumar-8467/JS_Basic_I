// Variables & Declarations


// var let const 

// 1. To create a variable we have varous methods

a = 12;
var a;
var a = 12;

// let a;
// let a = 12;

// const a = 12;
// const a;

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

// 2. Declarations and initialization of VAR

// for var
var a;  // declare karna
var a = 12; // decalre and initialize

// 2.1 var window ma add hota hai

// 2.2 function scoped hota hai
function abc () {
  if(true){
    var a = 12;
  }
}

// this var has scope onlt to this function .
// we can't use this outside the function.

// 2.3 var redeclared and no error arises.
var a = 13;


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

// 3. Declarations and initialization of LET

// for let

// declare karna
// let a;

// decalre and initialize
let a = 12;
let a = 13;
// Error Identifier 'a' has already been declared
// So we can't reDeclare the LET value

const dis = 12;
// we can't change or reDeclare the CONST value


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */


// 4. Scope in Js

// Scope are of three types => ( Global, Block, Functional )

// 4.1 Scope for VAR, CONST and LET

// if we write 
// var a = 123, let a = 34, const a = 45, then it is Global Scope.
// then it use in whole program.

// if we use block scope like that

// for var 
// < it ignore block scope and work as global >
// and why it happen because var is functional scoped and when our JS code file run, so for that file it is work as function, thats why var not follow block.
// {
//   var a  = 12;
// }

// for CONST and LET it follow block {}

// Now Functional scope 
// Now for VAR, CONST and LET that variable has onlt access to that function
function abc() {
  if(true){
    var c = 12;
    const a = 12;
    let x = 100;
  }
}

// Basically LET and CONST follow block scope but var ignore block scope

function as(){
  var d = 34;
  const a = 23;
  let c = 56;
  if(true){
    const w = a;
    console.log("Print a", a)
  }
  console.log("Print a", a)
}


/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

// Temporal Dead Zone

// For let and const 

// For let and const JS know that variable exist but not have access to handle. 

// it give Uncaught ReferenceError
// Cannot access 'a' before initialization

// console.log(a)
let a = 12; 

// Cannot access 'b' before initialization
// console.log(b)
const b = 10;

// For VAR

// but for var it give undefined
// Basically it use concept of HOSTING
console.log(c)
var c = 6;



