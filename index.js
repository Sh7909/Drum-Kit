let w=document.getElementById("w");
let a=document.getElementById("a");
let s=document.getElementById("s");
let d=document.getElementById("d");
let j=document.getElementById("j");
let k=document.getElementById("k");
let l=document.getElementById("l");
w.onclick=function play1(){
    var x=new Audio("./Drum1.wav");
    x.play();
}
a.onclick=function play2(){
    var y=new Audio("./Drum2.wav");
    y.play();
}
s.onclick=function play3(){
    var z=new Audio("./Drum3.mp3");
    z.play();
}
d.onclick=function play4(){
    var p=new Audio("./Drum4.wav");
    p.play();
}
j.onclick=function play5(){
    var q=new Audio("./Drum5.wav");
    q.play();
}
k.onclick=function play6(){
    var r=new Audio("./Drum6.wav");
    r.play();
}
l.onclick=function play7(){
    var s=new Audio("./Drum7.wav");
    s.play();
}