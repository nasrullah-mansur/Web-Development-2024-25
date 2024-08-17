    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');
    let ampmElement = document.getElementById('ampm');



function ourDigitalClock() {

    let now = new Date();
    let hoursNumber = (now.getHours()) > 12 ? (now.getHours()) - 12 : (now.getHours());
    let minutesNumber = now.getMinutes();
    let secondsNumber = now.getSeconds();
    
    let ampmString = (now.getHours()) > 12 ? 'PM' : 'AM';

    hoursElement.innerHTML = hoursNumber < 10 ? '0' + hoursNumber : hoursNumber;
    minutesElement.innerHTML = minutesNumber < 10 ? '0' + minutesNumber : minutesNumber;
    secondsElement.innerHTML = secondsNumber < 10 ? '0' + secondsNumber : secondsNumber;
    ampmElement.innerHTML = ampmString;
}



setInterval(ourDigitalClock, 1000);









