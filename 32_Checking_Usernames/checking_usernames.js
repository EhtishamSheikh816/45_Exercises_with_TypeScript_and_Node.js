"use strict";
// Written by: Muhammad Ehtisham
// current_users array
const current_username = [
    "Ehtisham",
    "Mudasir",
    "Ashir",
    "Shahjhan",
    "Talha",
];
// new_users array
const new_user = ["Usama", "Ehtisham", "Ali", "Ahmad", "Ashir"];
// Loop through new_users list
new_user.forEach((newUserName) => {
    // Convert new_user to lowercase for case insensitivity
    const tolowerCase = newUserName.toLowerCase();
    // Checking username already exists in current_users or not
    if (current_username.map((user) => user.toLowerCase()).includes(tolowerCase)) {
        // Username already exists
        console.log(`Sorry ${newUserName} is already a member, Please choose a different username.`);
    }
    else {
        // Username already exists
        console.log(`Welcome ${newUserName}! You have joined us.`);
    }
});
