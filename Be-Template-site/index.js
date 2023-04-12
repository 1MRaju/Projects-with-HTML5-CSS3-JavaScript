// sliders
const slides = document.querySelectorAll(".slide");
console.log(slides)

let counter = 0;
slides.forEach((slide, index)=>{
         slide.style.left = `${index * 100}%`
})

const goPrev = ()=>{
    counter--;
    slideImage();
}

const goNext = ()=>{
    counter++;
    slideImage();
} 

const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    } )
}

// hamburger menu
const hamMenu = document.querySelector('.fa-bars');
const hamCross = document.querySelector('.fa-xmark');
const mainMenu = document.querySelector('.menu');

hamMenu.addEventListener('click', show);
hamCross.addEventListener('click', close);

mainMenu.style.display='none';
hamCross.style.display='none'
function show(){
   mainMenu.style.display='block';
   mainMenu.style.background='black';
   hamCross.style.display='block'
   hamMenu.style.display='none'
}
function close(){
   mainMenu.style.display='none';
   hamCross.style.display='none'
   hamMenu.style.display='block'
}


