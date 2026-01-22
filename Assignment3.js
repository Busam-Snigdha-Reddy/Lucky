const temperatures = [32, 35, 28, 40, 38, 30, 42,];
let result=temperatures.filter(element => element>35)
console.log(result)
let result1=temperatures.map(element=>(element*1.8)+32)
console.log(result1)
let result3=temperatures.reduce((accumulator,element)=>(accumulator+element))/temperatures.length
console.log(result3)
let result4=temperatures.find(element=>element>40)
console.log(result4)
let result5=temperatures.findIndex(element=>element===28)
console.log(result5)