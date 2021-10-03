
import '../scss/index.scss'
import 'bootstrap';

import { TestModule } from '@/js/TestModule'


/* Демонстрация работы подключенного модуля */
const testModule = new TestModule()
testModule.demo()

/* Демонстрация работы jQuery */
$('body').addClass('new')

document.addEventListener('DOMContentLoaded', () => {
    const newday = new Date('Oct 10 2021 00:00:00');

    const daysVal = document.querySelector('.midle__clock-days  .midle__clock-value');
    const hoursVal = document.querySelector('.midle__clock-hours .midle__clock-value');
    const minutesVal = document.querySelector('.midle__clock-minutes .midle__clock-value');
    const secondsVal = document.querySelector('.midle__clock-seconds .midle__clock-value')



    const timeCount = () => {
        let now = new Date();
        let leftUntil = newday - now;

        let dayss = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hourss = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutess = Math.floor(leftUntil / 1000 / 60) % 60;
        let secondss = Math.floor(leftUntil / 1000) % 60;


        if (dayss < 10) dayss = "0" + dayss;
        if (hourss < 10) hourss = "0" + hourss;
        if (minutess < 10) minutess = "0" + minutess;
        if (secondss < 10) secondss = "0" + secondss;

        daysVal.textContent = dayss;
        hoursVal.textContent = hourss;
        minutesVal.textContent = minutess;
        secondsVal.textContent = secondss;


    };
    timeCount();

    setInterval(timeCount, 1000);
})
