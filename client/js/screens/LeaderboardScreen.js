/* Třída LeaderboardScreen slouží k zobrazení obrazovky se žebříčkem hráčů. */
class LeaderboardScreen {
    /* Konstruktor třídy LeaderboardScreen. */
    constructor() {
      this.leaderboardData = null;
      /* Volání metody fetchLeaderboard pro získání žebříčku. */
      this.fetchLeaderboard();
    }
  
    /* Metoda fetchLeaderboard slouží k získání žebříčku ze serveru. Jde o asynchronní metodu, která odesílá GET request na server. */
    async fetchLeaderboard() {
      /* Odeslání GET requestu na server. Try-catch blok slouží k zachycení případné chyby. */
      try {
        /* Použití metody fetch pro získání dat ze serveru na adrese /leaderboard. */
        let response = await fetch("/leaderboard");
        /* Pokud server vrátí chybu, vypíše se chybová hláška. */
        if (!response.ok) throw new Error(`Nastala chyba při stahování výsledků: ${response.status}`);
        /* Výsledek z GET requestu se uloží do proměnné leaderboardData pomocí metody json(). */
        let data = await response.json();
        /* Uložení dat do proměnné leaderboardData. */
        this.leaderboardData = data;
      } catch (error) {
        console.error("❌ Chyba při načítání výsledkové listiny:", error);
      }
    }
  
    /* Metoda draw vykresluje obrazovku se žebříčkem hráčů. */
    draw() {
      background(20);
      fill(255);
      textSize(24);
      textAlign(CENTER);
      text("Výsledková listina", width / 2, 50);
      textSize(18);
      /* Jestliže leaderboardData obsahuje data a top10 pole má alespoň jeden prvek, vykreslí se žebříček. */
      if (this.leaderboardData && this.leaderboardData.top10.length > 0) {
        /* Pro každý prvek v poli top10 se vykreslí řádek s pořadím, jménem hráče a skóre. */
        for (let i = 0; i < this.leaderboardData.top10.length; i++) {
          text(
            `${i + 1}. ${this.leaderboardData.top10[i].playerName} - ${this.leaderboardData.top10[i].score} b.`,
            width / 2,
            100 + i * 30
          );
        }
      } else {
        text("Žádný záznam nebyl nalezen", width / 2, 100);
      }
    }
  }
  