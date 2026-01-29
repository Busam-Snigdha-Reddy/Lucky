//Bank Transaction Analyzer
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
// 1. filter() all credit transactions
result1 = transactions.filter(element=>element.type==="credit")
console.log(result1)
// 2. map() to extract only transaction amounts
result2=transactions.map(element=>element.amount)
console.log(result2)
//3. reduce() to calculate final account balance
result3=transactions.reduce((accumulator,element)=>accumulator+element.amount,0)
console.log(result3)
// 4. find() the first debit transaction
result4=transactions.find(element=>element.type==="debit")
console.log(result4)
// 5. findIndex() of transaction with amount 10000
result5=transactions.findIndex(element=>element.amount===10000)
console.log(result5)
