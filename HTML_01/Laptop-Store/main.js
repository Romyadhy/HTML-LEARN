// Toggle = Bisa membuat program awalnya ada menjadi tiada dan sebalikya
// Toggle class active
const navbarNav = document.querySelector
('.navbar-nav');
// Ketika menu di klik
document.querySelector('#laptop-menu'). 
onclick = () =>
{
    navbarNav.classList.toggle('active');
}

// Klik MENU di luar side bar untuk mengghilangkanya
const hamburger = document.querySelector ('#laptop-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    {
        navbarNav.classList.remove('active');
    }
});
