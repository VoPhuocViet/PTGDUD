// Hàm tính điểm trung bình
function tinhTrungBinh(diem1, diem2, diem3) {
  return (diem1 + diem2 + diem3) / 3;
}

// Data 1: Dolphins score 96, 108, 89. Koalas score 88, 91, 110
let diemDolphins1 = tinhTrungBinh(96, 108, 89);
let diemKoalas1 = tinhTrungBinh(88, 91, 110);
console.log("Điểm của đội Dolphins (Data 1): ", diemDolphins1.toFixed(2));
console.log("Điểm của đội Koalas (Data 1): ", diemKoalas1.toFixed(2));

// Người chiến thắng Data 1
if (diemDolphins1 > diemKoalas1 && diemDolphins1 >= 100) {
  console.log("Dolphins thắng cúp (Data 1)!");
} else if (diemDolphins1 < diemKoalas1 && diemKoalas1 >= 100) {
  console.log("Koalas thắng cúp (Data 1)!");
} else if (
  diemDolphins1 >= 100 &&
  diemKoalas1 >= 100 &&
  diemDolphins1 === diemKoalas1
) {
  console.log("Hòa (Data 1)!");
} else {
  console.log("2 đội không đạt điều kiện (Data 1)");
}

// Data Bonus 1: Dolphins score 97, 112, 101. Koalas score 109, 95, 123
let diemDolphins2 = tinhTrungBinh(97, 112, 101);
let diemKoalas2 = tinhTrungBinh(109, 95, 123);
console.log("Điểm của đội Dolphins (Data Bonus 1): ", diemDolphins2.toFixed(2));
console.log("Điểm của đội Koalas (Data Bonus 1): ", diemKoalas2.toFixed(2));

// Người chiến thắng Data Bonus 1
if (diemDolphins2 > diemKoalas2 && diemDolphins2 >= 100) {
  console.log("Dolphins thắng cúp (Data Bonus 1)!");
} else if (diemDolphins2 < diemKoalas2 && diemKoalas2 >= 100) {
  console.log("Koalas thắng cúp (Data Bonus 1)!");
} else if (
  diemDolphins2 >= 100 &&
  diemKoalas2 >= 100 &&
  diemDolphins2 === diemKoalas2
) {
  console.log("Hòa (Data Bonus 1)!");
} else {
  console.log("2 đội không đạt điều kiện (Data Bonus 1)");
}

// Data Bonus 2: Dolphins score 97, 112, 101. Koalas score 109, 95, 106
let diemDolphins3 = tinhTrungBinh(97, 112, 101);
let diemKoalas3 = tinhTrungBinh(109, 95, 106);
console.log("Điểm của đội Dolphins (Data Bonus 2): ", diemDolphins3.toFixed(2));
console.log("Điểm của đội Koalas (Data Bonus 2): ", diemKoalas3.toFixed(2));

// Người chiến thắng Data Bonus 2
if (diemDolphins3 > diemKoalas3 && diemDolphins3 >= 100) {
  console.log("Dolphins thắng cúp (Data Bonus 2)!");
} else if (diemDolphins3 < diemKoalas3 && diemKoalas3 >= 100) {
  console.log("Koalas thắng cúp (Data Bonus 2)!");
} else if (
  diemDolphins3 >= 100 &&
  diemKoalas3 >= 100 &&
  diemDolphins3 === diemKoalas3
) {
  console.log("Hòa (Data Bonus 2)!");
} else {
  console.log("2 đội không đạt điều kiện (Data Bonus 2)");
}
