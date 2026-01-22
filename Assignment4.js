const courses = ["javascript", "react", "node", "mongodb", "express"];
let result1=courses.filter(element=>element.length>5)
console.log(result1)
let result2=courses.map(element=>element.toUpperCase())
console.log(result2)
let result3=courses.find(element=>element==="react")
console.log(result3)
let result4=courses.findIndex(element=>element==="node")
console.log(result4)