let a = 10   
let b = a    
console.log(a)  // 10    
console.log(b)  // 10
b = 90
console.log(a)  // 10
console.log(b)  // 90




let student1 = {
    name:"deepika"
}

let student2 = student1
console.log(student1.name)   // deepika
console.log(student2.name)   // deepika
student2.name = 'virat'
console.log(student1.name)   // virat
console.log(student2.name)   // virat




let age = 25;
let salary = 2345.7666
let temp = -67
console.log(age)   // 25
console.log(salary)   // 2345.7666
console.log(temp)    // -67

console.log(2e3)   // 2000
console.log(0b1010)   // 10
console.log(0o17)   // 15
console.log(0xFF)   // 255
console.log(typeof age)  // number
console.log(typeof 0xFF)  // number




let result1 = "hello" / 2;
console.log(result1)   // NaN
console.log(typeof result1)   // number




console.log(1/0)    // Infinity
console.log(-1/0)   // -Infinity
console.log(typeof Infinity)   // number




let x1 = "hello"*5   
console.log(x1)  // NaN
console.log(Number.isNaN(x1))  // true




let x2 = Number("10")
console.log(x2*x2)   // 100




let x = Number("abc")
console.log(x)  // NaN




console.log(Number(""))  // 0




console.log(0/0)   // NaN




console.log(Math.sqrt(25))   // 5
console.log(Math.sqrt(-1))  // NaN




console.log(NaN == NaN)   // false




console.log(NaN === NaN)   // false




x = "hello"*5
y = "welcome"/5
console.log(x==y)   // false




x = "hello"*5
y = "welcome"/5
console.log(Number.isNaN(x) == Number.isNaN(y))   // true




console.log(Number.isNaN("abc"))   // false
console.log(Number.isNaN(NaN))     // true
console.log(Number.isNaN(Number("abc")))   // true




let result = Number("abc")
console.log(result + 10)   // NaN
console.log(result - 10)   // NaN
console.log(result * 10)   // NaN




console.log(Number.MAX_SAFE_INTEGER)   // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER)   // -9007199254740991
console.log(Number.isInteger(25))    // true
console.log(Number.isFinite(100))    // true
console.log(Number.isFinite(Infinity))  // false
console.log(Number.isSafeInteger(25))  // true