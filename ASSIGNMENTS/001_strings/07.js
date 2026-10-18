// Vehicle Number Plate Checker

// The traffic department wants to validate vehicle registration numbers.

// Conditions:
// - First 2 characters should be alphabets
// - Next 2 should be digits
// - Total length should be 10

// Input:
// Enter vehicle number: MP04AB1234

// Output:
// Valid Vehicle Number





let number = "MP04AB1234"
number = number.toLowerCase()
if(number.length == 10){
    if((number[0] >= "a" && number[0] <= "z") && (number[1] >= "a" && number[1] <= "z") && (number[2] >= "0" && number[2] <= "9") && (number[3] >= "0" && number[3] <= "9")){
        console.log("Valid Vehicle Number")
    }
    else{
        console.log("invalid Valid Vehicle Number")
    }
}
else{
    console.log("invalid Valid Vehicle Number")
}