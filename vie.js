/******************************************************************************
//                      CODE ECRIT PAR Hugo Paigneau                          *
//                                                                            *
//                 Garder ce header si vous utilisez le code                  *
//                                                                            *
//                                UTC 2017                                    *
******************************************************************************/

function Vie(x,y){
  this.x = x;
  this.y = y;
  this.show = function() {
    fill(0);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 30, 30);
  }
}
