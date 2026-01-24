//Assignment 1: Daily Temperature Analyzer
const temperatures = [32, 35, 28, 40, 38, 30, 42,];
//1. filter() temperatures above 35
let result=temperatures.filter(element => element>35)
console.log(result)
//2. map() to convert all temperatures from Celsius → Fahrenheit
let result1=temperatures.map(element=>(element*1.8)+32)
console.log(result1)
//3. reduce() to calculate average temperature
let result3=temperatures.reduce((accumulator,element)=>(accumulator+element))/temperatures.length
console.log(result3)
//4. find() first temperature above 40
let result4=temperatures.find(element=>element>40)
console.log(result4)
//5. findIndex() of temperature 28
let result5=temperatures.findIndex(element=>element===28)
console.log(result5)



