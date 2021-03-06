var CanvasGL = require('../../src/CanvasGL');

function App(element){
    CanvasGL.call(this,element);

    this.setSize(window.innerWidth,window.innerHeight);

    var self = this;
    window.addEventListener('resize',function(){
        self.setSize(window.innerWidth,window.innerHeight);
    });
}

App.prototype = Object.create(CanvasGL.prototype);

App.prototype.setup = function(){
    // Init stuff goes here
};

App.prototype.draw = function(){

    var time   = this.getSecondsElapsed();
    var width  = this.getWidth(),
        height = this.getHeight();
    var c =  this.getContext();

    // Draw stuff goes here

    c.backgroundfv(0.15,0,0.15);

    c.translate(width * 0.5, height * 0.5);

    c.setModeEllipse(c.kCenter);
    c.setDetailCircle(20);

    c.fill3f(0.65,0,0.75);
    c.circle(0,0,50 + (Math.sin(time) * 0.5 + 0.5) * 50);
};


window.addEventListener("load",function(){
    var app = new App(document.getElementById("container"));
});
