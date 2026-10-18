// 2.
// Mobile Number Digit Counter

// A telecom company wants to count how many digits are present in a customer contact number entered with spaces or symbols.

// Input:
// Enter contact number: +91 98765-43210    

// Output:
// Total digits: 12



let number = "+91 98765-43210"
let count = 0
for(i=0; i< number.length; i++){
    if(number[i] >= "0" && number[i] <= "9"){
        count ++
    }
}
console.log(`Total digits: ${count}`)   // Total digits: 12