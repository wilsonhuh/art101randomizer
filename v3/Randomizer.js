let gender = [{
  name: "Female"
}, {
  name: "Female"
}, {
  name: "Female"
}, {
  name: "Female"
}, {
  name: "Female"
}, {
  name: "Male"
}, {
  name: "Male"
}, {
  name: "Male"
}, {
  name: "Male"
}, {
  name: "Male"
}];  

let nature = [{
  name: "Nature: Timid"
}, {
  name: "Nature: Bold"
}, {
  name: "Nature: Docile"
}, {
  name: "Nature: Impish"
}, {
  name: "Nature: Brave"
}, {
  name: "Nature: Relaxed"
}, {
  name: "Nature: Jolly"
}, {
  name: "Nature: Bashful"
}, {
  name: "Nature: Sassy"
}, {
  name: "Nature: Gentle"
}];   

let quirk = [{
  name: "Loves to eat"
}, {
  name: "Strong willed"
}, {
  name: "Nods off a lot"
}, {
  name: "Likes to relax"
}, {
  name: "Good endurance"
}, {
  name: "Highly curious"
}, {
  name: "Often lost in thought"
}, {
  name: "Somewhat stubborn"
}, {
  name: "Alert to sounds"
}, {
  name: "Likes to run"
}];   

let food = [{
  name: "Prefers sweet food"
}, {
  name: "Prefers sour food"
}, {
  name: "Prefers bitter food"
}, {
  name: "Prefers salty food"
}, {
  name: "Prefers hot food"
}, {
  name: "Prefers cold food"
}, {
  name: "Prefers raw food"
}, {
  name: "Prefers cooked food"
}, {
  name: "Picky eater"
}, {
  name: "Will eat anything!"
}];  

let randomIndex;
let animating = false;
//let counter = 0;
let pokefont;
let poke = [];
let egg = [];
let eggstart;
let eggend;
let button;
let imageCounter = 1



function preload(){
  for (let i = 0; i <= 9; i++){
  poke[i] = loadImage(`assets/poke_${i}.png`)};
  for (let i = 1; i <= 70; i++){
  egg[i] = loadImage(`assets/egg/egg_${i}.png`)};
  
  pokefont = loadFont('assets/pokefont.ttf');
  eggstart = loadImage('assets/eggstart.png');
  eggend = loadImage('assets/eggend.png');
}


function setup() {
  createCanvas(600, 600);
  background(189,239,231);
  
  textFont(pokefont);
  textSize(30);
  imageMode(CENTER);
  textAlign(CENTER, CENTER)
  frameRate(20)
 
  text("Pocket Monster", width/2, 75);
  text("Breeder", width/2, 125);
  textSize(28);
  text("Press Button", width/2, 490);
  text("to Hatch", width/2, 545);
  image(eggstart, width/2, height/2);
  console.log(egg);
  
  button = createButton("Hatch");
  button.mousePressed(hatch);
  button.size(140,60);
  button.style("font-family", "pokefont");
  button.style("font-size", "22px");
  button.position(230,620);

}

function draw() {
  if(animating == true){
    clear();
    background(148,231,206);  
    textSize(22);
    text("Hatching in Progress...", width/2, 80);
    text("Please Wait...", width/2, 130);
    text(".....", width/2, 510);
    image(egg[imageCounter],width/2, height/2);
    
    if (imageCounter < egg.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 1;
    };
    
    //ellipse(random(width), random(height), 100, 130);
  }  
}


// function changeBackground(){
// if (counter <=-1) {
//   counter++;
//   console.log(counter)
//   background(random(255), random(255), random(255));
//   setTimeout(changeBackground, 1000);  
// }
// }

function randomizer(){
animating = false; 
background(165,231,222);  
//if (eggs[0]){  
  //randomIndex = int(random(eggs.length));
  randomIndex = int(random(gender.length));
  randomIndex = int(random(nature.length));
  randomIndex = int(random(quirk.length));
  
  //console.log(eggs[randomIndex].name); 
  textSize(33);
  text("Congratulations!",width/2,95);
  textSize(20);
  text(`${gender[randomIndex].name}`,width/2,460);
  text(`${nature[randomIndex].name}`,width/2,495);
  text(`${quirk[randomIndex].name}`,width/2,530);
  text(`${food[randomIndex].name}`,width/2,565);
  //text("You hatched " + `${eggs[randomIndex].name}` + "!",40,100);
  //eggs.splice(randomIndex, 1);
  image(eggend, width/2, height/2);
  image(random(poke), width/2, 330);
//} else {
//  background(random(200,255));
//  ellipse(width/2, height/2, 400, 520);
//  text("Hope We Eggceeded", 160,300)
//  text("Eggspectations!", 195,360)

//}
}

function hatch(){
  animating = true;
  setTimeout(randomizer,3500);
}
