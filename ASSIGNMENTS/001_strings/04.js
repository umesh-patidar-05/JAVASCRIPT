// Consonant Counter in Student Name Record

// A school management system wants to count how many consonants are present in student names.

// Input: Enter student name: Ajay Singh Thakur

// Output: Total consonants: 10

// NOTE:

// Ignore case sensitivity (treat A and a same)
// Consider only English alphabets for vowel/consonant counting
// Vowels: A, E, I, O, U






/*
let student = "Ajay Singh Thakur"
let vowels = "aeiouAEIOU"
let count = 0
for(let i=0; i < student.length; i++){
    if(vowels.includes(student[i])){
        continue
    }
    else if(student[i] == " "){
        continue
    }
    else{
        count++
    }
}
console.log(`Total consonants: ${count}`)   // Total consonants: 10
*/






let student = "Ajay Singh Thakur"
let vowels = "aeiouAEIOU"
let count = 0
for(let i=0; i < student.length; i++){
    if( (student[i] >= "a" && student[i] <= "z") || (student[i] >= "A" && student[i] <= "Z")){
        if( vowels.includes(student[i])){
            continue
        }
        else{
            count++
        }
    }
}    
console.log(`Total consonants: ${count}`)  // Total consonants: 10