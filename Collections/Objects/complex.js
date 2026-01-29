//complex object
let student ={
    sno:100,
    name:"lucky",
    marks:[20,40,60],
    address:{
        city:"hyderabad",
        pincode:500092
    },
    getData:function(){
        console.log("hello")
        console.log(student.marks[0])
    },
    getAverage:function(){
        let avg = 0
        for(let v of this.marks){
            avg+=v
        }
        avg/=this.marks.length
        console.log(avg)
    }
}
console.log(student.marks)
console.log(student.address.city)
student.getData()
student.getAverage()