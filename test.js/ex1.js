//api
//JSON
let student={
    sno:1,
    name:'ravi',
    age:19
}
console.log(typeof student)
//JS obj to notation
let studentJson=JSON.stringify(student)
console.log(typeof studentJson)
//JSON to JS object
let data =JSON.parse('{"sno":1,"name":"ravi","age":19}')
console.log(data)