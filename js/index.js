
const tela = document.querySelector('.container'); 
const mario = document.querySelector('.mario'); 
const tunel = document.querySelector('.tunel'); 
const chao = document.querySelector('.chao'); 
const nuvem = document.querySelector('.nuvem'); 

const lose = document.querySelector('.lose'); 
const pLose = document.querySelector('.pLose'); 
const scoreFinal = document.querySelector('.scoreFinal'); 







document.addEventListener('click', (e) => {

    marioJunp(); 
    playMarioJumpSound(1); 

}); 

//acionando animação do pulo por apertar tecla "espaço":

document.addEventListener('keydown', (e) => {

    const codigoTecla = e.keyCode; 

    if(codigoTecla === 32){
        marioJunp(); 
        playMarioJumpSound(1); 
    }

}); 




function marioJunp () {

    mario.classList.add('marioPulo'); 

    setTimeout(()  => {
        mario.classList.remove('marioPulo'); 
    }, 700); 

};



//detectando se o jogador encostou no túnel:

function obstaculo () {

    setInterval(() => {
    
        const distanciaTunel = tunel.offsetLeft;
        const alturaMario = window.getComputedStyle(mario).bottom.replace('px', ''); 
        const larguraTelaJogador = window.innerWidth; 


        if (larguraTelaJogador >= 1200 
            && distanciaTunel <= 140 
            && alturaMario <= 80) {

            tunel.style.display = 'none'; 
            chao.style.animation = 'none'; 
            nuvem.style.display = 'none'; 
            mario.style.animation = 'none'; 

            mario.src = '../img/game-over.png'; 
            mario.style.width = '100px'; 

            lose.style.display = 'block'; 
            pLose.style.display = 'block'; 
            scoreFinal.style.display = 'block'; 
            scoreFinal.innerHTML = `Score: ${scoreInicial}`; 
            playMarioJumpSound(0); 
            clearInterval(time); 

        } else if (larguraTelaJogador >= 800 
            && larguraTelaJogador < 1350 
            && distanciaTunel <= 110
            && alturaMario <= 80) {

            tunel.style.display = 'none'; 
            chao.style.animation = 'none'; 
            nuvem.style.display = 'none'; 
            mario.style.animation = 'none'; 

            mario.src = '../img/game-over.png'; 
            mario.style.width = '100px'; 

            lose.style.display = 'block'; 
            pLose.style.display = 'block'; 
            scoreFinal.style.display = 'block'; 
            scoreFinal.innerHTML = `Score: ${scoreInicial}`
            playMarioJumpSound(0); 
            clearInterval(time); 

        }



    }, 10)

}

obstaculo(); 




//score:
const score = document.querySelector('.score'); 

let scoreInicial = 0; 
let time; 

function contador() {

time = setInterval(function(){
scoreInicial++; 
score.innerHTML = `Score: ${scoreInicial}`; 
}, 100); 

}; 

contador(); 

//mario jump sound effect
function playMarioJumpSound (x) {
    const sound = document.querySelector('#mario-jump-sound'); 

    if (x === 1) {
        sound.play(); 
    }else{
        sound.pause(); 
    }
}