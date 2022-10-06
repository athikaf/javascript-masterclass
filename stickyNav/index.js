const nav = document.querySelector("#main");
let topOfNav = nav.offsetTop;
console.log(topOfNav, window.scrollY)

function fixNav(){
    console.log(topOfNav,window.scrollY)
    if(window.scrollY >= topOfNav){
        document.body.classList.add("fixed-nav")
    }else{
        document.body.classList.remove("fixed-nav")
    }
}

window.addEventListener("scroll",fixNav)