var slider = document.getElementById("slide");
var count = 0;

var images = [
    './burger1.jpg',
    './burger2.jpg',
    './burger3.jpg',
    './burger4.jpg',
    './drink.jpg'
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

