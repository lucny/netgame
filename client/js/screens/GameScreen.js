/* Třída GameScreen slouží k zobrazení herní obrazovky hry. */
class GameScreen {
    /* Konstruktor třídy GameScreen, který přijímá jméno hráče a funkci onGameOverCallback, jež se zavolá při ukončení hry. */
    constructor(playerName, onGameOverCallback) {
      this.playerName = playerName; // ✅ Uložení jména hráče do instance
      this.onGameOverCallback = onGameOverCallback; // ✅ Uložení onGameOverCallback do instance
      this.fallingObjects = []; // ✅ Inicializace pole fallingObjects
      this.player = new Player(width / 2, height - 60); // ✅ Vytvoření instance třídy Player
      this.scoreBoard = new ScoreBoard(50, 10, color(0), "", 0); // ✅ Vytvoření instance třídy ScoreBoard
      this.gameTime = 10; // ✅ Nastavení herního času na 10 sekund
      this.startTime = millis(); // ✅ Uložení času spuštění hry
    }
  
    /* Metoda draw vykresluje herní obrazovku. */
    draw() {
      background(20);
      /* Výpočet zbývajícího času hry. */
      let elapsedTime = (millis() - this.startTime) / 1000; // ✅ Výpočet uplynulého času
      let timeLeft = max(0, this.gameTime - elapsedTime); // ✅ Výpočet zbývajícího času
      
      /* Pokud zbývající čas je menší nebo roven 0, zavolá se callback onGameOverCallback s parametry body hráče a jeho statistikami. */
      if (timeLeft <= 0) {
        this.onGameOverCallback(this.player.points, this.player.collectedStats);
        return;
      }
  
      /* Vykreslení informací o hráči a zbývajícím čase. */
      textSize(16);
      fill(255);
      text(`Hráč: ${this.playerName}`, 10, 20);
      text(`Čas: ${timeLeft.toFixed(1)} s`, width - 100, 20);
  
      /* Každých 20 snímků se vytvoří nový objekt, který může být sněhová vločka, saze, hvězda nebo bomba. */
      if (random(1) < 0.05) {        
        let objType = random(1); // ✅ Náhodný výběr typu objektu
        if (objType < 0.6) this.fallingObjects.push(new Snowflake()); // ✅ Přidání sněhové vločky (60% pravděpodobnost) 
        else if (objType < 0.9) this.fallingObjects.push(new Soot()); // ✅ Přidání saze (30% pravděpodobnost)
        else if (objType < 0.95) this.fallingObjects.push(new Star()); // ✅ Přidání hvězdy (5% pravděpodobnost)
        else this.fallingObjects.push(new Bomb()); // ✅ Přidání bomby (5% pravděpodobnost)
      }
  
      /* Aktualizace a vykreslení všech padajících objektů. */
      for (let i = this.fallingObjects.length - 1; i >= 0; i--) {
        this.fallingObjects[i].update();
        this.fallingObjects[i].draw();
        
        /* Detekce kolize hráče s padajícím objektem. */
        if (this.player.detectCollision(this.fallingObjects[i])) {
          /* Přidání bodů za padající objekt. */
          this.player.handleCollision(this.fallingObjects[i]);
          /* Odstranění padajícího objektu. */
          this.fallingObjects.splice(i, 1);
        } 
        /* Odstranění padajícího objektu, pokud je mimo herní plán. */
        else if (this.fallingObjects[i].y > height) {
          this.fallingObjects.splice(i, 1);
        }
      }
  
      /* Pohyb hráče pomocí šipek. */
      if (keyIsDown(LEFT_ARROW)) this.player.move(-1, 0); // ✅ Pohyb hráče doleva
      if (keyIsDown(RIGHT_ARROW)) this.player.move(1, 0); // ✅ Pohyb hráče doprava
      if (keyIsDown(UP_ARROW)) this.player.move(0, -1); // ✅ Pohyb hráče nahoru
      if (keyIsDown(DOWN_ARROW)) this.player.move(0, 1); // ✅ Pohyb hráče dolů
  
      /* Vykreslení skóre a hráče. */
      this.scoreBoard.value = this.player.points.toFixed(3);
      this.scoreBoard.draw();
      this.player.draw();
    }
  }
  