class Bob{
	constructor(x,y,r)
	{
 this.body = Bodies.circle(200,50,10,options);

 var options= {
        restitution: 0.8,
        //isStatic = false,
        friction : 0,
        density : 1.2
    }
    World.add(world, this.body);
 }
	
	

	

	
                   
	
display(){
	rectMOde(CENTER);
    elipseMode(RADIUS);
	


	
}


}