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
// [1, -4, 7, 12] => 1 + 7 + 12 = 20
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

// console.log(solution('world'))

// Нам нужна функция, которая преобразует число (целое) в строку.
// Какие способы сделать это вы знаете?

// Примеры (вход -> выход):
// 123 -> "123"
// 999 -> "999"
// -100 -> "-100"

const numberToString = num => {
  return num.toString()
}

// console.log(numberToString(123))

// Дополните метод, который принимает логическое значение и возвращает строку «Да» для значения «истина» или строку «Нет» для значения «ложь».

const boolToWord = bool => {
  return bool !== true ? 'No' : 'Yes'
}

// console.log(boolToWord(0))

// Дополните функцию квадратной суммы так, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.
// Например, для [1, 2, 2] она должна вернуть 9, потому что [1, 2, 2] = 9

const squareSum = numbers => {
  let acc = 0
  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i] ** 2
  }
  return acc
}

const squareSum1 = numbers => {
  return numbers.reduce(
    (accumulator, currentValue) => currentValue ** 2 + accumulator,
    0
  )
}

// console.log(squareSum([1, 2, 2]))

// Удалить первый и последний символ
// Задание
// Ваша цель — написать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр — исходная строка.
// Важно: Ваша функция должна обрабатывать строки любой длины ≥ 2 символов. Для строк, содержащих ровно 2 символа, возвращайте пустую строку.
// Примеры:
// 'eloquent' --> 'loquen'
// 'country' --> 'ountr'
// 'person' --> 'erso'
// 'ab' --> '' (пустая строка)
// 'xyz' --> 'y'

const removeChar = str => {
  if (str.length < 2) {
    return ''
  } else {
    return str.slice(1, -1)
  }
}

// напиши циклом for для себя еще!!!!
const removeChar1 = str => {
  let res = ''
  if (str.length < 2) {
    return ''
  } else {
    for (let i = 1; i < str.length - 1; i++) {
      res += str[i]
    }
  }
  return res
}

const removeChar2 = str => (str.length < 2 ? '' : str.slice(1, -1))

// console.log(removeChar1('eloquent'))

// Очень просто: дано число (целое / десятичное / и то, и другое в зависимости от языка), найти его противоположность (обратное по аддитивности).
// Примеры:
// 1: -1
// 14: -14
// -34: 34

const opposite = number => {
  return -Number(number)
}

// console.log(opposite(14))

// Напишите функцию, которая принимает неотрицательное целое число n и строку s в качестве параметров и возвращает строку s, повторяющуюся ровно n раз.
// Примеры (вход -> выход)
// 6, "I" -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

const repeatStr = (n, s) => {
  return s.repeat(n)
}

// console.log(repeatStr(6, 'Hello'))

// Суммирование
// Напишите программу, которая вычисляет сумму всех чисел от 1 до указанного числа (включительно). Число всегда будет положительным целым числом больше 0. Вашей функции нужно только вернуть результат. В скобках в примере ниже показано, как получить этот результат, и это не является его частью. См. примеры тестов.

// Например (Вход -> Выход):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// const summation = num => {
//   let acc = 0
//   for (let i = 0; i <= num; i++) {
//     acc += i
//   }
//   return acc
// }

const summation = n => n * (n + 1)

// console.log(summation(8))

// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.
// Например:
// Если задано [34, 15, 88, 2], ваше решение вернет 2.
// Если задано [34, -345, -1, 100], ваше решение вернет -345.
// В рамках этого задания можно предположить, что предоставленный массив не будет пустым.

const findSmallestInt = arr => {
  return arr.length === 0 ? 0 : arr.sort((a, b) => a - b)[0]
}

// for,
const findSmallestInt1 = arr => {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

// reduce

const findSmallestInt2 = arr => {
  return arr.reduce((acc, curr) => (curr < acc ? curr : acc), arr[0])
}

// Math.min

const findSmallestInt3 = arr => {
  return Math.min(...arr)
}

// при помощи метода map превращаем все элементы массива в числа, включая строки. Потом преобразуем в число
const findSmallestInt4 = arr => {
  return Math.min(...arr.map(Number))
}

// console.log(findSmallestInt([]))

// Напишите функцию, которая удаляет пробелы из строки и возвращает полученную строку.
// Примеры (Вход -> Выход):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

const noSpace = x => x.replaceAll(' ', '')

const noSpace1 = x => {
  return x
    .split('')
    .filter(item => item !== ' ')
    .join('')
}
// через регулярное выражение
function noSpace2(x) {
  return x.replace(/\s/g, '')
}

// через for
const noSpace3 = x => {
  let acc = ''
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== ' ') {
      acc += x[i]
    }
  }
  return acc
}
// console.log(noSpace3('8 j 8   mBliB8g  imjB8B8  jl  B'))

// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своих местах. Нам нужна функция, которая подсчитывает количество овец в массиве (true означает наличие).
// Например,
// [true, true, true, false,
// true, true, true, true,
// true, false, true, false,
// true, false, false, true,
// true, true, true, true,
// false, false, true, true]
// Правильный ответ — 17.
// Подсказка: Не забудьте проверить на наличие недопустимых значений, таких как null/undefined.

// for
const countSheeps = sheep => {
  let acc = 0
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i]) {
      acc++
    }
  }
  return acc
}

// reduce
const countSheeps1 = sheep => {
  return sheep.reduce((acc, item) => {
    return acc + (item ? 1 : 0)
  }, 0)
}

// filter
const countSheeps2 = sheep => {
  return sheep.filter(item => item).length
}

