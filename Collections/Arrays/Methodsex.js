let marks=[10,30,89,65,45]
//filter(selection)
//get marks<70
let result=marks.filter(element=>element<70)
console.log(result)
//map(manipulation)
//add 50 to all numbers
let result2=marks.map(element=>element+50)
console.log(result2)
//reduce(aggregation)
//find sum of marks
let ans= marks.reduce((accumulator,element)=>accumulator+element)
//accumulator stores the result of the previous elements
console.log(ans)
// min marks 
let min=marks.reduce((acc,element)=>acc<element?acc:element)
console.log(min)
//find element 23
let result4=marks.find(element=>element===89)
console.log(result4)
//find index of 23
let result5=marks.findIndex(element=>element===89)
console.log(result5)