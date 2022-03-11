function chao() {
  var optionValue = document.getElementsByClassName("a");
  for (var i = 0; i < optionValue.length; i++) {
    var cValue = optionValue[i].value;

    console.log(cValue);
    b = cValue * 1;
    // switch (b) {
    //   case 1:
    //     alert("Bo");
    //     break;
    //   case 2:
    //     alert("Me");
    //     break;
    //   case 3:
    //     alert("Anh");
    //     break;
    //   case 4:
    //     alert("Em");
    //     break;
    //   default:
    //     alert("chon lai");
    // }
    if (b == 1) {
      console.log("Chao bo");
    } else if (b == 2) {
      console.log("Chao me");
    } else if (b == 3) {
      console.log("Chao anh");
    } else if (b == 4) {
      console.log("Chao em");
    }
  }
}
