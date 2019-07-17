// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0
var labelScore;
var player;
var pipes = [];
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
  game.load.image("backgroundImg", "../assets/ysb.png");
  game.load.image("playerImg", "../assets/ys2.png");
  game.load.audio("score", "../assets/point.ogg");
  game.load.image("pipeBlock", "../assets/pipe2-body.png")
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    // set the background colour of the scene
    var background = game.add.image(0, 0, "backgroundImg");
    background.width = 790;
    background.height = 400;
    player = game.add.sprite(50,50, "playerImg")
    game.physics.arcade.enable(player);

    player.body.gravity.y = 100;

    player.height = 35;
    player.width = 48;

    labelScore = game.add.text(30,20,(score-3).toString());

    game.input.onDown.add(clickHandler);
    game.input
      .keyboard.addKey(Phaser.Keyboard.SPACEBAR)
      .onDown.add(playerJump);

    var pipeInterval = 2.25 * Phaser.Timer.SECOND;
    game.time.events.loop(
      pipeInterval,
      generatePipe

    );

    generatePipe();



}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
  game.physics.arcade.overlap(
    player,
              pipes,
              gameOver);
}

function gameOver() {
 location.reload();
}


function clickHandler(event) {
  
}
function playerJump() {
  player.body.velocity.y = -85;



}
function changeScore() {
  score = score + 1
  labelScore.setText((score-3).toString());
  game.sound.play("score");
}

function addPipeBlock(x,y){
  var block = game.add.sprite(x,y, "pipeBlock");
  pipes.push(block);

  game.physics.arcade.enable(block);
  block.body.velocity.x = -140;
}
function generatePipe() {
  var gapStart = game.rnd.integerInRange(1, 5);
  for(var count=0; count<8; count = count + 1){
    if(count != gapStart && count != gapStart + 1) {
      addPipeBlock(800, count * 50);
    }
  }
// Add function to generate pipe ends (height of 4 pixels)
  changeScore();

}
