/******************************************************************************
//                      CODE ECRIT PAR Hugo Paigneau                          *
//                                                                            *
//                 Garder ce header si vous utilisez le code                  *
//                                                                            *
//                                UTC 2017                                    *
******************************************************************************/
function Missile(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r*8, this.r);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(ennemi) {
    var d = dist(this.x, this.y, ennemi.x, ennemi.y);
    if (d < this.r + ennemi.r) {
      return true;
    } else {
      return false;
    }
  }

  this.trt = function(particle) {
    var d = dist(this.x, this.y, particle.position.x, particle.position.y);
    if (d < 8 + particle.r) {
      return true;
    } else {
      return false;
    }
  }


  this.move = function(ver) {
    if(ver%2===0){
      this.x = this.x + 9;
      this.y = this.y;
    }else{
      this.x = this.x - 9;
      this.y = this.y;
    }
  }
}
