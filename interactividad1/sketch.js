let frase ="";

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
  textSize(50);
  text(frase, 200,200);
} 

function keyPressed() {
  if(key === 'q'){
    frase ="¿Quieres jugar?"
  }
  if(key === 'w'){
    frase="¿Estas seguro que quieres continuar?"
  }
  if(key === 'e'){
    frase="Te contare algo que te dara miedo"
  }
  if(key === 'r'){
    frase="Hy muchos rumores sobre quien soy yo"
  }
  if(key === 't'){
    frase="Yo fui alguien grande e importante"
  }
  if(key === 'y'){
    frase="Hasta que todo cambio un día"
  }
  if(key === 'u'){
    frase="Aterrorice a todos"
  }
  if(key === 'i'){
    frase="te agredezco"
  }
  if(key === 'o'){
    frase="por tanto"
  }
  if(key === 'p'){
    frase="perdon por tan poco "
  }







}