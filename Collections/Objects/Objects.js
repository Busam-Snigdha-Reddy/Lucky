//Object (pack of collections)
let empObj={
    empNo:100,
    name:'lucky',
    age:20
}
//Accessing properties
console.log(empObj.name)
console.log(empObj.empNo)
console.log(empObj.city)
//iterate an object (for-in loop)
for(let v in empObj)
{
    console.log(v, "is" ,empObj[v])
}
//Adding new properties(dynamic)
empObj.city="hyderabad"
console.log(empObj.city)
//Updating a property
empObj.empNo=123;
console.log(empObj.empNo)
//delete property
delete empObj.name;
//display
for(let v in empObj)
{
    console.log(v, "is" ,empObj[v])
}
//freeze an object
Object.freeze(empObj)
empObj.mobile=9866164804 // this is not added into the object 
console.log(empObj)
//read keys
console.log(Object.keys(empObj))
//Read Values
console.log(Object.values(empObj))