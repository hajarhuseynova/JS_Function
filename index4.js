function BMI(weight, height) {
  return weight / (height * height);
}
let result = BMI(50, 1.9);
console.log(result);

if (result < 18.5) {
  console.log("Underweight");
} else if (result >= 18.5 && result < 25) {
  console.log("Normal weight");
} else if (result >= 25 && result < 30) {
  console.log("Over weight");
} else if (result >= 30) {
  console.log("Obese");
}
