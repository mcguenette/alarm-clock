'use strict';
import { onEvent, select } from "./utils.js";

const alarm = select('#set-alarm');
const alarmBtn = select('#alarm-btn');
const clearBtn = select('#clear-btn');
let alarmTime = null;
let alarmTimeout = null;
const audio = new Audio('./assets/audio/sparkle_your_name.mp3');
audio.type = 'audio/mp3';
audio.loop = true;
audio.preload = 'auto';
const hours = select('#hours');
const minutes = select('#minutes');
const displayTime = select('#time');

function getCurrentTime() {
    const currentTime = new Date();
    const currentHour = formatTime(currentTime.getHours());
    const currentMins = formatTime(currentTime.getMinutes());
    
    displayTime.innerText = `${currentHour}:${currentMins}`;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function validateAlarm() {
    let numbersRegex = /^[0-9]+$/;
    
    const hoursInput = parseInt(hours.value, 10);
    const minutesInput = parseInt(minutes.value, 10);

    // validate hours
    if (!hoursInput.toString().match(numbersRegex) || hoursInput < 0 || hoursInput > 23) {
        alarm.innerText = 'Please enter a valid number between 0 and 23 for hours.';
        alarm.style.color = '#FF3263';
        return;
    }
    // validate minutes
    if (!minutesInput.toString().match(numbersRegex) || minutesInput < 0 || minutesInput > 59) {
        alarm.innerText = 'Please enter a valid number between 0 and 59 for minutes.';
        alarm.style.color = '#FF3263';
        
        return;
    }

    alarm.innerText = `${formatTime(hoursInput)}:${formatTime(minutesInput)}`;

     setAlarm(hoursInput, minutesInput);
}

function setAlarm(hoursInput, minutesInput) {
    alarmTime = new Date();
    alarmTime.setHours(hoursInput);
    alarmTime.setMinutes(minutesInput);

    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
        const timeout = Math.max(0, timeToAlarm.getTime() - current.getTime() - 1000); 
        alarmTimeout = setTimeout(() => {
            audio.play();
            alarm.innerText = 'Wake up!';
            displayTime.style.color = '#FF3263';
        }, timeout);
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alarm.innerText = '';
        displayTime.style.color = '#292C31';
    }
}

onEvent('click', alarmBtn, function () {
    validateAlarm();
});

onEvent('click', clearBtn, function () {
    clearAlarm();
});

setInterval(getCurrentTime, 1000);
