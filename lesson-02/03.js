/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 33; // тестовое значение, можно изменять
let grade;
if (score >= 0 && score < 50) {
  grade = "F";
  console.log(grade);
} else if (score < 70) {
  grade = "D";
  console.log(grade);
} else if (score < 80) {
  grade = "C";
  console.log(grade);
} else if (score < 90) {
  grade = "B";
  console.log(grade);
} else if (score <= 100) {
  grade = "A";
  console.log(grade);
}
