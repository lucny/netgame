/* Třída StartScreen slouží k zobrazení úvodní obrazovky hry, kde hráč zadává své jméno. */
class StartScreen {
    /* Konstruktor třídy StartScreen, který přijímá funkci onStartCallback, jež se zavolá při stisknutí klávesy Enter. */
    constructor(onStartCallback) {
      /* Funkce, která se zavolá při stisknutí klávesy Enter. */
      this.onStartCallback = onStartCallback;
      /* Jméno hráče. */
      this.playerName = "";
    }
  
    /* Metoda draw vykresluje úvodní obrazovku hry. */
    draw() {
      background(20);
      fill(255);
      textSize(20);
      textAlign(CENTER);
      text("Vítejte ve hře! Zadejte své jméno:", width / 2, height / 3);
      fill(0);
      rect(width / 2 - 100, height / 2, 200, 40);
      fill(255);
      /* Zobrazení jména hráče. */
      text(this.playerName, width / 2, height / 2 + 20);
    }
  
    /* Metoda keyTyped zachytává stisknuté klávesy a přidává je ke jménu hráče. */
    keyTyped(key) {
      /* Pokud hráč stiskne klávesu Enter a zároveň je jméno hráče delší než 0, zavolá se funkce onStartCallback s parametrem playerName. */
      if (key === "Enter" && this.playerName.length > 0) {
        this.onStartCallback(this.playerName);        
      } else if (key !== "Backspace") {
        /* Pokud hráč stiskne jinou klávesu než Backspace, přidá se tato klávesa ke jménu hráče. */
        this.playerName += key;
      }
    }
  }
  