(function(){
    let loaderBtn = document.querySelector('.js-loader'),
        navBtn = document.querySelector('.js-nav-btn'),
        submenu = document.querySelector('.submenu'),
        burgerBtn = document.querySelector('.js-burger'),
        navMenu = document.querySelector('.js-nav'),
        navClose = document.querySelector('.js-nav-close'),
        navItemFirst = document.querySelector('.js-nav-item');

    navBtn.addEventListener('click', ()=>{
        submenu.classList.toggle('_show');
    });
    function dropDownMenu() {
        if(window.innerWidth < 801) {
            navBtn.removeEventListener('click', ()=>{
                submenu.classList.add('_show');
            });
            navBtn.addEventListener('click', ()=>{
                navItemFirst.classList.toggle('_show');
            });
        }
    }
    window.addEventListener('resize', ()=>{
        dropDownMenu();
    });
    window.addEventListener('load', ()=>{
        dropDownMenu();
    });
    

    // Burger menu show
    burgerBtn.addEventListener('click', ()=>{
        navMenu.classList.add('_show');
    });
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('_show');
    });



    loaderBtn.addEventListener('click', ()=>{
        alert('В настоящий момент данная функция не доступна.');
    });
})();