//Written by: Ehtisham
//Date: 3/1/2024

// Equality test
console.log("Equality test with strings:", "apple" === "apple") //true
console.log("Equality test with strings:", "apple" !== "apple") //false

// Inequality test
console.log("Inequality test with strings:", ("banana" as string) !== "apple") //true
console.log("Inequality test with strings:", "banana" !== "banana") //false

// Testing lowercase function
console.log("Lowercase function test:", "HELLO".toLowerCase() === "hello"); //true
console.log("Lowercase function test:", ("HELLO" as string) === "hello"); //false

// Numerical tests involving equality
console.log("Equality test with number:", 8 === 8) //true
console.log("Equality test with number:", 8 !== 8) //false

// Numerical tests involving inequality 
console.log("Inequality test with number:", (8 as number) !== 4) //true
console.log("Inequality test with number:", (8 as number) == 4) //false

//greater than test 
console.log("Greater than test:", 10 > 5); //true
console.log("Greater than test:", 5 > 10); //false

//less than test
console.log("Less than test:", 5 < 10);//true
console.log("Less than test:", 10 < 5);//false

//greater than or equal to test
console.log("Greater than or equal to test:", 10 >= 10);//true
console.log("Greater than or equal to test:", 9 >= 10);//false

//less than or equal to
console.log("Less than or equal to test:", 5 <= 10);// true
console.log("Less than or equal to test:", 10 <= 9);//false

// Tests of "AND" operator
console.log("And operator test:", true && true);//true
console.log("And operator test:", true && false);//false

// Tests of  "OR" operator
console.log("Or operator test:", true || false);//true
console.log("Or operator test:", false || false);//false

// Test whether an item is in an array
const fruits :string[] = ['Mango', 'Apple', 'Orange'];
console.log("Test 'Mango' in the array: ", fruits.includes("Mango"));//true
console.log("Test 'Mango' in the array: ", fruits.includes("Banana"));//false

// Test whether an item is not in an array
console.log("Testing 'Banana' is not in array:", !fruits.includes("Banana")); //true
console.log("Testing 'Mango' is not in array:", !fruits.includes("Mango")); //false
