window.addEventListener("load", function () {
    alert("Welcome to the Dynamic Student Portal!");
});

console.log("script.js loaded successfully");

const studentName = "Roy";
let yearOfStudy = 3;

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

class Student {
    constructor(name, email, course) {
        this.name = name;
        this.email = email;
        this.course = course;
    }
 
    getSummary() {
        return this.name + " (" + this.email + ") - " + this.course;
    }
}
 
const studentList = document.getElementById("student-list");
const studentCount = document.getElementById("student-count");
const showStudentsBtn = document.getElementById("show-students-btn");
const errorMessage = document.getElementById("error-message");
 
function addStudentToPage(student) {
    const item = document.createElement("li");
    item.textContent = student.getSummary();
    studentList.appendChild(item);
}
 
function updateStudentCount(count) {
    studentCount.textContent = "Total registered students: " + count;
}

function displayAllStudents(students) {
    studentList.innerHTML = "";
 
    for (let i = 0; i < students.length; i++) {
        addStudentToPage(students[i]);
    }
 
    updateStudentCount(students.length);
}

async function loadStudents() {
    errorMessage.textContent = "";
 
    try {
        const response = await fetch("students.json");
 
        if (!response.ok) {
            throw new Error("Server responded with status " + response.status);
        }
 
        const data = await response.json();
 
        const students = data.map(function (item) {
            return new Student(item.name, item.email, item.course);
        });
 
        displayAllStudents(students);
    } catch (error) {
        console.error("Failed to load students:", error);
        errorMessage.textContent = "Sorry, the student list could not be loaded. Please try again later.";
    }
}
 
showStudentsBtn.addEventListener("click", loadStudents);