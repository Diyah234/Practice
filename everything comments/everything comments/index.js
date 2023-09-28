document.getElementById("delete").addEventListener("click", function(){
    document.getElementById("fade").style.display = "block";
})
document.getElementById("no").addEventListener("click", function(){
    document.getElementById("fade").style.display = "none";
})
document.getElementById("yes").addEventListener("click", function(){
    document.getElementById("comment").style.display = "none";
    document.getElementById("fade").style.display = "none";
})

document.getElementById("reply1").addEventListener("click", function(){
    document.getElementById("first").style.display = "block";
})
document.getElementById("reply2").addEventListener("click", function(){
    document.getElementById("second").style.display = "block";
})
document.getElementById("edit").addEventListener("click", function(){
    document.getElementById("third").style.display = "block";
    document.getElementById("line").classList.add("line2");
    document.getElementById("comment").style.display = "none";
})
