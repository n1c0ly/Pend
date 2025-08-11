//se preço for maior que 100, aplica o desconto de 10% caso contrário mantém o preço

// let price = 150
// let discount = 0.1
// result = price > 100 && price * (1 - discount) || price

// console.log(price * discount) //15 reais de desconto
// console.log(1- discount)
// console.log(price * 0.9)

// Status = média >= 7 "Aprovado"; 5-6.9 -> "Recuperação"; <5 -> "Reprovado"

const n1 = 10, n2 = 3, n3 = 5
const media =(n1+n2+n3) / 3

let status = (media >= 7 && "Aprovado") || (media >= 5 && "Recuperação") || (media <=5 && "Reprovado")
 