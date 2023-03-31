let palavraSecretaCategoria;
let palavraSecretaSorteada;
let Listadinamica = [];
let Tentativas = 6;

//palavras do jogo
const palavras = [
    palavra001={
        nome : "IRLANDA",
        categoria : "LUGARES"
    },
    palavra002={
        nome : "EQUADOR",
        categoria : "LUGARES"
    },
    palavra003={
        nome : "CAMBOJA",
        categoria : "LUGARES"
    },
    palavra004={
        nome : "GUATEMALA",
        categoria : "LUGARES"
    },
    palavra005={
        nome : "TANZANIA",
        categoria : "LUGARES"
    },
    palavra006={
        nome : "GROELANDIA",
        categoria : "LUGARES"
    },
    palavra007={
        nome : "VANCOUVER",
        categoria : "LUGARES"
    },
    palavra008={
        nome : "GALAPAGOS",
        categoria : "LUGARES"
    },
    palavra009={
        nome : "EDIMBURGO",
        categoria : "LUGARES"
    },
    palavra010={
        nome : "CHEGUENHUEM",
        categoria : "LUGARES"
    },
    palavra011={
        nome : "BABUINO",
        categoria : "ANIMAIS"
    },
    palavra012={
        nome : "FLAMINGO",
        categoria : "ANIMAIS"
    },
    palavra013={
        nome : "CALANGO",
        categoria : "ANIMAIS"
    },
    palavra014={
        nome : "DROMEDARIO",
        categoria : "ANIMAIS"
    },
    palavra015={
        nome : "GOLFINHO",
        categoria : "ANIMAIS"
    },
    palavra016={
        nome : "GUAXINIM",
        categoria : "ANIMAIS"
    },
    palavra017={
        nome : "ORANGOTANGO",
        categoria : "ANIMAIS"
    },
    palavra018={
        nome : "XEXEU",
        categoria : "ANIMAIS"
    },
    palavra019={
        nome : "PERCEVEJO",
        categoria : "ANIMAIS"
    },
    palavra020={
        nome : "TOUPEIRA",
        categoria : "ANIMAIS"
    },
    palavra021={
        nome : "AMPULHETA",
        categoria : "OBJETO"
    },
    palavra022={
        nome : "DESFIBRILADOR",
        categoria : "OBJETO"
    },
    palavra023={
        nome : "NEBULIZADOR",
        categoria : "OBJETO"
    },
    palavra024={
        nome : "VUVUZELA",
        categoria : "OBJETO"
    },
    palavra025={
        nome : "PENDULO",
        categoria : "OBJETO"
    },
    palavra026={
        nome : "SINTETIZADOR",
        categoria : "OBJETO"
    },
    palavra027={
        nome : "SPRAY",
        categoria : "OBJETO"
    },
    palavra028={
        nome : "WEBCAM",
        categoria : "OBJETO"
    },
    palavra029={
        nome : "XILOFONE",
        categoria : "OBJETO"
    },
    palavra030={
        nome : "OXIMETRO",
        categoria : "OBJETO"
    },
    palavra031={
        nome : "APICULTOR",
        categoria : "PROFISSÕES"
    },
    palavra032={
        nome : "CERIMONIALISTA",
        categoria : "PROFISSÕES"
    },
    palavra033={
        nome : "ENDOCRINOLOGISTA",
        categoria : "PROFISSÕES"
    },
    palavra034={
        nome : "INTERPRETE",
        categoria : "PROFISSÕES"
    },
    palavra035={
        nome : "ROTEIRIZADOR",
        categoria : "PROFISSÕES"
    },
    palavra036={
        nome : "TURISMOLOGO",
        categoria : "PROFISSÕES"
    },
    palavra037={
        nome : "BARTENDER",
        categoria : "PROFISSÕES"
    },
    palavra038={
        nome : "DESPACHANTE",
        categoria : "PROFISSÕES"
    },
    palavra039={
        nome : "EMBAIXADOR",
        categoria : "PROFISSÕES"
    },
    palavra040={
        nome : "COACH",
        categoria : "PROFISSÕES"
    },
    palavra041={
        nome : "AZULEJO",
        categoria : "ALEATORIO"
    },
    palavra042={
        nome : "FUCSIA",
        categoria : "ALEATORIO"
    },
    palavra043={
        nome : "QUARTZO",
        categoria : "ALEATORIO"
    },
    palavra044={
        nome : "VERTIGINOSO",
        categoria : "ALEATORIO"
    },
    palavra045={
        nome : "XILOFONE",
        categoria : "ALEATORIO"
    },
    palavra046={
        nome : "AGNOSTICO",
        categoria : "ALEATORIO"
    },
    palavra047={
        nome : "HETERONIMIA",
        categoria : "ALEATORIO"
    },
    palavra048={
        nome : "EPIFANIA",
        categoria : "ALEATORIO"
    },
    palavra049={
        nome : "MAGENTA",
        categoria : "ALEATORIO"
    },
    palavra050={
        nome : "PNEUMONIA",
        categoria : "ALEATORIO"
    },
    palavra051={
        nome : "AZALEIA",
        categoria : "FLORES"
    },
    palavra052={
        nome : "BEGONIA",
        categoria : "FLORES"
    },
    palavra053={
        nome : "FLOR DE MAIO",
        categoria : "FLORES"
    },
    palavra054={
        nome : "HORTENSIA",
        categoria : "FLORES"
    },
    palavra055={
        nome : "RABO DE GATO",
        categoria : "FLORES"
    },
    palavra056={
        nome : "ROSA DO DESERTO",
        categoria : "FLORES"
    },
    palavra057={
        nome : "AGAPANTO",
        categoria : "FLORES"
    },
    palavra058={
        nome : "LANTERNAS CHINESAS",
        categoria : "FLORES"
    },
    palavra059={
        nome : "BEIJO PINTADO",
        categoria : "FLORES"
    },
    palavra060={
        nome : "BROMELIA",
        categoria : "FLORES"
    },
    palavra061={
        nome : "CLUBE DA LUTA",
        categoria : "FILMES"
    },
    palavra062={
        nome : "OS SUSPEITOS",
        categoria : "FILMES"
    },
    palavra063={
        nome : "PRINCESA MONONOKE",
        categoria : "FILMES"
    },
    palavra064={
        nome : "CIDADAO KANE",
        categoria : "FILMES"
    },
    palavra065={
        nome : "LARANJA MECANICA",
        categoria : "FILMES"
    },
    palavra066={
        nome : "PACTO DE SANGUE",
        categoria : "FILMES"
    },
    palavra067={
        nome : "RASHOMON",
        categoria : "FILMES"
    },
    palavra068={
        nome : "O LABIRINTO DE FAUNO",
        categoria : "FILMES"
    },
    palavra069={
        nome : "GENIO INDOMAVEL",
        categoria : "FILMES"
    },
    palavra070={
        nome : "JANELA INDISCRETA",
        categoria : "FILMES"
    },



];


