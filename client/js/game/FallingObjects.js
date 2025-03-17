/* Třída FallingObject slouží k vytvoření padajícího objektu. */
class FallingObject {
    /* Konstruktor třídy FallingObject, který přijímá parametry x, y, size, speed a col. */
    constructor(x, y, size, speed, col) {
      this.x = x || random(width); // ✅ Uložení x do instance, pokud je definováno, jinak náhodná hodnota podle šířky canvasu
      this.y = y || 0; // ✅ Uložení y do instance, pokud je definováno, jinak 0
      this.size = size || random(10, 20); // ✅ Uložení size do instance, pokud je definováno, jinak náhodná hodnota mezi 10 a 20
      this.speed = speed || random(1, 3); // ✅ Uložení speed do instance, pokud je definováno, jinak náhodná hodnota mezi 1 a 3
      this.color = col || color(random(255), random(255), random(255)); // ✅ Uložení col do instance, pokud je definováno, jinak náhodná barva
      this.points = 0; // ✅ Výchozí hodnota bodů
    }
  
    /* Metoda draw vykresluje padající objekt. */
    draw() {
      noStroke();
      fill(this.color);
      circle(this.x, this.y, this.size);
    }
  
    /* Metoda update aktualizuje pozici padajícího objektu. */
    update() {
      this.y += this.speed;
    }
  }
  
  /* Třída Snowflake dědí od třídy FallingObject a přidává vlastnosti pro sněhovou vločku. */
  class Snowflake extends FallingObject {
    constructor(x, y, size, speed, col) {
      super(x, y, size, speed, col);
      this.color = color(255);
      this.points = this.size; // ✅ Bodování za sněhovou vločku +1x velikost vločky
    }
  } 
  
  /* Třída Soot dědí od třídy FallingObject a přidává vlastnosti pro saze. */
  class Soot extends FallingObject {
    constructor(x, y, size, speed, col) {
      super(x, y, size, speed, col);
      this.color = color(0);
      this.points = -this.size; // ✅ Bodování za saze -1x velikost saze
    }
  } 
  
  /* Třída Star dědí od třídy FallingObject a přidává vlastnosti pro hvězdu. */
  class Star extends FallingObject {
    constructor(x, y, size, speed, col) {
      super(x, y, size, speed, col);
      this.color = color(255, 255, 0);
      this.points = this.size * 3; // ✅ Bodování za hvězdu +3x velikost hvězdy
    }
  }
  
  /* Třída Bomb dědí od třídy FallingObject a přidává vlastnosti pro bombu. */
  class Bomb extends FallingObject {
    constructor(x, y, size, speed, col) {
      super(x, y, size, speed, col);
      this.color = color(255, 0, 0);
      this.points = -this.size * 5; // ✅ Bodování za bombu -5x velikost bomby
    }
  }
  