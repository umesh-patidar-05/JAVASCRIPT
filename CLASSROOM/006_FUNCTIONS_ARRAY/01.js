const add=(a,b)=>a+b
console.log(add(10,20))  // 30




const add=(a,b)=>{
    console.log("welcome in arrow")
    c = a+b
    return c
}
console.log(add(10,20))  
// 30
// welcome in arrow




const fun=(a)=>a.length
console.log(fun("hello"))  // 5




function hello(name="default"){
    console.log(name)
}
hello()    // default
hello("deepika")   // deepika




function hello(a,b,c,...r){
    console.log(a,b,c)
    console.log(r)
}
hello(10,20,30,40,50, 90, 88, 666)  

// 10 20 30
// [ 40, 50, 90, 88, 666 ]





function hello(a,b,c,...r){
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments.length)
}
hello("deepika", 30, "indore")  

// [Arguments] { '0': 'deepika', '1': 30, '2': 'indore' }
// deepika
// 3




function process(name, fun){
    console.log("processing user", name)
    fun()
}
function done(){
    console.log("processing completed")
}

process("deepika", done)

// processing user deepika
// processing completed




function calculate(a,b,operation){
    return operation(a,b)
}

function add(a,b){
    return a+b
}

function multiply(a,b){
    return a*b
}
console.log(calculate(10,20,add))
console.log(calculate(10,20,multiply))

// 30
// 200




console.log("welcome")
setTimeout(function(){
    console.log("hello guyssssss")
}, 3000)

console.log("end of code")

// welcome
// end of code
// hello guyssssss



console.log("welcome")
setTimeout(()=>{
    console.log("hello guyssssss")
}, 3000)

console.log("end of code")

// welcome
// end of code
// hello guyssssss




console.log("welcome")
function message(){
    console.log("areeee guysss")
}
setTimeout(message, 3000)

console.log("end of code")

// welcome
// end of code
// areeee guysss




console.log("welcome")
function message(name){
    console.log("areeee", name)
}
setTimeout(message, 3000, "deepika")

console.log("end of code")

// welcome
// end of code
// areeee guysss




console.log("code started")
setInterval(function(){
    console.log("Diwali")
}, 3000)
console.log("code ended")

// code started
// code ended
// Diwali
// Diwali
// Diwali
// Diwali
// Diwali




console.log("code started")
let count = 1
setInterval(()=>{
    console.log(count)
    count++
}, 3000)
console.log("code ended")

// code started
// code ended
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11




console.log("code started")
let count = 1
let id = setInterval(()=>{
    console.log(count)
    count++
    if(count >=5){
        clearInterval(id)
        console.log("interval stopped")
    }
}, 3000)
console.log("code ended")

// code started
// code ended
// 1
// 2
// 3
// 4
// interval stopped




let x = [10,20,30,40,50]
console.log(x)  // [ 10, 20, 30, 40, 50 ]




let y = new Array(10,200,300,400,500)
console.log(y)  // [ 10, 200, 300, 400, 500 ]




let x = [10,20,30,40,50]
console.log(x[0])  // 10
console.log(x[10]) // undefined



let x = [10, "deepika", "indore", 20.5, null, undefined]
console.log(x)
console.log(x[-2])

// [ 10, 'deepika', 'indore', 20.5, null, undefined ]
// undefined




let student = [101, "deepika", [89,97,66], {city:'indore'}]
console.log(student)
console.log(student[2][0])
console.log(student[3].city)
console.log(student.length)
console.log(student[student.length-1])

// [ 101, 'deepika', [ 89, 97, 66 ], { city: 'indore' } ]
// 89
// indore
// 4
// { city: 'indore' }




let x = [10,20]
x[5] = 60
console.log(x)
console.log(x[3])

// [ 10, 20, <3 empty items>, 60 ]
// undefined




let x = [10,20]
x.push(90)
console.log(x)  // [ 10, 20, 90 ]





let x = [10,20,30,40,50]
let element = x.pop()
console.log(element)  // 50
console.log(x)  // [ 10, 20, 30, 40 ]





let x = [10,20,30,40,50]
x.unshift(99)
console.log(x)  // [ 99, 10, 20, 30, 40, 50 ]




let x = [10,20,30,40,50]
let y = x.shift()
console.log(y)  // 10
console.log(x)  // [ 20, 30, 40, 50 ]




let x = [10,20,30,40,50]
for(let i=0; i<x.length; i++){
    console.log(i," and ", x[i])
}

// 0  and  10
// 1  and  20
// 2  and  30
// 3  and  40
// 4  and  50




let x = [10,20,30,40,50]
let i =0
while(i<x.length)
{
    console.log(i, " and ", x[i])
    i++
}

// 0  and  10
// 1  and  20
// 2  and  30
// 3  and  40
// 4  and  50





let x = [10,20,30,40,50]
for( let i of x){
    console.log(i)
}

// 10
// 20
// 30
// 40
// 50




let x = [10,20,30,40,50]
x.forEach(function(i){
    console.log(i)
})

// 10
// 20
// 30
// 40
// 50




let names = ["dipu", "rashmika", "vaibhav"]
names.forEach(function(n,i){
    console.log(i, " and ", n)
});

// 0  and  dipu
// 1  and  rashmika
// 2  and  vaibhav




let x = [10,20,30,40,50]
x.forEach(i=>{
    console.log(i)
})

// 10
// 20
// 30
// 40
// 50




