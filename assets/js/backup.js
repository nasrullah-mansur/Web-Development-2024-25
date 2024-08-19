

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

let test = [
    'student one',
    'student two',
    'student three',
    'student four',
    'student five',
    'student six',
    'student seven',
    'student eight',
    'student nine',
    'student ten',
    'test',
    'test',
]


// for(let i = 1; i <= 20; i++){
//     console.log(i);
// }

// console.log(test[0]);
// console.log(test[1]);
// console.log(test[2]);
// console.log(test[3]);

// for(let j = 0; j < test.length; j++) {
//     console.log( test[j] );
// }


// for(let a = 0; 0 == 0; a++) {

// }

// let newArr = [
//     'Name: student one',
//     'Name: student two',
// ]

let newArr = test.map(function(item) {
    return 'Name: ' + item;
});

// console.log(newArr);

// let myNum = [2,4,6,33,65,23,45,67];

// let myFilter = test.filter(function(item) {
//     return item == 'test' || item == 'student one' || item == 'student two';
// });

// let filter2 = myNum.filter(function(n) {
//     return n > 10;
// });

// let subtotal = myNum.reduce(function(total, num) {
//     return total + num;
// }, 0);

// console.log(subtotal);




// ***************** Project Coding Type One **********************
let foodItemsNewArrayWithElements = [];

foodItems.forEach(function(item) {
    foodItemsNewArrayWithElements.push( foodItemElement(item) );
});


document.getElementById('food-galleries').innerHTML = foodItemsNewArrayWithElements.join('');


// ***************** Project Coding Type Two **********************
foodItems.forEach(function(item) {
    document.getElementById('food-galleries').innerHTML += foodItemElement(item);
})