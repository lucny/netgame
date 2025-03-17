/* Třída GameOverScreen slouží k zobrazení obrazovky, která se zobrazí po skončení hry. */
class GameOverScreen {
  /* Konstruktor třídy GameOverScreen, který přijímá jméno hráče, konečné skóre, statistiky a funkci onShowLeaderboardCallback
     pro zobrazení žebříčku. */
  constructor(playerName, finalScore, stats, onShowLeaderboardCallback) {
    this.playerName = playerName;  // ✅ Uložení playerName do instance
    this.finalScore = finalScore; // ✅ Uložení finalScore do instance
    this.stats = stats;          // ✅ Uložení stats do instance
    this.onShowLeaderboardCallback = onShowLeaderboardCallback; // ✅ Uložení onShowLeaderboardCallback do instance
    this.saved = false; // ✅ Přidání proměnné saved - zda bylo skóre uloženo
    this.leaderboardData = null; // ✅ Přidání proměnné leaderboardData pro uchování dat získaných z API
    this.saveScore(); // ✅ Zavolání metody saveScore pro uložení skóre
  }

  /* Metoda saveScore slouží k uložení skóre na server. Jde o asynchronní metodu, která odesílá POST request na server. */
  async saveScore() {
    /* Pokud bylo skóre již uloženo, metoda se neprovede. */
    if (this.saved) return;    
    this.saved = true; // ✅ Nastavení proměnné saved na true
    /* Vytvoření objektu s daty pro odeslání na server. */
    let data = { playerName: this.playerName, score: this.finalScore.toFixed(3), stats: this.stats };
    /* Odeslání POST requestu na server. Try-catch blok slouží k zachycení případné chyby. */
    try {
      let response = await fetch("/save-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      /* Pokud server vrátí chybu, vypíše se chybová hláška. */
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      /* Výsledek z POST requestu se uloží do proměnné result pomocí metody json(). */
      let result = await response.json(); 
      /* Volání metody fetchLeaderboard pro získání žebříčku. */
      await this.fetchLeaderboard();
    } catch (error) {
      console.error("❌ Chyba při ukládání skóre:", error);
    }
  }

  /* Metoda fetchLeaderboard slouží k získání žebříčku ze serveru. Jde o asynchronní metodu, která odesílá GET request na server. */
  async fetchLeaderboard() {
    try {
      /* Odeslání GET requestu na server. Try-catch blok slouží k zachycení případné chyby. */
      let response = await fetch("/leaderboard");
      /* Pokud server vrátí chybu, vypíše se chybová hláška. */
      if (!response.ok) throw new Error(`Chyba při stahování výsledků: ${response.status}`);
      /* Výsledek z GET requestu se uloží do proměnné leaderboardData pomocí metody json(). */
      this.leaderboardData = await response.json();
    } catch (error) {
      console.error("❌ Chyba při načítání výsledků:", error);
    }
  }

  /* Metoda draw vykresluje obrazovku pro zobrazení skončené hry. */
  draw() {
    background(30);
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text(`Konec hry!`, width / 2, height / 4);
    text(`Konečné skóre: ${this.finalScore.toFixed(3)}`, width / 2, height / 3);
    textSize(18);
    text("Stiskni 'L' pro zobrazení výsledkové listiny nebo klávesou 'R' restartuj hru.", width / 2, height / 2);
    
    /* Pokud byla načtena data z API, zobrazí se žebříček. */
    if (this.leaderboardData) {
      textSize(20);
      text("Výsledková listina:", width / 2, height / 1.5);
      let yPos = height / 1.5 + 30;
      /* Pro každý záznam v žebříčku se zobrazí jméno hráče a skóre. Atribut top10 obsahuje pole 10 nejlepších hráčů. */
      this.leaderboardData.top10.forEach((entry, index) => {
        text(`${index + 1}. ${entry.playerName} - ${entry.score} b.`, width / 2, yPos);
        yPos += 20;
      });
    }
  }
}