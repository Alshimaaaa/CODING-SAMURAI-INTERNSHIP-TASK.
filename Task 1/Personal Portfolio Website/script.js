
const projectsList = [
    "-   A web-based Learning Management System (LMS) built with Java Spring Boot for managing online courses, assessments, and performance tracking.",
    "-   A game solver that plays the game of Gomoku (Five in a Row) implemented with Python and tkinter for GUI.",
    "-   A web-based platform that organizes tasks for teachers and administrators, built with Django.",
    "-   CPU Schedulers Simulator implemented with Java.",
    "-   Java Web Crawler with TF-IDF and Cosine Similarity.",
    "-   Portfolio Website (this one!)"
];

let current= 0;

const projects = document.getElementById("project");
const button = document.getElementById("nextProject");
const others = document.getElementById("others");
function display() {
    if (current < projectsList.length) {
        const p = document.createElement("p");
        p.textContent = projectsList[current];
        projects.appendChild(p);
        current++;
    }
    else {
        button.style.display = "none";
        others.style.display = "block";
    }
}

