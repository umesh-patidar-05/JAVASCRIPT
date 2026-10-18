// 6.

// Product Code Verification System

// An e-commerce company wants to verify whether two product codes are rearranged versions of each other.

// Conditions:
// - Ignore spaces
// - Ignore case sensitivity

// Input:
// Enter first product code: Dormitory
// Enter second product code: Dirty Room

// Output:
// Both Product Codes are Matching






let firstCode = "Dormitory"
let secondCode = "Dirty Room"
firstCode = firstCode.toLowerCase().replaceAll(" ", "")
secondCode = secondCode.toLowerCase().replaceAll(" ", "")
if (firstCode.length != secondCode.length) {
    console.log("Both Product Codes are NOT Matching")
}
else {
    let found = 1
    for (let i = 0; i < firstCode.length; i++) {
        let count1 = 0
        let count2 = 0
        for (let j = 0; j < firstCode.length; j++) {
            if (firstCode[i] == firstCode[j]) {
                count1++
            }
            if (firstCode[i] == secondCode[j]) {
                count2++
            }
        }
        if (count1 != count2) {
            found = 0
            break
        }

    }
    if (found == 1) {
        console.log("Both Product Codes are Matching")
    }
    else {
        console.log("Both Product Codes are NOT Matching")
    }
}
