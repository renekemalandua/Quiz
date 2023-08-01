//As Telas
const telaCategoria = document.querySelector(".telaCateroria");
const telaJogo = document.querySelector(".telaJogo");
const telaRespostaCerta = document.querySelector(".telaRespostaCerta");
const telaRespostaErrada = document.querySelector(".telaRespostaErrada");
let Mensagem = document.querySelector(".Mensagem");
let parabens = document.querySelector("#errada");

// Tela categoria
const codec = document.querySelector(".Programacao");
const diverso = document.querySelector(".Geral");

codec.addEventListener("click", () =>{
    telaCategoria.setAttribute("style", "display:none");
    Perguntas();
    telaJogo.setAttribute("style", "display:flex");
    
})

diverso.addEventListener("click", () =>{
    telaCategoria.setAttribute("style", "display:none");
    PerguntasDiversos();
    telaJogo.setAttribute("style", "display:flex");
    catProgramacao = false;
})


//Tela de Jogo
let pergunta = document.querySelector(".TelaQuest");
let statu = document.querySelector(".status");
let btns = document.querySelectorAll(".botao");
let linhaA = document.querySelector(".A");
let linhaB = document.querySelector(".B");
let linhaC = document.querySelector(".C");
let linhaD = document.querySelector(".D");
let proxima = document.querySelector(".Proxima");
let novoJogo = document.querySelectorAll(".Novojogo");
let pular = document.querySelector(".pular");
let ajuda = document.querySelector(".ajuda");
let catProgramacao = true;
let podepular = true;
let podeajudar = true;
let nivel = 1;
let resposta;

