let name1 = "abc"
let address = 'indore'
let age = 20
let message = `Name is ${name1} and address is ${address} and age is ${age}`
console.log(name1)  // abc
console.log(address)  // indore
console.log(message)  // Name is abc and address is indore and age is 20




a = 10
b = 20
console.log(`Sum is ${a+b}`)  // Sum is 30




let message = `heyyyyy guyssss aaj to party hai
sun rahe ho na`
console.log(message)    // heyyyyy guyssss aaj to party hai
                        // sun rahe ho na




let message = "heyyyyy 'aaj to ghar jana hai'"
console.log(message)  // heyyyyy 'aaj to ghar jana hai'




let message = "heyyyy \"guys\"";
console.log(message)    // heyyyy "guys"




let m = "welcome"
console.log(m[0])  // w
console.log(m[1])  // e
console.log(m[2])  // l
console.log(m[10])  // undefined
console.log(m[-1])  // undefined




let m = "welcome"
console.log(m.charAt(0))  // w
console.log(m.at(0))   // w
console.log(m.length)  // 7
console.log(m[m.length-1])  // e
console.log(m.at(-1))  // e
console.log(m[-1])  // undefined




let m = "Hello"
console.log(m)  // Hello
m[0] = "y"
console.log(m)  // Hello




let m = "welcome"
console.log(m)  // welcome
m = m + "home"
console.log(m)  // welcomehome




console.log(10+20)  // 30
console.log("10"+"20")  // 1020
console.log("10"+20)  // 1020
console.log(10+"20"+ 5)  // 10205
console.log(10 + 5 + "20")  // 1520




console.log("20"-5)  // 15
console.log("20"*5)  // 100
console.log("20"/5)  // 4
console.log("abc"-5)  // NaN
console.log("xyz"*5)  // NaN
console.log(10+"20"-5)  // 1015




console.log(String(100))  // 100
console.log(String(true))  // true




let a = "Hello"
console.log(a.length)  // 5




let a = "Hello"
console.log(a.toUpperCase())  // HELLO




let a = "hello"
console.log(a.toLowerCase())  // hello




let a = "  hello  "
console.log(a.trim())  // hello




let a = "hello"
console.log(a.includes('ll'))  // true




let a = "hello"
console.log(a.indexOf("l"))  // 2




let a = "hello"
console.log(a.indexOf("k"))   // -1




let a = "hello"
console.log(a.lastIndexOf("l"))  // 3




let a = "hello"
console.log(a.startsWith("he"))  // true




let a = "hello"
console.log(a.endsWith("lo"))  // true




let a = "Javascript"
console.log(a.slice(0,4))  // Java




let a = "Javascript"
console.log(a.slice(-6,))  // script




let a = "Javascript"
console.log(a.substring(0,4))  // Java




let str = "I love python"
console.log(str.replace("python", "js"))  // I love js
console.log("a-a-a".replaceAll("-", "_"))  // a_a_a
console.log("red,blue,green".split(","))  // [ 'red', 'blue', 'green' ]
console.log("Hello".concat(" world"))  // Hello world
console.log("Hii ".repeat(3))  // Hii Hii Hii




console.log("hello" == "hello")  // true
console.log("hello" === "hello")  // true
console.log("10" == 10)  // true
console.log("10" === 10)  // false




console.log("cabc" < "bbd")   // false




let a = true
let b = "true"
console.log(typeof a)  // boolean
console.log(typeof b)  // string




console.log(Boolean(false))  // false
console.log(Boolean(""))  // false
console.log(Boolean("dhruv"))  // true
console.log(Boolean(0))  // false
console.log(Boolean(null))  // false
console.log(Boolean(undefined))  // false
console.log(Boolean(NaN))  // false
console.log(Boolean(false == NaN))  // false
console.log(Boolean("false"))  // true
console.log(Boolean("0"))  // true
console.log(Boolean([]))  // true
console.log(Boolean({}))  // true
console.log(!!"hello")  // true
console.log(Boolean(!!0))  // false




let a = 10
let b = 20
let c = 30
if(a>b){
    if(a>c){
        console.log("a is greater")
    }
    else{
        console.log("c is greater")
    }

}
else{
    if(b>c){
        console.log("b is greater")
    }
    else{
        console.log("c is greater")  // c is greater
    }
}




let a = 10
let b = 20
let c = 30
if(a>b && a>c){
    console.log("a is greater")
}
else if(b>c){
    console.log("b is greater")
}
else{
    console.log("c is greater")  // c is greater
}




a = 10
++a
console.log(a)  // 11




a = 10
a++
console.log(a)  // 11




let a = 10
let y = ++a
console.log(a)  // 11
console.log(y)  // 11




let a = 10
let y = a++
console.log(a)  // 11
console.log(y)  // 10




let a = 10
let y = --a
console.log(a)  // 9
console.log(y)  // 9




let a = 10
let y = a--
console.log(a)  // 9
console.log(y)  // 10




for (let i = 1; i <= 10; i++) {
    console.log(i)
}

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




for (let i = 1; i <= 10; i = i+2) {
    console.log(i)
}

// 1
// 3
// 5
// 7
// 9




for (let i = 10; i >=1; i--) {
    console.log(i)
}

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




let i = 1
while (i <= 10) {
    console.log(i)
    i++
}

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




let i =10
while (i>=1)
{
    console.log(i)
    i--
}

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




let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log( 10 / 2)  // 5
console.log(a % b);  // 1
console.log(a ** b); // 1000




let x = 10;

console.log(x); // 10

x += 5;
console.log(x); // 15

x -= 3;
console.log(x); // 12

x *= 2;
console.log(x); // 24

x /= 4;
console.log(x); // 6

x %= 4;
console.log(x); // 2

x **= 3;
console.log(x); // 8




let a = 10;
let b = 5;

console.log(a > b);   // true
console.log(a < b);   // false
console.log(a == b);  // false
console.log(a != b);  // true
console.log(a >= b);  // true
console.log(a <= b);  // false




console.log( 23>= 18 && 43 < 32); // false
console.log(23>= 18 || 43 < 32);  // true
console.log(!23>= 18);             // false




let a = 5;
let b = 3;

console.log(a & b);  // 1
console.log(a | b);  // 7
console.log(a ^ b);  // 6
console.log(~a);     // -6
console.log(a << 1); // 10
console.log(a >> 1); // 2




for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break
    }
    console.log(i);
}

// 1
// 2




for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue
    }
    console.log(i);
}

// 1
// 2
// 4
// 5