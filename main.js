
var canvas=new fabric.canvas('myCanvas');

ball_x=0;
ball_y=0;
goal_x=800;
goal_y=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole.obj.scaleToHeight(50);
		hole_obj.set({
        top:goal_y,
		left:goal_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball.obj.scaleToHeight(50);
		ball_obj.set({
        top:ball_y,
		left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==goal_x) && (ball_y==goal_y)){
		canvas.remove(ball_obj);
		console.log("win");
		document.getElementById("hd3").innerHTML="You have hit the GOAL !!! wasn't it TOO easy???";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y>=0){
			ball_y=ball_y-block_image_height;
			console.log("block_img_height = "+block_img_height);
			console.log("Ball X = "+ball_x+" Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if (ball_y>=450){
			ball_y=ball_y+block_image_height;
			console.log("block_img_height = "+block_img_height);
			console.log("Ball X = "+ball_x+" Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x+block_image_width;
			console.log("block_image_width = "+block_image_width);
			console.log("Ball X = "+ball_x+" Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();	
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x-block_image_width;
			console.log("block_image_width = "+block_image_width);
			console.log("Ball X = "+ball_x+" Y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();	
		}
	}
	
}

