
const hambButton = document.getElementById("hamb");
const subMenu = document.getElementById("navmenu");

function openMenu() {
  subMenu.classList.toggle('active'); 
  hambButton.classList.toggle('spanc'); 

 }
 


 

const vermais = document.getElementById("vermaisclick");
const contentm = document.getElementById("content-hei");

function openMais() {
  contentm.classList.toggle('openactive'); 
  vermais.classList.toggle('openactiveheig'); 

}

$('.center').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScrool: 1,
    responsive: [
{
  breakpoint: 768,
  settings: {
    arrows: false,
    centerMode: false,
    centerPadding: '0px',
    slidesToShow: 1
  }
},
{
  breakpoint: 480,
  settings: {
    arrows: false,
    centerMode: false,
    centerPadding: '0px',
    slidesToShow: 1
  }
}
]
});


window.sr = ScrollReveal({ reset: true });

(function scrollReveal() {
window.sr = ScrollReveal();


sr.reveal('.box-home-influ', {
distance   : '20px',
easing:   'ease',
mobile:   false,
origin     : 'top',
reset      : false,
duration: 2000,
}, 150);

sr.reveal('.trabalhos-reality, .area-sobre-descricao,  .contato-titulo-e-form, .infos-contato', {
    duration   : 800,
    distance   : '40px',
    easing     : 'ease-out',
    origin     : 'top',
    reset      : false,
    scale      : 1.0,
    viewFactor : 0,
}, 150);

    sr.reveal('.topo-titulo h1, .area-sobre-descricao:before, .foto-gp img', {
    duration   : 900,
    scale      : 1,
    distance   : '20px',
    origin     : 'top',
    reset      : false,
    easing     : 'ease-out',
    viewFactor : 1,
}, 75);
})
();


