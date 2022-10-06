let slideIndex = 0;
showSlides()

function showSlides(){
    let i;
    let slides = document.querySelectorAll(".mySlides");
    for(let x = 0;x<slides.length;x++){
        slides[x].style.display = "none"
    }
    slideIndex++;
    if(slideIndex >= slides.length){
        slideIndex = 0
    };
    slides[slideIndex].style.display = "block"
    setTimeout(showSlides, 4000)
}