function calсBtn() {
  let numOne = +document.getElementById("firstNumber").value;
  let numTwo = +document.getElementById("secondNumber").value;
  let operator = document.getElementById("selectOperation").value;
  if (operator == "value+") {
    console.log((numOne += numTwo));
  } else if (operator == "value-") {
    console.log((numOne -= numTwo));
  } else if (operator == "value*") {
    console.log((numOne *= numTwo));
  } else if (operator == "value/") {
    console.log((numOne /= numTwo));
  }
}