//sortear as palavras secretas
criarPalavraSecreta();
function criarPalavraSecreta (){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

palavraNaTela();
function palavraNaTela(){
    const categoria = document.getElementById("categorias");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++){
        if (Listadinamica[i] == undefined){

            if (palavraSecretaSorteada[i] == " ") {
                Listadinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+ Listadinamica[i]+"</div>"
            }
            else{
                Listadinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ Listadinamica[i]+"</div>"
            }

        }
        else{
            if (palavraSecretaSorteada[i] == " ") {
                Listadinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+ Listadinamica[i]+"</div>"
            }else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+ Listadinamica[i]+"</div>"
         }
        }
    }
    console.log(Listadinamica)
}

function verificadoNaLetra (letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(Tentativas > 0){
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        palavraNaTela();
    }
}

//muda a cor da letra e botão quando clica
function mudarStyleLetra(tecla, condicao){

    if (condicao == false) {
        document.getElementById(tecla).style.background = "rgb(235, 68, 68);";

        document.getElementById(tecla).style.color = "#ffffff";
    }else{
        document.getElementById(tecla).style.background = "rgba(25, 60, 218, 0.925)";

        document.getElementById(tecla).style.color = "#ffffff";
    }
}


// compara a lista com as letras digitadas
function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        Tentativas--
        carregaImagem();
        //se perder
        if(Tentativas == 0){
        abreModal("OPS!", "VOCÊ PERDEU..<br> A palavra secreta era:  " + palavraSecretaSorteada);
        }
    }else{
        mudarStyleLetra("tecla-" + letra, true);
        for(i = 0;i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                Listadinamica[i] = letra;
            }
        }
    }
    
    let vitoria = true;
    for(i = 0;i < palavraSecretaSorteada.length; i++){
        if (palavraSecretaSorteada[i] != Listadinamica[i]){
            vitoria = false;
        }
    }
    //se ganhar
    if (vitoria == true)
    {
        abreModal("PARABÉNS!", "VOCÊ ACERTOU !!..<br> ");
        Tentativas = 0;
    } 
}

//carrega a imagem da forca em cada erro
function carregaImagem (){
    switch (Tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca2.png')";
        break;

        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca3.png')";
        break;

        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca4.png')";
        break;

        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca5.png')";
        break;

        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca6.png')";
        break;

        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca7.png')";
        break;

        default:document.getElementById("imagem").style.background = "url('./img/forca1.png')";
        break;
    }
}


//aviso se perde ou ganha no modal do bootstrap
function abreModal( titulo, mensagem){
    let modaltitulo = document.getElementById("exampleModalLabel");
    modaltitulo.innerText = titulo;

    let modalCorpo = document.getElementById("modalCorpo");
    modalCorpo.innerHTML = mensagem;


    $("#myModal").modal({
        show: true
    });
}

//botao de reiniciar - botao com manete de video game
let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function()
{
    location.reload();
});