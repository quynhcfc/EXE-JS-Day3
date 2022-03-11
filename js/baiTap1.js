function ascending() {
  var number1 = document.getElementById("txt-number1").value * 1;

  var number2 = document.getElementById("txt-number2").value * 1;

  var number3 = document.getElementById("txt-number3").value * 1;

  var result = document.getElementById("ket-qua");

  if (number1 < number2 && number2 < number3) {
    result.value = `${number1}` + `${number2}` + `${number3}`;
    console.log(result);
  } else if (number2 < number1 && number1 < number3) {
    result = `${number2}` + `${number1}` + `${number3}`;
    console.log(number2, number1, number3);
  } else if (number3 < number1 && number1 < number2) {
    result = `${number3}` + `${number1}` + `${number2}`;
    console.log(number3, number1, number2);
  }
}
