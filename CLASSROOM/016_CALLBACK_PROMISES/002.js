
console.log("code started")
let pro = new Promise((resolve, reject)=>{
    setTimeout(()=>{
            
    }, 3000)
    let flag = true
    if(flag){
        resolve()
    }
    else{
        reject()
    }
})
console.log("first code")
console.log("second code")
console.log("third code")
pro.then(()=>{
    console.log("promise is resolved we got the data")
}).catch(()=>{
    console.log("promise is rejected ")
}).finally(()=>{
    console.log("processing done")
})
console.log("code completed")