const grid = document.getElementById("videoGrid");

for(let i=1;i<=15;i++){

const v={
title:`Video Demo ${i}`,
src:"./video/demo.mp4",
channel:"MyTube",
views:"100K views"
};

const card=document.createElement("div");
card.className="video-card";

card.innerHTML=`
<div class="thumb">
<video src="${v.src}" muted></video>
</div>
<div style="padding:10px">${v.title}</div>
`;

card.onclick=()=>{
localStorage.setItem("video",JSON.stringify(v));
location.href="player.html";
};

grid.appendChild(card);
}
