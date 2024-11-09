const toggleButton = document.getElementById("toggle-skills-btn")!;
const skillsSection = document.getElementById("skills")!;

toggleButton.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});