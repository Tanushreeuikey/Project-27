class Bobs
{
    constructor(x,y,radius)
    {
        var option1=
	{    	
		isStatic:false,
		restitution:0,
		friction:0.1,
        density:1.5
		
    }
       this.body=Bodies.circle(x,y,radius,option1)
       World.add(world,this.body);
    }
     
    display()
    {
        var pos =this.body.position;
       
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(pos.x,pos.y,50)
        
    }

}