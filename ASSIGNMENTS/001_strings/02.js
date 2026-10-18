// Space Counter in Chat Messages

// A chat application wants to calculate how many spaces are used in a message.

// Input: Enter chat message: Good morning everyone how are you

// Output: Total spaces: 5





let message = "Good morning everyone how are you"
count = 0
for(let i=0; i < message.length; i++){
    if(message[i] == " "){
        count++
    }
}
console.log(`Total spaces: ${count}`)  // Total spaces: 5