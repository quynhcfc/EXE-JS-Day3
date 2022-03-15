function welcome() {
  var sel = document.getElementById("select-member");

  var text = sel.options[sel.selectedIndex].value;

  var textModal = document.getElementById("text-modal-body");

  switch (text) {
    case "B":
      textModal.innerText = "Chào mừng Bố !!!";
      break;
    case "M":
      textModal.innerText = "Chào mừng Mẹ !!!";
      break;
    case "A":
      textModal.innerText = "Chào mừng Anh trai !!!";
      break;
    case "E":
      textModal.innerText = "Chào mừng Em gái !!!";
      break;
    default:
      textModal.innerText = "Bạn chưa chọn thành viên !";
  }
}
