const btn=document.getElementById("menuBtn");
const sidebar=document.getElementById("sidebar");
const overlay=document.getElementById("overlay");

btn.onclick=()=>{
sidebar.classList.toggle("hidden");
overlay.classList.toggle("hidden");
};

overlay.onclick=()=>{
sidebar.classList.add("hidden");
overlay.classList.add("hidden");
};
