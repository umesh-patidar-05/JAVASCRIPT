// Vowel Counter in Customer Feedback

//  A company wants to analyze customer feedback messages by counting how many vowels are present in the feedback.

// Input: Enter feedback message: Hello Customer Service

// Output: Total vowels: 8









/*
let message = "Hello Customer Service"
message = message.toLowerCase()
let count = 0
for (let i = 0; i < message.length; i++) {
    if (message[i] == "a" || message[i] == "e" || message[i] == "i" || message[i] == "o" || message[i] == "u") {
        count++
    }
}
console.log(`Total vowels ${count}`)   // Total vowels 8
*/






let message = "Hello Customer Service"
let vowels = "aeiouAEIOU";
let count = 0
for (let i = 0; i < message.length; i++) {
if (vowels.includes(message[i])) {
    count++;
}
}
console.log(`Total vowels ${count}`)   // Total vowels 8