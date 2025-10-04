var bg = createSprite(200, 200);
bg.setAnimation("background");
var player = createSprite(200, 200);
player.setAnimation("player.still");
player.scale = 1;
var food_1 = createSprite(randomNumber(50,350),randomNumber(50,350));
food_1.setAnimation("food_1_1");
food_1.scale = 0.1;
var food_2 = createSprite(randomNumber(50,350),randomNumber(50,350));
food_2.setAnimation("food_2_1");
food_2.scale = 0.1;
var food_3 = createSprite(randomNumber(50,350),randomNumber(50,350));
food_3.setAnimation("food_3_1");
food_3.scale = 0.1;
var food_4 = createSprite(randomNumber(50,350),randomNumber(50,350));
food_4.setAnimation("food_4_1");
food_4.scale = 0.1;
var enemy_1 = createSprite(randomNumber(50,350),randomNumber(50,350));
enemy_1.setAnimation("enemy_1_1");
enemy_1.scale = 0.5;
var enemy_2 = createSprite(randomNumber(50,350),randomNumber(50,350));
enemy_2.setAnimation("enemy_2_1");
enemy_2.scale = 0.5;
var enemy_3 = createSprite(randomNumber(50,350),randomNumber(50,350));
enemy_3.setAnimation("enemy_3_1");
enemy_3.scale = 0.5;
var enemy_4 = createSprite(randomNumber(50,350),randomNumber(50,350));
enemy_4.setAnimation("enemy_4_1");
enemy_4.scale = 0.5;
var health = 200;
var score = 0;
function draw() {
  if (keyDown("left")) {
    player.velocityX = -5;
    player.velocityY = 0;
    player.setAnimation("player.left");
  } else if (keyDown("right")) {
    player.velocityX = 5;
    player.velocityY = 0;
    player.setAnimation("player.right");
  } else if (keyDown("down")) {
    player.velocityY = 5;
    player.velocityX = 0;
    player.setAnimation("player.down");
  } else if (keyDown("up")) {
    player.velocityY = -5;
    player.velocityX = 0;
    player.setAnimation("player.up");
  } else if (keyDown("space")) {
    player.velocityX = 0;
    player.velocityY = 0;
    player.setAnimation("player.still");
  }
  if (player.isTouching(food_1)){
    food_1.x = randomNumber(50,350);
    food_1.y = randomNumber(50,350);
    score = score+10 ;
    health = health +25;
  }
  if (player.isTouching(food_2)){
    food_2.x = randomNumber(50,350);
    food_2.y = randomNumber(50,350);
    score = score+10 ;
    health = health +25;
  }
  if (player.isTouching(food_3)){
    food_3.x = randomNumber(50,350);
    food_3.y = randomNumber(50,350);
    score = score+10 ;
    health = health +25;
  }
  if (player.isTouching(food_4)){
    food_4.x = randomNumber(50,350);
    food_4.y = randomNumber(50,350);
    score = score+10 ;
    health = health +25;
  }
  if (player.isTouching(enemy_1)){
    enemy_1.x = randomNumber(50,350);
    enemy_1.y = randomNumber(50,350);
    health = health-25 ;
  }
  if (player.isTouching(enemy_2)){
    enemy_2.x = randomNumber(50,350);
    enemy_2.y = randomNumber(50,350);
    health = health-25 ;
  }
  if (player.isTouching(enemy_3)){
    enemy_3.x = randomNumber(50,350);
    enemy_3.y = randomNumber(50,350);
    health = health-25 ;
  }
  if (player.isTouching(enemy_4)){
    enemy_4.x = randomNumber(50,350);
    enemy_4.y = randomNumber(50,350);
    health = health-25 ;
  }
  if(health==0) {
    bg.setAnimation("badend");
    badend();
  }
  if(score==100){
    bg.setAnimation("goodend");
    goodend();
  }
  
  drawSprites();
  fill("white");
  textSize(20);
  text("Health:", 280, 30);
  text (health, 350, 30);
  text("score:", 280, 60);
  text (score, 350, 60);
}
  function badend() {
  food_1.destroy();
  food_2.destroy();
  food_3.destroy();
  food_4.destroy();
  enemy_1.destroy();
  enemy_2.destroy();
  enemy_3.destroy();
  enemy_4.destroy();
  player.destroy();
}
  function goodend() {
  food_1.destroy();
  food_2.destroy();
  food_3.destroy();
  food_4.destroy();
  enemy_1.destroy();
  enemy_2.destroy();
  enemy_3.destroy();
  enemy_4.destroy();
  player.destroy();
  var celebrate = createSprite(200, 200);
  celebrate.setAnimation("celebrate");
  celebrate.scale = 5;
}