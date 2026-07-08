/*======================================
LOVE JUJUBA V3
BUILD 0.4
======================================*/

"use strict";

/*======================================
ELEMENTOS
======================================*/

const loading = document.getElementById("loading");
const login = document.getElementById("login");
const intro = document.getElementById("intro");
const site = document.getElementById("site");

const senha = document.getElementById("senha");
const entrar = document.getElementById("entrar");
const erro = document.getElementById("erro");

const continuar = document.getElementById("continuar");
const typewriter = document.getElementById("typewriter");

const timer = document.getElementById("timer");

const music = document.getElementById("music");

/*======================================
LOADING
======================================*/

window.addEventListener("load", () => {

setTimeout(() => {

loading.style.opacity = "0";

setTimeout(() => {

loading.style.display = "none";

},1000);

},3000);

});

/*======================================
SENHA
======================================*/

const SENHA = "princesa";

entrar.addEventListener("click", ()=>{

const valor = senha.value.trim().toLowerCase();

if(valor===SENHA){

login.style.display="none";

intro.style.display="flex";

}else{

erro.textContent="Senha incorreta ❤️";

senha.value="";

}

});

/*======================================
EFEITO DIGITAÇÃO
======================================*/

const texto=

`Oi, minha princesa...

Antes de continuar...

Coloque um fone de ouvido. ❤️

Espero que goste desse presente.

Foi feito com muito carinho.`;

let i=0;

function escrever(){

if(i<texto.length){

typewriter.innerHTML+=texto.charAt(i);

i++;

setTimeout(escrever,45);

}

}

/*======================================
CONTINUAR
======================================*/

continuar.addEventListener("click",()=>{

intro.style.display="none";

site.style.display="block";

escrever();

/* Música */

music.src="https://www.youtube.com/embed/J7IGIqwpgPk?autoplay=1&loop=1";

});

/*======================================
CONTADOR
======================================*/

const inicio=new Date("2026-06-27T21:57:00");

function atualizarTempo(){

let agora=new Date();

let tempo=agora-inicio;

if(tempo<0){

timer.innerHTML="Nosso amor começa em breve ❤️";

return;

}

let segundos=Math.floor(tempo/1000);

let dias=Math.floor(segundos/86400);

segundos%=86400;

let horas=Math.floor(segundos/3600);

segundos%=3600;

let minutos=Math.floor(segundos/60);

segundos%=60;

timer.innerHTML=

`${dias} dias ❤️ ${horas}h ${minutos}m ${segundos}s`;

}

setInterval(atualizarTempo,1000);

atualizarTempo();
/*======================================
CHUVA DE CORAÇÕES
======================================*/

function criarCoracao(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=Math.random()>0.5?"💜":"❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(criarCoracao,350);

/*======================================
ESTRELAS
======================================*/

function criarEstrelas(){

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

star.style.animationDuration=(2+Math.random()*4)+"s";

document.body.appendChild(star);

}

}

criarEstrelas();

/*======================================
REVEAL AO ROLAR
======================================*/

const reveals=document.querySelectorAll("section");

function revelar(){

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-100){

sec.classList.add("reveal");

sec.classList.add("active");

}

});

}

window.addEventListener("scroll",revelar);

revelar();

/*======================================
BOTÃO NÃO
======================================*/

const nao=document.getElementById("nao");

if(nao){

function fugir(){

nao.style.position="fixed";

nao.style.left=Math.random()*70+"vw";

nao.style.top=Math.random()*80+"vh";

}

nao.addEventListener("mouseover",fugir);

nao.addEventListener("touchstart",fugir);

}

/*======================================
BOTÃO SIM
======================================*/

const sim=document.getElementById("sim");

if(sim){

sim.addEventListener("click",()=>{

for(let i=0;i<40;i++){

setTimeout(criarCoracao,i*40);

}

alert("Eu sabia ❤️🥹");

});

}

/*======================================
CARTINHAS
======================================*/

const mensagens=[

"Você é meu lugar favorito no mundo. ❤️",

"Obrigado por fazer meus dias melhores.",

"Seu abraço é onde eu encontro paz.",

"Meu futuro sempre terá você.",

"Eu te amo infinitamente. 💜"

];

const cartas=document.querySelectorAll(".carta");

cartas.forEach((carta,index)=>{

carta.addEventListener("click",()=>{

carta.innerHTML="<p style='font-size:14px;padding:10px'>"+mensagens[index]+"</p>";

});

});
/*======================================
TYPEWRITER PREMIUM
======================================*/

const mensagemIntro = `Oi, minha princesa...

Antes de continuar...

Quero que coloque um fone de ouvido. 🎧

Tudo o que você vai ver aqui foi feito com carinho.

Espero que esse presente consiga mostrar um pouquinho do tamanho do meu amor por você. ❤️`;

function iniciarDigitacao(){

typewriter.innerHTML="";

let i=0;

const velocidade=38;

(function escrever(){

if(i<mensagemIntro.length){

const letra=mensagemIntro.charAt(i);

typewriter.innerHTML+=letra=="\n"?"<br>":letra;

i++;

setTimeout(escrever,velocidade);

}

})();

}

/*======================================
ENTRADA SUAVE
======================================*/

function mostrarSite(){

site.style.display="block";

site.animate([

{opacity:0,transform:"translateY(40px)"},

{opacity:1,transform:"translateY(0)"}

],{

duration:1200,

fill:"forwards",

easing:"ease"

});

}

