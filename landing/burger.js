const navMenu = document.getElementById("nav-menu"),
    menu = document.getElementById("menu"),
    closeMenu = document.getElementById("close")

menu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})