/* Modul pro načítání a ukládání skóre do souboru `scores.json` */
/* Přidání modulu fs pro práci se soubory */
const fs = require("fs");
/* Přidání modulu path pro práci s cestami */
const path = require("path");

/* Cesta k souboru s výsledky */
const SCORES_FILE = path.join(__dirname, "scores.json");

/* Funkce pro načtení skóre ze souboru */
function loadScores() {
  /* Pokud soubor neexistuje, vrátí se prázdné pole */  
  if (!fs.existsSync(SCORES_FILE)) return [];
  /* Pokus o načtení souboru `scores.json` */
  try {
    /* Načtení obsahu souboru do proměnné data */
    const data = fs.readFileSync(SCORES_FILE, "utf8");
    /* Pokud je obsah prázdný, vrátí se prázdné pole, jinak se obsah převede na JSON a vrátí se */
    return data.trim() ? JSON.parse(data) : [];
  } catch (error) {
    /* V případě chyby se vypíše chybová hláška a vrátí se prázdné pole */
    console.error("❌ Chyba při načítání souboru `scores.json`:", error);
    return [];
  }
}

/* Funkce pro uložení skóre do souboru */
function saveScores(scores) {
  /* Pokus o uložení skóre do souboru `scores.json` */  
  try {
    /* Převedení pole scores na JSON a uložení do souboru s odsazením 2 pro lepší čitelnost */
    fs.writeFileSync(SCORES_FILE, JSON.stringify(scores, null, 2), "utf8");
  } catch (error) {
    /* V případě chyby se vypíše chybová hláška */
    console.error("❌ Chyba při ukládání do `scores.json`:", error);
  }
}

/* Exportování funkcí pro načítání a ukládání skóre */
module.exports = { loadScores, saveScores };
