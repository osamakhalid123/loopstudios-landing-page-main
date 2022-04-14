const b_icon = document.querySelector('.burger_icon');
const nav_menu = document.querySelector('.nav_menu');
const nav = document.getElementById('nav');

b_icon.addEventListener('click', () => {

    if (nav_menu.style.display == 'block') {
        nav_menu.style.display = 'none';
        nav.style.backgroundImage = "url('images/mobile/image-hero.jpg')";
        nav.style.backgroundColor = "none";
    } else {

        nav_menu.style.display = 'block';
        nav.style.backgroundImage = "none";
        nav.style.backgroundColor = "black";


    }

})