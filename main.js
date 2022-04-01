var noseX=0;
var noseY=0;
var leftWristX=0;
var rightWristX=0;
var difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ffd9b3');
document.getElementById("font_size").innerHTML="Font size is: "+ difference+"px";
fill('#99ddff');
stroke('#1ab2ff');
text('Aashvi', noseX, noseY);
textSize(difference);
}

function modelLoaded(){
    console.log("poseNet model is loaded");

}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference= floor(leftWristX-rightWristX);
}
}