document.addEventListener("DOMContentLoaded",()=>{

const toggle=document.getElementById("themeToggle");

const saved=localStorage.getItem("theme");

if(saved==="light"){
document.body.classList.add("light");
toggle.textContent="☀️";
}

toggle.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
localStorage.setItem("theme","light");
toggle.textContent="☀️";
}else{
localStorage.setItem("theme","dark");
toggle.textContent="🌙";
}

};

});
