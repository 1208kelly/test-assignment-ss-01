//------- Navbar Toggler -------------------------------------------------------------------------------------------*/

const mobileToggle = document.getElementsByClassName('mobile-toggle')[0]
const navAppear = document.getElementsByClassName('nav')[0]

mobileToggle.addEventListener('click', () => {
    navAppear.classList.toggle('active')
})