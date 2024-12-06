const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-menu')



hamburger.addEventListener('click', (event)=>{
    navMenu.classList.toggle('active')
    hamburger.classList.toggle('active')
})