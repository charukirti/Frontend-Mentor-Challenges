const mainContainer = document.querySelector('.main_container');

const thankYouContainer = document.querySelector('.thank_you');

const submitBtn = document.querySelector('#submit');

const displayRate = document.querySelector('#rate');

const rates = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', () => {
    thankYouContainer.classList.remove('hidden');

    mainContainer.style.display = 'none';


})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        console.log(rate.innerHTML);
        displayRate.innerHTML = rate.innerHTML;
    })
})