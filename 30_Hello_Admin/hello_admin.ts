// Written By: Muhammad Ehtisham

// array for usernames
const userNames: string[] = [
  "admin",
  "Ehtisham",
  "Muddasir",
  "Ashir",
  "Shahjhan",
];

// using forEach method
userNames.forEach((name) => {
  // Step 3: Inside the loop, special greeting for 'admin', For Others printing a Simple greeting
  if (name === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${name}, thank you for logging in again.`);
  }
});
