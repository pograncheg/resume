'use strict'

let slideIndex = 1;
showSlides();

function plusSlide(){
    slideIndex = slideIndex + 1;
    showSlides();
}

function minusSlide(){
    slideIndex = slideIndex - 1;
    showSlides();
}

function currentSlide(n){
    slideIndex = n;
    showSlides();
}

function showSlides(){
    const slides = document.querySelectorAll(".slider__item");
    const dots = document.querySelectorAll(".slider-dots__item");

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    if(slideIndex < 1){
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++){
        dots[i].style.backgroundColor = '#ffffff';
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    dots[slideIndex-1].style.backgroundColor ='#D8875A';
    slides[slideIndex-1].style.display = 'inline-block';
}



