/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 99; // тестовое значение, можно изменять
let grade;
if (score >= 0 && score <= 49) {
  console.log("Your grade is F");
} else if (score >= 50 && score <= 69) {
  console.log("Your grade is D");
} else if (score >= 70 && score <= 79) {
  console.log("Your grade is C");
} else if ((score) >= 80 && score <= 89) {
  console.log("Your grade is B");
} else {
  console.log("Your grade is A");
}
