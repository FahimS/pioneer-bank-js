// Step-1: Add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // Step-2: Get deposit amount from deposit input field
  const depositFIeld = document.getElementById("deposit-field");
  const newDepositAmountString = depositFIeld.value;
  //Step-2.5: Convert string deposit amount to a number type
  const newDepositAmount = parseFloat(newDepositAmountString);
  //Step-3: Clear input field
  depositFIeld.value = " ";

  // >>>>>............. Connection with Deposit.......... <<<<<<<

  //Step-4: Get the previous deposit total
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  //Step-4.5: Convert string deposit amount to a number type
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  //Step-5: Calculate new deposit total and set the value to the deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  // >>>>>............. Connection with Balance.......... <<<<<<<

  //Step-6: Get the previous Balance
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  //Step-6.5: Convert string deposit amount to a number type
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //Step-7: Calculate new deposit total and set the value to the deposit total
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
});
