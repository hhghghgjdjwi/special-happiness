song1="";
song2="";

function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("music.mp3");
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded()
{
    console.log("Pose net is inistillizeddd d ")
}
function draw()
{
    image(video,0,0,600,500);
}
function play()
{
    song.play();
    
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results)
{
    if (results.length>0){
      
    }
}