// Railway Ticket PNR Analyzer

// A railway department wants to verify whether a PNR number is valid.

// Conditions:
// - PNR must start with "PNR"
// - Total length should be 12 characters
// - Remaining characters should be digits

// Input:
// Enter PNR: PNR123456789

// Output:
// Valid PNR Number






let pnr = "PNR123456789"
let found = 1
if (pnr.length == 12){
    if (pnr.startsWith("PNR")){
        for(let i=3; i < pnr.length; i++){
            if("0123456789".includes(pnr[i]))
                continue
            else{
                console.log("Invalid PNR Number")
                found = 0
                break
            }
        }
        if (found== 1){
            console.log("valid PNR number")
        }

    }
    else {
        console.log("Invalid PNR Number")
    }
}
else{
    console.log("Invalid PNR Number")
}
