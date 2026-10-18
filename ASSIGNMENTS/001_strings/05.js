// Advanced Password Security Checker

// A cyber security company wants to verify whether employee passwords are highly secure before giving system access.

// Conditions: Password must:

// Start with an uppercase letter
// End with a digit
// Contain at least 2 digits
// Contain at least 1 special character (@ # $ % & *)
// Must not contain spaces
// Length should be between 8 and 15 characters

// Input: Enter password: Python@45

// Output: Secure Password





let password = "Python@45"
let dcount = 0
let scount = 0
if (password.length >= 8 && password.length <= 15) {
    if ((password[0] >= "A" && password[0] <= "Z") && (password[password.length - 1] >= "0" && password[password.length - 1] <= "9") && (!(password.includes(" ")))) {
        for (let i = 0; i < password.length; i++) {
            if ("0123456789".includes(password[i])) {
                dcount++
            }
            else if ("@#$%&*".includes(password[i])) {
                scount++
            }
        }
        if (scount >= 1 && dcount >= 2) {
            console.log("Secure password")    // Secure password
        }
        else {
            console.log("Not Secure")
        }
    }
    else {
        console.log("Not Secure")
    }
}
else {
    console.log("Not Secure")
}


