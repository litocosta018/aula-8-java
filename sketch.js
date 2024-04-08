window.alert ('meu primeiro alerta')
window.confirm ('confirmação')
window.prompt ('cria caixa de pergunta')

//variaveis e concatenação//
var nome = window.prompt ('qual o nome') //variavel guardada//
window.alert ('Seja bem vindo' + nome + '!') //concatenação//

//criando 2 números//
var n1 = window.prompt('Digite seu número')
var n2 = window.prompt('Digite seu outro número')
var s = n1 + n2
var s = window.alert('A soma dos dois números é' + s)

//tratamento de dados//


// (string + string retorna um string)//
// (number + number retorna um número)

//existem dois tipos de numeros: inteiro (Number.parsint)
//float são numeros flutuantes, vem depois da virgula
//testar com numeros flutuantes//
//var n1 = Number.parseInt(window.prompt ('Digite um número'))
//var n2 = Number.parseInt(window.prompt( 'Digite outro número'))//
//var s = n1 + n2//
//var s = window.alert('A soma dos dois números é ' + s)//

//números flutuantes//
var n1 = Number.parseInt(window.prompt ('Digite um número'))
var n2 = Number.parseInt(window.prompt( 'Digite outro número'))
var s = n1 + n2
var s = window.alert('A soma dos dois números é ' + s)

//JavaScript decide se é inteiro ou flutuante//
var n1 = Number(window.prompt('Digite um número'))
var n2 = Number(window.prompt('Digite outro número'))
var s = n1 + n2
var s = window.alert('A soma dos 2 números é ' + s)








