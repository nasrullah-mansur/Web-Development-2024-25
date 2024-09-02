let myElem = document.getElementById('one');


// myElem.addEventListener('click', function() {
//     let color = myElem.style.backgroundColor;
//     if(color == 'gray') {
//         myElem.style.backgroundColor = 'red';
//     } else {
//         myElem.style.backgroundColor = 'gray';
//     }
// });

let myInput = document.querySelector('input');
let myBtn = document.querySelector('button');

myBtn.addEventListener('click', function(e) {

    let tag = e.target;

    let inputType = myInput.getAttribute('type');

    if(inputType  == 'text') {
        myInput.setAttribute('type', 'password');
        // myBtn.textContent = 'Show';
        tag.textContent = 'Show';
    } else {
        myInput.setAttribute('type', 'text');
        // myBtn.textContent = 'Hide';
        tag.textContent = "Hide";
    }




});




myElem.addEventListener('click', function() {
    let className = myElem.classList;

    // let checkClassName = className.contains('blue');

    // if(checkClassName == true) {
    //     myElem.classList.remove('blue');
    //     myElem.classList.add('green');
    // } else {
    //     myElem.classList.add('blue');
    //     myElem.classList.remove('green');
    // }


    myElem.classList.toggle('blue');
    myElem.classList.toggle('green');
    
});


let myFun = function(a, b) {
    console.log(b);
    
    let color = myElem.style.backgroundColor;
    if(color == 'gray') {
        myElem.style.backgroundColor = 'red';
    } else {
        myElem.style.backgroundColor = 'gray';
    }
}


myElem.addEventListener('click', myFun.bind(this, "abc"));
