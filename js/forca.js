let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "FRANCA",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "ITALIA",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "ESTADOS UNIDOS",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "GRECIA",
        categoria: "LUGARES"
    },


    palavra007 = {
        nome: "BATATA",
        categoria: "COMIDA"
    },
    palavra008 = {
        nome: "PERU",
        categoria: "COMIDA"
    },
    palavra009 = {
        nome: "ROCAMBOLE",
        categoria: "COMIDA"
    },
    palavra010 = {
        nome: "BATATA FRITA",
        categoria: "COMIDA"
    },
    palavra011 = {
        nome: "PAO DE QUEIJO",
        categoria: "COMIDA"
    },
    palavra012 = {
        nome: "LASANHA",
        categoria: "COMIDA"
    },


    palavra0013 = {
        nome: "GARFO",
        categoria: "OBJETOS"
    },
    palavra014 = {
        nome: "ISQUEIRO",
        categoria: "OBJETOS"
    },
    palavra015 = {
        nome: "MOUSE",
        categoria: "OBJETOS"
    },
    palavra016 = {
        nome: "PENEIRA",
        categoria: "OBJETOS"
    },
    palavra017 = {
        nome: "BOLA",
        categoria: "OBJETOS"
    },
    palavra018 = {
        nome: "CANETA",
        categoria: "OBJETOS"
    },
]

criarPalavraSecreta()
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}
montarPalavraNaTela()
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria")
    categoria.innerHTML = palavraSecretaCategoria

    const palavraTela = document.getElementById("palavra-secreta")
    palavraTela.innerHTML = ""

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra)
        comparaListas(letra)
        montarPalavraNaTela()
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#c71585"
    document.getElementById(tecla).style.color = "#ffffff"
}

function comparaListas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--
        carregaImagemForca()

        if(tentativas == 0){
            abreModal("INFELIZMENTE VOCÊ PERDEU :(", "a palavra secreta era: <br>" + palavraSecretaSorteada)
        }
    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++){
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra
            }
        }
    }

    let vitoria = true
    for (i = 0; i < palavraSecretaSorteada.lengt; i++){
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false
        }
    }

    //SETOR COM ERROR -- EM MANUTENÇÃO

    // if( vitoria == true)
    // {
    //     abreModal("PARABÉNS!", "VOCÊ ACERTOU A PALAVRA SECRETA")
    //     tentativas = 0
    // }  

}

function carregaImagemForca() {
    switch (tentativas) {
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
        default: document.getElementById("imagem").style.background = "url('./img/forca.png')"
            break
    }
} 

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem


    $("#myModal").modal({
        show: true
    })
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
    location.reload()
})







