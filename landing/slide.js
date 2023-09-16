var slider = document.getElementById("slide");
var count = 0;

var images = [
    './slide2.png',
    './slide6.png',
    './slide1.png',
    './slide3.png',
    './slide4.png',
    './slide5.png'
];

function next() {
    if(count >=images.length-1)
    count = -1;
    count++;
    return setImg();
}

function setImg(){
    return slider.setAttribute('src', "./"+ images[count]);
}
setInterval(next, 1500);

