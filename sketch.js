 let posicaoHorizontal;
 let posicaoVertical;
 let cor;


function setup() {
  createCanvas(800,800);
  background("gold");
  
  cor= color(random(0,255),random(0,255),random(0,255))
  
  posicaoHorizontal = 400;
  posicaoVertical = 400;
  
  
  
  
  
}

function draw() {
  
  
  
  stroke("silver");
 
  fill(cor);

  circle(posicaoHorizontal, posicaoVertical, 50)

  
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal -=2
    
  }
  
  
  
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal +=2
  
}

  
  if(mouseY < posicaoVertical){
    posicaoVertical = posicaoVertical -=2
  }
  
 
    if(mouseY > posicaoVertical){
    posicaoVertical = posicaoVertical +=2
  }
  
  
  if(mouseIsPressed){ cor = color(random(0,255),random(0,255),random(0,255),random(0,100))
    
  }
  
}