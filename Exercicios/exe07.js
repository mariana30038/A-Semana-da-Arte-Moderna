/* 1. ESCREVER UMA FUNÇÃO QUE ELA RECEBE DOIS NUMEROS COM PARAMETROS E IMPRIMA O MAIOR NUMERO */

//function imprimirMaiorNumero(num1,num2) {
   // if (num1 > num2) {
   // console.log(num1)
   /// } else {
    //console.log(num2)
   // }
   // }
   // imprimirMaiorNumero (5,10)

/* 2. ESCREVA UMA FUNÇÃO QUE RECEBA UM NUMERO COMO PARAMETRO E IMPRIMA NO CONSOLE
 "POSITIVO" SE FOR MAIOR QUE ZERO, "NEGATIVO" SE ELE FOR IGUAL A ZERO */

 //function imprimirPositivoOuNegativo(numero) {
  // if (numero > 0) {
   //   console.log("positivo")
    //} else if (numero < 0) {
   //   console.log("negativo")
   // } else {
   //  console.log("zero")
   //}
  //}
 //imprimirPositivoOuNegativo(10,5)
 

/* 3. ESCREVA UMA FUNÇÃO QUE RECEBA UMA LETRA COMO PARAMETRO E IMPRIMA NO CONSOLE 
"VOGAL" SE FOR VOGAL, OU CONSOANTE SE FOR UMA CONSOANTE*/

//function identificarLetra(letra) {
 // switch (letra) {
  //  case "a":
   //   console.log ("vogal")
    // case "e":
   //   console.log("vogal")
   // case "i":
    //  console.log("vogal")
   // case "o":
   //   console.log("vogal")
   // case "u":
   //   console.log("vogal")
   //   break
   // default:
 // console.log("é uma consoante")
    //  break
 // }
//}


//verificarLetra (`a`)
//verificarLetra ('e')
//verificarLetra ('i')
//verificarLetra ('o')
//verificarLetra ('u')
  

/* 4. ESCREVA UMA FUNÇÃO QUE RECEBA IDADE COM PARAMETRO E IMPRIMA NO CONSOLE "MAIOR DE IDADE"
SE FOR MAIOR OU IGUAL 18, OU "MENOR DE IDADE" SE FOR MENOR DE IDADE */

//function verificarIdade(idade) {
   // if (idade >= 18) {
   //   console.log("Maior de idade")
   // } else {
   //   console.log("Menor de idade")
   // }
 // }
  
 // verificarIdade(28)
  // verificarIdade(15)
  
//STRINGS

//TEMPLATE STRING 

const nome = "Vitor Hugo"
const idade = 27

const frase = `Meu nome é ${nome} e minha idade é ${idade}`

//console.log(frase)

function corFavorita (nome,cor) {
   console.log(`A cor favorita de ${nome} é ${cor}.`)
}

//corFavorita("Kevin Bacon", "Vermelho")

//LENGTH
const letras = nome.length
//console.log(`A string ${nome} tem ${nome.length} letras`)

//TOLOWERCASE
const fraseMaiuscula = "OIiIiEeEE"
const fraseEditada = fraseMaiuscula.toLowerCase()
//console.log(fraseEditada)

//TOUPPERCASE
const fraseMinuscula = "oiiiiii"
const fraseEditada2 = fraseMinuscula.toUpperCase()
//console.log(fraseEditada2)

//TRIM
const fraseComEspacos = "        Jean          "
//console.log(fraseComEspacos.length)
const fraseSemEspaco = fraseComEspacos.trim()
//console.log(fraseSemEspaco)

//INCLUDES
const texto  = " Tem a bondade de dizer aquele trecho do jeito que eu ensinei, com naturalidade."
const palavra = "bondade"
console.log(texto.includes("amor"))
console.log(texto.includes(palavra))

