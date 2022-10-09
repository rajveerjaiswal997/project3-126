song1 = "";
song2 = "";

function preload(){
    song1.loadSound("song1.mp3");
    song2.loadSound("song2.mp3");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(450,250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,400);
}
