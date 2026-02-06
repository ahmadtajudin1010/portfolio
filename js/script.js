// ===== SMOOTH SCROLL =====
document.querySelectorAll('.nav-links a').forEach(link => {

  link.addEventListener('click', e => {

    const target = link.getAttribute('href');

    if (target && target.startsWith("#")) {

      const section = document.querySelector(target);

      if (section) {
        e.preventDefault();
        section.scrollIntoView({
          behavior: "smooth"
        });
      }

    }

  });

});


// ===== BACK TO TOP =====
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 300 ? "flex" : "none";
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ===== THEME SYSTEM =====
const themeToggle = document.getElementById("themeToggle");

// 👉 default = LIGHT
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
