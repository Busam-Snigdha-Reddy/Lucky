//Ravi made promise to kiran that he will call him after 10 min
//create promise
let futureavailability=true;
let promiseObj = new Promise((fulfill,reject)=>{
    setTimeout(()=>{
        if(futureavailability===true)
        {
            fulfill("Hello frnd .. how are you?")
        }
        else{
            reject("sorry...i will callll u later")
        }
    },5000);
})
//consume promise
promiseObj
.then((message)=>console.log("Then method:",message))// when promise is fulfilled
.catch((error)=>console.log("Rejected:",error))//when promise is rejected

 