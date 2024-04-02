// Written By: Muhammad Ehtisham

// array for usernames
let userNames: string[] = ["admin", "Ehtisham", "Mudasir", "Ashir", "Shahjhan"];

// Checking User Availiblity
if (userNames.length === 0) {
  console.log("We need to find some users!");
} else {
  // Removimg all usernames from the array
  userNames = [];
  console.log("All usernames have been removed. " + userNames.length);
}
