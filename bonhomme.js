/******************************************************************************
//                      CODE ECRIT PAR Hugo Paigneau                          *
//                                                                            *
//                 Garder ce header si vous utilisez le code                  *
//                                                                            *
//                                UTC 2017                                    *
******************************************************************************/

function Ossapik() {
  this.x = 500;
  this.y = 200;
  this.xdir = 0;
  this.ydir = 0;

  this.show = function() {
    fill(255);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 30, 30);
  }

  this.setDir = function(dirx,diry) {
    this.xdir = dirx;
    this.ydir = diry;
  }

  this.move = function(dirx,diry) {
    this.x += this.xdir*5;
    this.y += this.ydir*5;
  }

  this.hits = function(ennemi) {
    var d = dist(this.x, this.y, ennemi.x, ennemi.y);
    if (d < 20 + ennemi.r) {
      return true;
    } else {
      return false;
    }
  }

  this.trt = function(particle){
    var d = dist(this.x, this.y, particle.position.x, particle.position.y);
    if (d < 20 + particle.r) {
      return true;
    } else {
      return false;
    }
  }
}
