'use strict';

let period = document.querySelector('#period'),
    day = document.querySelector('#day'),
    hours = document.querySelector('#hours'),
    newYear = document.querySelector('#newYear'),
    dateNow = new Date(),
    dateStop = new Date('1 january 2021'),
    day1 = 'Понедельник',
    day2 = 'Вторник',
    day3 = 'Среда',
    day4 = 'Четверг',
    day5 = 'Пятница',
    day6 = 'Суббота',
    day0= 'Воскресенье';
    
function getDayWeek (){
    if(dateNow.getDay() === 1){
        day.textContent = 'Сегодня: ' + day1;
    } else if(dateNow.getDay() === 2){
        day.textContent = 'Сегодня: ' + day2; 
    } else if(dateNow.getDay() === 3){
        day.textContent = 'Сегодня: ' + day3;
    } else if(dateNow.getDay() === 4){
        day.textContent = 'Сегодня: ' + day4;
    } else if(dateNow.getDay() === 5){
        day.textContent = 'Сегодня: ' + day5;
    } else if(dateNow.getDay() === 6){
        day.textContent = 'Сегодня: ' + day6;
    } else if(dateNow.getDay() === 1){
        day.textContent = 'Сегодня: ' + day0;
    }
}     

function getAfternoon (){
  if(12 >= dateNow.getHours() && dateNow.getHours()>= 6 ){
   period.textContent = 'Доброе утро';
  }else if( dateNow.getHours() > 12  && dateNow.getHours() < 18){
    period.textContent = 'Добрый день';
  }else if(22 >= dateNow.getHours() && dateNow.getHours() >= 18 ){
    period.textContent = 'Добрый вечер';
  }else{
    period.textContent = 'Доброй ночи';
  }
}

function  getNewYear (){
  let  timerRemaining = (dateStop - dateNow) / 1000, 
       dayNew1 = Math.floor(timerRemaining / 60 / 60 / 24);
 newYear.textContent = 'До нового года осталось '+ dayNew1 +' день' ;
} 

 function getCurrentTime (){
     hours.textContent = 'Текущее время: ' + dateNow.toLocaleTimeString('en');
 }

getCurrentTime();
getDayWeek();
getAfternoon();
getNewYear();
    
