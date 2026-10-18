// 1.
// Email Username Validator
// A company wants to check whether an employee email username is valid before creating an official account.

// Conditions:
// - Username should start with a letter
// - Username can contain letters, digits, underscore (_)
// - No spaces allowed
// - Length should be between 5 and 12 characters

// Input:
// Enter username: ajay_123

// Output:
// Valid Username






let username = "ajay_123"
username = username.toLowerCase()
let found = 1
if(username.length >= 5 && username.length <= 12){
    if(username[0] >= "a" && username[0] <= "z"){
        for(let i=0; i < username.length; i++){
            if( (username[i] >= "a" && username[i] <= "z") || (username[i] >= "0" && username[i] <= "9") || (username[i] == "_")){
                continue
            }
            else{
                found = 0
                break
            }
        }
        if(found == 1){
            console.log("Valid username")
        }
        else{
            console.log("Invalid Valid username")
        }
    }
    else{
        console.log("Invalid Valid username")
    }
} 
else{
    console.log("Invalid Valid username")
}