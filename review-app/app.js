//local reviews data
const reviews = [
    {
        id: 1,
        name: "Diego Kennedy",
        job: "developer",
        img: "https://images.pexels.com/photos/5859376/pexels-photo-5859376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Trying to be relevant and inspire others."
    },
    {
        id: 2,
        name: "Elisa Keller",
        job: "back-end developer",
        img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        text: "making the life easier."
    },
    {
        id: 3,
        name: "Camila Becker",
        job: "UX-UI Designer",
        img: "https://images.pexels.com/photos/245388/pexels-photo-245388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ."

    },
    {
        id: 4,
        name: "Jack Bills",
        job: "Marketing",
        img: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        text: "Aenean vulputate eleifend tellus."
    },
    {
        id: 5,
        name: "Elisa Keller",
        job: "Psychologist",
        img: "https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        text: "Duis leo. Sed fringilla mauris sit amet nibh."
    },

    
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});

//show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// random person buttton

randomBtn.addEventListener('click', function() {
    currentItem = randomNumber();
    showPerson();
});

// random number

function randomNumber() {
    return Math.floor(Math.random() * reviews.length);
};