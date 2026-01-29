//Write a function that receives"skills" array and "skillname" as arguments and returns the index if skillname exsited otherwise "skill not found"
let skills=['react','angular','nodejs','java']
function findSkill(skills,skillname){
    for(let s of skills){
        if(s==skillname){
            return skills.indexOf(s)
        }
    }
    return "skill not found"
}
let skillname="angular"
let result=findSkill(skills,skillname)
console.log("Skill found at index: "+ result)
