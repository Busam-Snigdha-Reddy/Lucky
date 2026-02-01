const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//Use filter() to get only inStock products
result1=cart.filter(elements=>elements.inStock)
console.log(result1)
//Use map() to create a new array with:  { name, totalPrice }
result2=cart.map(elements=>{
    return{
        name:elements.name,
        totalprice:elements.price
    }
})
console.log(result2)
//Use reduce() to calculate grand total cart value
result3=cart.reduce((accumulator,element)=>accumulator+(element.price*element.quantity),0)
console.log(result3)
//Use find() to get details of "Mouse"
result4=cart.find(element=>element.name=="Mouse")
console.log(result4)
//Use findIndex() to find the position of "Keyboard"
result5=cart.findIndex(element=>element.name=="Keyboard")
console.log(result5)
