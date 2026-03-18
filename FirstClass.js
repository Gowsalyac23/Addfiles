//printing statemnet -->to print somenthing in console

console.log("hello priya");
console.warn('weak');
console.error('test failed');

//concatenation
console.log("hello"+" priya");
console.log("hello","priya");

//template literals-->``
console.log(`hello 
    priya
    hello `);
console.log(`
    hello 
    priya
    hello 
    everyone
    `);

//nos
console.log("5+10");
console.log('5+10');
console.log(5+10); //add the values
console.log("5"+10); //concat the values
console.log('5'+'10')

//variables-->storage containers to store the values
//1.var-->It can be redeclare and reassign
var a= 12; 
var a= 24; //redeclare
    a= 25; //reassign
    a= 23;

//2.let  -->It can't be redeclare and can be reassign
let role= "Admin";
    role= "Tester"
    console.log(role);
let age = 27;
console.log("Role:"+ role +" Age:"+ age);

//using template literals
console.log(`Role:${role} Age:${age}`);

//3.const--> It can't be redeclared or reassign
const url="htpps://www.facebook.com";
console.log(url);

//Datatypes-->to define a data or value
//1.primitive datatypes
//string-->group of characters enclosed within quotes
let namee = "Gowsalya";
console.log(namee);

//Number
let num = 18;
console.log(num);

//Boolean-->True/false
let isvisible = true;
console.log(isvisible);

//undefined-->not assigned any value
let value;
console.log(value);

//Null
let val =null;
console.log(val);

//typeof
console.log(typeof namee);
console.log(typeof num);
console.log(typeof isvisible);
console.log(typeof value);
console.log(typeof val);

console.log("update branch");







    
