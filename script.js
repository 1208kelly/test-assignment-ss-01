//------- Navbar Toggler -------------------------------------------------------------------------------------------*/

const mobileToggle = document.getElementsByClassName('mobile-toggle')[0];
const navAppear = document.getElementsByClassName('nav')[0];

mobileToggle.addEventListener('click', () => {
    navAppear.classList.toggle('active')
})



//------- Navbar Shadow On Scroll -------------------------------------------------------------------------------------------*/

const navShadow = document.querySelector("navbar");
const landingPanel = document.querySelector("landing-panel");

const landingPanelOptions = {}

const landingPanelScroller = new IntersectionObserver(function(
    entries, landingPanelScroller) {
        entries.forEach(entry => {
            console.log(entry.target);
        })
    }, 
    landingPanelOptions);

    landingPanelScroller.observe(landingPanel);