//Step-1: Add event listener to the deposit button
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //Step-2: Get withdraw amount from withdraw input field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  //Step-2.5: Convert string deposit amount to a number type
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //Step-3: Clear input field
  withdrawField.value = " ";

  // >>>>>............. Connection with Withdraw.......... <<<<<<<

  //Step-4: Get the previous Withdraw total
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  //Step-4.5: Convert string deposit amount to a number type
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  //Step-5: Calculate new deposit total and set the value to the deposit total
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;

  // >>>>>............. Connection with Balance.......... <<<<<<<

  //Step-6: Get the previous Balance
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  //Step-6.5: Convert string deposit amount to a number type
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //Step-7: Calculate new deposit total and set the value to the deposit total
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
