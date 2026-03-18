//synchronous-->Execute in sequential order
console.log("First");
console.log("second");
console.log("Third");

//Asynchronous-->not in order
console.log("start");
setTimeout(() => {
    console.log("pending");
},3000);
console.log("end");


//async//await
function hello(){
    console.log("im priya");
}
async function sy() {
    let a= await hello();
    console.log(a);
}
sy();

//class
class Person{
    name(){
        console.log("age is 27");
    }
}
let a = new Person();
console.log(a.name());

//Accurance
let arr = ["apple", "banana", "orange", "apple"]
let result ={};
for(let i=0; i<=arr.length-1; i++){
    let fruit =arr[i];
    if(result[fruit]){
        result[fruit]++
    }else{
        result[fruit] =1
    }
    }console.log(result);
    