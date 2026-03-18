//Operators

//1.Arithmetic operators-->+,-,*,/,%
console.log(1+1);
console.log(1-1);
console.log(2*2);
console.log(2/2);
console.log(2%2);

//2.Assignment operators--> =,+=,-=,*=,/=
let a = 10;
a+=10; //a=a+10
console.log(a);

a-=10 //a=a-10
console.log(a);

a*=10 //a=a*10
console.log(a);

a/=10 //a=a/10
console.log(a);

//3.Comparision operator--> ==,===,!=,<,>,<=,>=
let n1= 18;
let n2= 20;
console.log(n1==n2);
console.log(n1===n2);
console.log(n1!=n2);
console.log(n1<n2);
console.log(n1>n2);
console.log(n1<=n2);
console.log(n1>=n2);

// == --> loose equality
// === -->strict equality
let num1= 15;
let num2= '15';
console.log(num1==num2);
console.log(num1===num2);

//Logical operators-->&&(AND) ||(OR)
//AND
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

//OR
console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

//5.Increment(++) / Decrement(--)
let a1= 15;
a1++ //a1+1
console.log(a1);
console.log(a1++); //post inc -->gives the result in next line
console.log(a1);
console.log(++a1); //pre inc -->gives the result in same line

let a2=12;
a2-- //a1-1
console.log(a2);
console.log(a2--); 
console.log(a2);
console.log(--a2);


//6.String operator(+)-->concatination

//7.Ternary operator
//syntax-->condition? "iftrue" : "iffalse"
console.log(8>3? "true" : "false");

let sal =50000;
console.log(sal>60000 ? "ok" : "Denied");

//8.typeof-->to find out the datatype of the value

//9.Nullish operator-->??
console.log(null??"priyaa");
console.log(undefined??"heyy");
console.log("GoodDay"??"GoodNight");

//10.Optional chaining-->?
let user={
    address :
    {
        city:"chennai",
        state:"TN"
    }
};
// console.log(user.address.city);
console.log(user.address?.state);

//Functions
//1.Function Declaration

function admin(){
    let x=12;
    console.log(x);
    
}
admin();

function admin1(){
    let name= "priya";
    let role= "Tester";
    console.log(`Role: ${role} name: ${name}`);
}
admin1();

//2.Parameterized function
function admin3(name,role){
    console.log(`Role: ${role} name: ${name}`);
}
admin3("gowsi","manager");
admin3("priya","lead");
admin1();
admin();

//Return type
function ret(){
    let a=15;
    return a;
}
console.log(ret());

function ret1(){
    let a18=10;
    console.log(a18);
}

let b18 =10+ret();
let c18= 10+ret1();

console.log(b18);
console.log(c18);




