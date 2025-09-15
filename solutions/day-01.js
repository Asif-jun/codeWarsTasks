// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает «Even» для четных чисел или «Odd» для нечетных чисел.

const evenOrOdd = n => (n % 2 === 0 ? 'Even' : 'Odd')

// console.log(evenOrOdd(4))

// Этот код не выполняется должным образом. Попробуйте выяснить причину.
function multiply(a, b) {
  return a * b
}

// console.log(multiply(2, 2))

// В этом простом задании вам дано число, и вам нужно сделать его отрицательным. Но, возможно, число уже отрицательное?
// Примеры
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12
// Примечания
// Число может быть уже отрицательным, в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо знака. Отрицательные нули не имеют математического смысла.

const makeNegative = num => {
  return -Math.abs(num)
}

// Задача
// Вы получили массив чисел и вернули сумму всех положительных единиц.
// Пример
// [1, -4, 7, 12] =>
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Примечание
// Если суммировать нечего, сумма по умолчанию равна 0.

const positiveSum = arr => {
  let acc = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      acc += arr[i]
    }
  }
  return acc
}

const positiveSum1 = arr => {
  return arr.reduce((acc, val) => {
    return acc + (val > 0 ? val : 0)
  }, 0)
}

// console.log(positiveSum([1, -4, 7, 12]))

// Дополните решение так, чтобы оно перевернуло переданную ему строку.
// 'world' => 'dlrow'
// 'word' => 'drow'

const solution = str => {
  return str.split('').reverse().join('')
}

console.log(solution('world'))
