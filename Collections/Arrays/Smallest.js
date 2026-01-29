//write a function that receives marks array as argument and returns the small element
function findSmallest(marks){
    let small=marks[0]
    for(let v of marks){
        if(v<small){
            small=v
        }
    }
    return small
}
let marks=[90,87,89]
let smallestMark=findSmallest(marks)
console.log("Smallest mark is: "+ smallestMark)