


const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

updateClock = () => {


    const today = new Date() ;
    const hour = today.getHours();
    const min = today.getMinutes();
    const second = today.getSeconds();

    const secondDegrees = ((second / 60) * 360) + 90;

        secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minuteDegrees = (min / 60) * 360 + 90;

        minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hourDegrees = (hour / 12) * 360 + 90;

        hourHand.style.transform = `rotate(${hourDegrees}deg)`;


}

setInterval(updateClock,1000);



