var a = 55;
var b = 10;
var c = 55;

if (a == b || a == c || b == c) {
  console.log("Nhap lai");
} else if (a < b && b < c) {
  console.log("Max: ", c);
} else if (a < b && c < b) {
  console.log("Max: ", b);
} else if (b < a && c < a) {
  console.log("Max: ", a);
}
