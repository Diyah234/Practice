
  
  window.onscroll = ()=> {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("navbar").className = "navbar-scroll";
    } else if(document.body.scrollTop < 45 || document.documentElement.scrollTop < 45) {
      document.getElementById("navbar").className ="navbar-show";
    }
    else{
      document.getElementById("navbar").className ="";
    }
  }


  

let count = 0;
document.getElementById("decrease").onclick = function(){
   count -=1;
   document.getElementById("count").innerHTML = count;

   if (count < 0) {
    count = 0;
    document.getElementById("count").innerHTML = count;
  }
}

document.getElementById("increase").onclick = function(){
  count +=1;
   document.getElementById("count").innerHTML = count;
   document.getElementById("items").innerHTML = count + " items"
}


function clicking(){
  document.querySelector("footer").style.display = "block";
}


// menubar
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

const menuButton = document.getElementById("nav-icon3");
const navBar = document.getElementById("nav-bar");

menuButton.addEventListener("click", function() {
  if (navBar.style.display === "block") {
    navBar.style.display = "none"; // Hide the navigation menu
  } else {
    navBar.style.display = "block"; // Show the navigation menu
  }
});

// footer
document.querySelector(".cart").onclick= function(){
  document.getElementById("footer1").style.display = "none";
  document.getElementById("footer2").style.display = "block";

};



