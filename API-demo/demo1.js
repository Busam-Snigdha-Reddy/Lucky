//Make a API req
fetch('https://jsonplaceholder.typicode.com/posts')//creates and returns the promise 
.then(res=>res.json())
.then(data=>console.log("data is",data))
.catch(err=>console.log("err is ",err))

//modren syntax
async function getData(){
    //make api req and get and get res
    let res =await fetch("https://jsonplaceholder.typicode.com/posts")
    //extract data from res
    let data = await res.json();
    console.log("data is",data)
}

getData();