function setup() {
	canvas = createCanvas(400,500)
	canvas.center();
	 
	 video = createCapture(VIDEO)
	 video.size(0,0,500,500)
	 video.hide();
	 
}

function draw () {
	image(video, 0,0 ,600 ,500);
}