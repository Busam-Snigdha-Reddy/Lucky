//Assignment 2: Online Course Name Processor
const courses = ["javascript", "react", "node", "mongodb", "express"];
//1. filter() courses with name length > 5
let result1=courses.filter(element=>element.length>5)
console.log(result1)
//2. map() to convert course names to uppercase
let result2=courses.map(element=>element.toUpperCase())
console.log(result2)
//4. find() the course "react"
let result3=courses.find(element=>element==="react")
console.log(result3)
//5. findIndex() of "node"
let result4=courses.findIndex(element=>element==="node")
console.log(result4)