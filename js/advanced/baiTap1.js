document.getElementById("check-exe1").addEventListener("click", function () {
  var day = document.getElementById("txt-day1").value * 1;
  var month = document.getElementById("txt-month1").value * 1;
  var year = document.getElementById("txt-year1").value * 1;

  var dayBefore = document.getElementById("day-before");

  var dayAfter = document.getElementById("day-after");

  if (day < 1 || month < 1 || month > 12) {
    alert("Vui lòng kiếm tra lại!");
  } else {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (day < 32) {
          if (day == 31 && month == 12) {
            dayAfter.innerText =
              "Ngày 1" + ", tháng 1" + ", năm " + `${year + 1}`;

            dayBefore.innerText =
              "Ngày " +
              `${day - 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;
          } else if (day == 31) {
            dayAfter.innerText =
              "Ngày 1" + ", tháng " + `${month + 1}` + ", năm " + `${year}`;

            dayBefore.innerText =
              "Ngày " +
              `${day - 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;
          } else if (day == 1 && month == 1) {
            dayAfter.innerText =
              "Ngày " +
              `${day + 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;

            dayBefore.innerText =
              "Ngày 31" + ", tháng 12" + ", năm " + `${year - 1}`;
          } else {
            dayAfter.innerText =
              "Ngày " +
              `${day + 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;

            dayBefore.innerText =
              "Ngày " +
              `${day - 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;
          }
        } else {
          alert("Tháng " + `${month}` + " có 31 ngày. Vui lòng kiểm tra lại!");
        }
        break;

      case 4:
      case 6:
      case 9:
      case 11:
        if (day < 31) {
          if (day == 30) {
            dayAfter.innerText =
              "Ngày 1" + ", tháng " + `${month + 1}` + ", năm " + `${year}`;

            dayBefore.innerText =
              "Ngày " +
              `${day - 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;
          } else {
            dayAfter.innerText =
              "Ngày " +
              `${day + 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;

            dayBefore.innerText =
              "Ngày " +
              `${day - 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;
          }
        } else {
          alert("Tháng " + `${month}` + " có 30 ngày. Vui lòng kiểm tra lại!");
        }
        break;

      default:
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          if (day == 29) {
            dayAfter.innerText =
              "Ngày 1" + ", tháng " + `${month + 1}` + ", năm " + `${year}`;

            dayBefore.innerText =
              "Ngày " +
              `${day - 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;
          } else {
            dayBefore.innerText =
              "Ngày " +
              `${day - 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;

            dayAfter.innerText =
              "Ngày " +
              `${day + 1}` +
              ", tháng " +
              `${month}` +
              ", năm " +
              `${year}`;
          }
        } else if (day == 28) {
          dayAfter.innerText =
            "Ngày 1" + ", tháng " + `${month + 1}` + ", năm " + `${year}`;

          dayBefore.innerText =
            "Ngày " +
            `${day - 1}` +
            ", tháng " +
            `${month}` +
            ", năm " +
            `${year}`;
        } else {
          dayBefore.innerText =
            "Ngày " +
            `${day - 1}` +
            ", tháng " +
            `${month}` +
            ", năm " +
            `${year}`;

          dayAfter.innerText =
            "Ngày " +
            `${day + 1}` +
            ", tháng " +
            `${month}` +
            ", năm " +
            `${year}`;
        }
        break;
    }
  }
});
