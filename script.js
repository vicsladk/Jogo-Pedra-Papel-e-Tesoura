function jogar() {
 idade = prompt ("Qual é a sua idade?")
   if (idade < 18) {
   alert ("Você não pode jogar Pedra, Papel e Tesoura... :(")
 }

 if (idade >= 18) {
   alert ("Vamos começar a jogar!!!")
 }
 if (idade >= 18) {
   escolhaJogador = prompt (" Digite 1 para Pedra, 2 para Papel e 3 para Tesoura!")
   escolhaComputador = Math.floor (Math.random() * 3) + 1;
 }

 alert ("Escolha do computador:" + escolhaComputador)

 if (escolhaJogador == escolhaComputador) {
  alert ("Empate!!")
 }

 if (escolhaJogador == 1) {
   if (escolhaComputador == 2) {
     alert ('Computador venceu! Escolheu Papel!')
   }
   if (escolhaComputador == 3) {
     alert ("Johador venceu! Computador escolheu Tesoura...")
   }
 }

 if (escolhaJogador == 2) {
   if (escolhaComputador == 1) {
     alert ('Jogador venceu! Computador escolheu Pedra...')
   }
   if (escolhaComputador == 3) {
     alert ('Computador venceu! Computador escolheu Tesoura!')
   }
 }

 if (escolhaJogador == 3) {
   if (escolhaComputador == 2) {
     alert ("Jogador venceu! Computador escolheu Papel...")
   }
   if (escolhaComputador == 1) {
     alert ("Computador venceu! Computador escolheu Pedra!")
    }
  }
}