//Initial data:
//      let totalAmount = 0;

//🎯 Tasks
//  1. Add ₹500 to the total
//  2. Add ₹1200 to the total
//  3. Apply a ₹200 discount
//  4. Add 18% GST
//  5. Print the final bill amount
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