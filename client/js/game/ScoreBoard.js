/* Třída ScoreBoard slouží k zobrazení skóre hráče. */
class ScoreBoard {
    /* Konstruktor třídy ScoreBoard. */
    constructor(x, y, col, label, value) {
      this.x = x;
      this.y = y;
      this.color = col || color(0); // ✅ Uložení barvy do instance, pokud je definována, jinak černá
      this.label = label || ""; // ✅ Uložení popisku do instance, pokud je definován, jinak prázdný řetězec
      this.value = value || 0; // ✅ Uložení hodnoty do instance, pokud je definována, jinak 0
    } 
  
    /* Metoda add přidává hodnotu k hodnotě skóre. */
    add(value) {
      this.value += value;
    }
  
    /* Metoda draw vykresluje skóre hráče. */
    draw() {
      fill(this.color);
      noStroke();
      rect(this.x, this.y, 200, 60);
      stroke(255);
      strokeWeight(1);
      textSize(16);
      text(this.label, this.x + 10, this.y + 20);
      textSize(25);
      text(this.value, this.x + 10, this.y + 50);
    }
  }
  