const a = 'hello';
console.log(a);

// load ApI for Categories 
const loadCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories')
    const data = await res.json()
console.log(data);


}
// display categories 
 const displayCategories =  (data) => {
    console.log(data);
    
 }
 loadCategories();
 

