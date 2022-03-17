document.getElementById("result-exe4").addEventListener("click", function () {
  var student11 = document.getElementById("student11").value * 1;
  var student12 = document.getElementById("student12").value * 1;
  var student21 = document.getElementById("student21").value * 1;
  var student22 = document.getElementById("student22").value * 1;
  var student31 = document.getElementById("student31").value * 1;
  var student32 = document.getElementById("student32").value * 1;
  var school1 = document.getElementById("school1").value * 1;
  var school2 = document.getElementById("school2").value * 1;

  var result = document.getElementById("paragraph-exe4");

  var student1, student2, student3;

  student1 = Math.sqrt(
    Math.pow(student11 - school1, 2) + Math.pow(student12 - school2, 2)
  );

  student2 = Math.sqrt(
    Math.pow(student21 - school1, 2) + Math.pow(student22 - school2, 2)
  );

  student3 = Math.sqrt(
    Math.pow(student31 - school1, 2) + Math.pow(student32 - school2, 2)
  );

  if (student1 < student3 && student2 < student3) {
    result.innerText = "Sinh viên 3 xa nhất";
  } else if (student2 < student1 && student3 < student1) {
    result.innerText = "Sinh viên 1 xa nhất";
  } else if (student1 < student2 && student3 < student2) {
    result.innerText = "Sinh viên 2 xa nhất";
  }
});
