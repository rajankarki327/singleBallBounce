var horizontalMove=0;
var virticleMove=0;
var height=600;
var width=900;

var maxWidth=850;
var maxHeight=550;

var randomLeft=Math.floor(Math.random() * maxWidth) + 0;
var randomTop=Math.floor(Math.random() * maxHeight) + 0;


var direction=["left","right","buttom","top"];
var randDirection=direction[Math.floor(Math.random()*direction.length)];


//interval variable
var s;
var t;
var u;
var v;
var w;
var x;
var y;
var a1;
var a2;
var b1;
var b2;



function moveSingleCircle(){
  if (horizontalMove<=maxWidth && virticleMove<=maxHeight) {
    clearInterval(x);
    document.getElementById('circle').style.left=horizontalMove+"px";
    document.getElementById('circle').style.top=virticleMove+"px";

         horizontalMove+=1;
         virticleMove+=1;
      
      if(horizontalMove==maxWidth){
        clearInterval(inter);
         s=setInterval(a,1);     
      }
      if(virticleMove==maxHeight){
        clearInterval(inter);
        t=setInterval(b,1);
      }
 
  
}
}

function a(){
  if (horizontalMove>=0 && virticleMove<=maxHeight) {
             document.getElementById('circle').style.left=horizontalMove+"px";
             document.getElementById('circle').style.top=virticleMove+"px";
             horizontalMove-=1;
             virticleMove+=1;
             if(virticleMove==maxHeight){
              clearInterval(s);
              a1=setInterval(c,1);
             }
             if(horizontalMove==0){
               clearInterval(s);
              a2=setInterval(e,1);
             }
}

}
function b(){
  if (horizontalMove<=maxWidth && virticleMove>=0){
             document.getElementById('circle').style.left=horizontalMove+"px";
             document.getElementById('circle').style.top=virticleMove+"px";
             horizontalMove+=1;
             virticleMove-=1;
             if(horizontalMove==maxWidth){
              clearInterval(t);
              clearInterval(s);
              b1=setInterval(c,1);
             }
             if(virticleMove==0){
              clearInterval(s);
              clearInterval(t);
              b2=setInterval(e,1);
             }
}
}

function c(){
  if (horizontalMove>=0 && virticleMove>=0){          
             document.getElementById('circle').style.left=horizontalMove+"px";
             document.getElementById('circle').style.top=virticleMove+"px";
             horizontalMove-=1;
             virticleMove-=1;
             if(horizontalMove==0){
                clearInterval(a1);
                clearInterval(b1);
                t=setInterval(b,1);
             }
             if(virticleMove==0){
              clearInterval(a1);
              clearInterval(b1);
              s=setInterval(a,1);
             }
}
}
function d(){
  if (horizontalMove>=0 && virticleMove>=0){
             document.getElementById('circle').style.left=horizontalMove+"px";
             document.getElementById('circle').style.top=virticleMove+"px";
             horizontalMove-=1;
             virticleMove-=1;
             if(virticleMove==0){
              alert('d');
             }
}

}
function e(){
  if (horizontalMove<=maxWidth && virticleMove<=maxHeight){
             document.getElementById('circle').style.left=horizontalMove+"px";
             document.getElementById('circle').style.top=virticleMove+"px";
             horizontalMove+=1;
             virticleMove+=1;
              if(horizontalMove==maxWidth){
                clearInterval(a2);
                clearInterval(b2);
               s=setInterval(a,1);     
               }
              if(virticleMove==maxHeight){
                clearInterval(a2);
                clearInterval(b2);
               t=setInterval(b,1);
               }
}

}


function randomBubble(){
  var bubble=document.getElementById('circle');
  bubble.style.left=randomLeft+"px";
  bubble.style.top=randomTop+"px";
  horizontalMove=randomLeft;
  virticleMove=randomTop;
}