ajuda.addEventListener("click", () =>{

    if(podeajudar){
    let indiceCerto = 0;
    console.log(resposta);
    for(let i = 0; i < btns.length; i++){
        if(btns[i].value === resposta){
            indiceCerto = i;
        }
    }
    switch(indiceCerto){

        case 0:
            btns[1].setAttribute("style", "background-color: darkred");
            btns[3].setAttribute("style", "background-color: darkred");
            break;

        case 1:
            btns[0].setAttribute("style", "background-color: darkred");
            btns[2].setAttribute("style", "background-color: darkred");
            break;
        case 2:
            btns[0].setAttribute("style", "background-color: darkred");
            btns[3].setAttribute("style", "background-color: darkred");
            break;
        case 3:
            btns[2].setAttribute("style", "background-color: darkred");
            btns[1].setAttribute("style", "background-color: darkred");
            break;
    }
    podeajudar = false;
}
ajuda.setAttribute("style", "background-color: darkred");
});
pular.addEventListener("click", () =>{
    if(podepular){
        podepular = false;
        pular.setAttribute("style", "background-color: darkred");
        nivel++;
        if(catProgramacao === true){
            Perguntas();
        }else{
            PerguntasDiversos();
        }
        
        telaRespostaCerta.setAttribute("style", "display:none");
        telaJogo.setAttribute("style", "display:flex");
        }
});
// Todas as perguntas da categoria Progrmação
function Perguntas(){
    if(nivel === 1){
        pergunta.innerHTML = "A Sigla CSS significa:";
        resposta = "Cascading Style Sheets";
        linhaA.value  = "Cascading Street Sheets";
        linhaB.value = "Cascading Shoot Style";
        linhaC.value = "Cascading Style Sheets";
        linhaD.value = "Cover Style Street";
        statu.value = `${nivel} / 5`;
    }
    else if(nivel === 2){
        pergunta.innerHTML = "Quem Criou  a 1ª Linguagem de<br>Progrmação de Alto nivel?";
        resposta = "Augusta Ada Lovelance";
        linhaA.value  = "Augusta Ada Lovelance";
        linhaB.value = "Tim  Berners-lee";
        linhaC.value = "Kathleen Booth";
        linhaD.value = "Allan Turing";
        statu.value = `${nivel} / 5`;
    }
    else if(nivel === 3){
        pergunta.innerHTML = "O HTML está para Estruturação<br>Assim como o CSS está para:";
        resposta = "Apresentação";
        linhaA.value  = "Estilização";
        linhaB.value = "Apresentação";
        linhaC.value = "Comportamento";
        linhaD.value = "visualização";
        statu.value = `${nivel} / 5`;
    }
    else if(nivel === 4){
        pergunta.innerHTML = "Em Linguagem C o codigo:<br>for(int i = 0; i <  10; i+2){ int soma += i;}<br>Soma será igual a:";
        resposta = "20";
        linhaA.value  = "9";
        linhaB.value = "45";
        linhaC.value = "5";
        linhaD.value = "20";
        statu.value = `${nivel} / 5`;
    }
    else if(nivel === 5){
        pergunta.innerHTML = "Quanto a Declaração de variavel<br>O JavaScript é uma linguagem de:";
        resposta = "Tipagem Dinamica";
        linhaA.value  = "Tipagem Forte";
        linhaB.value = "Tipagem Dinamica";
        linhaC.value = "Tipagem Fraca";
        linhaD.value = "Tipagem Estática";
        statu.value = `${nivel} / 5`;
    }
}
//====== Categoria Diversos =======
function PerguntasDiversos(){
    if(nivel === 1){
        pergunta.innerHTML = "Quem é o homem mais Rico do Mundo?";
        resposta = "Elon Musk";
        linhaA.value  = "Bills Gates";
        linhaB.value = "Elon Musk";
        linhaC.value = "Da Beleza";
        linhaD.value = "Jeff Bezos";
        statu.value = `${nivel} / 5`;
    }
    else if(nivel === 2){
        pergunta.innerHTML = "Quem Desenvolveu esse Jogo?";
        resposta = "René e Jumper";
        linhaA.value  = "René e Jumper";
        linhaB.value = "A RockStar Games";
        linhaC.value = "A Sony ";
        linhaD.value = "Elon Musk";
        statu.value = `${nivel} / 5`;
    }
    else if(nivel === 3){
        pergunta.innerHTML = "O primeiro homem a pisar na lua foi:";
        resposta = "Neils Armstrong";
        linhaA.value  = "Yuri Gargarin";
        linhaB.value = "Jorge Washington";
        linhaC.value = "Preto Show";
        linhaD.value = "Neils Armstrong";
        statu.value = `${nivel} / 5`;
    }
    else if(nivel === 4){
        pergunta.innerHTML = "O Planeta terra tem aproximadamente:";
        resposta = "8 biliões de habitantes";
        linhaA.value  = "20 biliões de habitantes";
        linhaB.value = "12 biliões de habitantes";
        linhaC.value = "8 biliões de habitantes";
        linhaD.value = "7 biliões de habitantes";
        statu.value = `${nivel} / 5`;
    }
    else if(nivel === 5){
        pergunta.innerHTML = "O Sol é :";
        resposta = "Uma Estrela";
        linhaA.value  = "Um Planeta";
        linhaB.value = "Um Satelite Natural";
        linhaC.value = "Uma Estrela";
        linhaD.value = "É o sol e ponto final";
        statu.value = `${nivel} / 5`;
    }
}
//============== Evento click dos btns dad opções =============================

btns.forEach(botao => botao.addEventListener("click", () =>{
    if(botao.value === resposta){
        botao.setAttribute("style", "background-color: green");
        setTimeout(() => {
            telaJogo.setAttribute("style", "display:nome");
            telaRespostaCerta.setAttribute("style", "display:flex");
        },1000);
    }else{
        botao.setAttribute("style", "background-color: darkred");
        setTimeout(() => {
            telaJogo.setAttribute("style", "display:nome");
            telaRespostaErrada.setAttribute("style", "display:flex");
        },1000);
    }
}))
proxima.addEventListener("click", () => {
    nivel++;
    if(nivel === 6){
        telaRespostaCerta.setAttribute("style", "display:none");
        parabens.innerHTML = "Parabêns Você venceu o Jogo!!";
        telaRespostaErrada.setAttribute("style", "display:flex");

    }else{
        for(let i = 0; i < btns.length; i++){
            btns[i].setAttribute("style", "background:  rgb(1, 1, 39)");
        }
        if(catProgramacao === true){
            Perguntas();
        }else{
            PerguntasDiversos();
        }
        
        telaRespostaCerta.setAttribute("style", "display:none");
        telaJogo.setAttribute("style", "display:flex");
    }
    
})


// Tela de Decisão

novoJogo.forEach(novo => novo.addEventListener("click", () => {
    location.reload();
}));