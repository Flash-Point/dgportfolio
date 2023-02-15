// controls
let resetBtn = document.getElementById('reset-button');
let calculateBtn = document.getElementById('calculate-button');

// text to be updated. needs to be available for more than one function to access
let totalPerPerson = document.getElementById('total-per-person');
let tipPerPerson = document.getElementById('tip-per-person');

// number of button percentage. needs to be available for more than one function to access
let percent = null;

// add functionality to buttons. when clicked update percent variable with button value. dollar symbol removed
function addListenersToPercentButtons() {
    let percentBtns = document.getElementsByClassName('button');
    for (let i = 0; i < percentBtns.length; i++) {
        percentBtns[i].addEventListener('click', function () {
            percent = percentBtns[i].innerHTML;
        });
    }
}

resetBtn.addEventListener('click', () => {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input =>
        input.value = '',
    );
    totalPerPerson.innerHTML = '$0.00';
    tipPerPerson.innerHTML = '$0.00';
});

calculateBtn.addEventListener('click', () => {
    let bill = document.getElementById('bill');
    let numberOfPeople = document.getElementById('number-of-people');
    //remove percent symbol and calculate as percentage
    let correctPercentage = (percent.replace("%", "")) / 100;
    //calculate total tip
    let tip = parseFloat(bill.value) * parseFloat(correctPercentage);
    //add tip to bill
    let updatedBill = (parseFloat(bill.value) + tip).toFixed(2);
    
    totalPerPerson.innerHTML = "$" + (updatedBill / parseFloat(numberOfPeople.value)).toFixed(2);
    tipPerPerson.innerHTML = "$" + (tip / parseFloat(numberOfPeople.value)).toFixed(2);

});

addListenersToPercentButtons();


