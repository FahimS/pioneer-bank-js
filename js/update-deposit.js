document.getElementById("btn-deposit").addEventListener("click", function () {
  //1. Get the element by id
  //2. GEt the value from the element
  //3. convert string value to a number
  const newDepositAmount = getInputFieldValueById("deposit-field");

  //Step-4: Get the previous deposit total by id
  //Step-4.5: Convert string deposit amount to a number type

  const previousDepositTotal = getTextElementValueById("deposit-total");
  console.log(newDepositAmount);
  //Step-5: Calculate new deposit total and set the value to the deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  //Step-6: Set  deposit total  value
  setTextElementById("deposit-total", newDepositTotal);

  //Strp-7: Get previous balance by using function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementById("balance-total", newBalanceTotal);
});
