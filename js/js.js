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
    countTimer('20 november 2020 12:47:56');

    //меню
    const toggleMenu = () =>{
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu'),
              closeBtn = document.querySelector('.close-btn'),
              menuItems = menu.querySelectorAll('ul>li');
document.addEventListener('click', (event)=>{
    if (event.target.closest('.menu')){
        menu.classList.add('active-menu');
    }else if (event.target.matches('.close-btn') || event.target.closest('li>a') || !event.target.closest('menu')){
        menu.classList.remove('active-menu');
    }
});
       
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
   
    //слайдер
    const slider = () =>{
        const slide = document.querySelectorAll('.portfolio-item');
        let portfolioDots =document.querySelector('.portfolio-dots');
        for(let i = 0; i < slide.length ; i++){
            let liDot = document.createElement('li');
            liDot.classList = 'dot';
            portfolioDots.append(liDot);
        }
        portfolioDots =document.querySelector('.portfolio-dots');
        console.log( portfolioDots);
            const btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
        interval;
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
        },
        nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
        };

    const autoPlaySlide = () => {
        prevSlide(slide,currentSlide,'portfolio-item-active');
        prevSlide(dot, currentSlide,'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide,currentSlide,'portfolio-item-active');
        nextSlide(dot, currentSlide,'dot-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    slider.addEventListener('click',(event)=>{
       event.preventDefault();
       let target = event.target;
       if(!target.matches('.portfolio-btn, .dot')){
           return;
       }
       prevSlide(slide,currentSlide,'portfolio-item-active');
        prevSlide(dot, currentSlide,'dot-active');
       if(target.matches('#arrow-right')){
           currentSlide++;
       }else if(target.matches('#arrow-left')){
        currentSlide--;
       } else if (target.matches('.dot')){
           dot.forEach((elem, index) =>{
               if(elem === target){
                   currentSlide = index;
               }
           });
       }
       if(currentSlide >= slide.length){
           currentSlide =0;
       }

       if(currentSlide < 0) {
           currentSlide = slide.length -1;
       }
       nextSlide(slide,currentSlide,'portfolio-item-active');
       nextSlide(dot, currentSlide,'dot-active');
    });
    slider.addEventListener('mouseover', (event) =>{
     if(event.target.matches('.portfolio-btn') ||
     event.target.matches('.dot')){
         stopSlide();
     }
    });
    slider.addEventListener('mouseout', (event) =>{
        if(event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
            startSlide();
        }
    });
    startSlide(1500);
    };
    slider();
});
