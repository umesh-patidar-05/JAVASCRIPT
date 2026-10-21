/*
1
22
333
4444
55555
*/



let n = 5
let i = 1
while(i <= n){
    let res = ""
    let j =1
    while(j <= i){
        res += String(i)
        j++
    }
    console.log(res)
    i++
}