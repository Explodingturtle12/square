function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill(250,0,0);
    stroke(250,0,0);
    circle(29,100,30);
    circle(600,100,30);
    circle(29,400,30);
    circle(600,400,30);
    fill(0,255,0);
    stroke(250,0,0);
    rect(29,97,20,300);
    rect(600,100,20,300);
    rect(62,65,528,20);
    rect(58,400,528,20)
}
function take_snapshot(){
    save('student_name.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;

}