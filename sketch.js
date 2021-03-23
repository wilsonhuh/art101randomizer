let eggs = [{
  name: "yegg", 
  color: "yellow"
}, {
  name: "gregg", 
  color: "green"
}, {
  name: "blegg",
  color: "blue"
}, {
  name: "regg",
  color: "red"
}, {
  name: "pegg",
  color: "purple"
}];   

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(220);
  
  eggs[0] = "Yegg the Egg";
  console.log("List of Eggs:" + eggs);
  console.log(eggs[2].name, eggs[2].color);
         

  console.log(eggs);
  
  eggs.pop();
  console.log("array after pop");
  console.log(eggs);
  
  eggs.push("Eggo");
  console.log("array after push");
  console.log(eggs);
  
}

function draw() {
}

function mousePressed(){
  background(random(200,255));
  randomIndex = int(random(eggs.length));
  console.log(eggs[randomIndex].name);  
  text(eggs[randomIndex].name,300,300);
  eggs.splice(randomIndex, 1);
}