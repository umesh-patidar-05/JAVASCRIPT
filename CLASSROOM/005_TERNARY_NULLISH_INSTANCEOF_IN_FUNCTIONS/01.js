let age = 20
let result = age>=18 ? "Eligible": "Not Eligible";
console.log(result)   // Eligible




let a =10
let b = 20
let result = a>b ? "a is greater": "b is greater"
console.log(result)  // b is greater




let a =10
let result = a%2==0?"EVEN":"ODD"
console.log(result)  // EVEN




let studentname = null
let result = studentname??"Guest"
console.log(result)  // Guest




let studentname = "umesh"
let result = studentname??"Guest"
console.log(result)  // umesh




console.log(undefined??"default value")  // default value
console.log(null??"default value")    // default value
console.log(0??"default value")  // 0
console.log(false??"default value")  // false
console.log(""??"hello")  // ""(empty string)




console.log(undefined||"default value")  // default value
console.log(null||"default value")  // default value
console.log(0||"default value")  // default value
console.log(false||"default value")  // default value
console.log(""||"hello")  // hello




let user = {
    name:"",
    age:0,
    email:null
}
let name = user.name??"guest"
let age = user.age??18
let mail = user.email??"Not defined"
console.log(name, age, mail)  //  0 Not defined




let user = {
    name:"deepika",
    age:30,
    email:null
}
console.log(user.name??"default")  // deepika
console.log(user.age??18)  // 30
console.log(user.email??"Not defined")  // Not defined
console.log(user.city??"default")  // default




function getUserAge(){
    return null
}
let age = getUserAge()??18
console.log(age)  // 18




function display(message){
    let value = message??"welcome"
    console.log(value)
}
display("hello guys")  // hello guys
display()  // welcome
display("bye")  // bye




let student = {
    name: "umesh",
    age:21
}
console.log(student.name)  // umesh
// console.log(student.address.city) // TypeError: Cannot read properties of undefined (reading 'city')




let employee = {
    name:"deepika",
    department :{
        name:"IT",
        location :"indore"
    }
}
console.log(employee.name)  // deepika
console.log(employee.department?.name)  // IT
console.log(employee.address)  // undefined
console.log(employee.address?.city)  // undefined




let student = {
    id:101,
    name:"deepika",
    contact:{
        address:{
            city:"indore",
            state:"mp"
        }
    }
}
console.log(student.contact?.address?.city)  // indore
console.log(student.contact?.address.state)  // mp




let student = {
    id:101,
    name:"deepika"
}
console.log(student.contact?.address?.city)  // undefined
// console.log(student.contact.address?.state)  // TypeError: Cannot read properties of undefined (reading 'address')




let student = null
console.log(student?.contact?.address?.city)  // undefined




let arr = ['deepika', 'rashmika', 'virat']
console.log(arr[0])  // deepika
let arr1
// console.log(arr1[0])  // TypeError: Cannot read properties of undefined (reading '0')
console.log(arr1?.[1])  // undefined




let students = [
    {name:"deepika", salary:89999},
    {name:"rashmika", salary:99999}
]
console.log(students?.[0]?.name)  // deepika
console.log(students?.[0]?.salary)  // 89999
console.log(students?.[5]?.name)  // undefined




let  user = {
    name:"deepika",
    hello:function(){
        console.log("this is hello inside object")
    }
} 
console.log(user.name)  // deepika
user.hello?.()  // this is hello inside object




let user ={
    name:"deepika"
}
console.log(user.address?.city??"city not available")  // city not available




let a = [10, 20, 30]
console.log(a instanceof Array)  //  true
console.log(a instanceof Object)  // true
console.log(a instanceof String)  // false




let student = {
    name:"deepika"
}
console.log(student instanceof Array)  // false
console.log(student instanceof Object)  // true
console.log(student instanceof String)  // false




let name1 = "deepika"
console.log(name1 instanceof Array)  // false
console.log(name1 instanceof Object)  // false
console.log(name1 instanceof String)  // false
let name2 = new String()
console.log(name2 instanceof String)  // true




let student = {
    name: "deepika",
    age:18
}
console.log("name" in student)  // true
console.log("address" in student)  // false




let student = {
    name: "deepika",
    age:18,
    address:undefined
}
console.log("address" in student)  // true




function hello(){
    console.log("hello")
}
hello()  // hello
hello("umesh")  //  hello




function hello(name){
    console.log("hello", name)
}
hello("thapaji")  // hello thapaji
hello()  // hello undefined




function hello(name){
    console.log("hello", name)   // hello thapaji
}
let r = hello("thapaji")
console.log(r)   // undefined




function add(a,b){
    return a+b
}
let r = add(10,20)
console.log(r)  // 30
let r1 = add(100)
console.log(r1)  // NaN




console.log(add(10,20))  // 30
function add(a,b){
    return a+b
}




let c = function(a,b){
    return a+b
}
console.log(c(10,20))  // 30