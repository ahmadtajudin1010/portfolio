const themeToggle = document.getElementById("themeToggle");

let savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {

const newTheme =
document.body.classList.contains("light-mode")
? "dark"
: "light";

applyTheme(newTheme);
localStorage.setItem("theme", newTheme);

});

function applyTheme(theme) {

if (theme === "light") {
document.body.classList.add("light-mode");
themeToggle.textContent = "🌙";
} else {
document.body.classList.remove("light-mode");
themeToggle.textContent = "☀";
}

}