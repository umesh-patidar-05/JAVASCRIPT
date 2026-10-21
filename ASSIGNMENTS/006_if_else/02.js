let a = 10
let b = 8
let c = 6
let d = 4

if(a>b){
    if(a>c){
        if(a>d){
            console.log("a is greater")
        }
        else{
            console.log("d is greater")
        }
    }
    else if(c>b){
        if(c > d){
            console.log("c is greater")
        }
        else{
            console.log("d is greater")
        }
    }
    
}
else if(b >c){
    if(b>d){
        console.log("b is greater")
    }
    else{
        console.log("d is greater")
    }
}
else{
    if(c>d){
        console.log("c is greater")
    }
    else{
        console.log("d is greater")
    }
}