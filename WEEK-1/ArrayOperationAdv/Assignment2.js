const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//filter() students who passed (marks ≥ 40)
result1=students.filter(element=>element.marks>=40)
console.log(result1)
//map() to add a grade field
        //≥90 → A
        //≥75 → B
        //≥60 → C
        //else → D
result2 = students.map(element => {
    if (element.marks >= 90) {
        return { ...element, Grade: "A" };
    } else if (element.marks >= 75) {
        return { ...element, Grade: "B" };
    } else if (element.marks >= 60) {
        return { ...element, Grade: "C" };
    } else {
        return { ...element, Grade: "D" };
    }
});
console.log(result2)
//3. reduce() to calculate average marks
result3 = students.reduce((accumulator,element)=>accumulator+element.marks,0)/students.length
console.log(result3)
//4. find() the student who scored 92
result4=students.find(element=>element.marks==92)
console.log(result4)
//5. findIndex() of student "Kiran"
result5=students.findIndex(element=>element.name==="Kiran")
console.log(result5)