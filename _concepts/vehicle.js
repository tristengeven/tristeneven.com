var sketch = function(p, division) {
    
    var sWidth = division.clientWidth;
    var sHeight = division.clientHeight;
    var parentID = "vehicle_holder_" + tileXCount;
    
    
    //Global sketch variables
    var font;
    var vehicles = [];
    var r = p.random(255);
    var g = p.random(255);
    var b = p.random(255);
    //var sketchWidth = sWidth;   //document.getElementById('tileArticle').clientWidth;
    //var sketchHeight = sHeight; //document.getElementById('tileArticle').clientHeight;


    p.preload = function() {
        font = p.loadFont('/assets/fonts/gluck.otf'); 
    }

    p.setup = function() {
        canvas = p.createCanvas(cnvWidth, cnvHeight);
        canvas.parent(parentClass);
        console.log("testing parent: " + parentID);
        console.log("testing vars: " + sWidth + ", " + sHeight);
        canvas.position(0,0);
        canvas.style('z-index', '2');
        
        var textPoints = font.textToPoints("test",cnvWidth/6,cnvHeight/2, 50,{sampleFactor: .5});
        
        for (var i = 0; i < textPoints.length; i++) {
            var textPoint = textPoints[i];
            var vehicle = new p.Vehicle(textPoint.x, textPoint.y);
            vehicles.push(vehicle);
            
        }//END FOR
    }//END SETUP


    p.draw = function() {
        p.background(r, g, b);
        for (var i = 0; i < vehicles.length; i++) {
            var v = vehicles[i];
            
            v.behaviors();
            v.update();
            v.show();
        }
    }//END DRAW


    p.Vehicle = function(x,y) {
        this.pos = p.createVector(p.random(p.width), p.random(p.height)); 
        this.target = p.createVector(x,y);
        this.vel = p5.Vector.random2D(); 
        this.acc = p.createVector(); 
        
        this.maxSpd = 7;
        this.maxFrc = 0.5;
    }


    p.Vehicle.prototype.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }


    p.Vehicle.prototype.show = function() {
    p.stroke(255);
    p.strokeWeight(2);
    p.point(this.pos.x, this.pos.y);
    }


    p.Vehicle.prototype.behaviors = function() {
    
        //test if mouse is on canvas
        if (p.mouseX > 0 && p.mouseX < cnvWidth && p.mouseY > 0 && p.mouseY < cnvHeight) {
            var arrive = this.arrive(this.target);
            this.applyForce(arrive);
        }
        else {
            var wander = this.wander(this.target);
            this.applyForce(wander);
        }
    }


    p.Vehicle.prototype.applyForce = function(force) {
    this.acc.add(force);
    }


    p.Vehicle.prototype.arrive = function(target) {
        var desired = p5.Vector.sub(target, this.pos); 
        var d = desired.mag();
        var speed = this.maxSpd;
        if (d < 100) {
            speed = p.map(d, 0, 100, 0, this.maxSpd);
        }
        desired.setMag(speed);
        var steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxFrc);
        return steer;
    }


    p.Vehicle.prototype.wander = function(target) {
        var desired = p5.Vector.sub(target, this.pos); 
        desired.setMag(this.maxSpd * .7);
        var steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxFrc * .15);
        return steer;
    }   
}


var childDivs = document.getElementById('one').getElementsByTagName('article');

for (var i = 0; i < childDivs.length; i++) {
    var childDiv = childDivs[i];
    tileLink = childDiv.getAttribute("id"); //tileAttribute
    tileXCount = childDiv.getAttribute("class"); //number of X
    
    // sWidth = childDiv.clientWidth;
    // sHeight = childDiv.clientHeight;
    // parentID = "vehicle_holder_" + tileXCount
    
    //var cmd = String("var " + tileLink + tileXCount + " = new p5(sketch, "+parentID+", "+sWidth+", "+sHeight+")");
    var cmd = String("var "+tileLink + tileXCount + " = new p5(sketch, " + childDiv + ")");
    console.log(cmd);
    eval(cmd);
}