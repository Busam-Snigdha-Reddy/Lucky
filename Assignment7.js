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
