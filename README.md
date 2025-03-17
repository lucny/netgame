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

## **Postup práce**
1. **Inicializace projektu**
   - Vytvořte složky `client` a `server`.
   - Vytvořte soubory `index.html`, `style.css` a `sketch.js` v `client`.
   - Vytvořte soubor `index.js` v `server`.
   - Nainstalujte potřebné knihovny: `npm install express`.

2. **Vytvoření frontendu**
    - Vytvořte třídy pro hráče, padající objekty, skóre a herní stavy.
    - Vytvořte třídy pro obrazovky: úvodní, herní, konec hry a žebříček.
    - Implementujte herní mechanismus a vizuální efekty.

3. **Vytvoření backendu**
    - Vytvořte server s Express.js.
    - Implementujte základní API pro ukládání a získávání skóre.
    - Ukládejte skóre do souboru `scores.json`.

4. **Testování a ladění**
    - Otestujte hru a server.
    - Opravte chyby a vylepšete vzhled a funkčnost aplikace.

5. **Dokumentace**
    - Vytvořte README.md s popisem projektu, zadáním, strukturou kódu a postupem práce.
    - Přidejte komentáře do kódu a popište funkce a třídy.

6. **Odevzdání**
    - Zkontrolujte, zda je projekt kompletní a splňuje zadání.
    - Odevzdejte projekt včetně zdrojových kódů a souborů.

---

## **Instalace a spuštění**
1. **Klonování repozitáře**
   ```bash
   git clone https://github.com/lucny/netgame.git
    ```

2. **Přechod do složky**
   ```bash
   cd netgame
   ```  

3. **Instalace závislostí**
   ```bash  
    npm install
    ```

4. **Spuštění serveru**
    ```bash
    node server/index.js
    ```

    nebo
    
    ```bash
    npm start
    ```

    - Server běží na adrese `http://0.0.0.0:3000`.