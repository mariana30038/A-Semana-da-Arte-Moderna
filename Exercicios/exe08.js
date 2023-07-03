//peca para o usuário escrever uma frase e imprimir no console a frase alterada,com.
//Todas as letras maiúsculas
//Na lingua do i (substituindo a vogal "o" por "i")
//O tamanho da frase

//const frase = "Os quartos são janelas para a alma"

//console.log(`Frase original ${frase}`)

// Transforma todas as letras em maiúsculas

//const fraseMaiuscula = frase.toUpperCase()

//console.log(`fraseSubstituida ${fraseAlterada}`)  

// Substitui a letra "o" por "i"

//const fraseSubstituida = fraseMaiuscula.replaceAll("o"/"i")

//console.log(`fraseSubstituida ${fraseMaiuscula}`)

// Obtém o tamanho da frase

//const tamanhoDaFrase = frase.length

//console.log(`Tamanho da frase ${tamanhoDaFrase}`)

// Imprime a frase alterada e seu tamanho no console


//ARRAYS

const listaDeCompras = ["batata","cebola","queijo","tomate","coca-cola"]

//console.log(listaDeCompras[5])

const racasDeCachorros = ["Pincher","Poodle","Labrador","Pastor Alemão","Shitzu"]

//console.log(racasDeCachorros[0])
//console.log(racasDeCachorros[4])

//LENGTH

//console.log(racasDeCachorros.length)

//INCLUDES

const series = ["Game of Thrones","Breaking Bad","The Walking Dead","Pokemon"]

//console.log(series.includes("Pokemon"))

//PUSH

series.push("Supernatural")
series.push("Cavaleiros do Zodiaco")

//console.log(series.length)
//console.log(series[4])
//console.log(series[series.length - 1])

//POP 

series.pop()

//console.log(series[series.length - 1])

//SPLICE

const letras = ["A","B","C","D","E","F"]

letras.splice(5,1)

console.log(letras)