// var navbar = document.getElementById("header");

// document.body.addEventListener("scroll" , scrollNav);
// function scrollNav(){
//   if (document.body.scrollTop > 0) {
//     navbar.classList.add("navbar-scroll");
//   }else{
//     navbar.classList.remove("navbar-scroll");
//   }
// }

// navbar.addEventListener("scroll" ,scrolling);

// function scrolling(){
//     document.getElementById("navbar").classList.add("navbar-scroll");
// }


// document.body.addEventListener("scroll", function(){
//     let Navbar = document.getElementById('navbar');
//     if(document.body.scrollTop > 0){
//       Navbar.classList.add("navbar-scroll");
//     }else{
//       Navbar.classList.remove("navbar-scroll");
//     }
//   });

// document.body.addEventListener("scroll", function(){
//     let Navbar = document.getElementById('navbar');
//     if(document.documentElement.scrollTop > 0){
//       Navbar.classList.add("navbar-scroll");
//     }else{
//       Navbar.classList.remove("navbar-scroll");
//     }
//   });
  
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


  // window.onscroll = function() {myFunction()};

  // function myFunction() {
  //   if (document.documentElement.scrollTop > 200) {
  //     document.getElementById("grid").className = "slideUp";
  //   }
  // }

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
}

document.querySelector(".btn").addEventListener("click" , function(){
  document.querySelector("footer")
})