/*
Utility Toolkit System

You are developing a Utility Toolkit Application for a small office. Employees use this tool to quickly perform common number operations like checking prime numbers, reversing numbers, etc.

The system should be menu-driven and must continue running until the user selects Exit. All operations should be handled using match-case.

Menu Options:
1 → Check Prime Number
2 → Check Palindrome Number
3 → Reverse a Number
4 → Count Digits
5 → Exit

Sample Run 1:
Input:
Enter your choice: 1
Enter number: 7

Output:
7 is a Prime Number

Sample Run 2:
Input:
Enter your choice: 2
Enter number: 121

Output:
121 is a Palindrome Number

Sample Run 3:
Input:
Enter your choice: 3
Enter number: 456

Output:
Reversed Number is: 654

Sample Run 4:
Input:
Enter your choice: 4
Enter number: 98765

Output:
Total digits: 5

Sample Run 5 (Invalid Choice):
Input:
Enter your choice: 9

Output:
Invalid choice. Please try again.

Sample Run 6 (Exit):
Input:
Enter your choice: 5

Output:
Exiting program... Thank you!

Requirements:

* Use while loop to repeat menu
* Use match-case for decision making
* Handle negative numbers properly
* Use only loops and conditions
*/




let cond = 1
while (cond == 1) {


    let choice = 5
    switch (choice) {
        case 1: {
            let number = 7
            let count = 0
            if (number > 1) {

                for (let i = 2; i <= number; i++) {
                    if (number % i == 0) {
                        count++
                    }

                }
                if (count == 1) {
                    console.log(number, "is a Prime number")
                }
                else {
                    console.log(number, "is Not a prime number")
                }
            }
            else {
                console.log(number, "is Not a prime number")
            }
            break
        }
        case 2: {
            let number = 121
            number = String(number)
            rev = ""
            for (let ch of number) {
                rev = ch + rev
            }
            if (rev == number) {
                console.log(number, " is a Palindrome Number")
            }
            else {
                console.log(number, "is Not a palindrome Number")
            }
            break
        }
        case 3: {
            let number = 456
            number = String(number)
            rev = ""
            for (let ch of number) {
                rev = ch + rev
            }
            console.log("Reversed Number is: ", rev)
            break

        }
        case 4: {
            let number = 12345
            number = String(number)
            let count = 0
            for (let ch of number) {
                count += 1
            }
            console.log("Total digits:", count)
            break
        }
        case 5: {
            console.log("Exiting program... Thank you!")
            cond = 0
            break
        }
        default: {
            console.log("invalid choice")
        }

    }
}