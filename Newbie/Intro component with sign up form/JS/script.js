'use strict'

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', e => {
    e.preventDefault();
    inputs.forEach(input => {
        // console.log(input.value);
        if(!input.value) {
            input.parentElement.classList.add('error');
            
            
        } else {
            input.parentElement.classList.remove('error');
        }
    })
})
