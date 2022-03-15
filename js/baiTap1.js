function ascending() {
  var number1 = document.getElementById("exe1-txt-number1").value * 1;

  var number2 = document.getElementById("exe1-txt-number2").value * 1;

  var number3 = document.getElementById("exe1-txt-number3").value * 1;

  var result = document.getElementById("ket-qua");

  if (number1 < number2 && number2 < number3) {
    result.value = `${number1}` + ", " + `${number2}` + ", " + `${number3}`;
  } else if (number1 < number3 && number3 < number2) {
    result.value = `${number1}` + ", " + `${number3}` + ", " + `${number2}`;
  } else if (number2 < number1 && number1 < number3) {
    result.value = `${number2}` + ", " + `${number1}` + ", " + `${number3}`;
  } else if (number2 < number3 && number3 < number1) {
    result.value = `${number2}` + ", " + `${number3}` + ", " + `${number1}`;
  } else if (number3 < number1 && number1 < number2) {
    result.value = `${number3}` + ", " + `${number1}` + ", " + `${number2}`;
  } else {
    result.value = `${number3}` + ", " + `${number2}` + ", " + `${number1}`;
  }
}
