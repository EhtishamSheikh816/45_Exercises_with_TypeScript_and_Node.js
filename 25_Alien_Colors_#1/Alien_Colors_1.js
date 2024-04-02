"use strict";
//Written by:Muhammad Ehtisham
//Date:3/6/2024
//Create a variable called alien_color
let alien_Color = 'Green';
//Write an if statement to test whether the alien’s color is green.
//If it is, print a message that the player just earned 5 points.
if (alien_Color === 'Green') {
    console.log("Player just earned 5 points!");
}
//Write one version of this program that passes the if test and another that fails.
alien_Color = 'yellow';
//The version that fails will have no output.
if (alien_Color === 'Green') {
    console.log("Player just earned 5 points!");
}
