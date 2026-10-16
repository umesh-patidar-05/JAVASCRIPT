var name1 = "deepika"
var age = 30
console.log("Name is ", name1, " and age is ", age)   // Name is  deepika  and age is  30




var x = 10
var x =  20
console.log(x) // 20




function display() {
    if(true){
        var message = "hello guys"
    }
    console.log(message)   // hello guys
}
display()




function display() {
    if(true){
        var message = "hello guys"
    }
}
display()
console.log(message)   // ReferenceError: message is not defined




let name1 = "deepika"
let marks = 90
console.log("Name is", name1, " and marks is ", marks)   // Name is deepika  and marks is  90




let x = 10
let x = 90
console.log(x)   // SyntaxError: Identifier 'x' has already been declared




function display(){
    if(true){
        let message = "hello guys"
    }
    console.log(message)   // ReferenceError: message is not defined
}
display()




function display(){
    if(true){
        let message = "hello guys"
        {
            console.log(message)   // hello guys
            let x = 10
        }
    }
}
display()




function display(){
    if(true){
        let message = "hello guys"
        {
            console.log(message)   // hello guys
            let x = 10
        }
        // console.log(x)   // ReferenceError: x is not defined
    }
}
display()




const PI = 3.14
console.log(PI)  // 3.14




const x
console.log(x)  // SyntaxError: Missing initializer in const declaration




var x
console.log(x)  // undefined




let x;
console.log(x)  // undefined




const price1 = 900
price1 = 1200
console.log(price1)  // TypeError: Assignment to constant variable.




let price2 = 900
price2 = 1200
console.log(price2)  // 1200




const price3 = 900
const price3 = 1200
console.log(price3)  // SyntaxError: Identifier 'price' has already been declared




function display(){
    if(true){
        const message = "hello guys"
    }
    console.log(message)   // ReferenceError: message is not defined
}
display()




function display(){
    if(true){
        const message = "hello guys"
        console.log(message)   // hello guys
    }
}
display()




const student = {
    name: "deepika",
    marks: 80
}
student.marks = 99
console.log(student)    // { name: 'deepika', marks: 99 }




const student = {
    name: "deepika",
    marks: 80
}
student = {
    name: "rashmika"   // TypeError: Assignment to constant variable.
}




const numbers1 = [10, 20, 30 ,40]
numbers1.push(90)
console.log(numbers1)  // [ 10, 20, 30, 40, 90 ]




const numbers = [10, 20, 30, 40]
numbers = [110, 120]
console.log(numbers)  // TypeError: Assignment to constant variable.




console.log(a)   // undefined
var a = 10




console.log(a)  // ReferenceError: Cannot access 'a' before initialization
let a = 10




console.log(a)
const a = 10  // ReferenceError: Cannot access 'a' before initialization




console.log(a)  // undefined
var a = 10
console.log(a)  // 10




console.log(a)  // ReferenceError: Cannot access 'a' before initialization
let a = 10  




console.log(a)    // ReferenceError: Cannot access 'a' before initialization
const a = 10




{
    console.log(a) // ReferenceError: Cannot access 'a' before initialization
    const a = 10    
}




let _age = 10

// let first name = 'abc'

let name1 = 'abc'

let Name1 = 'abc'

// let #age = 10

let $price = 899