

// 1. registration;
// 2. course choose;
// 3. make payment;
// 4. keep learning;
// 5. complete course;
// 6. take exam;
// 7. take certificate;




// function registration(callback) {
//     console.log('Log in successful');
//     callback();
// }

// function courseChoose(callback) {
//     let choose = false;
//     if(choose) {
//         console.log('Please choose your favorite course');
//         callback();
//     }

// }

// function makePayment(callback) {
//     console.log('Please pay first');

//     callback();
// }

// function keepLearning(callback) {
//     setTimeout(() => {
//         console.log('Well done! your payment is successful, Please keep learning.');

//         callback();
//     }, 2000);
// }

// function completeCourse(callback) {
//     console.log('Well done! you have completed your course.');

//     callback();
// }

// function takeExam(callback) {
//     let result = 'fail';
//     if(result != 'fail') {
//         console.log('Well done! you have passed your exam.');

//         callback();
//     } else {
//         console.log('Sorry! you are failed. Please take exam again.');
//     }
// }

// function takeCertificate() {
//     console.log('Your certificate is ready. Please contact us.');
// }



// registration();
// courseChoose();
// makePayment();
// keepLearning();
// completeCourse();
// takeExam();


// registration(function() {
//     courseChoose(function() {
//         makePayment(function() {
//             keepLearning(function() {
//                 completeCourse(function() {
//                     takeExam(function() {
//                         takeCertificate();
//                     });
//                 });
//             });
//         });
//     });
// });




// ********************
// *************************** Promises *********************

function registration() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Log in successful');
            resolve();
        }, 2000)
    });

}

function courseChoose() {
    
    return new Promise(function(resolve) {
        console.log('Please choose your favorite course');
        resolve();
    });

}

function makePayment() {

    return new Promise(function(resolve) {
        setTimeout(() => {
            console.log('Please pay first');
            resolve();
        }, 2000);
    });

}

function keepLearning(callback) {
    setTimeout(() => {
        console.log('Well done! your payment is successful, Please keep learning.');

        callback();
    }, 2000);
}

function completeCourse(callback) {
    console.log('Well done! you have completed your course.');

    callback();
}

function takeExam(callback) {
    let result = 'fail';
    if(result != 'fail') {
        console.log('Well done! you have passed your exam.');

        callback();
    } else {
        console.log('Sorry! you are failed. Please take exam again.');
    }
}

function takeCertificate() {
    console.log('Your certificate is ready. Please contact us.');
}





// let myPromise = new Promise(function(resolve) {

//     resolve('Promise rakha somvob hosse na');
// });

// console.log(myPromise);

// registration()
//     .then(courseChoose)
//     .then(makePayment)



let myArr = null;

function first() {

    return new Promise(function(resolve) {
        setTimeout(() => {
            myArr = [1,2,3,4,5];
    
            resolve();
        }, 2000);
    })

}

function second() {
    let newArr = myArr.map(function(n) {
        return n + 5;
    });

    myArr = newArr;

    console.log(myArr);
}



first()
    .then(second)


