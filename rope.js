class Chain
{
    constructor(a,b,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY

        var option2 =
        {
           //length:10,
           //stiffness:8,
            bodyA: a,
            bodyB: b,
            pointB:{x:offsetX,y:offsetY}
    
        }
        
       this.body=Constraint.create(option2);
        World.add(world,this.body)
    }

    display()
    {
        var bodyApos=this.body.bodyA.position
        var bodyBpos=this.body.bodyB.position

        strokeWeight(2)

        var Anchor1X=bodyApos.x
        var Anchor1Y=bodyApos.y
        
        var Anchor2X=bodyBpos.x+this.offsetX
        var Anchor2Y=bodyBpos.y+this.offsetY

        //line(bodyApos.x,bodyApos.y,bodyBpos.x,bodyBpos.y)
          line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
    
    }
} 