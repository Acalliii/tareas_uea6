let frase ="";

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
  textSize(200);
  text(frase, 700,350);
} 

function keyPressed() {
  if(key === 'q'){
    frase =":)"
  }
  if(key === 'w'){
    frase=":("
  }
  if(key === 'e'){
    frase=":p"
  }
  if(key === 'r'){
    frase=":q"
  }
  if(key === 't'){
    frase=";O"
  }
  if(key === 'y'){
    frase=";u"
  }
  if(key === 'u'){
    frase=":v"
  }
  if(key === 'i'){
    frase=":0"
  }
  if(key === 'o'){
    frase="u_u"
  }
  if(key === 'p'){
    frase="o_o"
  }







}