/******************************************************************************
//                      CODE ECRIT PAR Hugo Paigneau                          *
//                                                                            *
//                 Garder ce header si vous utilisez le code                  *
//                                                                            *
//                                UTC 2017                                    *
******************************************************************************/
// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0.005, 0.005);
  this.ajout = createVector(0.1,0.1);
  this.velocity = createVector(random(1, 5), random(1, 5));
  this.position = position.copy();
  this.r = 15;
  this.idDead = false;
};

Particle.prototype.evaporate = function() {
    this.isDead = true;
}


Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  if(this.position.x>width||this.position.x<0){
    var inverse = [-this.velocity.x,this.velocity.y];
    this.velocity.set(inverse);
    this.position.add(this.velocity);
  }else if(this.position.y>height||this.position.y<0){
    var inverse = [this.velocity.x,-this.velocity.y];
    this.velocity.set(inverse);
    this.position.add(this.velocity);
  }else{
    this.position.add(this.velocity);
  }
};

// Method to display
Particle.prototype.display = function() {
  stroke(200, 255);
  strokeWeight(2);
  fill(0, 200, 0, 150);
  ellipse(this.position.x, this.position.y, this.r*2, this.r*4);
};


var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(createVector(random(0,1800), random(0,900))));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead) {
      this.particles.splice(i, 1);
    }
  }
};
