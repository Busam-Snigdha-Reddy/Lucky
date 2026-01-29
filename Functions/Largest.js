//bigger of 3 numbers
function biggerOfThreeNumbers(x,y,z){
    if(x>=y && x>=z){
        return x
    }else if(y>=x && y>=z){
        return y
    }else{
        return z
    }
}
let bigNum = biggerOfThreeNumbers(100,250,150)
console.log("bigger number is: "+ bigNum)
