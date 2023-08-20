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


//services items color
let green = document.getElementsByClassName("green")
let bottom = document.getElementsByClassName("bottom")
green[0].style.background='SpringGreen'
bottom[0].style.background='SpringGreen'

green[1].style.background='Orange'
bottom[1].style.background='Orange'

green[2].style.background='DeepSkyBlue'
bottom[2].style.background='DeepSkyBlue'

green[3].style.background='tomato'
bottom[3].style.background='tomato'


//facts counter
var fact1 = setInterval(number1, 40);
var fact2 = setInterval(number2, 15);
var fact3 = setInterval(number3, 800);
var fact4 = setInterval(number4, 0);
var fact5 = setInterval(number5, 100);
var fact6 = setInterval(number6, 400);

var count1 = 1;
var count2 = 2;
var count3 = 3;
var count4 = 4;
var count5 = 5;
var count6 = 6;

function number1() {
    count1++;
    document.querySelector("#number1").innerHTML = count1;
    if (count1 == 522) {
      clearInterval(fact1);
    }
  }

  function number2() {
    count2++;
    document.querySelector("#number2").innerHTML = count2;
    if (count2 == 888) {
      clearInterval(fact2);
    }
  }

function number3() {
    count3++;
    document.querySelector("#number3").innerHTML = count3;
    if (count3 == 11) {
      clearInterval(fact3);
    }
}

function number4() {
    count4++;
    document.querySelector("#number4").innerHTML = count4;
    if (count4 == 5566) {
      clearInterval(fact4);
    }
  }

function number5() {
    count5++;
    document.querySelector("#number5").innerHTML = count5;
    if (count5 == 133) {
      clearInterval(fact5);
    }
  }

function number6() {
    count6++;
    document.querySelector("#number6").innerHTML = count6;
    if (count6 == 77) {
      clearInterval(fact6);
    }
  }


  // gallery photos
  let webdesign = document.getElementById('webdesign');
  let ecommerce = document.getElementById('ecommerce');
  let cms = document.getElementById('cms');
  let logo = document.getElementById('logo');

  webdesign.addEventListener("click", photos);
  ecommerce.addEventListener("click", photos1);
  cms.addEventListener("click", photos2);
  logo.addEventListener("click", photos3);

  document.querySelector(".webdesign").style.display = "block";
  document.querySelector(".ecommerce").style.display = "none";
  document.querySelector(".cms").style.display = "none";
  document.querySelector(".logo").style.display = "none";

  function photos(){
       document.querySelector(".webdesign").style.display = "block";
       document.querySelector(".ecommerce").style.display = "none";
       document.querySelector(".cms").style.display = "none";
       document.querySelector(".logo").style.display = "none";
  }
  function photos1(){
       document.querySelector(".webdesign").style.display = "none";
       document.querySelector(".ecommerce").style.display = "block";
       document.querySelector(".cms").style.display = "none";
       document.querySelector(".logo").style.display = "none";
  }
  function photos2(){
       document.querySelector(".webdesign").style.display = "none";
       document.querySelector(".ecommerce").style.display = "none";
       document.querySelector(".cms").style.display = "block";
       document.querySelector(".logo").style.display = "none";
  }
  function photos3(){
       document.querySelector(".webdesign").style.display = "none";
       document.querySelector(".ecommerce").style.display = "none";
       document.querySelector(".cms").style.display = "none";
       document.querySelector(".logo").style.display = "block";
  }



