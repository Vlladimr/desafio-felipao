console.log("digita o nome do seu jogador")

let nickname = "Vlladimr"
  console.log("Bem vindo " + nickname + ", você agora está jogando o MARVEL AVENGERS")
//______
const notificacao = "MARVEL AVENGERS diz:"
  console.log(notificacao + " Selecione seu herói.")
//______ intrudução
let heroi = ["thor", " spiderman", "iron man"]
  let heroisSelecionaveis = [
    ["thor", 1000, 2400], // herói > Pontos de vida > XP     //linha0
      ["spiderman", 6500, 9100],                             //linha1
        ["ironman", 3500, 6100]]                             //linha2
       
        //coluna0 - col.1 - col.2 

let heroi1 = "thor"
  let heroi2 = "spiderman"
    let heroi3 = "ironman"
 
let x = heroi2

if (x == heroi1){
  nomeHeroi = heroisSelecionaveis[0][0]
     hp = heroisSelecionaveis[0][1]
      xp = heroisSelecionaveis[0][2]
        nivelHeroi = xp + hp
         }
if (x == heroi2){
  nomeHeroi = heroisSelecionaveis[1][0]
    hp = heroisSelecionaveis[1][1]
      xp = heroisSelecionaveis[1][2] 
        nivelHeroi = xp + hp
          }
if (x == heroi3){
  nomeHeroi = heroisSelecionaveis[2][0] 
    hp = heroisSelecionaveis[2][1] 
      xp = heroisSelecionaveis[2][2] 
        nivelHeroi = xp + hp 
          }

console.log(notificacao + " Você escolheu o " + nomeHeroi + " que possúi " + hp + " pontos de vida e está no nível " + xp)


let pontosDeVida = (heroisSelecionaveis[1][1])

//______ informações sobre o heroi

console.log(notificacao + " Agora selecione em qual dos mundos o " + nomeHeroi + " irá se aventurar com base no seu nível:")

let fase = [
  ["mundo real", "medio", 0 , 500], //fase, nível, pontos requeridos para a fase sendo eles a soma (hp + xp), quantidade xp ganho.
    ["multiverso", "difícil", 10000, 1000],
      ["asgard", "muito difícil", 17000 , 2000]]


let fase1 = "mundo real"
  let fase2 = "multiverso"
    let fase3 = "asgard"

let y = fase2

if (y == fase1){
  nomeFase = fase[0][0]
    dificuldade = fase[0][1]
      nivelRequerido = fase[0][2]// considerando soma de pontos de vida + XP
        xpAdquirido = fase [0][3]
         }
  if (y == fase2){
    nomeFase = fase[1][0]
      dificuldade = fase[1][1]
        nivelRequerido = fase[1][2]// considerando soma de pontos de vida + XP
          xpAdquirido = fase [1][3]
           }
  if (y == fase3){
    nomeFase = fase[2][0]
      dificuldade = fase[2][1]
        nivelRequerido = fase[2][2]// considerando soma de pontos de vida + XP
          xpAdquirido = fase [2][3]
           }

console.log(notificacao + " Você escolheu desafio em " + y )
//______ informações sobre fase

//se a soma de hp+xp do heroi escolhido (x) for < do que requerido pra fase escoolhida (y) o heroi nao sera elegível para a mesma
if (nivelHeroi >= nivelRequerido){
  console.log(notificacao + " Seu herói está apto a esse desafio")
    naoApto = false
      } else {
        console.log(notificacao + " Seu herói não possiu o nível necessário para esse desafio")
          naoApto = true
            }

if (naoApto){
  console.log(notificacao + " Selecione outro heroi")
   }
//______condicional se o heroi está apto ou nao para o nivel selecionado

else { //else incluso para mostrar todo trecho abaixo apenas se o herói foi elegível para o nível que foi selecionado.

console.log(notificacao + " Seu desafio inicirá em")

let contagemRegressiva
  for (contagemRegressiva = 3; contagemRegressiva > 0; contagemRegressiva--) {
    console.log(contagemRegressiva)
     }
//__
let xpAtual = xp + xpAdquirido
  console.log (notificacao + " Parabéns! Sua jornada finalizada com sucesso, seu XP subiu para:" + xpAtual)

let nivel = [
  ["ferro",0,1000],
   ["bronze",1001,2000],
    ["prata",2001,5000],
     ["ouro",6001,7000],
      ["platina",7001,8000],
       ["ascendente",8001,9000],
        ["imortal",9001,10000],
          ["radiante",10001,99999],
           ]

for (i = 0; i<8; i++){
  if (xp >= nivel[i][1] && xp <= nivel[i][2])
    xpAnterior = nivel[i][0]
     }

//verificar o xp que o heroi tinha e indentificar o nível que ele estava, verificar se o xpAtual passou de lvl ou manteve o mesmo lvl
for (i = 0; i<8; i++){
  if (xpAtual >= nivel[i][1] && xpAtual <= nivel[i][2])
    nivelAtual = nivel [i][0]
     }

if ( xpAnterior != nivelAtual){
  console.log(notificacao + " Seu herói evoluiu do nível " + xpAnterior + " para o nível " + nivelAtual)
   }

console.log(notificacao + " O " + x + " está no nível "+ nivelAtual)
 }//chaves que finaliza o else incluso antes do "cronómetro", para mostrar todo esse trecho apenas se o herói foi elegível para o nível que foi selecionado.