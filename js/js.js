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
});