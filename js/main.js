


function hoverOnEffect() {
    
    document.querySelector('#login').classList.add('active')
    document.querySelector('#signUp').classList.remove('active')
}

function hoverOutEffect() {
    
    document.querySelector('#login').classList.remove('active')
    document.querySelector('#signUp').classList.add('active')
}

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.nav-wrapper').classList.toggle('nav-wrapper--mobile');
    document.querySelector('body').classList.toggle('no-scroll');
}



  