//Movie Streaming Platform
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//1. filter() only "Sci-Fi" movies
result1 = movies.filter(element=>element.genre==="Sci-Fi")
console.log(result1)
//2. map() to return:
//       "Inception (8.8)"
result2 = movies.map(element=>`${element.title} (${element.rating})`);
console.log(result2)
// 3. reduce() to find average movie rating
result3 = movies.reduce((accumulator,element)=>accumulator+element.rating,0)/movies.length
console.log(result3)
// 4. find() movie "Joker"
result4=movies.find(element=>element.title==="Joker")
console.log(result4)
//5. findIndex() of "Avengers"
result5=movies.findIndex(element=>element.title==="Avengers")
console.log(result5)