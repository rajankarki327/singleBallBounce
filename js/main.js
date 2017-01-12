var horizontalMove=0;
var virticleMove=0;
var height=600;
var width=900;
var inter;

var maxWidth=850;
var maxHeight=550;

var randomLeft=Math.floor(Math.random() * maxWidth) + 0;
var randomTop=Math.floor(Math.random() * maxHeight) + 0;


var direction=["left","right","buttom","top"];
var randDirection=direction[Math.floor(Math.random()*direction.length)];

var functions=["a","b","c","d"];
var randFunction=functions[Math.floor(Math.random()*functions.length)];

//interval variable
var s;
var t;
var a1;
var a2;
var b1;
var b2;

function randomBubble(){
  var bubble=document.getElementById('circle');
  bubble.style.left=randomLeft+"px";
  bubble.style.top=randomTop+"px";
  horizontalMove=randomLeft;
  virticleMove=randomTop;
  inter=setInterval(e,5);
}

function a(){
  if (horizontalMove>=0 && virticleMove<=maxHeight) {
             move();
             horizontalMove-=1;
             virticleMove+=1;
             if(virticleMove==maxHeight){
              clearInterval(inter);
              clearInterval(s);
              a1=setInterval(c,5);
             }
             if(horizontalMove==0){
              clearInterval(inter);
               clearInterval(s);
              a2=setInterval(e,5);
             }
}

}
function b(){
  if (horizontalMove<=maxWidth && virticleMove>=0){
             move();
             horizontalMove+=1;
             virticleMove-=1;
             if(horizontalMove==maxWidth){
              clearInterval(inter);
              clearInterval(t);
              clearInterval(s);
              b1=setInterval(c,5);
             }
             if(virticleMove==0){
              clearInterval(inter);
              clearInterval(s);
              clearInterval(t);
              b2=setInterval(e,5);
             }
}
}

function c(){
  if (horizontalMove>=0 && virticleMove>=0){          
            move();
             horizontalMove-=1;
             virticleMove-=1;
             if(horizontalMove==0){
                clearInterval(inter);
                clearInterval(a1);
                clearInterval(b1);
                t=setInterval(b,5);
             }
             if(virticleMove==0){
              clearInterval(inter);
              clearInterval(a1);
              clearInterval(b1);
              s=setInterval(a,5);
             }
}
}

function e(){
  if (horizontalMove<=maxWidth && virticleMove<=maxHeight){
             move();
             horizontalMove+=1;
             virticleMove+=1;
              if(horizontalMove==maxWidth){
                clearInterval(inter);
                clearInterval(a2);
                clearInterval(b2);
               s=setInterval(a,5);     
               }
              if(virticleMove==maxHeight){
                clearInterval(inter);
                clearInterval(a2);
                clearInterval(b2);
               t=setInterval(b,5);
               }
}

}

function move(){
  document.getElementById('circle').style.left=horizontalMove+"px";
  document.getElementById('circle').style.top=virticleMove+"px";
}



