/* Základní modul pro hru. */
let gameStateManager; // ✅ Deklarace proměnné gameStateManager

/* Funkce setup se volá jednou na začátku programu a slouží k základnímu nastavení. */
function setup() {
  createCanvas(800, 600);
  /* Inicializace proměnné gameStateManager jako nové instance třídy GameStateManager. */
  gameStateManager = new GameStateManager();
}

/* Funkce draw se volá opakovaně a slouží k vykreslení herního světa. */
function draw() {
  /* Provedení metody draw třídy GameStateManager. */
  gameStateManager.draw();
}

/* Funkce keyTyped zachycuje stisknuté klávesy. */
function keyTyped() {
  /* Provedení metody keyTyped třídy GameStateManager s parametrem key. */
  gameStateManager.keyTyped(key);
}

/* Funkce keyPressed zachycuje stisknuté klávesy. */
function keyPressed() {
  /* Pokud je stisknuta klávesa R a stav hry je gameOver, vytvoří se nová instance třídy GameStateManager. */
  if (key.toUpperCase() === 'R' && gameStateManager.state === "gameOver") {
    gameStateManager = new GameStateManager();
  } 
  /* Pokud je stisknuta klávesa L a stav hry je gameOver, zavolá se metoda showLeaderboard třídy GameStateManager. */
  else if (key.toUpperCase() === 'L' && gameStateManager.state === "gameOver") {
    gameStateManager.showLeaderboard();
  }
}
