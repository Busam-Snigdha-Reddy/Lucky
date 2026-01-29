//3 members odered food
//person-1 ordered biryani(5 sec)
console.log("person-1 ordered biryani")//non block sync
setTimeout(() => { //block async
    console.log("person-1 recieved biryani")
},5000)
//person-2 ordered curd rice(2 sec) 
console.log("person-2 ordered curd rice")//non block sync
setTimeout(()=>{//block async
    console.log("person-2 recieved curd")
},2000)
//person-3 ordered water bottle( 1 sec)
console.log("person-3 ordered water bottle")//non block sync
setTimeout(()=>{//block async
    console.log("person-3 recieved water bottle")
},1000)
