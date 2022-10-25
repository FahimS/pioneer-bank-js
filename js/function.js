function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementID) {
  const textElement = document.getElementById(elementID);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementById(elementID, newValue) {
  const textElement = document.getElementById(elementID);
  textElement.innerText = newValue;
}
