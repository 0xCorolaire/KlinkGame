/******************************************************************************
//                      CODE ECRIT PAR Hugo Paigneau                          *
//                                                                            *
//                 Garder ce header si vous utilisez le code                  *
//                                                                            *
//                                UTC 2017                                    *
******************************************************************************/
//Déclaration des variables
var cnv;
var ossapik;
var cnv;
var missile = [];
var direc = 0;
var vie = [];
var button;
var over;
var system;
var score = document.getElementById('score');
var pointt = parseInt(score.textContent);
var vitess=5;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  var distt = 0;
  cnv = createCanvas(windowWidth,windowHeight);
  centerCanvas();
  ossapik = new Ossapik();
  for (var i = 0; i<4; i++){
    vie[i] = new Vie(50+distt,70);
    distt+=60;
  }
  system = new ParticleSystem(createVector(width/2, height/2));
  for(i=0;i<6;i++){
  system.addParticle();
  }
}

function windowResized() {
  centerCanvas();
}

function draw() {
  clear();
  system.run();
  ossapik.show();
  if(system.particles.length==0){
    createEnemy();
  }
  for (var i = 0; i < missile.length; i++) {
    missile[i].show();
    missile[i].move(direc);
      for (var k = 0; k < system.particles.length; k++) {
          if (missile[i].trt(system.particles[k])) {
            system.particles[k].evaporate();
            pointt+=4;
            score.textContent=pointt;
          }
      }
    }

    for (var k = 0; k < system.particles.length; k++) {
      if (ossapik.trt(system.particles[k])){
        system.particles[k].evaporate();
        vie.splice(0,1);
        if(vie.length==0){
          over = document.createElement("h1");
          over.textContent = "Game Over";
          document.getElementById("corps").appendChild(over);
          cnv.remove();
          button = createButton("Play Again");
          button.class("button");
          button.mousePressed(resetAll);
        }
      }
    }

    for (var i = 0; i < vie.length; i++) {
      vie[i].show();
    }




  if (keyIsDown(LEFT_ARROW)||keyIsDown(81)) {
    ossapik.setDir(-1,0);
    ossapik.move();
  }
  if (keyIsDown(RIGHT_ARROW)||keyIsDown(68)) {
    ossapik.setDir(1,0);
    ossapik.move();
  }
  if (keyIsDown(UP_ARROW)||keyIsDown(90)) {
    ossapik.setDir(0,-1);
    ossapik.move();
  }
  if (keyIsDown(DOWN_ARROW)||keyIsDown(83)) {
    ossapik.setDir(0,1);
    ossapik.move();
  }

  for (var i = missile.length-1; i >= 0; i--) {
    if (missile[i].toDelete) {
      missile.splice(i, 1);
    }
  }
}


function keyPressed() {
  if (key === ' ') {
    direc +=1;
    for(var i = missile.length-1; i >= 0; i--){
      missile[i].evaporate();
    }
  }
}

function createEnemy(){
      vitess+=2.5;
      system = new ParticleSystem(createVector(width/2, height/2));
      for(i=0;i<6;i++){
      system.addParticle();
      }
      for (var i = system.particles.length-1; i >= 0; i--) {
        system.particles[i].velocity= createVector(random(vitess-4, vitess), random(vitess-4, vitess));
      }
}

function mouseClicked() {
    var missiles = new Missile(ossapik.x, ossapik.y);
    missile.push(missiles);
}

function resetAll(){
  pointt=0;
  vitess=5;
  score.textContent="0";
  button.remove();
  over.remove();
  setup();
}

setInterval(function(){ 
  pointt+=1;
  score.textContent=pointt;
  
}, 1000);
