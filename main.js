function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(120.250);
video=createCapture(VIDEO);
video.hide();
tint_color="";

}
function draw(){
image(video,0,0,640,480);
tint(tint_color)
}
function take_snapshot(){
save('picture.png');
}
function tint_colour(){
tint_color=document.getElementById("coloured_name").value;

}
