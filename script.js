window.addEventListener("load", function () {
    alert("Welcome to the Dynamic Student Portal!");
});

console.log("script.js loaded successfully");

const studentName = "Roy Kiplimo";
let yearOfStudy = 2;

if (yearOfStudy === 1) {
    console.log("Welcome, " + studentName + "! Enjoy your first year.");
} else if (yearOfStudy === 2 || yearOfStudy === 3) {
    console.log("Hello, " + studentName + ". Keep up the good work in year " + yearOfStudy + ".");
} else if (yearOfStudy === 4) {
    console.log("Almost there, " + studentName + "! Your final year is here.");
} else {
    console.log("Year of study not recognised for " + studentName + ".");
}

for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}