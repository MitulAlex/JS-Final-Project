//Steps
//1. Setup DOM Contents
//2. tip % should be an array
//3. tip buttons for each % function
//4. calculate tip function
//5. custom tip and number of people input
//6 reset the calculator
document.addEventListener('DOMContentLoaded', () => {
    const billAmountInput = document.getElementById('billAmount');
    const customTipInput = document.getElementById('customTip');
    const numPeopleInput = document.getElementById('numPeople');
    const totalAmountSpan = document.getElementById('totalAmount');
    const totalPerPersonSpan = document.getElementById('totalPerPerson');
    const resetBtn = document.getElementById('resetBtn');
    const tipButtonsContainer = document.getElementById('tipButtonsContainer');

    const tipPercentages = [10, 15, 18, 20];

    function createTipButtons() {
        tipPercentages.forEach(tip => {
            const button = document.createElement('button');
            button.classList.add('tip-btn');
            button.textContent = `${tip}%`;
            button.dataset.tip = tip;
            tipButtonsContainer.appendChild(button);

            button.addEventListener('click', () => {
                calculateTip(tip);
            });
        });
    }

    function calculateTip(tipPercentage) {
        const billAmount = parseFloat(billAmountInput.value) || 0;
        const numPeople = parseInt(numPeopleInput.value) || 1;
        const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
        const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);
        const totalPerPerson = (totalAmount / numPeople).toFixed(2);

        totalAmountSpan.textContent = `$${totalAmount}`;
        totalPerPersonSpan.textContent = `$${totalPerPerson}`;
    }

    customTipInput.addEventListener('input', () => {
        const customTipPercentage = parseFloat(customTipInput.value) || 0;
        calculateTip(customTipPercentage);
    });

    numPeopleInput.addEventListener('input', () => {
        const customTipPercentage = parseFloat(customTipInput.value) || 0;
        calculateTip(customTipPercentage);
    });

    resetBtn.addEventListener('click', () => {
        billAmountInput.value = '';
        customTipInput.value = '';
        numPeopleInput.value = '1';
        totalAmountSpan.textContent = '$0.00';
        totalPerPersonSpan.textContent = '$0.00';
    });

    createTipButtons();
});
