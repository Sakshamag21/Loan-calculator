function calculateLoan() {
    const loanAmountValue = parseFloat(document.getElementById("loan-amount").value);
    const interestRateValue = parseFloat(document.getElementById("interest-rate").value);
    const monthsToPayValue = parseInt(document.getElementById("months-to-pay").value);
  
    if (isNaN(loanAmountValue) || isNaN(interestRateValue) || isNaN(monthsToPayValue)) {
      document.getElementById("payment").innerHTML = "Please enter valid numbers.";
      return;
    }
  
    if (loanAmountValue <= 0 || interestRateValue < 0 || monthsToPayValue <= 0) {
      document.getElementById("payment").innerHTML = "Invalid input. Check your values.";
      return;
    }
  
    const monthlyInterestRate = (interestRateValue / 100) / 12;
  
    const monthlyPayment = (loanAmountValue * monthlyInterestRate) / 
      (1 - Math.pow(1 + monthlyInterestRate, -monthsToPayValue));
  
    document.getElementById("payment").innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
  }
  
  function resetForm() {
    document.getElementById("loan-amount").value = 10000;
    document.getElementById("interest-rate").value = 10;
    document.getElementById("months-to-pay").value = 12;
    document.getElementById("payment").innerHTML = "Monthly Payment: $0.00";
  } 
  
  document.addEventListener('DOMContentLoaded', () => {
    calculateLoan();
  });