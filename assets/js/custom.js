// DOM = Document Object Model; 

// Dom select;
// Dom Create;
// Dom Style;
// Dom Remove;

// Dom Select;
let elem = document.getElementById('test');
// elem = document.getElementsByClassName('one');
// elem = document.querySelectorAll('.one');
// elem = document.getElementsByTagName('li');
// elem = document.querySelector('.one');

// // elem = elem.getAttribute('id');
// elem.setAttribute('id', 'another');

// elem = document.querySelector('input');
// elem.setAttribute('type', 'text')

// Dom Style;
// elem = elem.style.color = 'red';

// let test = {
//     one: '',
//     two: 'two'
// }

// test.one = 'another';

// elem.style.color = 'red';
// elem.style.backgroundColor = 'green';
// elem.style.fontSize = '26px';

let css = `
    color: red;
    background-color: green;
    font-size: 26px;
`;

// elem.style.cssText = css;

// console.dir(elem);


let div = document.createElement('div');
div.textContent = "this is div created by javascript";

let myElem = "<div class='js'>this is test</div>";
// document.getElementById('first').append(div);
// document.getElementById('first').prepend(div);
// document.getElementById('first').before(div);
// document.getElementById('first').after(div);

// document.getElementById('first').innerHTML += (myElem);

let myH1Elem = document.getElementById('first');

myH1Elem.insertAdjacentHTML('afterend', myElem);

// console.log(div);


// elem = elem.nextSibling;
// elem = elem.previousSibling;
// elem = elem.parentElement;
// elem = elem.children;

elem = myH1Elem.childNodes;

console.log(elem);
