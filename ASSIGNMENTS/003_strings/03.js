// 3.  Smart Chat Message Cleaner

// A social media company noticed that users often enter messages with
// unnecessary spaces. To improve readability and storage efficiency, the
// system should remove extra spaces and keep only a single space between
// words.

// Input: Enter message: Java is easy

// Output: Cleaned Message: Java is easy









let meassage = "Java  is  easy"
let words = meassage.split(" ")
let res = ""
for(let i=0; i < words.length; i++){
    if( words[i] != ""){
        res += words[i] + " "
    }
}
console.log("Cleaned Message:", res.slice(0, res.length -1))