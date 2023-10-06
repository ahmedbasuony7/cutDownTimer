'use strict';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    ];
    const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    ];

const giveway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear  =  tempDate.getFullYear();
let tempMonth =  tempDate.getMonth();
let tempDay =  tempDate.getDay();



// let futurreDate = new Date(2023,10,6,10,4,0);
// console.log(futurreDate);

const futurreDate =  new Date(tempYear,tempMonth,tempDay + 10 , 12 ,30 , 0);

const year = futurreDate.getFullYear();
const hours = futurreDate.getHours();
const minutes = futurreDate.getMinutes();

let monthes = futurreDate.getMonth();
monthes = months[monthes];

let date = futurreDate.getDate();


let weekday = weekdays[futurreDate.getDay()];
//weekday=weekdays[weekday];

console.log(weekday);

giveway.textContent = ` give away ends on ${weekday} ${date} ${monthes} ${year} ${hours}:${minutes}am  `;


//  future time in ms

const futureTime = futurreDate.getTime();

console.log(futureTime);

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    

    // 1s  = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    
    // calcuate all values 
    let days = t / oneDay;
    days = Math.floor(days);

    let hours = (t % oneDay) / oneHour;
    hours = Math.floor(hours);

    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute / 1000 ));

    function format(item){
        if(item < 10){
            return item = `0 ${item}`;
        }else{
            return item;
        }
    }

    // set values array 
    const values = [days , hours , minutes , seconds];
    items.forEach(function(item,index){
        item.innerHTML = values[index];
    });
    if(t < 0){
        clearInterval(countDown);
        deadline.innerHTML = `<h4 class="expired">
            sorry this gives away   
        </h4>`;
    }
}

//   count down 
let countDown = setInterval(getRemainingTime,1000);

getRemainingTime();
