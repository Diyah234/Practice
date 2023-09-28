document.getElementById("toggle-button").addEventListener("click", toggleSlide);

function toggleSlide(){
    var indicator = document.getElementById("indicator");
    if (indicator.style.left === "48.8%") {
        indicator.style.left = "50.2%";
        var first = document.getElementById("first").innerHTML = "19.99"
        var second = document.getElementById("second").innerHTML = "24.99"
         var third =document.getElementById("third").innerHTML = "39.99"
         document.querySelectorAll("span").classList.add("span2");
    }
      // } else if(indicator.style.left === "45%") {
      //   indicator.style.left = "50%";
      //   var first = document.getElementById("first").innerHTML = "19.99"
      //   var second = document.getElementById("second").innerHTML = "24.99"
      //    var third =document.getElementById("third").innerHTML = "39.99"
      // }
      else {
        indicator.style.left = "48.8%";
        var first = document.getElementById("first").innerHTML = "199.99"
        var second = document.getElementById("second").innerHTML = "249.99"
         var third =document.getElementById("third").innerHTML = "399.99"
      }
}
