// 4.  Instant Messaging Word Encryption System

// A messaging application wants to temporarily encrypt messages during
// transmission. The encryption rule is to reverse every word individually
// while keeping the word positions unchanged.

// Input: Enter message: java is powerful

// Output: Encrypted Message: avaj si lufrewop






let message = "java is powerful"
let res = ""
let words = message.split(" ")
for(let i=0; i< words.length; i++){
    if(words[i] != ""){
        let word = words[i]
        for(let j = words[i].length -1; j >= 0; j-- ){
            res = res + word[j] 
        }
        res += " "
    }
}
console.log("Encripted Message:", res.slice(0, res.length -1))