/*
1
00
111
0000
11111
*/



let n = 5
for(let i =1; i <= n ; i++){
    res = ""
    for(let j =1; j <= i; j++){
        if(i%2 == 0){
            res += "0"
        }
        else{
            res += "1"
        }
    }
    console.log(res)
}



// 1
// 00
// 111
// 0000
// 11111