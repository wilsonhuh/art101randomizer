let eggs = [{
  name: "Here's to an eggsciting eggsperience!", 
  color: "Yellow Egg",
  r: "255",
  g: "255",
  b: "0"
}, {
  name: "            There's no eggscape!", 
  color: "Green"
}, {
  name: "    What an eggstreme eggsplosion!",
  color: "Blue"
}, {
  name: "Were you eggspecting eggscotic eggs?",
  color: "Red"
}, {
  name: " All these eggs are quite eggspensive... ",
  color: "Purple"
}, {
  name: "    We have a few eggstra cartons left!",
  color: "Pink"
}];   

let randomIndex;
let animating = false;
let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(220);  
  textSize(30);
  
  text("Click for Eggscellent Eggs", 125, 100);
  
  // setTimeout(changeBackground,1000);
}

function draw() {
  if(animating == true){
    ellipse(random(width), random(height), 100, 130);
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
if (eggs[0]){  
  background(random(200,255));
  randomIndex = int(random(eggs.length));
  console.log(eggs[randomIndex].name);  
  text(`${eggs[randomIndex].name}`,40,300);
 //text(eggs[randomIndex].name + " the " + eggs[randomIndex].color,100,300);
  eggs.splice(randomIndex, 1);
} else {
  background(random(200,255));
  ellipse(width/2, height/2, 400, 520);
  text("Hope We Eggceeded", 160,300)
  text("Eggspectations!", 195,360)

}
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer,2000);
  
}