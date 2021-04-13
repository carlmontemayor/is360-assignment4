function calculateInvestment() {
  const initialInvestment = parseFloat(
    document.getElementById("initialInvestment").value
  );
  const monthlyDepositAmount = parseFloat(
    document.getElementById("monthlyDepositAmount").value
  );
  const annualInterestRate =
    parseFloat(document.getElementById("annualInterestRate").value) / 1200;
  const investmentTerm =
    parseFloat(document.getElementById("investmentTerm").value) * 12;

  var investmentTableBody = document.getElementById("investmentTableBody");

  var beginningBalance = initialInvestment;

  for (let index = 0; index < investmentTerm; index++) {
    var currentTableRow = investmentTableBody.insertRow();

    var periodCell = currentTableRow.insertCell(0);
    var newPeriod = document.createTextNode(index + 1);
    periodCell.appendChild(newPeriod);

    var presentValueCell = currentTableRow.insertCell(1);
    var newPresentValue = document.createTextNode(beginningBalance.toFixed(2));
    presentValueCell.appendChild(newPresentValue);

    var recurringDepositAmountCell = currentTableRow.insertCell(2);
    var newRecurringDepositAmount = document.createTextNode(
      monthlyDepositAmount.toFixed(2)
    );
    recurringDepositAmountCell.appendChild(newRecurringDepositAmount);

    var interestCell = currentTableRow.insertCell(3);
    var newInterest = document.createTextNode(
      (beginningBalance * annualInterestRate).toFixed(2)
    );
    interestCell.appendChild(newInterest);

    var newBalanceCell = currentTableRow.insertCell(4);
    var newBalance = document.createTextNode(
      (
        beginningBalance +
        beginningBalance * annualInterestRate +
        monthlyDepositAmount
      ).toFixed(2)
    );
    newBalanceCell.appendChild(newBalance);

    beginningBalance =
      monthlyDepositAmount +
      beginningBalance +
      beginningBalance * annualInterestRate;
  }
}

function clearInvestmentTable() {
  var investmentTableBody = document.getElementById("investmentTableBody");
  while (investmentTableBody.rows.length > 0) {
    investmentTableBody.deleteRow(0);
  }
}