/*======================================
CONTINUAR
======================================*/

continuar.onclick=()=>{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

mostrarSite();

},700);

/* Música */

music.src="https://www.youtube.com/embed/J7IGIqwpgPk?autoplay=1&loop=1&playlist=J7IGIqwpgPk";

};

/*======================================
ZOOM NAS FOTOS
======================================*/

document.querySelectorAll(".carousel img").forEach(img=>{

img.onclick=()=>{

const fundo=document.createElement("div");

fundo.style.cssText=`
position:fixed;
inset:0;
background:rgba(0,0,0,.95);
display:flex;
align-items:center;
justify-content:center;
z-index:999999;
backdrop-filter:blur(10px);
`;

const foto=document.createElement("img");

foto.src=img.src;

foto.style.cssText=`
width:92%;
max-width:700px;
border-radius:25px;
box-shadow:0 0 40px #8d4dff;
animation:zoomFoto .35s;
`;

fundo.appendChild(foto);

document.body.appendChild(fundo);

fundo.onclick=()=>fundo.remove();

};

});

/*======================================
LOADING MAIS BONITO
======================================*/

window.addEventListener("load",()=>{

const barra=document.querySelector(".loading-progress");

barra.style.animationDuration="2.8s";

setTimeout(()=>{

loading.style.opacity="0";

loading.style.transform="scale(1.08)";

setTimeout(()=>{

loading.remove();

},900);

},2900);

});

/*======================================
FRASES ROMÂNTICAS
======================================*/

const frasesRomanticas=[

"Meu lugar favorito sempre será ao seu lado. 💜",

"Você transformou dias comuns em memórias inesquecíveis.",

"Amar você é a melhor parte da minha vida.",

"Cada segundo com você vale uma vida inteira.",

"Obrigado por existir, minha princesa. ❤️"

];

const frase=document.createElement("div");

frase.id="fraseFlutuante";

document.body.appendChild(frase);

setInterval(()=>{

frase.textContent=

frasesRomanticas[Math.floor(Math.random()*frasesRomanticas.length)];

frase.style.opacity="1";

setTimeout(()=>{

frase.style.opacity="0";

},5000);

},8000);
/*======================================
PARTÍCULAS SEGUINDO O DEDO
======================================*/

document.addEventListener("touchmove",(e)=>{

const p=document.createElement("div");

p.style.position="fixed";

p.style.left=e.touches[0].clientX+"px";

p.style.top=e.touches[0].clientY+"px";

p.style.width="8px";

p.style.height="8px";

p.style.borderRadius="50%";

p.style.background="rgba(150,120,255,.8)";

p.style.pointerEvents="none";

p.style.boxShadow="0 0 15px #8d4dff";

p.style.zIndex="999999";

document.body.appendChild(p);

p.animate([

{

transform:"scale(1)",

opacity:1

},

{

transform:"scale(0)",

opacity:0

}

],{

duration:700,

fill:"forwards"

});

setTimeout(()=>{

p.remove();

},700);

});

/*======================================
VIBRAÇÃO
======================================*/

function vibrar(ms){

if(navigator.vibrate){

navigator.vibrate(ms);

}

}

/*======================================
BOTÃO SIM
======================================*/

if(sim){

sim.addEventListener("click",()=>{

vibrar(120);

});

}

/*======================================
PARALLAX
======================================*/

window.addEventListener("scroll",()=>{

const y=window.scrollY;

document.body.style.backgroundPosition=`center ${y*0.15}px`;

});

/*======================================
ENTRADA DAS SEÇÕES
======================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(70px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:900,

fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

/*======================================
EASTER EGG
======================================*/

let contadorCliques=0;

document.querySelector("footer").addEventListener("click",()=>{

contadorCliques++;

if(contadorCliques==7){

alert(

`❤️

LoveJujuba V3

Criado por Gabryell.

Cada linha foi escrita pensando em você.

❤️`

);

contadorCliques=0;

}

});
/*======================================
MODO SECRETO
======================================*/

const telaSecreta=document.getElementById("secretScreen");

const fecharSegredo=document.getElementById("fecharSegredo");

let segredo=0;

document.querySelector("footer h2").addEventListener("click",()=>{

segredo++;

if(segredo>=7){

telaSecreta.style.display="flex";

segredo=0;

}

});

fecharSegredo.onclick=()=>{

telaSecreta.style.display="none";

};
/*======================================
ÚLTIMA SURPRESA
======================================*/

const audioMensagem=document.getElementById("audioMensagem");

const playAudio=document.getElementById("playAudio");

const audio=document.getElementById("audioPlayer");

const textos=[

"Espere um pouquinho...",

"Tem mais uma coisa...",

"Antes de ir embora...",

"Quero que escute minha voz. ❤️"

];

function escreverMensagem(){

let etapa=0;

audioMensagem.textContent="";

function proxima(){

if(etapa>=textos.length){

playAudio.style.display="block";

return;

}

audioMensagem.textContent=textos[etapa];

etapa++;

setTimeout(proxima,1800);

}

proxima();

}

document.querySelector("footer h2").addEventListener("click",()=>{

if(segredo===0){

setTimeout(escreverMensagem,700);

}

});

playAudio.onclick=()=>{

audio.play();

};