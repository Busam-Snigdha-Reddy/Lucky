//Array(ordered collection)
let marks=[90,87,89]
let skills=['html','javascript','angular']
//access
console.log(marks[10]) //it is not error or exception but it is undefined
//iterate
//for loop
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}
//for-of-loop--it does not allow index based operations
for(let v of skills){
    console.log(v)
}
//inserting at start of the array
skills.unshift("c++","python")
console.log(skills)
//inserting at end
skills.push("java")
console.log(skills)
//at end
skills.pop()
console.log(skills)
//add and delete at particular index
//splice(index,deletecount,element)
skills.splice(1,0,"c++")
console.log(skills)