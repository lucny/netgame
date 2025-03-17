# **Projekt: Hra Falling Objects**

## **Zadání**
Vytvořte jednoduchou hru, ve které hráč sbírá padající objekty a snaží se dosáhnout co nejvyššího skóre. 
- Hra bude mít časový limit a po jeho uplynutí se zobrazí konec hry s dosaženým skóre. 
- Skóre se ukládá do žebříčku nejlepších hráčů na serveru v souboru `scores.json`.
- Výsledná aplikace bude obsahovat frontend i backend část.
- Frontend - hra bude vytvořena v JavaScriptu s využitím knihovny p5.js.
- Backend - server bude vytvořen v Node.js s využitím Express.js. 

---

## **Herní mechanismus**
- **Hráč (Rectangle)** – ovladatelný objekt pohybující se po obrazovce.
- **Padající objekty (FallingObject)** – generované objekty, které hráč sbírá nebo se jim vyhýbá:
  - **Snowflake (bílé kuličky)** – přidávají skóre.
  - **Soot (černé částice)** – ubírají skóre.
  - **Star (žluté hvězdy)** – přidávají vyšší skóre.
  - **Bomb (červené bomby)** – ubírají hodně bodů.
- **Herní plocha** je **800×600 px** a objekty se generují náhodně shora dolů.
- **Časový limit hry je 10 sekund**.

---

## **Struktura kódu**
📁 **client/**
- 📄 `index.html`
- 📄 `style.css`
- 📂 **js/**
  - 📂 **libs/** _(p5.js, p5.sound atd.)_
  - 📂 **screens/**
    - 📄 `StartScreen.js` – úvodní obrazovka
    - 📄 `GameScreen.js` – hlavní hra
    - 📄 `GameOverScreen.js` – konec hry
    - 📄 `LeaderboardScreen.js` – žebříček
  - 📂 **game/**
    - 📄 `GameStateManager.js` – spravuje stavy hry
    - 📄 `FallingObjects.js` – definice všech typů objektů
    - 📄 `Player.js` – hráč
    - 📄 `ScoreBoard.js` – správa skóre
  - 📄 `sketch.js` _(hlavní inicializace aplikace)_

📁 **server/**
- 📄 `index.js` _(Express.js server, správa skóre)_
- 📄 `scores.json`

---

