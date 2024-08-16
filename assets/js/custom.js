

let a = 10;
let b = 810;

let output = a == b;

// if(output) {
//     console.log('yes');
// } else {
//     console.log('no');
// }


// let newOutput = a == b ? 'yes' : 'no';
// let newOutput = a == b && 'yes';
// let newOutput = a == b || 'yes';
// let newOutput = a == b ?? true;
// let newOutput = a == b ?? 'yes';

// Truthy and Falsy Values

// Truthy values
// 1. string;
// 2. number;
// 3. object;
// 4. array;
// 5. true;


// falsy value;
// 1. false;
// 2. null;
// 3. undefined;
// 4. 0;
// 5. '';


let newOutput = false;

let output2 = !123;


// console.log(output2);


let product = {
    productName: 'mobile',
    price: 25,
}


// if(product.productName == undefined) {
//     console.log('Please choose a product first'); 
// } else {
//     console.log('Give me product price now;');
// }

// test();


function test() {
    console.log('this is from function');
}





function test2() {
    let gg = 100;

    console.log(a);
    
}




// test2();

// student() = result;


function student(s_name, s_bangla, s_english) {
    let name = s_name;
    let bangla = s_bangla;
    let english = s_english;

    let total = bangla + english;
    // let output = (total / 2) >= 33 ? 'Pass' : 'Fail';

    let finalOutput = (total / 2) >= 33 ? name + ' is passed' : name + ' is failed';  

    // console.log(finalOutput);

    let aa = 10 == 10;

    return finalOutput;
}

// 'jayed is passed';

// student('Zayed', 20, 50)

console.log( student('Zayed', 20, 50) );

document.write(student('Zayed', 20, 50));

let myResult = student('Zayed', 20, 50);

// student('Khaled', 20, 20);
// student('rashed', 20, 20);



function student2(test = 'something') {
    console.log(test);
    
}


// student2('nothing');




let student3 = function () {
    console.log('this is anonymous function');
}

let student4 = () => {
    console.log('this is arrow function');
}

// student3();
// student4();




// student('name', 30, 40);

// {
//     name: 'name',
//     english: 20,
//     bangla: 20
// }