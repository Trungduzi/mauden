const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const clickstart = document.getElementById("clickstart");
const back = document.getElementById("back");

clickstart.addEventListener("click", () =>{
    page1.style.display = "none";
    page2.style.display = "block";
});
back.addEventListener("click", () =>{
    page2.style.display = "none";
    page1.style.display = "block";
});

const Nghethu = document.getElementById("Nghethu");
const Khongthem = document.getElementById("Khongthem");
const page3 = document.getElementById("page3");
const back1 = document.getElementById("back1");

Nghethu.addEventListener("click", ()=>{
    // page1.style.display = "none"
    page2.style.display = "none";
    page3.style.display = "block";
});
back1.addEventListener("click", () =>{
    page3.style.display = "none";
    page2.style.display = "block";
});
