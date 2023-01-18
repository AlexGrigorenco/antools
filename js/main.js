

{
function hoverOnEffect() {
    
    document.querySelector('#login').classList.add('active')
    document.querySelector('#signUp').classList.remove('active')
}

function hoverOutEffect() {
    
    document.querySelector('#login').classList.remove('active')
    document.querySelector('#signUp').classList.add('active')
}
}


  // SPOILERS

  {
    const spoilers = Array.from(document.querySelectorAll('footer .column .title'))

    spoilers.forEach(elem => {
        
        elem.addEventListener('click', (event) => {

        if(window.innerWidth < 851){
            event.target.closest('.column').classList.toggle('column-active')
        }
        })
    })
  }

  // MENU MOBILE

  {

    [...document.querySelectorAll('nav a'), ...document.querySelectorAll('nav button')]
    .forEach(elem => {
        elem.addEventListener('click', () => {
            if(window.innerWidth < 851){
                toggle()
            }
        })
    })



document.querySelector('.menu-icon-wrapper').onclick = function(){

    if(window.innerWidth < 851){
        toggle()
    }
   
}

function toggle(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.nav-wrapper').classList.toggle('nav-wrapper--mobile');
    document.querySelector('body').classList.toggle('no-scroll');
}
  }


  //    NAV LIST

  {
    const navListItem = document.querySelectorAll('nav .nav-list .nav-list__item')

    document.querySelectorAll('nav .nav-list a').forEach(elem => {
        elem.addEventListener('click', event => {
            
            navListItem.forEach(item => {
                item.classList.remove('nav-list__item--active')
            })

            event.target.closest('.nav-list__item').classList.add('nav-list__item--active')
        })
    })
  }


  //            WOW

  const wow = new WOW(
    {}
  );
  wow.init();