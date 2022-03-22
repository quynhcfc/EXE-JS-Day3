function chanLe() {
  var number1 = document.getElementById("exe3-txt-number1").value * 1;

  var number2 = document.getElementById("exe3-txt-number2").value * 1;

  var number3 = document.getElementById("exe3-txt-number3").value * 1;

  var numberArray = [number1, number2, number3];

  var chan = 0;
  var le = 0;

  var kq1 = document.getElementById("exe3-ket-qua1");
  var kq2 = document.getElementById("exe3-ket-qua2");

  if (number1 == "" || number2 == "" || number3 == "") {
    alert("Vui lòng nhập số !!!");
  } else {
    for (var i = 1; i < numberArray.length; i++) {
      if (numberArray[i] % 2 == 0) {
        // console.log("Chan");
        chan = chan + i;
      } else {
        // console.log("Le");
        le = le + i;
      }
    }
    kq1.innerText = chan + " số chẵn";
    kq2.innerText = le + " số lẻ";
  }
}
