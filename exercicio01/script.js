let numberOne = Number(prompt('Digite um número!'))
let numberTwo = Number(prompt('Digite outro número!'))

let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = (numberOne / numberTwo).toFixed(2)
let remainder = numberOne % numberTwo
let pair = sum % 2

alert(`
  A soma dos números é: ${sum}
  A subtração dos números é: ${subtraction}
  A multiplicação dos números é: ${multiplication}
  A divisão dos números é: ${division}
  O resto da divisão dos números é: ${remainder}
`)

if (pair == 0) {
  alert(`A soma dos números (${numberOne} + ${numberTwo} = ${sum}) é par`)
} else {
  alert(`A soma dos números (${numberOne} + ${numberTwo} = ${sum}) é ímpar`)
}

if (numberOne == numberTwo) {
  alert(`Os números (${numberOne} e ${numberTwo}) são iguais`)
} else {
  alert(`Os números (${numberOne} e ${numberTwo}) são diferentes`)
}
