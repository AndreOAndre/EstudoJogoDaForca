let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSortiada;

const palavras = [
    palavra001={
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002={
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra003={
        nome: "FRANÇA",
        categoria: "LUGARES"
    },
    palavra004={
        nome: "BATATA",
        categoria: "COMIDA"
    },
    palavra005={
        nome: "PERÚ",
        categoria: "COMIDA"
    },
    palavra006={
        nome: "ROCAMBOLE",
        categoria: "COMIDA"
    },
    palavra007={
        nome: "GARFO",
        categoria: "OBJETOS"
    },
    palavra008={
        nome: "ISQUEIRO",
        categoria: "OBJETOS"
    },
    palavra009={
        nome: "MOUSE",
        categoria: "OBJETOS"
    },
]

criarPalavraSecreta()
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSortiada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSortiada)
    console.log(palavraSecretaCategoria)
}
montarPalavraNaTela()
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria")
    categoria.innerHTML = palavraSecretaCategoria

    const palavraTela = document.getElementById("palavra-secreta")
    palavraTela.innerHTML = ""

    for(i = 0; i < palavraSecretaSortiada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } 
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }  
}

function verificaLetraEscolhida(letra){
    if(tentativas > 0){
        mudarStyleLetra("tecla-" + letra)
        comparaListas(letra)
        montarPalavraNaTela()
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#c71585"
    document.getElementById(tecla).style.color = "#ffffff"
}

function comparaListas(letra){
    const pos = palavraSecretaSortiada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca()

        //imagem
        //verificar tentativas
    }
    else{
        for(i = 0; i < palavraSecretaSortiada.length; i++){
            if(palavraSecretaSortiada[i] == letra){
                listaDinamica[i] = letra
            }
        }
    }

    let vitoria = true
for(i = 0; i < palavraSecretaSortiada.lengt; i++){
    if(palavraSecretaSortiada[i] != listaDinamica[i]){
             vitoria = false
        }
     
         if(vitoria == true){
         //mensagem na tela
         tentativas = 0
         }
}
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')"
            break
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')"
            break
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')"
            break
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')"
            break
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')"
            break
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')"
            break
        default:     document.getElementById("imagem").style.background = "url('./img/forca.png')"
        break
    }
}