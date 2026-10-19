// 2.  Corporate Employee Short ID Generator

// A multinational company wants to automatically generate short IDs for
// employees while creating official email accounts. The system should take
// the employee’s full name and create an ID using the first character of
// each word.

// Conditions: - Take first character of every word - Convert all
// characters to uppercase

// Input: Enter employee name: ajay singh thakur

// Output: Employee Short ID: AST






let ename = "ajay singh thakur"
res = ""
for( let i=0; i < ename.length; i++){
    if( i==0 || ename[i-1] == " "){
        res = res + ename[i].toUpperCase()
    }
}
console.log("Employee Short ID:", res)