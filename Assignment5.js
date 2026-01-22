const marks = [78, 92, 35, 88, 40, 67];
let result1=marks.filter(element=>element>=40)
console.log(result1)
let result2=marks.map(element=>element+5)
console.log(result2)
let result3=marks.reduce((accumulator,element)=>accumulator>element?accumulator:element)
console.log(result3)
let result4=marks.find(element=>element<40)
console.log(result4)
let result5=marks.findIndex(element=>element==92)
console.log(result5)


