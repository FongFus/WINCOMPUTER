window.onscroll = function() {
    console.info(document.documentElement.scrollTop);
    var nav = document.getElementById("myNav");
    if(document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
        nav.style.position = "fixed";
        nav.style.top = 0;
        nav.style.left = 0;
        nav.style.right = 0;
        nav.style.backgroundColor = "rgb(18,23,27, 0.8)";  
        nav.style.zIndex = 4000; 
    } else {
        nav.style.position= "absolute";
        nav.style.top = "120px";
         nav.style.left = 0;
        nav.style.right = 0;
        nav.style.zIndex = 10;
        nav.style.backgroundColor = "rgb(18, 23, 27)";
    }
}

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".dropdownMenu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}