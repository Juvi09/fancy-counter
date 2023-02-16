const increaseButtonEl = document.querySelector('.counter__button--increase');
const counterValueEl = document.querySelector('.counter__value');

increaseButtonEl.addEventListener('click', function(){
    // get current value of counter
    const currentValue = counterValueEl.textContent;

    // convert value to number type
    const currentValueAsNumber = +currentValue;

    // increment by 1
    const newValue = currentValueAsNumber + 1;

    // set counter element with new value
    counterValueEl.textContent = newValue;
});