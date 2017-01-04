enchant();

/*
 * Core
 * - rootScene
 *   Sprite (bear)
 */

var BEAR_IMG = 'images/chara1.png';

window.onload = function() {

  // Core
  var core = new Core(640, 640);
  core.preload('images/chara1.png');
  core.fps = 15;
  core.onload = function() {

    var Bear = Class.create(Sprite, {
      initialize: function(x, y, angle) {
        Sprite.call(this, 32, 32);
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.image = core.assets['images/chara1.png'];
        this.on('enterframe', function() {

          if (core.input.left) {
            this.x -= 10;
            this.x += Math.sin(this.angle * 0.017453290) * 15;
            this.y -= Math.cos(this.angle * 0.017453290) * 15;
            this.angle += 15;
            if (this.angle >= 360) this.angle -= 360;
            this.frame = this.age % 3;
          }
          if (core.input.right) {
            this.x += 10;
            this.x += Math.sin(this.angle * 0.017453290) * 15;
            this.y -= Math.cos(this.angle * 0.017453290) * 15;
            this.angle += 15;
            if (this.angle >= 360) this.angle -= 360;
            this.frame = this.age % 3;
          }
          if (core.input.up) {
            this.y -= 10;
            this.x += Math.sin(this.angle * 0.017453290) * 15;
            this.y -= Math.cos(this.angle * 0.017453290) * 15;
            this.angle += 15;
            if (this.angle >= 360) this.angle -= 360;
            this.frame = this.age % 3;
          }
          if (core.input.down) {
            this.y += 10;
            this.x += Math.sin(this.angle * 0.017453290) * 15;
            this.y -= Math.cos(this.angle * 0.017453290) * 15;
            this.angle += 15;
            if (this.angle >= 360) this.angle -= 360;
            this.frame = this.age % 3;
          }

        });

        core.rootScene.addChild(this);
      }
    });

    var bear = new Bear(150, 100, 90);
    var bear2 = new Bear(100, 150, 0);
    var bear3 = new Bear(150, 200, 270);
    var bear4 = new Bear(200, 150, 180);

    core.rootScene.backgroundColor = 'black';

  }
  core.start();

};
