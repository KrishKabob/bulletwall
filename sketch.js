
var bullet, wall;
var damage;

function setup() {
  createCanvas(1410,400);
  class wall {
    constructor(){
      this.x = 1410;
      this.y = 200;
      this.height = 400;
      this.width = 60;
      this.sprite = createSprite(this.x,this.y,this.height,this.width);
      this.sprite.shapeColor=(80,80,80);
    }
  }
  class bullet{
    constructor(){
      this.x = 50;
      this.y = 200;
      this.height = 50;
      this.width = 20;
      this.sprite = createSprite(this.x,this.y,this.height,this.width);
      this.sprite.velocityY = 2;
      this.sprite.shapeColor = ("white");
    }
  }
 
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = new bullet(weight,speed);
  wall = new wall(thickness);
}

function draw() {
  background(255,255,255);  
  bullet.collide(wall);
  drawSprites();
}
function test(){
  damage = (this.weight*this.speed*this.speed)/(this.thickness*this.thickness*this.thickness)
  if(damage>10 && bullet.isTouching(wall)){
    bullet.shapeColor = "red";
  }
  if(damage<10 && bullet.isTouching(wall)){
    bullet.shapeColor = "red";
  }
}