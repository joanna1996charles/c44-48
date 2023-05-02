class Box {
    constructor(x,y,color){
        this.w = 200
        this.h = 50
        this.color = color
        this.isFall = false

        var options={
            isStatic :true,
            friction: 1.8,
            density: 1.8,
        }

        this.body = Bodies.rectangle(x,y,200,50,options);

        World.add(world,this.body)
    }

    display(){
        var  pos = this.body.position 

        push();

        if(frameCount % 20 == 0 && !this.isFall){
            var r = random(150,850)
            Matter.Body.setPosition(this.body,{x:r,y:200})
        }
        
        
        rectMode(CENTER)
        fill(this.color);
        noStroke();
        rect(pos.x,pos.y,this.w,this.h);
        pop();
        
    }
}