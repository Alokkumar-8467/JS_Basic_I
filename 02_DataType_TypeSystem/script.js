// primitives => aisi saari values jinko copy karna par ek real copy mil jaaye
Ex = string, number, boolean, null, undefined, symbol, bigint

// reference => inko copy karan par real copy nahi milegi but reference milega parent ka
Ex = arrays[], objects{}, functions()

For Ex
let a = 12;
let b = a;

a = a = 2;

now a = 14 but b = 12;

let a = [12, 23, 45, 67]

let b = a;

if we change ant value in "a" then it change in "b" also. 
if we change in "b" then it change in "a"  also.

'' - single quotes
"" - double quotes
`` - backticks

1. Strings 
If we write anything inside '', "" and `` then it is String.
For Example = 'Anil' "Anil"  and `Anil`

2. Numbers
  12 = integer
  12.3 = number

3. Boolean
For Example
let a = true;
let b = false;

4. Null
When nothing assign.
let a = null;




