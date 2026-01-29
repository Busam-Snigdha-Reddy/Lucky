//students(array of objects)
let students=[
    {sno:1 ,name: "lucky",age: 20},
    {sno:2 ,name: "candy",age: 18},
    {sno:3 ,name: "tappy",age: 15},
    {sno:4 ,name: "happy",age: 13},
]
//find students age less than 20
let result1=students.filter(studentsObj=>studentsObj.age<20)
console.log(result1)
//increment ages by 2 yrs
let result2=students.map(studentsObj=>studentsObj.age+2)
console.log(result2)
//increment 2 yrs for lucky
let result3=students.map(studentsObj=>{
    if(studentsObj.name=="lucky"){
        studentsObj.age+=2
    }
    return{
        sno: studentsObj.sno,
        name: studentsObj.name,
        age: studentsObj.age
    }
}
)
console.log(result3)
//sum of the students age 
let result4=Object.values(students).reduce((accumulator,students)=>accumulator+students.age,0)
console.log(result4)

