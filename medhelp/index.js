document.getElementById("menu").addEventListener('click', function(){
    document.getElementById("nav").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "block";
})
document.getElementById("close").addEventListener('click', function(){
    document.getElementById("nav").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";
})