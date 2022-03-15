function chanLe() {
  var number1 = document.getElementById("exe3-txt-number1").value;

  var number2 = document.getElementById("exe3-txt-number2").value;

  var number3 = document.getElementById("exe3-txt-number3").value;

  var kq1 = document.getElementById("exe3-ket-qua1");
  var kq2 = document.getElementById("exe3-ket-qua2");
  var kq3 = document.getElementById("exe3-ket-qua3");

  if (number1 == "" || number2 == "" || number3 == "") {
    alert("Vui lòng nhập số !!!");
  } else {
    var a =
      (number1 * 1) % 2 == 0
        ? (kq1.innerText = "Chẵn")
        : (kq1.innerText = "Lẻ");
    var b =
      (number2 * 1) % 2 == 0
        ? (kq2.innerText = "Chẵn")
        : (kq2.innerText = "Lẻ");
    var c =
      (number3 * 1) % 2 == 0
        ? (kq3.innerText = "Chẵn")
        : (kq3.innerText = "Lẻ");
  }
}
