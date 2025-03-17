/* Základní modul pro hru. */
/* Připojení frameworku Express pro vytvoření serveru */
const express = require("express");
/* Připojení modulu cors pro umožnění Cross-Origin Resource Sharing - sdílení zdrojů mezi různými doménami */
const cors = require("cors");
/* Připojení modulu pro práci se soubory */
const { loadScores, saveScores } = require("./scoreService");

/* Vytvoření instance serveru */
const app = express();
/* Nastavení portu serveru */
const PORT = 3000;

/* Povolení Cross-Origin Resource Sharing, což umožní komunikaci mezi serverem a klientem na různých doménách */
app.use(cors());
/* Povolení zpracování JSON dat */
app.use(express.json());
/* Nastavení cesty pro statické soubory, složka `client` obsahuje HTML, CSS a JS soubory */
app.use(express.static("client"));

/* Endpoint pro uložení skóre */
app.post("/save-score", (req, res) => {
  /* Získání dat z POST requestu, data jsou v těle requestu */
  const { playerName, score, stats } = req.body;
  /* Kontrola, zda bylo jméno hráče nebo skóre zasláno */
  if (!playerName || score === undefined) {
    /* Odpověď serveru s chybovou hláškou */
    return res.status(400).json({ error: "Chybí jméno hráče nebo skóre." });
  }
  /* Načtení skóre ze souboru */
  let scores = loadScores();
  /* Přidání nového skóre do pole skóre */
  scores.push({ playerName, score, stats, timestamp: new Date().toISOString() });
  /* Seřazení skóre sestupně podle skóre */
  scores.sort((a, b) => b.score - a.score);
  /* Uložení skóre do souboru */
  saveScores(scores);
  /* Odpověď serveru s úspěšným uložením skóre */
  res.json({ success: true });
});

/* Endpoint pro získání žebříčku */
app.get("/leaderboard", (req, res) => {
  /* Načtení skóre ze souboru */
  let scores = loadScores();
  /* Odpověď serveru s žebříčkem, zobrazení prvních 10 nejlepších skóre */
  res.json({ top10: scores.slice(0, 10), lastPlayer: scores[scores.length - 1] });
});

/* Spuštění serveru na definovaném portu */
app.listen(PORT, "0.0.0.0", () => {
    /* Vypsání informace o běhu serveru */
    console.log(`Server běží na http://0.0.0.0:${PORT}`);
});
