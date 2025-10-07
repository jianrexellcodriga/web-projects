/*
  Full Name: Jian Rexell Codriga
  Section: IT 301
  Date: October 7, 2025
  Description: This JavaScript program displays personal and academic information dynamically 
               using various data types (String, Number, Boolean, Array) and shows their data 
               types in the console.
*/

// String variables
let fullName = "Jian Rexell Codriga";
let section = "IT 301";
let date = "October 7, 2025";


// Number, Boolean, and Array variables
let yearLevel = 3;                        // Number
let isEnrolled = true;                    // Boolean
let subjects = ["Programming", "Networking", "Database"];  // Array

// Display values dynamically on webpage
document.getElementById("output").innerHTML = `
  <ul>
    <li><strong>Your full name:</strong> ${fullName}</li>
    <li><strong>Section:</strong> ${section}</li>
    <li><strong>Date:</strong> ${date}</li>
    <li><strong>Year Level:</strong> ${yearLevel}</li>
    <li><strong>Enrolled:</strong> ${isEnrolled}</li>
    <li><strong>Subjects:</strong> ${subjects.join(", ")}</li>
  </ul>
`;

// Show data types in console
console.log("Data type of fullName:", typeof fullName);
console.log("Data type of section:", typeof section);
console.log("Data type of date:", typeof date);
console.log("Data type of yearLevel:", typeof yearLevel);
console.log("Data type of isEnrolled:", typeof isEnrolled);
console.log("Data type of subjects:", typeof subjects);
