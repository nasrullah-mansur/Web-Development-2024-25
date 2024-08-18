
let students = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "555-123-4567",
        "image": "https://fakeimg.pl/500x500/cc6600"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "phone": "555-987-6543",
        "image": "https://fakeimg.pl/500x500/cc6601"
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "email": "michael.johnson@example.com",
        "phone": "555-456-7890",
        "image": "https://fakeimg.pl/500x500/cc6602"
    },
    {
        "id": 4,
        "name": "Emily Brown",
        "email": "emily.brown@example.com",
        "phone": "555-234-5678",
        "image": "https://fakeimg.pl/500x500/cc6603"
    },
    {
        "id": 5,
        "name": "William Lee",
        "email": "william.lee@example.com",
        "phone": "555-765-4321",
        "image": "https://fakeimg.pl/500x500/cc6604"
    },
    {
        "id": 6,
        "name": "Olivia Wilson",
        "email": "olivia.wilson@example.com",
        "phone": "555-876-5432",
        "image": "https://fakeimg.pl/500x500/cc6605"
    },
    {
        "id": 7,
        "name": "Daniel Garcia",
        "email": "daniel.garcia@example.com",
        "phone": "555-678-9012",
        "image": "https://fakeimg.pl/500x500/cc6606"
    },
    {
        "id": 8,
        "name": "Sophia Martinez",
        "email": "sophia.martinez@example.com",
        "phone": "555-890-1234",
        "image": "https://fakeimg.pl/500x500/cc6607"
    },
    {
        "id": 9,
        "name": "Ethan Lopez",
        "email": "ethan.lopez@example.com",
        "phone": "555-234-5678",
        "image": "https://fakeimg.pl/500x500/cc6608"
    },
    {
        "id": 10,
        "name": "Isabella Rodriguez",
        "email": "isabella.rodriguez@example.com",
        "phone": "555-876-5432",
        "image": "https://fakeimg.pl/500x500/cc6609"
    },
    {
        "id": 11,
        "name": "James Hernandez",
        "email": "james.hernandez@example.com",
        "phone": "555-765-4321",
        "image": "https://fakeimg.pl/500x500/cc6610"
    },
    {
        "id": 12,
        "name": "Charlotte Lopez",
        "email": "charlotte.lopez@example.com",
        "phone": "555-901-2345",
        "image": "https://fakeimg.pl/500x500/cc6611"
    },
    {
        "id": 13,
        "name": "Alexander Scott",
        "email": "alexander.scott@example.com",
        "phone": "555-789-0123",
        "image": "https://fakeimg.pl/500x500/cc6612"
    },
    {
        "id": 14,
        "name": "Mia Jenkins",
        "email": "mia.jenkins@example.com",
        "phone": "555-345-6789",
        "image": "https://fakeimg.pl/500x500/cc6613"
    },
    {
        "id": 15,
        "name": "William Adams",
        "email": "william.adams@example.com",
        "phone": "555-012-3456",
        "image": "https://fakeimg.pl/500x500/cc6614"
    },
    {
        "id": 16,
        "name": "Sakura Tanaka",
        "email": "sakura.tanaka@example.com",
        "phone": "555-123-4567",
        "image": "https://fakeimg.pl/500x500/1f77b4"
    },
    {
        "id": 17,
        "name": "Noah Roberts",
        "email": "noah.roberts@example.com",
        "phone": "555-890-1234",
        "image": "https://fakeimg.pl/500x500/cc6616"
    },
    {
        "id": 18,
        "name": "Ava Turner",
        "email": "ava.turner@example.com",
        "phone": "555-234-5678",
        "image": "https://fakeimg.pl/500x500/cc6617"
    },
    {
        "id": 19,
        "name": "Ethan Parker",
        "email": "ethan.parker@example.com",
        "phone": "555-345-6789",
        "image": "https://fakeimg.pl/500x500/cc6618"
    },
    {
        "id": 20,
        "name": "Sophia Evans",
        "email": "sophia.evans@example.com",
        "phone": "555-890-1234",
        "image": "https://fakeimg.pl/500x500/cc6619"
    }
]



function studentElement(item) {
    return `<div class="col-lg-3 mb-4">
                    <div class="student-data text-center p-2 border bg-light">
                        <img class="img-fluid" src="${item.image}" alt="image">
                        <h4 class="text-bold pt-2">${item.name}</h4>
                        <p class="m-0"><strong>Email:</strong> ${item.email}</p>
                        <p><strong>Phone:</strong> ${item.phone}</p>
                    </div>
                </div>`;
}


let totalStudent = [];

students.forEach(function(item) {
    totalStudent.push( studentElement(item) );
})

document.getElementById('student_area').innerHTML = totalStudent.join(' ');





