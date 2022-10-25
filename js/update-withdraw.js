document.getElementById("btn-withdraw").addEventListener("click", function () {
  //1. Get the element by id
  //2. GEt the value from the element
  //3. convert string value to a number
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  //Step-4: Get the previous withdraw total by id
  //Step-4.5: Convert string withdraw amount to a number type
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  //Step-5: Calculate new withdraw total and set the value to the withdraw total
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  //Step-6: Set  deposit total  value
  setTextElementById("withdraw-total", newWithdrawTotal);

  //Strp-7: Get previous balance by using function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementById("balance-total", newBalanceTotal);
});
