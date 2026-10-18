
// Character Occurrence Checker in Product Review

// An e-commerce website wants to know how many times a particular character appears in a product review.

// Input: Enter product review: this product is really good 
// Enter character to check: o

// Output: Character 'o' occurs: 4 times





let review = "this product is really good"
let check = "o"
count = 0
for(let i=0; i < review.length; i++){
    if(review[i] == check){
        count++
    }
}
console.log(`Character ${check} occurs: ${count} times`)  // Character o occurs: 3 times