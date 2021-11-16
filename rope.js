class Rope{
	constructor(body1,body2, pointA, pointB)
	{
 this.pointA = pointA
 this.pointB = pointB

 var options= {
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.pointA,y:this.pointB}
 }
	//create rope constraint here
	rope = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:roope,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	World.add(world,con);

	}

	
    //create display() here 
	
display(){
	var pointA = this.rope.pointA.position;
	var pointB = this.rope.pointB.position;

	strokeWeight(2);
	line(roof.pointA.x,roof.pointA.y,bob1.pointB.x,bob1.pointB.y);



}
	//	constraint.bodyB;
}

