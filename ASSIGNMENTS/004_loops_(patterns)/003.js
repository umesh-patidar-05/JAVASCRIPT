/*
*
 *
  *
   *
    *
*/


let n = 5
for(let i = 0; i < n; i++){
    let p1 = ""
    let p2 = ""
    for(let j=0; j<i; j++){
        p1 += " "
    }
    p2 = "*"
    console.log(`${p1}${p2}`)
}