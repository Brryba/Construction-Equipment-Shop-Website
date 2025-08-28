const sliderIndexes = {};

document.addEventListener("DOMContentLoaded", () => {
    const sliders =
        document.getElementsByClassName("slideshow-container");
    for (let i = 0; i < sliders.length; i++) {
        sliderIndexes[sliders[i].id] = 1;
        showSlides(1, sliders[i].id);
    }
    console.log(sliderIndexes);
});

function plusSlides(n, sliderId) {
    sliderIndexes[sliderId] += n
    showSlides(sliderIndexes[sliderId], sliderId);
}

function currentSlide(n, sliderId) {
    sliderIndexes[sliderId] = n
    showSlides(sliderIndexes[sliderId], sliderId);
}

function showSlides(n, sliderId) {
    let i;
    let slider = document.getElementById(sliderId);
    console.log("Slider name:" + sliderId);
    console.log("Slider" + slider);
    let slides = slider.getElementsByClassName("mySlides");
    let dots = slider.getElementsByClassName("dot");
    if (n > slides.length) {
        sliderIndexes[sliderId] = 1
    }
    if (n < 1) {
        sliderIndexes[sliderId] = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(sliderIndexes);
    slides[sliderIndexes[sliderId] - 1].style.display = "block";
    dots[sliderIndexes[sliderId] - 1].className += " active";
}