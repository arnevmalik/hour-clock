const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var response,responseJSON,datetime,hour,min;
var bg ="sunrise1.png"

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    fill("black"); textSize(30); if(hour>=12){ text("Time : "+ hour%12 + " PM", 50,100); }else if(hour==0){ text("Time : 12 AM",100,100); }else{ text("Time : "+ hour%12 + " AM", 50,100); }

}

async function getBackgroundImg(){

    // write code to fetch time from API
 response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
responseJSON=await response.json()
console.log(responseJSON)
    // write code slice the datetime
 datetime=responseJSON.datetime;
console.log(datetime)
 hour=datetime.slice(11,13)
console.log(hour)

    // add conditions to change the background images from sunrise to sunset
if(hour>7&&hour<9){
    bg="sunrise2.png"
}
else if(hour>9&&hour<10){
    bg="sunrise3.png"
}
else if(hour>11&&hour<12){
    bg="sunrise4.png"
}
else if(hour>12&&hour<15){
    bg="sunrise5.png"
}
else if(hour>15&&hour<16){
    bg="sunrise6.png"
}else if(hour>17&&hour<18){
    bg="sunset7.png"
}
else if(hour>18&&hour<19){
    bg="sunset9.png"
}
else if(hour>19&&hour<20){
    bg="sunset10.png"
}
else if(hour>20&&hour<21){
    bg="sunset11.png"
}
else if(hour>5&&hour<7){
    bg="sunrise1.png"
}
else {bg="sunset12.png"}
    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg)
}
