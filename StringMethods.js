//String
let namee = 'Gowsalyaa';

//charAt
let char = namee.charAt(7)
console.log(char);

//indexOf
let index = namee.indexOf('l')
console.log(index);

//lastIndexOf
let lIndex =namee.lastIndexOf('a')
console.log(lIndex);

//toUpperCase
let upper = namee.toUpperCase()
console.log(upper);

//toLowerCase
let lower = namee.toLowerCase()
console.log(lower);

//concat
let name1 = "Gowsalya"
let name2 = "priya"
let names =name1+name2
console.log(names);
console.log(name1+ name2);
console.log(`${name1} ${name2}`)

let name3 = name1.concat(name2)
console.log(name3);

//trim
let fruit = "   Apple   "
let trimm = fruit.trim()
console.log(trimm);
//trimStart
let trim1 = fruit.trimStart()
console.log(trim1);
//trimEnd
let trim2 = fruit.trimEnd()
console.log(trim2);

//split
let city= "Chennai city"
console.log(city.split(""));
console.log(city.split(" "));
console.log(city.split("c"));
console.log(city.split("t"));
console.log(city.split("n"));

//subString
let country = "france"
console.log(country.substring(1,5));
console.log(country.substring(5,1));

//slice
console.log(country.slice(0,4));
console.log(country.slice(6,0));
console.log(country.slice(-6));

//replace
let words = "Banana"
console.log(words.replace('n','N'));
//replaceAll
console.log(words.replaceAll('n','N'));

//match
//regEx-->Regular Expression[A-Z] [a-z] [0-9]
let doll = 'Barbie'
let mat =doll.match(/[A-Za-z0-5]/g);
console.log(mat);

//includes
console.log(doll.includes('k'));












