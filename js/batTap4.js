function calculator() {
  var canh1 = document.getElementById("txt-canh1").value * 1;

  var canh2 = document.getElementById("txt-canh2").value * 1;

  var canh3 = document.getElementById("txt-canh3").value * 1;

  var ketqua = document.getElementById("exe4-ket-qua");

  if (canh1 + canh2 > canh3 && canh2 + canh3 > canh1 && canh1 + canh3 > canh2) {
    if (canh1 == canh2 && canh2 == canh3) {
      ketqua.innerText = "Tam giác đều";
    } else if (canh1 == canh2 || canh2 == canh3 || canh1 == canh3) {
      ketqua.innerText = "Tam giác cân";
    } else if (
      canh1 == Math.sqrt(canh2 + canh3) ||
      canh2 == Math.sqrt(canh1 + canh3) ||
      canh3 == Math.sqrt(canh1 + canh2)
    ) {
      ketqua.innerText = "Tam giác vuông";
    } else {
      ketqua.innerText = "Tam giác thường";
    }
  } else {
    alert("Nhập lại");
  }
}
