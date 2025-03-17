/* Třída GameStateManager slouží k řízení stavů hry. */
class GameStateManager {
    /* Konstruktor třídy GameStateManager. */
    constructor() {
      /* Nastavení výchozího stavu hry na start. */
      this.state = "start";
      /* Vytvoření instance třídy StartScreen a předání metody startGame jako callback. */
      this.startScreen = new StartScreen(this.startGame.bind(this));
      /* Inicializace proměnných pro herní obrazovky. */
      this.gameScreen = null;      
      this.gameOverScreen = null;
      this.leaderboardScreen = null;
    }
  
    /* Metoda startGame slouží k zahájení hry. */
    startGame(playerName) {
      this.playerName = playerName; // ✅ Uložení jména hráče do instance
      this.state = "playing"; // ✅ Nastavení stavu hry na playing
      /* Vytvoření instance třídy GameScreen a předání metody endGame jako callback. */
      this.gameScreen = new GameScreen(playerName, this.endGame.bind(this));
    }
  
    /* Metoda endGame slouží k ukončení hry. */
    endGame(finalScore, stats) {
      this.state = "gameOver"; // ✅ Nastavení stavu hry na gameOver
      /* Vytvoření instance třídy GameOverScreen s parametry jméno hráče, konečné skóre a statistiky. Předání metody showLeaderboard jako callback. */
      this.gameOverScreen = new GameOverScreen(this.playerName, finalScore, stats, this.showLeaderboard.bind(this));
    }
  
    /* Metoda showLeaderboard slouží k zobrazení žebříčku. */
    showLeaderboard() {
      this.state = "leaderboard"; // ✅ Nastavení stavu hry na leaderboard
      /* Vytvoření instance třídy LeaderboardScreen. */
      this.leaderboardScreen = new LeaderboardScreen();
    }
  
    /* Metoda draw vykresluje herní obrazovky podle aktuálního stavu hry. */
    draw() {
      switch (this.state) {
        case "start":
          this.startScreen.draw();
          break;
        case "playing":
          this.gameScreen.draw();
          break;
        case "gameOver":
          this.gameOverScreen.draw();
          break;
        case "leaderboard":
          this.leaderboardScreen.draw();
          break;
      }
    }
  
    /* Metoda keyTyped zachytává stisknuté klávesy a předává je herním obrazovkám podle aktuálního stavu hry. */
    keyTyped(key) {
      if (this.state === "start") this.startScreen.keyTyped(key);
    }
  }
  