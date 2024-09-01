/**4. Checking if it's an Array
    Instructions:

    1. Create different variables, each containing either an array or a non-array value.

    2. Now use isArray to check if each variable is an array.

    3. Print a message to the console indicating whether each variable is an array or not.
*/

const books = ['bangla', 'english', 'math']
const number = []
const date = [12, 'tweenty']

console.log(Array.isArray(books));
console.log(Array.isArray(number));
console.log(Array.isArray(date));

if (Array.isArray(books)){
    console.log("It's array");
}
else{
    console.log("Not array");
}