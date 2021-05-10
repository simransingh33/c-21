var canvas;
var block1,block2,block3,block4;
var music;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(0,580,360,30);
block1.shapeColor="brown";

block2=createSprite(295,580,200,30);
block2.shapeColor="blue";

block3=createSprite(515,580,200,30);
block3.shapeColor="green";

block4=createSprite(740,580,220,30);
block4.shapeColor="red";

ball=createSprite(random(20,750),100,40,40);
ball.shapeColor="yellow";

ball.velocityX=2;
ball.velocityY=7;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();

    ball.bounceOff(edges);

drawSprites();

    //add condition to check if box touching surface and make it box

if(block1.isTouching(ball)&&ball.bounceOff (block1)){
ball.shapeColor="brown";

}

if(block2.isTouching(ball)&&ball.bounceOff (block2)){
    ball.shapeColor="blue";
    
    }

    if(block3.isTouching(ball)&&ball.bounceOff (block3)){
        ball.shapeColor="green";
        
        }

        if(block4.isTouching(ball)&&ball.bounceOff (block4)){
            ball.shapeColor="red";
            
            }        

}
