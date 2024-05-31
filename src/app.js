const li = document.querySelector("nav ul");
const menu = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-circle-xmark");

menu.addEventListener("click", (e)=>{
    e.preventDefault();
    li.classList.add("toggle");
    menu.style.display = "none";
    xmark.style.display = "block";
})

xmark.addEventListener("click", (e)=>{
    e.preventDefault();
    li.classList.remove("toggle");
    menu.style.display = "block";                                                                                                                                                         
    xmark.style.display = "none";
})