let names = ["dipu", "rashmika", "vaibhav"]
names.forEach((n,i)=>{
    console.log(i, " and ", n)
});

// 0  and  dipu
// 1  and  rashmika
// 2  and  vaibhav





let names2 = ["dipu", "rashmika", "vaibhav"]
names2.forEach((n,i,a)=>{
    console.log(i, " and ", n)
    console.log(a)
});

// 0  and  dipu
// [ 'dipu', 'rashmika', 'vaibhav' ]
// 1  and  rashmika
// [ 'dipu', 'rashmika', 'vaibhav' ]
// 2  and  vaibhav
// [ 'dipu', 'rashmika', 'vaibhav' ]





let x = [10,20,30,40,50]
let i = 0
do{
    console.log(i, " and ", x[i])
    i++
}
while(i < x.length)

// 0  and  10
// 1  and  20
// 2  and  30
// 3  and  40
// 4  and  50    



let x = [10,20,30,40,50]
for(let i in x){
    console.log(i, " ", x[i])
}

// 0   10
// 1   20
// 2   30
// 3   40
// 4   50









// HIGHER ORDER FUNCTION

function greet(name) {
    return "Hello " + name;
}

function processUser(callback) {
    console.log(callback("Rahul"));
}

processUser(greet);  // Hello Rahul




function outer() {
    return function inner() {
        console.log("Hello!");
    };
}

let result = outer();
result();  // Hello!




CLOSURE

function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let result = counter();

result();  // 1
result();  // 2
result();  // 3




function hello(names){
    let message = "hello " + names
    function display(){
        console.log(message)
    }
    return display
}
h = hello("deepika")
h()  // hello deepika




// RECURSION

function fact(n){
    if(n ==1 || n==0){
        return 1
    }
    return n*fact(n-1)
}
function main(){
    x = fact(5)
    console.log(x)
}
main()  // 120




function sum(n){
    if(n===0){
        return 0
    }
    return n + sum(n-1)
}
function main(n){
    x = sum(n)
    console.log(x)
}

main(5)  // 15






// ARRAY

let numbers = [1,2,3,4,5]
numbers.splice(1,2,99)
console.log(numbers)  // [ 1, 99, 4, 5 ]





let numbers = [1,2,3,4,5]
numbers.splice(1,2)
console.log(numbers)  // [ 1, 4, 5 ]




let numbers = [1,2,3,4,5]
numbers.splice(1,0,89,90)
console.log(numbers) 

// [
//   1, 89, 90, 2,
//   3,  4,  5
// ]




let numbers = [1,2,3,4,5]
numbers.splice(2)
console.log(numbers) // [1, 2]




let numbers = [1,2,3,4,5]
console.log(numbers.includes(3))  // true
console.log(numbers.includes(10))  // false




let numbers = [1,2,3,4,5]
console.log(numbers.indexOf(3))  // 2
console.log(numbers.indexOf(10))  // -1




let ages = [12, 17, 22, 19];
let firstAdult = ages.find(age => age >= 18);
console.log(firstAdult); // 22




let ages = [12, 17, 22, 19];
let a = ages.findIndex((age) => {
    return age >= 18
});
console.log(a); // 2




let ages = [12, 17, 22, 19];
let index = ages.findIndex(age => age >= 58);
console.log(index); // 2




let ages = [12, 17, 22, 19];
let hasMinor = ages.some(age => age < 18);
console.log(hasMinor); // true
let b = ages.some(age => age > 90);
console.log(b); // false



let numbers = [1,2,3,4,5]
let a = numbers.every(num => num < 10)
console.log(a) // true
let b = numbers.every(num => num > 2)
console.log(b)  // false




let nums = [1, 2, 3]
let res = nums.map(n => n*2)
console.log(res)  // [ 2, 4, 6 ]




let scores = [45, 80, 60, 95, 30];
let passingScores = scores.filter(score => score >= 60);
console.log(passingScores); // [80, 60, 95]




let prices = [10, 20, 30];
let total = prices.reduce((accumulator, current) => accumulator + current,0);
console.log(total); // 60




let letters = ["a", "b", "c", "d", "e"];
let sub = letters.slice(1, 4);
console.log(sub); // ["b", "c", "d"]




let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]




let words = ["Hello", "world", "JS"];
let sentence = words.join(" ");
console.log(sentence); // "Hello world JS"




let fruits = ["apple", "banana", "orange"];
let result = fruits.toString();

console.log(result); 
// Output: "apple,banana,orange" (Notice it's a string, not an array anymore)




let d = [7,8,9,10]
delete d[1]
console.log(d)  // [ 7, <1 empty item>, 9, 10 ]
console.log(d[1])  // undefined




let numbers = [10, 5, 20, 2];
numbers.sort((a, b) => a - b);

console.log(numbers); 
// Output: [2, 5, 10, 20]




let numbers = [10, 5, 20, 2];
numbers.sort((a, b) => b - a);

console.log(numbers); 
// Output: [20, 10, 5, 2]




let fruits = ["banana", "apple", "cherry", "mango"];
fruits.sort();

console.log(fruits); 
// Output: ["apple", "banana", "cherry", "mango"]




let numbers = [1, 2, 3, 4, 5];
numbers.reverse();

console.log(numbers); 
// Output: [5, 4, 3, 2, 1]




let fruits = ["apple", "banana", "cherry"];
fruits.reverse();

console.log(fruits); 
// Output: ["cherry", "banana", "apple"]