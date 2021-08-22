const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let remainingTime; 

function countdown(){
    let currentDate = new Date();
    
    let eventDate = new Date('December 22, 2021 11:00:00');
    
    let currentTime = currentDate.getTime();
    console.log(currentTime);

    let eventTime = eventDate.getTime();
    console.log(eventTime);

    remainingTime =  eventTime - currentTime;
    console.log(remainingTime);

    setTimeLeft();

    let interval = setInterval(()=>{
        if(remainingTime < 0){
            clearInterval(interval);
        }
        countTime();
    },1000);
}



let timeLeft ={
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
}
function setTimeLeft(){
    timeLeft.day = Math.floor(remainingTime/(1000*60*60*24));
    console.log(timeLeft.day);
    timeLeft.hour = Math.floor((remainingTime%(1000*60*60*24))/ (1000*60*60));
    timeLeft.min = Math.floor((remainingTime%(1000*60*60))/(1000*60));
    timeLeft.sec = Math.floor((remainingTime%(1000*60))/1000);

}
function countTime(){
    if(remainingTime>0){
        --timeLeft.sec;
        if(timeLeft.min>=0 && timeLeft.sec < 0)
        {
            timeLeft.sec = 59;
            --timeLeft.min;
        }
        if(timeLeft.hour >= 0 && timeLeft.min < 0)
        {
            timeLeft.min = 59;
            --timeLeft.hour;
        }
        if(timeLeft.day >= 0 && timeLeft.hour < 0){
            timeLeft.hour = 23;
            --timeLeft.day;
        }

    }
    --remainingTime;
    printTime();
}
function printTime(){
    days.innerText = timeLeft.day;
    hours.innerText = timeLeft.hour;
    minutes.innerText = timeLeft.min;
    seconds.innerText = timeLeft.sec;
    // seconds.querySelector('.top').innerText= seconds.querySelector('.top-back').innerText;
    // seconds.querySelector('.top-back').innerText = timeLeft.sec;
    // seconds.classList.remove('flip-horizontal-top');
    // seconds.classList.add('flip-horizontal-top');
}

countdown();
