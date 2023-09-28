let slider = document.getElementById("slider");
let slider2 = document.getElementById("slider2");
let header = document.getElementById("header");
let texts = document.getElementById("texts")
let count = 0;

let images = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"
];
let images2 = [
    "./images/mobile-image-hero-1.jpg",
    "./images/mobile-image-hero-2.jpg",
    "./images/mobile-image-hero-3.jpg"
];
let changeHeader = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
];
let changeTexts = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
]

document.getElementById("right").addEventListener("click", function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    slider.src = images[count];
    header.innerHTML = changeHeader[count];
    texts.innerHTML = changeTexts[count];
})

document.getElementById("left").addEventListener('click', function(){
    count--;
    if(count <0){
        count = images.length-1;
    }
    slider.src = images[count];
    header.innerHTML = changeHeader[count];
    texts.innerHTML = changeTexts[count];
})

// mobile
document.getElementById("right2").addEventListener("click", function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    slider2.src = images2[count];
    header.innerHTML = changeHeader[count];
    texts.innerHTML = changeTexts[count];
})

document.getElementById("left2").addEventListener('click', function(){
    count--;
    if(count <0){
        count = images.length-1;
    }
    slider2.src = images2[count];
    header.innerHTML = changeHeader[count];
    texts.innerHTML = changeTexts[count];
})

// menu
document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("nav").style.display ="block";
})
document.getElementById("close").addEventListener("click", function(){
    document.getElementById("nav").style.display ="none";
})