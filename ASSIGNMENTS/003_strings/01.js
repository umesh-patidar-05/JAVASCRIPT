// 1.  Bank Customer Account Privacy System

// A national bank is developing a secure customer portal where account
// numbers should not be displayed completely on the screen. For security
// reasons, the system should hide all digits except the last four digits
// before showing them to users.

// Conditions: - Display only the last 4 digits - Replace all previous
// characters with *

// Input: Enter account number: 123456789012

// Output: Masked Account: ********9012






let acc_number = "123456789012"
let res = ""
for(let i=0; i < acc_number.length; i++){
    if(i < acc_number.length -4){
        res += "*"
    }
    else{
        res += acc_number[i]
    }
}
console.log("Masked Account:", res)    // Masked Account: ********9012