function test1(a){
    console.log(a)
}
//here ananymous function is the call back function
test1(function()
{
    return 123;
}
)

//hello2 should be called only after hello1
function hello1()
{

}
function hello2()
{

}
hello1()
hello2()