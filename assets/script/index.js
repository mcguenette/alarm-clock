'use strict';
import {onEvent, select, selectAll } from "./utils.js";

const displayTime = select('#time');
const setAlarm = select('#set-alarm');
const hours = select('#hours');
const minutes = select('#minutes');

const date = new Date();
const getHour = date.getHours();
const getMins = date.getMinutes();

function getCurrentTime() {
    displayTime.innerText = `${getHour}: ${getMins}`;
}
setInterval(getCurrentTime, 1000);