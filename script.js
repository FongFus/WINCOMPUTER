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


let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + "px";
    // 
    let last_active_dot = document.querySelector(".slider .dots li.active");
    last_active_dot.classList.remove("active");
    dots[active].classList.add("active");

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
 
let box = document.querySelector(".box");
    window.onmousemove = function(e) {
        let x = e.clientX/3;
        box.style.transform = "perspective(1000px) rotateY("+ x +"deg)";
    }

    function goInfo() {
        var element = document.getElementById('info');
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    
    