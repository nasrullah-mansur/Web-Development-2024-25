const foodItems = [
    {
        "id": 1,
        "imageUrl": "assets/images/one.jpeg",
        "name": "Burger",
        "price": 8.99,
        "quantity": 10,
        "category": "Fast Food"
    },
    {
        "id": 2,
        "imageUrl": "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
        "name": "Fruit Bowl",
        "price": 7.49,
        "quantity": 28,
        "category": "Healthy"
    },
    {
        "id": 3,
        "imageUrl": "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg",
        "name": "Sushi",
        "price": 14.99,
        "quantity": 25,
        "category": "Japanese"
    },
    {
        "id": 4,
        "imageUrl": "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg",
        "name": "Ice Cream",
        "price": 4.99,
        "quantity": 35,
        "category": "Dessert"
    },
    {
        "id": 5,
        "imageUrl": "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
        "name": "Pizza",
        "price": 12.99,
        "quantity": 15,
        "category": "Fast Food"
    },
    {
        "id": 6,
        "imageUrl": "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg",
        "name": "Salad",
        "price": 6.99,
        "quantity": 20,
        "category": "Healthy"
    },
    {
        "id": 7,
        "imageUrl": "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
        "name": "Ramen",
        "price": 11.99,
        "quantity": 19,
        "category": "Japanese"
    },
    {
        "id": 8,
        "imageUrl": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
        "name": "Pancakes",
        "price": 7.49,
        "quantity": 17,
        "category": "Dessert"
    },
    {
        "id": 9,
        "imageUrl": "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
        "name": "Tacos",
        "price": 7.99,
        "quantity": 18,
        "category": "Fast Food"
    },
    {
        "id": 10,
        "imageUrl": "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg",
        "name": "Avocado Toast",
        "price": 8.99,
        "quantity": 25,
        "category": "Healthy"
    },
    {
        "id": 11,
        "imageUrl": "https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg",
        "name": "Tempura",
        "price": 13.49,
        "quantity": 15,
        "category": "Japanese"
    },
    {
        "id": 12,
        "imageUrl": "https://images.pexels.com/photos/3666/chocolate-dessert-brownies-cake.jpg",
        "name": "Brownie",
        "price": 3.99,
        "quantity": 40,
        "category": "Dessert"
    },
    {
        "id": 13,
        "imageUrl": "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
        "name": "Chicken Wings",
        "price": 9.99,
        "quantity": 22,
        "category": "Fast Food"
    },
    {
        "id": 14,
        "imageUrl": "https://images.pexels.com/photos/990439/pexels-photo-990439.jpeg",
        "name": "Smoothie",
        "price": 5.49,
        "quantity": 30,
        "category": "Healthy"
    },
    {
        "id": 15,
        "imageUrl": "https://images.pexels.com/photos/13441988/pexels-photo-13441988.jpeg",
        "name": "Udon",
        "price": 10.99,
        "quantity": 22,
        "category": "Japanese"
    },
    {
        "id": 16,
        "imageUrl": "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
        "name": "Cheesecake",
        "price": 6.99,
        "quantity": 30,
        "category": "Dessert"
    },
    {
        "id": 17,
        "imageUrl": "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg",
        "name": "Sandwich",
        "price": 5.99,
        "quantity": 12,
        "category": "Fast Food"
    },
    {
        "id": 18,
        "imageUrl": "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg",
        "name": "Quinoa Salad",
        "price": 9.99,
        "quantity": 17,
        "category": "Healthy"
    },
    {
        "id": 19,
        "imageUrl": "https://images.pexels.com/photos/26546969/pexels-photo-26546969/free-photo-of-close-up-of-a-dish-with-meat-fries-and-rice.jpeg",
        "name": "Teriyaki Chicken",
        "price": 12.99,
        "quantity": 18,
        "category": "Japanese"
    },
    {
        "id": 20,
        "imageUrl": "https://images.pexels.com/photos/1179002/pexels-photo-1179002.jpeg",
        "name": "Cupcake",
        "price": 2.99,
        "quantity": 50,
        "category": "Dessert"
    }
];


let a = [1,2,3,4];

a = new Array(1,2,3,4);
a = new Array(4);
a = Array.of(1,2,3,4);
a = Array.from('hello');

// let test = document.getElementById('test').innerHTML;
// let testData = Array.from(test);

// testData = testData.map(function(item) {
//     return `<span class="d-block">${item}</span>`;
// })

// document.getElementById('test').innerHTML = testData.join('');

// console.log(test);
// console.log(testData);


let newArr = [2,4,6,8];
let fee = 3;


newArr = Array.from(newArr, function(n) {
    return n + fee;
});

newArr = Array.from(newArr, n => n + fee);

// console.log(newArr);


let abc = [...newArr, 11,22,33,44];

// console.log(abc);

// a = Array(5).fill(null);

// console.log(a);


let myLis = document.getElementsByTagName('li');

let htmlArray = Array.from(myLis);

myLis.forEach(function(e) {
    console.log(e);
})

console.log(myLis);
console.log(htmlArray);




