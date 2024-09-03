

let myClockElement = document.querySelector('.clock');
myClockElement.append(stripeArea());
myClockElement.append(numberArea());
myClockElement.append(handlerArea());

function stripeArea() {
    let createParentDiv = document.createElement('div');
    createParentDiv.classList.add('stripe-area');

    for(let i = 0; i < 60; i++) {
        let createSpanTagForStripe = document.createElement('span');

        createSpanTagForStripe.style.transform = `rotate(${i * 6}deg)`;

        if(i % 5 == 0) {
            createSpanTagForStripe.classList.add('stripe', 'circle');
        } else {
            createSpanTagForStripe.classList.add('stripe');
        }


        createParentDiv.append(createSpanTagForStripe);
    }

    return createParentDiv;
}


function numberArea() {
    let numberAreaParentElement = document.createElement('div');
    numberAreaParentElement.classList.add('number-area');

    for(let i = 1; i <= 12; i++) {
        let createNumberDive = document.createElement('div');
        createNumberDive.classList.add('number');
        createNumberDive.style.transform = `rotate(${i * 30}deg)`;

        let createSpanTagForNumber = document.createElement('span');
        createSpanTagForNumber.textContent = i;
        createSpanTagForNumber.style.transform = `rotate(-${i * 30}deg)`;

        createNumberDive.append(createSpanTagForNumber);
        numberAreaParentElement.append(createNumberDive);

    }

    return numberAreaParentElement;
}

function handlerArea() {
    let handlerParentElement = document.createElement('div');
    handlerParentElement.classList.add('time-handler');
    let hrElement = document.createElement('div');
    hrElement.classList.add('hr');
    let minElement = document.createElement('div');
    minElement.classList.add('min');
    let secElement = document.createElement('div');
    secElement.classList.add('sec');

    handlerParentElement.append(hrElement);
    handlerParentElement.append(minElement);
    handlerParentElement.append(secElement);

    return handlerParentElement;
}

function startOurClock() {

    let d = new Date();
    let sec = d.getSeconds() / 60;
    let min = (sec + d.getMinutes()) / 60;
    let hr = (min + d.getHours()) / 12;

    let secElem = document.querySelector('.sec');
    let minElem = document.querySelector('.min');
    let hrElem = document.querySelector('.hr');


    secElem.style.transform = `rotate(${sec * 360}deg)`;
    minElem.style.transform = `rotate(${min * 360}deg)`;
    hrElem.style.transform = `rotate(${hr * 360}deg)`;
    
}

startOurClock();

setInterval(startOurClock, 1000);

