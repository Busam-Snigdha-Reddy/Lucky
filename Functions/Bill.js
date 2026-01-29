let totalamount=0;
function add(amount){
    totalamount=totalamount+amount;
}
function discount(discountamount){
    totalamount=totalamount-discountamount;
}
function gst(gstamount){
    totalamount=totalamount+gstamount;
}
function printbill(){
    console.log("Total bill amount is: "+ totalamount);
}
add(500)
gst(18)
discount(50)
printbill()