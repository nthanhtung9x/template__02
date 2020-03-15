// Status

const show1 = document.querySelector('.status-1');
const num1 = (parseInt(show1.innerHTML)) + 1;
let counter1 = 0;
counter_js1();
function counter_js1(){
    show1.innerHTML = counter1.toString();
    counter1 += 10;
    if ( counter1 < num1 ) {
        setTimeout(function(){
            counter_js1();
        }, 20)    
    } 
}

const show2 = document.querySelector('.status-2');
const num2 = (parseInt(show2.innerHTML)) + 1;
let counter2 = 0;
counter_js2();
function counter_js2(){
    show2.innerHTML = counter2.toString();
    counter2 += 10;
    if ( counter2 < num2 ) {
        setTimeout(function(){
            counter_js2();
        }, 20)    
    } 
}

const show3 = document.querySelector('.status-3');
const num3 = (parseInt(show3.innerHTML)) + 1;
let counter3 = 0;
counter_js3();
function counter_js3(){
    show3.innerHTML = counter3.toString();
    counter3 += 10;
    if ( counter3 < num3 ) {
        setTimeout(function(){
            counter_js3();
        }, 150)    
    } 
}

const show4 = document.querySelector('.status-4');
const num4 = (parseInt(show4.innerHTML)) + 1;
let counter4 = 0;
counter_js4();
function counter_js4(){
    show4.innerHTML = counter4.toString();
    counter4 += 10;
    if ( counter4 < num4 ) {
        setTimeout(function(){
            counter_js4();
        }, 200)    
    } 
}


// Slide Feedback

var slides = document.getElementsByClassName('slide__item');
var index = 0;
carousel();

function carousel(){ 
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    index++;
    if(index > slides.length)
        index = 1;
    slides[index - 1].style.display = "block";
    slides[index - 1].style.animation ="fadeIn linear 0.5s";
    setTimeout(carousel,4000);
}



// Map
function myMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
}