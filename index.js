window.onscroll = function (){
    if(window.scrollY >50){
        document.querySelector('nav').style.padding = '20px 0';
        document.querySelector('nav').style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        document.querySelector('nav').style.color = '#333';
        document.querySelector('nav').style.backgroundColor = '#ffffff';
    }
    else{
        document.querySelector('nav').style.padding = '30px 0';
        document.querySelector('nav').style.boxShadow = 'none';
        document.querySelector('nav').style.color = '#fff';
        document.querySelector('nav').style.backgroundColor = 'transparent';
    }
};
let sliderOnHeader = document.querySelector('header .screen');
let header = document.querySelector('header ');
sliderOnHeader.style.top = (header.clientHeight - sliderOnHeader.clientHeight)/2 + 'px';
window.onresize = function (){
    sliderOnHeader.style.top = (header.clientHeight - sliderOnHeader.clientHeight)/2 + 'px';
};

let slider = document.querySelector('header .screen .slider');
let activeSlide = document.querySelector('header .controller .active');
document.querySelector('header .controller .line1').onclick=function(){
    slider.style.transform = 'translateX(0)';
    activeSlide.style.top='0px';
}
document.querySelector('header .controller .line2').onclick=function(){
    slider.style.transform='translateX(-25%)';
    activeSlide.style.top='80px';
}
document.querySelector('header .controller .line3').onclick=function(){
    slider.style.transform='translateX(-50%)';
    activeSlide.style.top='160px';
}
document.querySelector('header .controller .line4').onclick=function(){
    slider.style.transform='translateX(-75%)';
    activeSlide.style.top='240px';
}
function toggleMenu() {
    document.querySelector('nav .toggle').classList.toggle('active');
    document.querySelector('nav .links').classList.toggle('active');
}