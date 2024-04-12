var Bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var SetaEsquerda = window.document.getElementById("seta-esquerda")
var SetaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    Bruna.style = "display:none"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top:30%;"
    samantha.style = "display:flex;"
}

function RolarParaEsquerda(){
    Bruna.style = "display:flex"
    SetaDireita.style = "display:flex; margin-top:30%;"
    SetaEsquerda.style = "display:none"
    samantha.style = "display:none;"
}