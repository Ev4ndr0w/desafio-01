let firstNumber = prompt("Digite o primeiro numero")
let SecondNumber = prompt("Digite o segundo numero")

let iguais = firstNumber === SecondNumber ?  'Sao iguais ' : 'Sao diferentes'

firstNumber = Number(firstNumber)
SecondNumber = Number(SecondNumber)

const sum = (firstNumber + SecondNumber)
let par = sum % 2 == 0 ?  'par' : 'impar'


const sub = (firstNumber - SecondNumber)
const mult = (firstNumber * SecondNumber)
const div = (firstNumber / SecondNumber)
const restodiv = (firstNumber % SecondNumber)


alert (`Os dois numeros inseridos ${iguais}`)
alert (`A soma desses dois numeros e ${sum}`)
alert (`O numero sera par ou impar ${par}`)
alert (`A subtracao desses dois numeros e ${sub}`)
alert (`A multiplicacao desses dois numeros e ${mult}`)
alert (`A divisao desses dois numeros e ${div}`)
alert (`O resto da divisao desses dois numeros e ${restodiv}`)
