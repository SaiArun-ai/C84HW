var canvas = document.getElementById("myCanvas");
var rx = 10;
var ry = 10;
var r2x = 10;
var r2y = 105;
var rh = 50;
var rw = 100;
ctx = canvas.getContext("2d");
var rImage1 = "car1.png";
var rImage2 = "car 2.png"
var cImage = "Start Line.jpg";
function add(){
    CanvasBackgroundImg = new Image();
    CanvasBackgroundImg.onload = uploadBackground;
    CanvasBackgroundImg.src = cImage;
    RoverImg1 = new Image();
    RoverImg1.onload = roverBackground;
    RoverImg1.src = rImage1;
    RoverImg2 = new Image();
    RoverImg2.onload = roverBackground;
    RoverImg2.src = rImage2;
}
function uploadBackground(){
    ctx.drawImage(CanvasBackgroundImg, 0, 0, canvas.width, canvas.height);
}
function roverBackground(){
    ctx.drawImage(RoverImg1, rx, ry, rw, rh);
    ctx.drawImage(RoverImg2, r2x, r2y, rw, rh);
}
window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keypressed = e.keycode;
    if(keypressed = '38'){
        ry = ry - 10;
        ctx.drawImage(RoverImg1, rx, ry, rw, rh);
        ctx.drawImage(RoverImg2, r2x, r2y, rw, rh);
        
    }else if(keypressed = '40'){
        ry = ry + 10;
        ctx.drawImage(RoverImg1, rx, ry, rw, rh);
        ctx.drawImage(RoverImg2, r2x, r2y, rw, rh);
    }else if(keypressed = '37'){
        rx = rx - 10;
        ctx.drawImage(RoverImg1, rx, ry, rw, rh);
        ctx.drawImage(RoverImg2, r2x, r2y, rw, rh);
    }else if(keypressed = '39'){
        rx = rx + 10;
        ctx.drawImage(RoverImg1, rx, ry, rw, rh);
        ctx.drawImage(RoverImg2, r2x, r2y, rw, rh);
    }
}


