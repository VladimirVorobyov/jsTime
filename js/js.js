window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    function countTimer (deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getNum (num){
            if ( num < 10) { 
                return '0' + num;
            }else {
             return num;
            }
        }
        
        function getTimeRemaining (){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timerRemaining = (dateStop - dateNow) / 1000,
                seconds =  Math.floor(timerRemaining % 60),
                minutes = Math.floor((timerRemaining / 60) % 60),
                hours = Math.floor(timerRemaining / 60 / 60);
                return{ timerRemaining , hours, minutes, seconds};
        }
        
        function updateClock(){
            let timer = getTimeRemaining();
            timerHours.textContent = getNum(timer.hours);
            timerMinutes.textContent = getNum(timer.minutes);
            timerSeconds.textContent = getNum(timer.seconds);
            if(timer.timerRemaining > 0){     
                setInterval(updateClock, 1000);
               } else {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
               }
            
        }
        updateClock();    
       

    }
    countTimer('20 november 2021 12:47:56');

    //меню
    const toggleMenu = () =>{
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul>li');
        const handlerMenu = () => {
                if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
                    menu.style.transform = `translate(0)`;
                } else {
                    menu.style.transform = `translate(-100%)`;
                }
        };      
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              popUpClose = document.querySelector('.popup-close'),
              popupContent = document.querySelector('.popup-content'),
              getClick = function() {
                popup.style.display =  'block';
                let start = Date.now();
          
                let timer = setInterval(function() {
                  let timePassed = Date.now() - start;
          
                  popupContent.style.left = timePassed / 5 + 'px';
          
                  if (timePassed > 2500){
                    clearInterval(timer);
                  } 
          
                }, 20);
              };

        if(screen.width > 768){
            popupBtn.forEach((elem) => elem.addEventListener('click', getClick));
            popup.addEventListener('click', (event) => {
                let target = event.target;
                if(target.classList.contains('popup-close')){
                    popup.style.display = 'none';
                } else{
                    target =target.closest('.popup-content');
                    if(!target){
                      popup.style.display = 'none';
                    }
                }
            });
            
        } else {
            popupBtn.forEach((elem) => elem.addEventListener('click', () => {
                popup.style.display =  'block';
            }));
            popUpClose.addEventListener('click',()=>{
                popup.style.display = 'none';

            });
        }
        
    };
    togglePopUp();
    //табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

            tabHeader.addEventListener('click', (event) => {
                let target = event.target;
                   target = target.closest('.service-header-tab');
                    if(target.classList.contains('service-header-tab')){
                        tab.forEach((item, i) => {
                            if(item === target){
                                toggleTabContent(i);
                            }
                        });

        
                }
              
            });
    };
    tabs();
});
