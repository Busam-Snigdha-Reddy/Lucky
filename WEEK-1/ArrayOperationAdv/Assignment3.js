//Employee Payroll Processor
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//1. filter() employees from IT department
result1=employees.filter(element=>element.department==="IT")
console.log(result1)
//2. map() to add:
//         netSalary = salary + 10% bonus
result2=employees.map(element=>({
    ...element,
    netsalary :element.salary + (10/100)*element.salary

}));
console.log(result2)
//3. reduce() to calculate total salary payout
result3=employees.reduce((accumulator,element)=>accumulator+element.salary,0);
console.log(result3)
// 4. find() employee with salary 30000
result4=employees.find(element=>element.salary==30000)
console.log(result4)
//5. findIndex() of employee "Neha"
result5=employees.findIndex(element=>element.name==="Neha")
console.log(result5)