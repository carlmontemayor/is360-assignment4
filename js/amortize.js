// calculateLoanPayment() is a little inefficient because we are recaluclated the values so much
function calculateLoanPayment() {
  // Fetch and parse inputs
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const annualInterestRate =
    parseFloat(document.getElementById("annualInterestRate").value) / 12;
  const loanTerm = parseFloat(document.getElementById("loanTerm").value) * 12;
  var amortizationTable = document.getElementById("amortizationTable");

  var beginningBalance = loanAmount;
  const calculatedPayment = calculate(loanAmount, loanTerm, annualInterestRate);

  for (let index = 0; index < loanTerm; index++) {
    var currentTableRow = amortizationTable.insertRow();

    // We can use hardcoded indices in insertCell() because we know we have 6
    // cells.
    var initialBalance = currentTableRow.insertCell(0);
    var newIntialBalence = document.createTextNode(beginningBalance.toFixed(2));
    initialBalance.appendChild(newIntialBalence);

    var payment = currentTableRow.insertCell(1);
    var newPayment = document.createTextNode(calculatedPayment.toFixed(2));
    payment.appendChild(newPayment);

    var interest = currentTableRow.insertCell(2);
    var newInterest = document.createTextNode(
      ((beginningBalance * annualInterestRate) / 100).toFixed(2)
    );
    interest.appendChild(newInterest);

    var principal = currentTableRow.insertCell(3);
    var newPrincipal = document.createTextNode(
      (
        calculatedPayment -
        (beginningBalance * annualInterestRate) / 100
      ).toFixed(2)
    );
    principal.appendChild(newPrincipal);

    var balance = currentTableRow.insertCell(4);
    var newBalance = document.createTextNode(
      (
        beginningBalance -
        (calculatedPayment - (beginningBalance * annualInterestRate) / 100)
      ).toFixed(2)
    );
    balance.appendChild(newBalance);

    var period = currentTableRow.insertCell(5);
    var newPeriod = document.createTextNode(index + 1);
    period.appendChild(newPeriod);
    beginningBalance =
      beginningBalance -
      (calculatedPayment - (beginningBalance * annualInterestRate) / 100);
  }
}

function calculate(loanAmount, numberOfPeriods, interestRate) {
  const payment =
    (loanAmount * interestRate) /
    100 /
    (1 - Math.pow(1 / (1 + interestRate / 100), numberOfPeriods));
  return payment;
}

function clearTable() {
  var amortizationTable = document.getElementById("amortizationTable");
  while (amortizationTable.rows.length > 0) {
    amortizationTable.deleteRow(0);
  }
}
