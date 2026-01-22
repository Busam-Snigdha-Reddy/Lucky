const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55,
}
 
let total=0;
for(let v of Object.values(marks)){
    total+=v
}
console.log(total)
console.log(total/Object.values(marks).length)
max=Number.MIN_VALUE
for(let v of Object.values(marks))
{
    if(v>max)
    {
        max =v
    }
}
console.log(max)
marks.computer=90
console.log(marks.computer)
