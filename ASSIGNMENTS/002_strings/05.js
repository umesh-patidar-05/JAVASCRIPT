// 5.
// Palindrome Product Code Checker

// A factory wants to identify whether a product code reads the same forward and backward.

// Input:
// Enter product code: MADAM

// Output:
// Palindrome Code

// Input:
// Enter product code: PRODUCT

// Output:
// Not a Palindrome Code






let code = "MADAM"
let reverse = ""
for(let i=0; i < code.length; i++ ){
    reverse = code[i] + reverse
}
if(reverse == code){
    console.log("Palindrome Code")    // Palindrome Code
}
else{
    console.log("Not a Palindrome Code")
}