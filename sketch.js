let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "harry poter e o enigma do principe";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "harry potter e a ordem da fenix";          
        } else{
         return "harry potter e a camara secreta";
        }
      } else {
        if (gostaDeFantasia) {
          return "crepusculo";
        } else {
          return "harry potter e o prisoneiro de ascaban";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "harry potter e o calice de fogo";
    } else {
      return "harry potter e a pedra filosofal";
    }
  }
}
