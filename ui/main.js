console.log('Loaded!');
var element =document.getElementById("elem");
element.innerHTML="new text";
var move= document.getElementById("dino");
var marginleft=0;
/*function moveRight(){
    marginleft=marginleft+'10';
    dino.style.marginleft= marginleft +'px';
}*/
dino.onclick = function (){
   // var interval=setInterval(moveRight,50);
    dino.style.marginleft= marginleft + 100;
};