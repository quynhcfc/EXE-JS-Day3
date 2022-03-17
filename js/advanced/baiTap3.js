document.getElementById("result-exe3").addEventListener("click", function () {
  var number = document.getElementById("txt-number").value * 1;

  var result = document.getElementById("paragraph-exe3");

  var hundred, tens, units;

  var readHundred, readTens, readUnits;

  if (number <= 99 || 1000 <= number) {
    alert("Vui lòng kiểm tra lại !!!");
  } else {
    hundred = Math.floor(number / 100);
    tens = Math.floor(number / 10) % 10;
    units = number % 10;

    switch (hundred) {
      case 1:
        readHundred = "Một trăm ";
        break;
      case 2:
        readHundred = "Hai trăm ";
        break;
      case 3:
        readHundred = "Ba trăm ";
        break;
      case 4:
        readHundred = "Bốn trăm ";
        break;
      case 5:
        readHundred = "Năm trăm ";
        break;
      case 6:
        readHundred = "Sáu trăm ";
        break;
      case 7:
        readHundred = "Bảy trăm ";
        break;
      case 8:
        readHundred = "Tám trăm ";
        break;
      case 9:
        readHundred = "Chín trăm ";
        break;
    }

    switch (tens) {
      case 0:
        if (units !== 0) {
          readTens = "lẻ ";
        } else {
          readTens = "";
        }
        break;
      case 1:
        readTens = "mười ";
        break;
      case 2:
        readTens = "hai mươi ";
        break;
      case 3:
        readTens = "ba mươi ";
        break;
      case 4:
        readTens = "bốn mươi ";
        break;
      case 5:
        readTens = "năm mươi ";
        break;
      case 6:
        readTens = "sáu mươi ";
        break;
      case 7:
        readTens = "bảy mươi ";
        break;
      case 8:
        readTens = "tám mươi ";
        break;
      case 9:
        readTens = "chín mươi ";
        break;
    }

    switch (units) {
      case 0:
        readUnits = "";
        break;
      case 1:
        if (tens === 0 || tens === 1) {
          readUnits = "một";
        } else {
          readUnits = "mốt";
        }
        break;
      case 2:
        readUnits = "hai";
        break;
      case 3:
        readUnits = "ba";
        break;
      case 4:
        readUnits = "bốn";
        break;
      case 5:
        readUnits = "lăm";
        break;
      case 6:
        readUnits = "sáu";
        break;
      case 7:
        readUnits = "bảy";
        break;
      case 8:
        readUnits = "tám";
        break;
      case 9:
        readUnits = "chín";
        break;
    }
    result.innerText = readHundred + readTens + readUnits;
  }
});
