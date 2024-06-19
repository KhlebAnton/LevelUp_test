//carousel 
let intervalCarusel = setInterval(() => { nextSlide() }, 9000);

const carousel = document.querySelector('.carousel-wrapper');
const countSlide = carousel.childElementCount;

function nextSlide() {
    let openSlide = carousel.querySelector('.open-slide');
    let nextSlide = carousel.querySelector('.next-slide');
    let prevSlide = carousel.querySelector('.prev-slide');

    openSlide.classList.remove('open-slide');
    openSlide.classList.add('prev-slide');

    prevSlide.classList.remove('prev-slide');
    prevSlide.classList.add('next-slide');

    nextSlide.classList.remove('next-slide');
    nextSlide.classList.add('open-slide')
}
function prevSlide() {
    let openSlide = carousel.querySelector('.open-slide');
    let nextSlide = carousel.querySelector('.next-slide');
    let prevSlide = carousel.querySelector('.prev-slide');

    openSlide.classList.remove('open-slide');
    openSlide.classList.add('next-slide');

    prevSlide.classList.remove('prev-slide');
    prevSlide.classList.add('open-slide');

    nextSlide.classList.remove('next-slide');
    nextSlide.classList.add('prev-slide')
}

//scroll
const btnActionList = document.querySelectorAll('.btn');
const form = document.getElementById('form');
btnActionList.forEach((btn) => {
    btn.addEventListener('click', () => {
        form.scrollIntoView({ block: "center", behavior: "smooth" })
    })
});

//timer 
const timer = document.querySelector('.timer');
const timerMin = timer.querySelector('.timer-min');
const timerSec = timer.querySelector('.timer-sec');

const timerId = setInterval(secOut, 1000);

function secOut() {
    let second = +timerSec.textContent;
    let minute = +timerMin.textContent;
    if (second == 0) { 
        if (minute == 0) {
            setTimePage(29, 59);
            clearInterval(timerId);
        }
        else {
            minute--;
            second = 59;
        }
    }
    else {
        second--; 
    }
    setTimePage(minute, second); 
}
function setTimePage(m, s) {
    timerMin.innerHTML = m;
    timerSec.innerHTML = s;
}

