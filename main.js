var Name1;
var Name2;
function NameStore(){
    Name1 = document.getElementById("Car1").value;
    Name2 = document.getElementById("Car2").value;
    document.getElementById("Frankelstein").style.visibility = "hidden";
    document.getElementById("Gotham Tiblis").style.visibility = "visible";
}
var canvas = document.getElementById("myCanvas");
var rx = 700;
var ry = 10;
var r2x = 695;
var r2y = 105;
var rh = 50;
var rw = 100;
ctx = canvas.getContext("2d");
var rImage1 = "car1.png";
var rImage2 = "car 2.png"
var cImage = "Start Line.jpg";
var DW = 0;
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
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    if(keypressed == '38'){
        up();
        console.log("up");
} 
if(keypressed == '40'){
        down();
        console.log("dp");
}
if(keypressed == '37'){
        left();
        console.log(";p");
}
if(keypressed == '39'){
        right();
        console.log("kp");
}
//This Is For Car 2 - Controls -- A left D right S back W forward
if(keypressed == "65"){
    Left2();
}
if(keypressed == "68"){
    Right2();
}
if(keypressed == "83"){
    Down2();
}
if(keypressed == "87"){
    Up2();
}
if(rx <= '0'){
    if(DW == 0){
        document.getElementById("Winner").innerHTML = Name1 + " Wins!";
       DW = 1;
}
    }
    
if(r2x <= '0'){
    if(DW == 0){
        document.getElementById("Winner").innerHTML = Name2 + " Wins!";
        DW = 1;
    }    
}

}
function Right2(){
    if(r2x < 600){
        r2x = r2x + 10;
        uploadBackground();
        roverBackground();
    }
}
function Down2(){
    if(r2y < 650){
        r2y = r2y + 10;
        uploadBackground();
        roverBackground();
    }
}
function up(){
    if(ry > 0){
        ry = ry - 10;
        uploadBackground();
        roverBackground();
    }
}
function down(){
    if(ry < 500){
        ry = ry + 10;
        uploadBackground();
        roverBackground();
    }
}
function right(){
    if(rx< 700){
        rx = rx + 10;
        uploadBackground();
        roverBackground();
    }
}
function left(){
    if(rx > 0){
        rx = rx - 10;
        uploadBackground();
        roverBackground();
    }
}
function Up2(){
    if(r2y > 0){
        r2y = r2y - 10;
        uploadBackground();
        roverBackground();
    }
}
function Left2(){
    if(r2x > 0){
        r2x = r2x - 10;
        uploadBackground();
        roverBackground();
    }
}