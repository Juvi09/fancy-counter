const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const counterValueEl = document.querySelector('.counter__value');



decreaseButtonEl.addEventListener('click', function(){
    // get current value of counter
      const currentValue = counterValueEl.textContent;
    // convert value to number type
      const currentValueAsNumber = +currentValue;
    // decrement by 1
     const newValue = currentValueAsNumber - 1;
    // update counter value with new value
     counterValueEl.textContent = newValue;
});

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