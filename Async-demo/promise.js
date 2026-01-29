//getting first rank inn the sem
let futurepossibility=true;
let promiseObj=new Promise((fulfill,reject)=>{
    setTimeout(() => {
        if(futurepossibility===true){
            fulfill("i got the first rank")
        }
        else{
            reject("i did not get the first rank")
        }
    },4000);
})
promiseObj
.then((message)=>console.log("Fulfilled:",message))
.catch((error)=>console.log("rejected:",error))