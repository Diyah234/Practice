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

document.body.addEventListener("scroll", function(){
    let Navbar = document.getElementById('navbar');
    if(document.documentElement.scrollTop > 0){
      Navbar.classList.add("navbar-scroll");
    }else{
      Navbar.classList.remove("navbar-scroll");
    }
  });
  
