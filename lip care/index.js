let count = 1;
document.getElementById("decrease").onclick = function(){
   count -=1;
   document.getElementById("count").innerHTML = count;

   if (count < 1) {
    count = 1;
    document.getElementById("count").innerHTML = count;
  }
}

document.getElementById("increase").onclick = function(){
  count +=1;
   document.getElementById("count").innerHTML = count;
}


function clicking(){
  document.querySelector("footer").style.display = "block";
}
document.querySelector(".cart2").addEventListener("click", function(){
    document.querySelector(".num").style.display = "block";
    document.querySelector(".num").innerHTML = count
    document.querySelector("footer").style.display = "none";
})

let iscartBox = false;
let num = document.getElementById("num")
document.getElementById("add").addEventListener("click", function(){
    if(iscartBox === false){
        document.getElementById("cart-box").style.display = "none";
        
        }else{
            document.getElementById("cart-box").style.display = "block";
        }
        iscartBox = !iscartBox;
        document.getElementById("items").innerHTML = count;

})

document.getElementById("trash").addEventListener("click", function(){
        document.getElementById("cart-box").style.display = "none";

})
