//Select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');
const home = document.querySelector('.homie');

// Set Initial State of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu => {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
        home.classList.add('show');

        //Set Menu State
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
        home.classList.remove('show');

        //Set Menu State
        showMenu = false;
    }
});


//Text animation

function typeAnimation() {
    Typed.new("#writing-text", {
        strings: [
            "love Web Development.", "love to solve algorithms.", "love to collaborate with others.", "love programming."
        ],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 2,
        contentType: 'text',
        callback: function() {
            $("#writing-text").css({"color": "#fff", "background-color": "#blue"});
        },
        preStringTyped: function() {},
        onStringTyped: function() {}
    });
}

// !Todo Validation for every field