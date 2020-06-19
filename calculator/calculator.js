window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputValues = getCurrentUIValues();
  const updatedCheck = calculateMonthlyPayment(inputValues);
  console.log(updatedCheck);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a strings
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  values.monthlyPayment = values.amount * (values.rate/ 100 / 12); 
  values.monthlyPayment = values.monthlyPayment / (1 - Math.pow(1 + values.rate / 100 / 12, -1 * values.years * 12));
  values.monthlyPayment = Number(Math.round(values.monthlyPayment+'e'+2)+'e-'+2);
  console.log(values.rate);
  return values;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
}
