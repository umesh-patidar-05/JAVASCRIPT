// 4.
// Employee ID Validator

// A company wants to validate employee IDs before storing them in the database.

// Conditions:
// - ID must start with "EMP"
// - Total length should be 8
// - Remaining characters should be digits only

// Input:
// Enter Employee ID: EMP10234

// Output:
// Valid Employee ID







let id = "EMP10234"
let found = 1
if (id.length == 8 && id.startsWith("EMP")) {
    for (let i = 3; i < id.length; i++) {
        if (id[i] >= "0" && id[i] <= "9") {
            continue
        }
        else {
            found = 0
            break
        }
    }
    if (found == 1) {
        console.log("Valid Employee ID")
    }
    else {
        console.log("Invalid Employee ID")
    }
}
else {
    console.log("Invalid Employee ID")

}