//Steps
//1. Setup DOM Contents
//2. tip % should be an array
//3. tip buttons for each % function
//4. calculate tip function
//5. custom tip and number of people input
//6 reset the calculator
/*------------- Final Project -----------------*/

document.addEventListener('DOMContent', () => {
    // Get references to the input fields and elements by their IDs
    const billAmountInput = document.getElementById('billAmount');
    const customTipInput = document.getElementById('customTip');
    const numPeopleInput = document.getElementById('numPeople');
    const totalAmountSpan = document.getElementById('totalAmount');
    const totalPerPersonSpan = document.getElementById('totalPerPerson');
    const resetBtn = document.getElementById('resetBtn');
    const tipButtonsContainer = document.getElementById('tipButtonsContainer');

    // Define an array of standard tip percentages
    const tipPercentages = [10, 15, 18, 20];

    // Function to create tip percentage buttons dynamically
    function createTipButtons() {
        tipPercentages.forEach(tip => {
            // Create a button element for each tip percentage
            const button = document.createElement('button');
            button.classList.add('tip-btn');
            button.textContent = `${tip}%`;
            button.dataset.tip = tip;
            tipButtonsContainer.appendChild(button);

            // Add an event listener to each button to handle tip calculation
            button.addEventListener('click', () => {
                // Clear custom tip input when a standard tip button is clicked
                customTipInput.value = '';
                calculateTip(tip);
            });
        });
    }

    // Function to calculate the tip amount and update the display
    function calculateTip(tipPercentage) {
        // Get the values from the input fields, defaulting to 0 or 1 if empty
        const billAmount = parseFloat(billAmountInput.value) || 0;
        const numPeople = parseInt(numPeopleInput.value) || 1;
        // Calculate the tip amount and the total amounts
        const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
        const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);
        const totalPerPerson = (totalAmount / numPeople).toFixed(2);

        // Update the total amount and total per person displays
        totalAmountSpan.textContent = `$${totalAmount}`;
        totalPerPersonSpan.textContent = `$${totalPerPerson}`;
    }

    // Event listener for custom tip input changes
    customTipInput.addEventListener('input', () => {
        const customTipPercentage = parseFloat(customTipInput.value) || 0;
        calculateTip(customTipPercentage);
    });

    // Event listener for changes in the number of people input
    numPeopleInput.addEventListener('input', () => {
        const customTipPercentage = parseFloat(customTipInput.value) || 0;
        calculateTip(customTipPercentage);
    });

    // Event listener for changes in the bill amount input
    billAmountInput.addEventListener('input', () => {
        const customTipPercentage = parseFloat(customTipInput.value) || 0;
        calculateTip(customTipPercentage);
    });

    // Event listener for the reset button to clear all inputs and outputs
    resetBtn.addEventListener('click', () => {
        billAmountInput.value = '';
        customTipInput.value = '';
        numPeopleInput.value = '1';
        totalAmountSpan.textContent = '$0.00';
        totalPerPersonSpan.textContent = '$0.00';
    });

    // Initialize the tip buttons when the page loads
    createTipButtons();
});

