let i =1
do{
    console.log(i)
    i++
}while(i<=5)

// 1
// 2
// 3
// 4
// 5    





let i =10
do{
    console.log(i)   // 10
    i++
}while(i<=5)





let i =10
do{
    console.log(i)  
    i--
}while(i>=1)

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1    





let i = 2
switch(i){
    case 1:
        console.log("Hello",i)
        break
    case 2:
        console.log("welcome", i)  // welcome 2
        break
    case 3:
        console.log("bye", i)
        break
    default:
        console.log("Wrong choice")            
}
  




let i = 2
switch(i){
    case 1:
        console.log("Hello",i)
        
    case 2:
        console.log("welcome", i)
        
    case 3:
        console.log("bye", i)
    default:
        console.log("Wrong choice")            
}

// welcome 2
// bye 2
// Wrong choice





let i = 2
switch(i){
    case 2:
        console.log("welcome", i)    
    case 1:
        console.log("Hello",i)
        
    case 3:
        console.log("bye", i)
    default:
        console.log("Wrong choice")            
}

// welcome 2
// Hello 2
// bye 2
// Wrong choice






let i = 1
switch(i){
    case 3:
        console.log("hello", i)    
    case 1.5:
        console.log("Welcome",i)
        
    case 2.7:
        console.log("bye", i)
    default:
        console.log("Wrong choice")    // Wrong choice        
}






let i = 1.5
switch(i){
    case 3:
        console.log("hello", i)    
    case 1.5:
        console.log("Welcome",i)
        
    case 2.7:
        console.log("bye", i)
    default:
        console.log("Wrong choice")  
}

// Welcome 1.5
// bye 1.5
// Wrong choice





let i = 5%2
switch(i){
    case 7%3:
        console.log("hello", i)  // hello 1
        break
    case 2*4:
        console.log("welcome", i)
        break
    case 7+3:
        console.log("bye",i)
        break
    default:
        console.log("wrong choice")        
}





console.log(10 == 10)  // true
console.log(10 == 5)   // false
console.log(10 == "10")  // true
console.log(0 == false)  // true
console.log(1 == true)   // true
console.log(null == undefined)  // true




 
console.log(10 === 10)  // true
console.log(10 === 5)  // false
console.log(10 === "10")  // false
console.log(0 === false)  // false
console.log(1 === true)  // false
console.log(null === undefined)  // false
console.log(typeof null)  // object
console.log(typeof undefined)  // undefined





let x = [23]
let y = [23]
console.log(x == y)  // false
console.log(x === y)  // false
let z = y
console.log(y == z)  // true





let x = 10
let y = 5
console.log(x != y)  // true





let x = 10
let y = 10
console.log(x != y)  // false





let x = 10
let y = "10"
console.log(x != y)  // false





let x = 10
let y = "10"
console.log(x !== y)  // true





console.log(0 != false)  // false
console.log(0 !== false)  // true





x = prompt("enter the value")  // 10
console.log(x)  // 10
let y = x*x
console.log(y)  // 100
console.log(typeof x)  // string
let n = parseInt(x)
console.log(typeof n)  // number





console.log(typeof 100)  // number
console.log(typeof 10.5)  // number
console.log(typeof "dipu")  // string
console.log(typeof undefined)  // undefined
console.log(typeof null)  // object
console.log(typeof 10n)  // bigint
console.log(typeof {})  // object
console.log(typeof function(){})  // function