//Array methods
//Map
let arr = [1,2,3,4];
let m =arr.map(val => val*2);
console.log(m);

let prices = ["$200", "$300", "$100", "$400"];
let revPrices = prices.map((price) => price.replace("$",""));
console.log(revPrices);
console.log(prices);

//Filter
let arr1 =[13,24,22,34,11,15,33];
let even = arr1.filter(val => val%2===0);
console.log(even);

//Reduce
let arr2 =[1,2,3,4];
let rec = arr2.reduce((acc,value) =>acc + value,1);
console.log(rec);

//callback
function step1(callback){
    setTimeout(() =>{
    console.log("Function 1");
},5000);
    callback();
}
function step12(callback){
    setTimeout(() =>{
    console.log("Function 2");
},6000);
    callback();
}
function step13(callback){
    setTimeout(() =>{
    console.log("Function 3");
},3000);
    callback();
}

step1(()=>{
    step12(()=>{
        step13(()=>{
       })
    })
})

//promise
let promise = new Promise((resolve, reject) => {
    let res = true;

    if (res === true) {
        console.log("Success");
        resolve("Operation completed");
    } else {
        console.log("Failed");
        reject("Something went wrong");
    }
});

promise
    .then(result => console.log(result))
    .catch(err => console.log("Scenario:", err));

//promises chaining
function step1(){
    return new Promise((resolve) =>{
    console.log("step 1 passes");
    resolve();
    })
}   
function step12(){
    return new Promise((resolve) =>{
    console.log("step 2 passes");
    resolve();
    })
}  
function step13(){
    return new Promise((resolve) =>{
    console.log("step 3 passes");
    resolve();
    })
}  
function step14(){
    return new Promise((resolve) =>{
    console.log("step 4 passes");
    resolve();
    })
}   
step1()
       .then(() =>step12())
       .then(() =>step13())
       .then(() =>step14())