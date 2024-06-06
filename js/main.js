var div = document.querySelector("div");
var largbtn = document.querySelector(".largbtn");
var smallbtn = document.querySelector(".smallbtn");

function Larg(){
    div.classList.add("largFont");
    div.classList.remove("smallFont");
}

function Small(){
    div.classList.remove("largFont");
    div.classList.add("smallFont");
}

largbtn.onclick = Larg;
smallbtn.onclick = Small;