// Примечание: Эта ката вдохновлена ​​функцией «Преобразовать число в строку!». Попробуйте и её.
// Описание
// Нам нужна функция, которая преобразует строку в число. Какие способы сделать это вы знаете?
// Примечание: Не волнуйтесь, все входные данные будут строками, и каждая строка — это совершенно допустимое представление целого числа.
// Примеры
// "1234" --> 1234
// "605" --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = str => {
  return parseFloat(str)
}

// console.log(stringToNumber('1405'))

// Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
// Функция должна принимать три аргумента: операция(строка/символ), значение1(число), значение2(число).
// Функция должна возвращать числовой результат после применения выбранной операции.
// Примеры(Оператор, значение1, значение2) --> результат
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

const basicOp = (operation, value1, value2) => {
  if (operation === '+') {
    return value1 + value2
  }
  if (operation === '-') {
    return value1 - value2
  }
  if (operation === '*') {
    return value1 * value2
  }
  if (operation === '/') {
    return value1 / value2
  }
}

const basicOp1 = (operation, value1, value2) => {
  switch (operation) {
    case '+':
      return value1 + value2
    case '-':
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
    default:
      return 0
  }
}

// console.log(basicOp('/', 49, 7))

// Напишите функцию для преобразования имени в инициалы. Эта ката принимает строго два слова с одним пробелом между ними.
// Вывод должен состоять из двух заглавных букв, разделенных точкой.
// Выглядеть это должно примерно так:
// Сэм Харрис => S.H
// Патрик Фини => P.F

const abbrevName = name =>
  name.split(' ')[0][0].toUpperCase() +
  '.' +
  name.split(' ')[1][0].toUpperCase()

// best
function abbrevName1(name) {
  return name
    .split(' ')
    .map(i => i[0].toUpperCase())
    .join('.')
}

// Натан обожает кататься на велосипеде.
// Поскольку Натан знает, как важно поддерживать водный баланс, он выпивает 0,5 литра воды за час езды.
// Вам даётся время в часах, и вам нужно округлить количество литров, которое выпьет Натан.
// Например:
// время = 3 ----> литры = 1
// время = 6,7 ---> литры = 3
// время = 11,8 --> литры = 5

const litres = (time, rate = 0.5) => {
  return Math.floor(time * rate)
}

// console.log(litres(6, 0.5))

// Введение
// Первый век охватывает период с 1-го по 100-й год включительно, второй век — с 101-го по 200-й год включительно и т. д.
// Задание
// Данный год определите век, к которому он относится.
// Примеры
// 1705 -> 18
// 1900 -> 19
// 1601 -> 17
// 2000 -> 20
// 2742 -> 28

const century = year => {
  return Math.ceil(year / 100)
}

// console.log(century(1705))

// Дано случайное неотрицательное число. Вам необходимо вернуть его цифры в массив в обратном порядке.
// Пример (Вход => Выход):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// const digitize = n => {
//   if (n === 0) {
//     return [0]
//   } else {
//     return String(n)
//       .split('')
//       .reverse()
//       .map(num => {
//         return Number(num)
//       })
//   }
// }

// best
const digitize = n => String(n).split('').reverse().map(Number)

// console.log(digitize(35231))

// Тимми и Сара думают, что влюблены друг в друга, но в их районе они узнают об этом только после того, как сорвут по цветку. Если у одного цветка чётное количество лепестков, а у другого — нечётное, это значит, что они влюблены.
// Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать значение true, если они влюблены, и false, если нет.

const lovefunc = (flower1, flower2) => {
  return flower1 % 2 !== flower2 % 2
}

// Создайте функцию, которая принимает параметр, представляющий имя, и возвращает сообщение: «Привет, <имя>, как дела?».
// [Убедитесь, что вы вводите именно то, что я написал, иначе программа может работать некорректно]

const greet = name => {
  return `Hello, ${name} how are you doing today?`
}

// console.log(greet('Dick'))

// Создайте простую функцию greet, которая возвращает знаменитое «Hello World!».
// Очки стиля
// Конечно, это проще простого. Но насколько вы умны, чтобы создать самое креативное «Hello World», какое только сможете придумать? Какое решение для «Hello World» вы бы хотели показать своим друзьям?

// const helloGreet = wor => wor.toUpperCase().repeat(10).split('')
// console.log(helloGreet('Hello World!'))

// const helloGreet = () => Array(10).fill('HELLO WORLD!')
// console.log(helloGreet())

const greet1 = () => 'hello world!'

// Сможете ли вы найти иголку в стоге сена?
// Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иголку».
// После того, как ваша функция найдёт иголку, она должна вернуть сообщение (в виде строки):
// «найдена иголка в позиции «» плюс индекс, по которому иголка была найдена, то есть:
// Пример (Вход -> Выход)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

const findNeedle = haystack => {
  sum = haystack.findIndex(el => {
    return el === 'needle'
  })
  return `found the needle at position ${sum}`
}

// console.log(
//   findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// )

// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
// name + " plays banjo"
// name + " does not play banjo"
// Указанные имена всегда являются допустимыми строками.

const areYouPlayingBanjo = name =>
  name[0].toLowerCase() === 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`

// console.log(areYouPlayingBanjo('Rld'))

const paperwork = (n, m) => {
  if (n < 0 || m < 0) {
    return 0
  }
  return n * m
}

// console.log(paperwork(5, 5))

const maps = x => {
  return x.map(num => num * 2)
}

console.log(maps([1, 2, 3]))
