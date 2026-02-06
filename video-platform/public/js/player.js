const v=JSON.parse(localStorage.getItem("video"));
if(!v) location.href="index.html";

player.src=v.src;
title.textContent=v.title;
meta.textContent=`${v.channel} • ${v.views}`;
