/** 3. Checking Array Membership with ‘includes’
    Instructions:

    1. Create an array of books containing different book.

    2. Use the includes method to check if the array contains a javascript book.

    3. Print a message to the console indicating whether the element is present in the array or not.
*/

const books = ['Python', 'JavaScript', 'Php', 'C++']
console.log(books);
console.log(books.includes('JavaScript'));

if (books.includes("JavaScript")){
    console.log("Pressent in the array");
}  
else{
    console.log("Not present in the array");
}
