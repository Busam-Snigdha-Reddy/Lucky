let marks=[10,30,40,50,60]
//filter(selection)
let a=marks.filter(function(element){
    return element<50
})
console.log(a)
//write a function that can extract marks>70,pack them into an array and return it
let res=[]
function greater(marks){
    for(let v of marks)
    {
        if(v>70)
        {
            res.push(v)
        }
    }
}
console.log(res)
//find all marks between 30 and 90
let ans= marks.filter(function(element){
    return element>30  && element<90
})
console.log(ans)
//add 50 to all elements
let add=marks.map(function(element){
    return element+50
})
console.log(add)