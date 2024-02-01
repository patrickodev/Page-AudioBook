const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeCap = document.getElementById("capitulo");
const audioCap = document.getElementById('audio-capitulo');

const numCap = 10;
let tocando = 0;
let capAtual = 1;

function tocarFaixa(){
    audioCap.play();
    tocando = 1;
    botaoPlayPause.classList.remove('bi-play-fill');
    botaoPlayPause.classList.add('bi-pause-fill');
}

function pausarFaixa(){
    audioCap.pause();
    tocando = 0;
    botaoPlayPause.classList.add('bi-play-fill');
    botaoPlayPause.classList.remove('bi-pause-fill');
}

function playPause(){
    if(tocando == 0){
        tocarFaixa();
    }else{
        pausarFaixa();
    }    
}

function trocarFaixa(){
    audioCap.src = "./books/dom-casmurro/" + capAtual + ".mp3";
}
function trocarCap(){
    nomeCap.innerHTML = "Capítulo "+ capAtual;
}

function  proximaFaixa() {
    if(capAtual === numCap){
        capAtual = 1;
    } else {
        capAtual++;
    }

    trocarCap();
    trocarFaixa();
    tocarFaixa();
}

function  voltarFaixa() {
    if(capAtual === 1){
        capAtual = numCap;
    } else {
        capAtual--;
    }

    trocarCap();
    trocarFaixa();
    tocarFaixa();
}

botaoPlayPause.addEventListener('click', playPause);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);