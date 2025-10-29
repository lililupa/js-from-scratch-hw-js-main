// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
  const primeNumber = num % 2;
  if (primeNumber === 0) {
    return true;
  } else {
    return false;
  }
}
let primeNumber = isEven(14);
console.log(primeNumber);
