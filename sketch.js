const Engine =Matter.Engine;

const World =Matter.world;

const Bodies= Matter ;
 const constraint ,Matter,Constraint;

var engine, world;

function setup() {
createCanvas (800,400);
engine =Engine.create();
world =engine.world;
box1= new BlueBox(500, 360,20,30);
box2 =new YellowBox(520, 360,20,30);
box3= new GreenBox(540,360,20,30); 
box4 =new RedBox(560,368,20,30);
box5= new GreenBox(588,368,20,30);
 box =new YellowBox(688,368,28,38);
box7= new RedBox(510,330,20,30);
boxs =new YellowBox (530,330,20,30);
box9 =new BlueBox(550,330,20,30);
box10 =new GreenBox(570,330,20,30);
 box11 = new RedBox(590,330,20,30);
box12 =new YellowBox(520,310,20,30);
box13 = new BlueBox(540,310,20,30);
box14 = new RedBox(560,310,20,30);
 box15 = new GreenBox(580,310,20,30);
box21 = new GreenBox(550,220,20,30);
box22 =new GreenBox(500,135,20,30);
box23= new BlueBox (520,135,20,30);
box24= new YellowBox(548,135,28,30);
box25= new RedBox (560,135,20,30);
box26 =new GreenBox(588,135,20,30);
box27= new YellowBox(600,135,20,30);
box28 =new BlueBox(510,185,20,30);
box29 =new RedBox(530,105,20,30);
box30= new YellowBox(550,105,20,38);
box31 =new GreenBox(570,105,20,30);
box32= new RedBox(590,105,20,30);
box33= new YellowBox(520,75,20,30);
box34 =new BlueBox (548,75,20,30); 
box35= new RedBox(568,75,20,30);
box36 =new GreenBox(580,75,20,30);
 box37 =new YellowBox(538,45,20,30);
 box38= new BlueBox(550,45,20,30);
 bax39= new GreenBox(570,45,20,30);
 ball=new Ball(0,0,50);
 spring =new Projectile(ball.body, ({x:200, y: 200}));

  ground = new Platform (400,390,800,20);
  groundHovering = new Platform (550,160,200,20);

}
function draw() {
  background(247,223,178);
  Engine .update(engine);

  true;
 
 box1.display();
 box2.display(); 
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display(); 
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display(); 
  box28.display();
  box29.display(); 
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  
 groundHovering.display();
 
}
 