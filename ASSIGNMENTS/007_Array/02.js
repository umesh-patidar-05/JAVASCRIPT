/*
2.
Smart City Traffic Peak Load Analyzer

Problem Statement

A smart city monitors traffic density at different time intervals in a day.

An element is called a peak traffic point if it is greater than or equal to its adjacent elements.

You are given an array traffic[] of size N.

Tasks:

Find all peak elements
Calculate the sum of all peak traffic values
Find the product of all peak traffic values
Return the maximum peak value

Note:
If only one element exists, it is the only peak.

Test Case 1

Input:
traffic = [10, 50, 30, 70, 60, 90, 80]

Output:
Peaks = [50, 70, 90]
Sum = 210
Product = 315000
Max Peak = 90

Test Case 2

Input:
traffic = [100, 200, 150, 180, 170]

Output:
Peaks = [200, 180]
Sum = 380
Product = 36000
Max Peak = 200

Test Case 3

Input:
traffic = [5]

Output:
Peaks = [5]
Sum = 5
Product = 5
Max Peak = 5
*/


let s = prompt("Traffic : ")
let traffic = (s.split(" ")).map(n => Number(n))
// let traffic = [10, 50, 30, 70, 60, 90, 80]
let res = []
if (traffic.length > 1) {
    for (let i = 0; i < traffic.length; i++) {
        if (i == 0) {
            if (traffic[i] >= traffic[i + 1]) {
                res.push(traffic[i])
            }
        }
        else if (i == traffic.length - 1) {
            if (traffic[i] >= traffic[i - 1]) {
                res.push(traffic[i])
            }
        }
        else {
            if ((traffic[i - 1] <= traffic[i]) && (traffic[i] >= traffic[i + 1])) {
                res.push(traffic[i])
            }
        }
    }
}
else{
    res.push(traffic[0])
}

console.log("peaks =", res)
console.log("Sum =", res.reduce((a,b) => a+b))
console.log("product =", res.reduce((a,b) => a * b))
console.log("Max peak =", res.reduce((a,b) => a>b?a:b))