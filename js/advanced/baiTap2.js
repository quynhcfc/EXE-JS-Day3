document.getElementById("check-exe2").addEventListener("click", function () {
  var month = document.getElementById("txt-month2").value * 1;
  var year = document.getElementById("txt-year2").value * 1;
  var result = document.getElementById("paragraph-exe2");

  // if (month < 1 || month > 12) {
  //   alert("Nhập lại tháng");
  // }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      result.innerText = "Có 31 ngày";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      result.innerText = "Có 30 ngày";
      break;
    case 2:
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result.innerText = "Có 29 ngày (năm nhuận)";
      } else {
        result.innerText = "Có 28 ngày";
      }
      break;
    default:
      alert("Vui lòng nhập tra lại");
      break;
  }
});
