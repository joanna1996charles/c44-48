class Ground {

    constructor (x,y,w,h){
        
        var options={
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,options)
        
        World.add(world,this.body);

        this.w = w
        this.h = h
    }

    display(){
        push()
        rectMode(CENTER)
        fill("orange")
        rect(this.body.position.x,this.body.position.y,this.w,this.h);       
        pop()
    }
}